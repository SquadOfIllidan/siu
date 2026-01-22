<?php

use Bitrix\Main\Engine\CurrentUser;
use App\Services\UserService;
use Bitrix\Main\Page\Asset;
use Bitrix\Main\Application;


$asset = Asset::getInstance();
$asset->addCss('/local/php_interface/app/View/User/Profile/css/style.css');

$route = Application::getInstance()->getRouter();
$token = bitrix_sessid();
$user = (new UserService())->getCurrentUser();

$APPLICATION->SetTitle('Профиль пользователя' . ' ' . $user['LOGIN']);

?>


<div class="form-modern">
    <form method="post" action="<?= $route->route('user_profile_update', ['id' => $user['ID']]); ?>">
        <input type="hidden" name="sessid" value="<?= $token ?>">

        <label>
            <span class="label-text">Email</span>
            <input name="userEmail" type="email" value="<?= $user['EMAIL']; ?>">
        </label>

        <label>
            <span class="label-text">Логин</span>
            <input name="userLogin" type="text" value="<?= $user['LOGIN']; ?>">
        </label>

        <label>
            <span class="label-text">Имя</span>
            <input name="userName" type="text" value="<?= $user['NAME']; ?>">
        </label>

        <label>
            <span class="label-text">Фамилия</span>
            <input name="userLastName" type="text" value="<?= $user['LAST_NAME']; ?>">
        </label>

        <label>
            <span class="label-text">Отчество</span>
            <input name="userSecondName" type="text" value="<?= $user['SECOND_NAME']; ?>">
        </label>



        <button class="btn-modern" type="submit">Изменить данные</button>
    </form>
</div>
