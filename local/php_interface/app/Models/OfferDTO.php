<?php

namespace App\Models;

readonly class OfferDTO
{

    public function __construct(
        public int $id,
        public string $name,
        public int $price,
        public string $previewPicture
    )
    {

    }

}