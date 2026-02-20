<?php

namespace App\Services;
use App\Models\RegisterDTO;
use App\Models\AuthDTO;
use Bitrix\Main\Application;
use Bitrix\Main\Request;
use CUser;
use Bitrix\Main\UserTable;
use App\Services\BaseServiceInterface;

class UserService implements BaseServiceInterface
{
    protected Request $request;
    private CUser $user;

    public function __construct()
    {
        $this->request = Application::getInstance()->getContext()->getRequest();
        $this->user = new CUser();
    }

    public function register(): int | array
    {
        $errors = [];

        if(!check_bitrix_sessid())
        {
            $errors[] = 'Ошибка безопасности сессии';
        }

        $registerDTO = new RegisterDTO(
            email: trim($this->request->getPost('regEmail')),
            login: trim($this->request->getPost('regLogin')),
            password: trim($this->request->getPost('regPassword')),
            confirmPassword: trim($this->request->getPost('regConfirmPassword')),
        );

        if(empty($registerDTO->email) || empty($registerDTO->login) || empty($registerDTO->password) || empty($registerDTO->confirmPassword))
        {
            $errors[] = 'Все поля должны быть заполнены!';
        }

        if(!check_email($registerDTO->email))
        {
            $errors[] = 'Неверный формат Email адреса';
        }

        if(!empty($registerDTO->email))
        {
            $userEmail = UserTable::query()
                ->where('EMAIL', $registerDTO->email)
                ->setSelect(['ID'])
                ->fetch();

            if($userEmail)
            {
                $errors[] = 'Пользователь с таким Email уже существует';
            }
        }

        if (strlen($registerDTO->password) < 6)
        {
            $errors[] = 'Пароль должен содержать более 6 символов';
        }

        if($registerDTO->password != $registerDTO->confirmPassword)
        {
            $errors[] = 'Пароли не совпадают';
        }

        if(!empty($errors))
        {
            return $errors;
        }

        else
        {
            $result = $this->user->Add([
                'LOGIN' => $registerDTO->login,
                'EMAIL' => $registerDTO->email,
                'PASSWORD' => $registerDTO->password,
                'CONFIRM_PASSWORD' => $registerDTO->confirmPassword,
            ]);

            $this->user->Authorize($result);

            return $result;
        }
    }

    public function login(): array | bool
    {
        $authDTO = new AuthDTO(
            login: trim($this->request->getPost('authLogin')),
            password: trim($this->request->getPost('authPassword'))
        );


        $errors = [];

        if(empty($authDTO->login) || empty($authDTO->password))
        {
            $errors[] = 'Все поля должны быть заполнены!';
        }

        if(!empty($authDTO->login) || !empty($authDTO->password))
        {
            $userData = UserTable::query()
                ->where('LOGIN', $authDTO->login)
                ->enablePrivateFields()
                ->setSelect(['ID', 'PASSWORD', 'LOGIN'])
                ->fetch();

            if(!$userData['LOGIN'] || !password_verify($authDTO->password, $userData['PASSWORD']))
            {
                $errors[] = 'Неверный логин или пароль';
            }
        }


        if(!empty($errors))
        {
            return $errors;
        }


        return $this->user->Login($authDTO->login, $authDTO->password);
    }

    public function logout(): void
    {
        if($this->user->IsAuthorized()){
            $this->user->Logout();
        }
    }

}