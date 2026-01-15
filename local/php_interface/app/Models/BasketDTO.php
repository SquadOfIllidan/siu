<?php

namespace App\Models;

class BasketDTO
{
    public function __construct(
        public int $productId,
        public int $userId,
        public int $quantity,
        public int $price
    )
    {

    }
}