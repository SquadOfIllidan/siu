<?php

namespace App\Repositories;

use Bitrix\Iblock\Elements\ElementCatalogTable;
use Bitrix\Iblock\Elements\ElementOffersTable;
use Bitrix\Main\ORM\Fields\Relations\Reference;
use Bitrix\Main\FileTable;
use Bitrix\Catalog\PriceTable;
use App\Repositories\BaseRepositoryInterface;

class PerfumeRepository implements BaseRepositoryInterface
{
    public function __construct()
    {
    }


    public function get(int $sectionID): array
    {
        return ElementCatalogTable::query()
            ->where([
                ['IBLOCK_SECTION_ID', $sectionID]
            ])
            ->setSelect([
                'ID',
                'NAME',
                'PREVIEW_PICTURE',
                'PREVIEW_SUBDIR' => 'PREVIEW_FILE.SUBDIR',
                'PREVIEW_FILENAME' => 'PREVIEW_FILE.FILE_NAME',
                'CODE'
            ])
            ->registerRuntimeField(
                new Reference(
                    'PREVIEW_FILE',
                    FileTable::class,
                    [
                        '=this.PREVIEW_PICTURE' => 'ref.ID',
                    ],
                    ['join_type' => 'LEFT']
                )
            )
            ->fetchAll();
    }


    public function getDetail(string $elementCode): array
    {
        return ElementCatalogTable::query()
            ->where([
                ['CODE', $elementCode]
            ])
            ->setSelect([
                'ID',
                'NAME',
                'BRAND_NAME' => 'BRAND.ITEM.VALUE',
                'DETAIL_IMAGES',
                'DETAIL_SUBDIR' => 'DETAIL_FILE.SUBDIR',
                'DETAIL_FILENAME' => 'DETAIL_FILE.FILE_NAME',
                'CODE'
            ])
            ->registerRuntimeField(
                new Reference(
                    'DETAIL_FILE',
                    FileTable::class,
                    [
                        '=this.DETAIL_IMAGES.VALUE' => 'ref.ID',
                    ],
                    ['join_type' => 'LEFT']
                )
            )
            ->fetchAll();

    }

    public function getOffer(int $offerID): array
    {
        return ElementOffersTable::query()
            ->where([
                ['ID', $offerID]
            ])
            ->setSelect([
                'ID',
                'NAME',
                'PRICE_OFFER' => 'PRICE.PRICE',
                'PREVIEW_PICTURE',
                'FILE_SUBDIR' => 'FILE.SUBDIR',
                'FILE_NAME' => 'FILE.FILE_NAME'])
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
            ->registerRuntimeField(
                new Reference(
                    'FILE',
                    FileTable::class,
                    [
                        '=this.PREVIEW_PICTURE' => 'ref.ID',
                    ],
                    ['join_type' => 'LEFT']
                )
            )
            ->fetchAll();
    }



    public function getOffers(int $productID): array
    {
        return ElementOffersTable::query()
            ->where([
                ['CML2_LINK.VALUE', $productID]
            ])
            ->setSelect([
                'ID',
                'NAME',
                'PRICE_OFFER' => 'PRICE.PRICE',
                'PREVIEW_PICTURE',
                'FILE_SUBDIR' => 'FILE.SUBDIR',
                'FILE_NAME' => 'FILE.FILE_NAME',
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
            ->registerRuntimeField(
                new Reference(
                    'FILE',
                    FileTable::class,
                    [
                        '=this.PREVIEW_PICTURE' => 'ref.ID',
                    ],
                    ['join_type' => 'LEFT']
                )
            )
            ->fetchAll();
    }

    public function getPresent(int $offerId): array
    {

        return ElementOffersTable::query()
            ->where('ID', $offerId)
            ->setSelect([
                'PRESENT_NAME' => 'PRESENT.ELEMENT.NAME',
                'PRESENT_ID' => 'PRESENT.ELEMENT.ID',
                'PRICE_FOR_PRESENT_ADD' => 'PRICE_FOR_PRESENT.VALUE',
                'PRESENT_DESC_ADD' => 'PRESENT_DESC.VALUE',
            ])
            ->fetch() ?: [];


    }
}