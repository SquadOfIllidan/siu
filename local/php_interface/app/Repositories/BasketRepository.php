<?php

namespace App\Repositories;

use App\Models\BasketTable;
use App\Repositories\BaseRepositoryInterface;
use App\Services\PerfumeService;


class BasketRepository implements BaseRepositoryInterface
{

    private PerfumeService $perfumeService;

    public function __construct()
    {

        $this->perfumeService = new PerfumeService();

    }

    public function get(int $userId): array
    {
        return BasketTable::query()
            ->where('USER_ID', $userId)
            ->setSelect(['*'])
            ->fetchAll();
    }

    public function add(int $userId, int $productId, int $price, string $name, string $preview): void
    {
        $item = $this->getByProductId($productId, $userId);



        if ($item) {
            $newQuantity = $item->getQuantity() + 1;
            $item->set('QUANTITY', $newQuantity);
            $item->set('PRICE', $price);
            $item->save();
//            BasketTable::update($item['ID'], [
//                'QUANTITY' => $newQuantity,
//                'PRICE' => $price * $newQuantity
//            ]);
        } else {
            BasketTable::add([
                'PRODUCT_ID' => $productId,
                'USER_ID' => $userId,
                'NAME' => $name,
                'QUANTITY' => 1,
                'PRICE' => $price,
                'PREVIEW' => $preview
            ]);
        }
    }

    public function remove(int $userId, int $productId): void
    {

        $item = $this->getByProductId($productId, $userId);


        if ($item['QUANTITY'] > 1) {
            $priceForOne = $item['PRICE'] / $item['QUANTITY'];
            $newQuantity = $item['QUANTITY'] - 1;
            BasketTable::update($item['ID'], [
                'QUANTITY' => $newQuantity,
                'PRICE' => $priceForOne * $newQuantity
            ]);
        } else {
            BasketTable::delete($item['ID']);
        }
    }

    public function removeAll(int $userId): void
    {
        $items = $this->get($userId);

        foreach ($items as $item) {
            BasketTable::delete($item['ID']);
        }
    }

    public function getByProductId(int $productId, int $userId): array
    {
        return BasketTable::query()
            ->where([
                ['PRODUCT_ID', $productId],
                ['USER_ID', $userId]
            ])
            ->setSelect(['QUANTITY', 'ID', 'PRICE'])
            ->fetchObject() ?: [];
    }


    public function getQuantity(int|array $productId, int $userId): array
    {
        if (is_int($productId)) {
            return BasketTable::query()
                ->where('PRODUCT_ID', $productId)
                ->where([
                    ['USER_ID', $userId]
                ])
                ->setSelect(['QUANTITY', 'ID', 'PRODUCT_ID', 'PRICE'])
                ->fetch() ?: [];
        }
        return BasketTable::query()
            ->whereIn('PRODUCT_ID', $productId)
            ->where([
                ['USER_ID', $userId]
            ])
            ->setSelect(['QUANTITY', 'ID', 'PRODUCT_ID', 'PRICE'])
            ->fetchAll() ?: [];
    }

    public function addPresent(int $userId, int $productId, int $presentId, string $name): void
    {
        $present = $this->perfumeService->getPresent($productId);


        $checkPresent = BasketTable::query()
            ->where('NAME', $present['PRESENT_DESC_ADD'] . ' ' . $present['PRESENT_NAME'])
            ->setSelect(['NAME'])
            ->fetch() ?: [];

        if ($present && empty($checkPresent)) {
            BasketTable::add([
                'PRODUCT_ID' => $presentId,
                'USER_ID' => $userId,
                'NAME' => $present['PRESENT_DESC_ADD'] . ' ' . $name,
                'QUANTITY' => 1,
                'PRICE' => 0,
                'PREVIEW' => ''
            ]);
        }
    }

    public function checkPrice(int $userId, int $productId): array
    {
        return BasketTable::query()
            ->where('USER_ID', $userId)
            ->where('PRODUCT_ID', $productId)
            ->setSelect(['PRICE'])
            ->fetch() ?: [];
    }
}