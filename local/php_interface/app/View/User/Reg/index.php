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

<?php if($data): ?>
<?php foreach($data as $error): ?>


    <div class="error-message">
        <h1>Ошибка! <?= htmlspecialchars($error) ?></h1>
    </div>


<?php endforeach; ?>
<?php endif; ?>


<div class="registration-container">
    <h2 class="registration-title">Регистрация</h2>

    <form method="post" action="<?= $route->route('user_register_post') ?>" class="registration-form">

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

        <button type="submit" class="submit-btn">Зарегистрироваться</button>
    </form>
</div>
