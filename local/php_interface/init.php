<?php
use Bitrix\Main\EventManager;
use Bitrix\Main\Loader;

require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/local/php_interface/app/Controllers/PerfumeController.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/local/php_interface/app/Controllers/BasketController.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/local/php_interface/app/Controllers/BasketApiController.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/local/php_interface/app/Controllers/UserController.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/local/php_interface/app/Controllers/OrderApiController.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/local/components/siu.catalog.diffusers/lib/Controllers/DiffuserController.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/local/components/siu.catalog.diffusers.detail/lib/Controllers/DiffuserDetailController.php';

$eventManager = EventManager::getInstance();
$eventManager->addEventHandler('main', 'OnBeforeProlog', function (){
    Loader::includeModule('catalog');
    Loader::includeModule('sale');
    Loader::includeModule('iblock');
});