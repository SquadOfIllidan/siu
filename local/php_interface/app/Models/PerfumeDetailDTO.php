<?php

namespace App\Models;

readonly class PerfumeDetailDTO
{

    public function __construct(
        public int $id,
        public string $name,
        public string $brand,
        public array $detailImages
    )
    {

    }

}