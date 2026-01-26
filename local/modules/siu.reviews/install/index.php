<?php

use Bitrix\Main\Localization\Loc;

Loc::loadMessages(__FILE__);
class siu_reviews extends CModule
{

    public $MODULE_ID = 'siu.reviews';
    public $MODULE_VERSION;
    public $MODULE_VERSION_DATE;
    public $MODULE_NAME;
    public $MODULE_DESCRIPTION;


    public function __construct()
    {
        $arModuleVersion = [];
        include(__DIR__ . '/version.php');

        $this->MODULE_VERSION = $arModuleVersion['VERSION'];
        $this->MODULE_VERSION_DATE = $arModuleVersion['VERSION_DATE'];
        $this->MODULE_NAME = Loc::getMessage('SIU_REVIEWS_MODULE_NAME');
        $this->MODULE_DESCRIPTION = Loc::getMessage('SIU_REVIEWS_MODULE_DESC');
    }

    public function DoInstall(): void
    {
        \Bitrix\Main\ModuleManager::registerModule($this->MODULE_ID);
    }

    public function DoUninstall(): void
    {
        \Bitrix\Main\ModuleManager::unregisterModule($this->MODULE_ID);
    }

}
