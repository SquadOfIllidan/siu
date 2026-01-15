<?php

namespace App\Repositories;
use App\Models\BasketTable;

class BasketRepository
{

    public function add(int $userId, int $productId, int $price): void
    {
        $item = $this->getByProductId($productId) ?? 0;

        if($item){
            $newQuantity = $item['QUANTITY'] += 1;
            BasketTable::update($productId, [
                'QUANTITY' => $newQuantity
            ]);
        }
        else{
            BasketTable::add([
                'PRODUCT_ID' => $productId,
                'USER_ID' => $userId,
                'QUANTITY' => 1,
                'PRICE' => $price
            ]);
        }
    }

    public function getByProductId(int $productId): array
    {
        return BasketTable::query()
            ->where('PRODUCT_ID', $productId)
            ->setSelect(['QUANTITY'])
            ->fetchAll();
    }
}