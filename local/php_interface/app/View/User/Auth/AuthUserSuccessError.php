<?php
$APPLICATION->SetTitle('Успешная авторизация!');
$asset = \Bitrix\Main\Page\Asset::getInstance();
$asset->addCss('/local/php_interface/app/View/User/Reg/css/style.css');
?>

<div class="success-message">
    <h1>Успешная авторизация! Поздравляю!</h1>
</div>

    <?php LocalRedirect('/'); ?>

<!--<a class="to-index" href="/">Перейти на главную</a>-->
