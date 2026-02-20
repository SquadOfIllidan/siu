<?php
namespace Siu\Components\Diffusers\Detail\Repositories;

use Bitrix\Catalog\PriceTable;
use Bitrix\Iblock\Elements\ElementCatalogTable;
use Bitrix\Main\FileTable;
use Bitrix\Main\ORM\Fields\Relations\Reference;

class DiffuserDetailRepository
{

    public function get(string $elementCode): array
    {
        return ElementCatalogTable::query()
            ->where('CODE', $elementCode)
            ->setSelect([
                'ID',
                'NAME',
                'DETAIL_IMAGES',
                'DETAIL_IMAGES_SUBDIR' => 'DETAIL_FILE.SUBDIR',
                'DETAIL_IMAGES_FILE_NAME' => 'DETAIL_FILE.FILE_NAME',
                'BRAND_NAME' => 'BRAND.ITEM.VALUE',
                'PRICE' => 'PRICE_PRODUCT.PRICE'
            ])
            ->registerRuntimeField(
                new Reference(
                    'DETAIL_FILE',
                    FileTable::class,
                    [
                        '=this.DETAIL_IMAGES.VALUE' => 'ref.ID'
                    ],
                    ['join_type' => 'LEFT']
                ),
            )
            ->registerRuntimeField(
                new Reference(
                    'PRICE_PRODUCT',
                    PriceTable::class,
                    [
                        '=this.ID' => 'ref.PRODUCT_ID'
                    ],
                    ['join_type' => 'LEFT']
                )
            )
            ->fetchAll();
    }

}