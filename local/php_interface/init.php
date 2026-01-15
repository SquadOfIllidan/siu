<?php
use Bitrix\Main\EventManager;
use Bitrix\Main\Loader;

$eventManager = EventManager::getInstance();
$eventManager->addEventHandler('main', 'OnBeforeProlog', function (){
    Loader::includeModule('iblock');
});