<?php
use Bitrix\Main\EventManager;
use Bitrix\Main\Loader;

require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

$eventManager = EventManager::getInstance();
$eventManager->addEventHandler('main', 'OnBeforeProlog', function (){
    Loader::includeModule('catalog');
    Loader::includeModule('sale');
    Loader::includeModule('iblock');
});