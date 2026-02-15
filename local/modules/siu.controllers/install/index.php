<?php

use Bitrix\Main\Localization\Loc;

Loc::loadMessages(__FILE__);
class siu_controllers extends CModule
{

    public $MODULE_ID = 'siu.controllers';
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
        $this->MODULE_NAME = 'Контроллеры проекта';
        $this->MODULE_DESCRIPTION = 'Контроллеры проекта';
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
