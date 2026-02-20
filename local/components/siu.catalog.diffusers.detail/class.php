<?php

use Bitrix\Main\IO\Path;
use Siu\Components\Diffusers\Detail\Repositories\DiffuserDetailRepository;
use Siu\Components\Diffusers\Detail\Models\DiffuserDetailDTO;
use Bitrix\Main\Page\Asset;
class SiuCatalogDiffusersDetail extends CBitrixComponent
{

    private DiffuserDetailRepository $diffuserDetailRepository;

    public function __construct($component = null)
    {
        parent::__construct($component);
        $this->diffuserDetailRepository = new DiffuserDetailRepository();
    }
    public function onPrepareComponentParams($arParams): array
    {
        $arParams['CACHE_TIME'] = (int)($arParams['CACHE_TIME'] ?? 3600);
        return $arParams;
    }



    public function executeComponent(): void
    {
        $asset = Asset::getInstance();
        $asset->addCss('/local/components/siu.catalog.diffusers.detail/lib/View/css/style.css');
        $asset->addJs('/local/php_interface/app/View/Perfume/js/newAjax.js');

        $cacheId = 'diffuser_detail_' . $this->arParams['ELEMENT_CODE'];

        if ($this->startResultCache($this->arParams['CACHE_TIME'], $cacheId)) {

            $this->arResult['ITEM'] = $this->diffuserDetailRepository->get($this->arParams['ELEMENT_CODE']);
            $this->arResult['DETAIL'] = [];
            foreach ($this->arResult['ITEM'] as $item) {
                $filepath = Path::Combine(
                    '/upload/',
                    $item['DETAIL_IMAGES_SUBDIR'],
                    $item['DETAIL_IMAGES_FILE_NAME']
                );

                $detailImages[] = $filepath;

                $this->arResult['DETAIL'] = new DiffuserDetailDTO(
                    id: $item['ID'],
                    name: $item['NAME'],
                    detailImages: $detailImages,
                    brand: $item['BRAND_NAME'],
                    price: $item['PRICE'],
                );
            }
            $this->includeComponentTemplate();
        }
    }
}
