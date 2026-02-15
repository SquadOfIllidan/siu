<?php

namespace Siu\Components\Diffusers\Repositories;

use App\Repositories\BaseRepositoryInterface;
use Bitrix\Catalog\PriceTable;
use Bitrix\Iblock\ElementPropertyTable;
use Bitrix\Iblock\Elements\ElementCatalogTable;
use Bitrix\Main\FileTable;
use Bitrix\Main\ORM\Fields\Relations\Reference;

class DiffuserRepository implements BaseRepositoryInterface
{

    public function __construct()
    {
    }

    public function get(int $id): array
    {
        return ElementCatalogTable::query()
            ->where('IBLOCK_SECTION_ID', $id)
            ->setSelect([
                'ID',
                'NAME',
                'CODE',
                'PREVIEW_PICTURE',
                'PREVIEW_SUBDIR' => 'FILE.SUBDIR',
                'PREVIEW_FILENAME' => 'FILE.FILE_NAME',
            ])
            ->registerRuntimeField(
                new Reference(
                    'FILE',
                    FileTable::class,
                    [
                        '=this.PREVIEW_PICTURE' => 'ref.ID'
                    ],
                    ['join_type' => 'LEFT']
                )
            )
            ->fetchAll();
    }

    public function getDetail(string $code): array
    {
        return ElementCatalogTable::query()
            ->where('CODE', $code)
            ->setSelect([
                'ID',
                'NAME',
                'BRAND_NAME' => 'BRAND.ITEM.VALUE',
                'PRICE_PRODUCT' => 'PRICE.PRICE'
            ])
            ->registerRuntimeField(
                new Reference(
                    'PRICE',
                    PriceTable::class,
                    [
                        '=this.ID' => 'ref.PRODUCT_ID',
                    ],
                    ['join_type' => 'LEFT']
                )
            )
            ->fetch();
    }

}