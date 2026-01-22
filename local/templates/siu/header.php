<?php

$route = \Bitrix\Main\Application::getInstance()->getRouter();
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}

use Bitrix\Main\Engine\CurrentUser;



$asset = \Bitrix\Main\Page\Asset::getInstance();

$asset->addCss(SITE_TEMPLATE_PATH . '/css/styles.css');
$asset->addJs(SITE_TEMPLATE_PATH . '/js/bundle.js');

$user = CurrentUser::get();

?>

<!DOCTYPE html>
<html class="page _loading _home" lang="<?= LANGUAGE_ID; ?>">
<!--<a href="?user_lang=ru">RU</a>-->
<!--<a href="?user_lang=en">ENG</a>-->

<head>
    <meta charset="utf-8"/>
    <title><?
        $APPLICATION->ShowTitle(); ?></title>
    <?
    $APPLICATION->ShowHead(); ?>


    <script type="text/javascript">!function () {
            function e(e) {
                return r.indexOf(e) > -1
            }

            function o(e) {
                return a.indexOf(e) > -1
            }

            function n(e) {
                return s.indexOf(e) > -1
            }

            var i = [], t = navigator, r = t.platform.toLowerCase(), a = t.userAgent.toLowerCase(),
                s = t.appName.toLowerCase(), d = document.documentElement,
                c = (localStorage, o("iphone") || o("ipod") || o("ipad") || o("android") || o("iemobile") || o("blackberry") || o("bada") ? "_mobile" : "_desktop");
            i.push(c);
            var m = "";
            o("ipad") || o("iphone") || o("ipod") ? m = "_ios" : o("android") ? m = "_android" : e("win") ? m = "_win" : e("mac") ? m = "_mac" : e("linux") && (m = "_linux"), i.push(m);
            var u = "";
            o("firefox") ? u = "_ff" : o("opr") ? u = "_opera" : o("yabrowser") ? u = "_yandex" : o("edge") ? u = "_edge" : o("trident") || n("explorer") || n("msie") ? u = "_ie" : o("safari") && !o("chrome") ? u = "_safari" : o("chrome") && (u = "_chrome"), i.push(u), window.environmentObject = {
                platform: c,
                os: m,
                browser: u,
                isLocal: 0 == window.location.href.indexOf("http://localhost:")
            }, d.className += " " + i.join(" ");
            var l = new XMLHttpRequest;
            l.open("GET", "assets/svg/sprite.svg", !0), l.overrideMimeType("image/svg+xml"), l.onreadystatechange = function () {
                function e() {
                    if (document.body) {
                        var o = document.querySelector(".invisible-container");
                        o || (o = document.createElement("div"), o.className = "invisible-container", document.body.insertBefore(o, document.body.firstChild)), o.appendChild(l.responseXML.documentElement)
                    } else setTimeout(e, 16)
                }

                l.readyState === XMLHttpRequest.DONE && 200 === l.status && e()
            }, l.send("")
        }();</script>

    <link rel="icon" href="<?
    SITE_TEMPLATE_PATH ?>/assets/favicons/favicon.ico" sizes="32x32">
    <link rel="icon" href="<?
    SITE_TEMPLATE_PATH ?>/assets/favicons/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="manifest" href="<?
    SITE_TEMPLATE_PATH ?>/assets/favicons/site.webmanifest">

    <link rel="preload" href="<?
    SITE_TEMPLATE_PATH ?>/assets/fonts/EuclidCircularA-Bold.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="<?
    SITE_TEMPLATE_PATH ?>/assets/fonts/EuclidCircularA-Regular.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="<?
    SITE_TEMPLATE_PATH ?>/assets/fonts/new-baskerville.woff2" as="font" type="font/woff2" crossorigin>
</head>

<body class="page__body">
<?php if($user->getLogin()): ?>
<?php
if ($user->isAdmin()): ?>
    <div id="panel">
        <?php
        $APPLICATION->ShowPanel(); ?>
    </div>
<?php
endif; ?>
<?php endif; ?>

<div class="page__wrapper wrapper">

    <header class="page__header header" data-header>
        <div class="headerList">
            <div class="userWelcome">
                <h1>
                    <?php echo $user->getLogin(); ?>
                </h1>
            </div>
            <nav class="menuContainer">
                <ul class="menuList">
                    <li>
                        <div class="dropdown">
                            <button class="dropdown-btn">
                                Парфюмы
                                <span class="arrow">▼</span>
                            </button>
                            <div class="dropdown-content">
                                <a href="<?= $route->route('perfumes', ['sectionID' => 16]) ?>">Сладкие парфюмы</a>
                                <a href="<?= $route->route('perfumes', ['sectionID' => 17]) ?>">Нейтральные парфюмы</a>
                            </div>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="<?= $route->route('basket') ?>">Корзина</a>
                    </li>
                    <li class="menu-item">
                        <a href="<?= $route->route('user_register') ?>">Регистрация</a>
                    </li>
                    <li class="menu-item">
                        <a href="<?= $route->route('user_auth') ?>">Авторизация</a>
                    </li>
                    <?php if($user->getLogin()): ?>
                    <li class="menu-item">
                        <a href="<?= $route->route('user_logout') ?>">Выйти</a>
                    </li>
                    <?php endif; ?>
                </ul>
            </nav>
        </div>


    </header>


    <main class="page__main">