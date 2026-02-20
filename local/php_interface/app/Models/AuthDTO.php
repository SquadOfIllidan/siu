<?php

namespace App\Models;

readonly class AuthDTO
{
    public function __construct(
        public string $login,
        public string $password
    )
    {
    }
}