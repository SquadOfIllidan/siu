<?php

namespace App\Repositories;

interface BaseRepositoryInterface
{
    public function get(int $id): array;
}