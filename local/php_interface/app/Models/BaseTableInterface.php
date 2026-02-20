<?php

namespace App\Models;

interface BaseTableInterface
{

    public function __construct();

    public static function getTableName(): string;
    public static function getMap(): array;

}