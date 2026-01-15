<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}

$asset = \Bitrix\Main\Page\Asset::getInstance();
$asset->addCss('/local/php_interface/app/View/User/Auth/css/style.css');

$route = \Bitrix\Main\Application::getInstance()->getRouter();
$token = bitrix_sessid();

$APPLICATION->SetTitle('Авторизация');
?>

<div class="auth-modern">
    <div class="form-title">Вход в систему</div>
    <form method="post" action="<?= $route->route('user_auth') ?>">
        <input type="hidden" name="sessid" value="<?= $token ?>">

        <label>
            <span class="label-text">Логин</span>
            <input type="text" name="authLogin" placeholder="Введите ваш логин" required>
        </label>

        <label>
            <span class="label-text">Пароль</span>
            <input type="password" name="authPassword" placeholder="Введите ваш пароль" required>
        </label>

        <button type="submit" class="submit-btn">Авторизоваться</button>
    </form>
</div>
