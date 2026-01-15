<?php

namespace App\Models;

class PerfumesDTO
{

    public function __construct(
        public int $id,
        public string $name,
        public string $code,
        public string $previewPicture,

    )
    {

    }

}