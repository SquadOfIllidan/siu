<?php

namespace App\Repositories;

use App\Models\BasketTable;

class BasketRepository
{

    public function get(int $userId)
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
            $newQuantity = $item['QUANTITY'] + 1;
            BasketTable::update($item['ID'], [
                'QUANTITY' => $newQuantity,
                'PRICE' => $price * $newQuantity
            ]);
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
            ->fetch() ?: [];
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
}