<?php
use Bitrix\Main\EventManager;
use Bitrix\Main\Loader;

require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/local/php_interface/app/Controllers/PerfumeController.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/local/php_interface/app/Controllers/BasketController.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/local/php_interface/app/Controllers/BasketApiController.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/local/php_interface/app/Controllers/UserController.php';

$eventManager = EventManager::getInstance();
$eventManager->addEventHandler('main', 'OnBeforeProlog', function (){
    Loader::includeModule('catalog');
    Loader::includeModule('sale');
    Loader::includeModule('iblock');
});