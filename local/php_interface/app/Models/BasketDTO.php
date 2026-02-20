<?php

namespace App\Models;

readonly class BasketDTO
{
    public function __construct(
        public int $userId,
        public string $name,
        public int $productId,
        public int $quantity,
        public int $price,
        public string $previewPicture
    )
    {

    }
}