<?php

namespace Siu\Controllers\Controllers;

use App\Services\UserService;
use Bitrix\Main\Engine\Response\Render;

class UserController extends BaseController implements BaseControllerInterface
{
    private UserService $userService;


    public function __construct()
    {
        parent::__construct();
        $this->userService = new UserService();
    }


    public function toRegisterAction(): Render\View
    {
        return $this->renderView('/local/php_interface/app/View/User/Reg/index.php');
    }

    public function registerAction(): Render\View
    {
        $data = $this->userService->register();

        if (is_array($data)) {
            return $this->renderView('/local/php_interface/app/View/User/Reg/index.php', [
                'data' => $data
            ]);
        }
        return $this->renderView('/local/php_interface/app/View/User/Reg/RegUserSuccessError.php');
    }

    public function toAuthAction(): Render\View
    {
        return $this->renderView('/local/php_interface/app/View/User/Auth/index.php');
    }

    public function authAction(): Render\View
    {
        $data = $this->userService->login();

        if (is_array($data)) {
            return $this->renderView('/local/php_interface/app/View/User/Auth/index.php', [
                'data' => $data
            ]);
        }

        LocalRedirect('/');
    }

    public function logoutAction(): Render\View
    {
        $this->userService->logout();
        return $this->renderView('/index.php');
    }
}