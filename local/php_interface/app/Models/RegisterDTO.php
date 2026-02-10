<?php

namespace App\Models;

readonly class RegisterDTO
{

    public function __construct(
        public string $email,
        public string $login,
        public string $password,
        public string $confirmPassword
    )
    {

    }

}