<?php

namespace Siu\Components\Diffusers\Detail\Models;

readonly class DiffuserDetailDTO
{
    public function __construct(
        public int $id,
        public string $name,
        public array $detailImages,
        public string $brand,
        public float $price
    )
    {


    }
}