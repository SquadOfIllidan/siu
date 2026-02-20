<?php

use Siu\Components\Diffusers\Repositories\DiffuserRepository;
class SiuCatalogDiffusers extends CBitrixComponent
{
    private DiffuserRepository $diffuserRepository;

    public function __construct($component = null)
    {
        parent::__construct($component);
        $this->diffuserRepository = new DiffuserRepository;
    }

    public function onPrepareComponentParams($arParams): array
    {
        $arParams['SECTION_ID'] = (int)($arParams['SECTION_ID']);
        return $arParams;
    }

    public function executeComponent(): void
    {
        $this->arResult['ITEMS'] = $this->diffuserRepository->get($this->arParams['SECTION_ID']);
        $this->includeComponentTemplate();
    }
}