<?php

namespace App\Models;

class AuthDTO
{
    public function __construct(
        public string $login,
        public string $password
    )
    {
    }
}