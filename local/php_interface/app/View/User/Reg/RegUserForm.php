<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}

$route = \Bitrix\Main\Application::getInstance()->getRouter();
$token = bitrix_sessid();
$asset = \Bitrix\Main\Page\Asset::getInstance();
$asset->addCss('/local/php_interface/app/View/User/Reg/css/style.css');


$APPLICATION->SetTitle('Форма регистрации');

?>

<div class="registration-container">
    <h2 class="registration-title">Регистрация</h2>

    <form method="post" action="<?= $route->route('user_register') ?>" class="registration-form">
        <input type="hidden" name="sessid" value="<?= $token ?>">

        <div class="form-group">
            <label class="form-label">
                Email:
                <input type="email" name="regEmail" placeholder="Введите email" class="form-input" required>
            </label>
        </div>

        <div class="form-group">
            <label class="form-label">
                Логин:
                <input type="text" name="regLogin" placeholder="Введите логин" class="form-input" required>
            </label>
        </div>

        <div class="form-group">
            <label class="form-label">
                Пароль:
                <input type="password" name="regPassword" placeholder="Введите пароль" class="form-input" required>
            </label>
        </div>

        <div class="form-group">
            <label class="form-label">
                Подтверждение пароля:
                <input type="password" name="regConfirmPassword" placeholder="Подтвердите пароль" class="form-input" required>
            </label>
        </div>

        <div class="form-group">
            <label class="form-label">
                Имя:
                <input type="text" name="regName" placeholder="Введите имя" class="form-input">
            </label>
        </div>

        <div class="form-group">
            <label class="form-label">
                Фамилия:
                <input type="text" name="regSecondName" placeholder="Введите фамилию" class="form-input">
            </label>
        </div>

        <div class="form-group">
            <label class="form-label">
                Отчество:
                <input type="text" name="regLastName" placeholder="Введите отчество" class="form-input">
            </label>
        </div>

        <button type="submit" class="submit-btn">Зарегистрироваться</button>
    </form>
</div>
