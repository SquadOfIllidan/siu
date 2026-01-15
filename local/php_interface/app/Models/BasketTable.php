<?php

namespace App\Models;

use Bitrix\Main\ORM\Data\DataManager;
use Bitrix\Main\ORM\Fields\IntegerField;

class BasketTable extends DataManager
{

    public static function getTableName(): string
    {
        return 'a_user_basket';
    }

    public static function getMap(): array
    {
        return [
            (new IntegerField('ID'))
            ->configurePrimary()
            ->configureAutocomplete(),
            (new IntegerField('PRODUCT_ID')),
            (new IntegerField('USER_ID')),
            (new IntegerField('QUANTITY')),
            (new IntegerField('PRICE'))
        ];
    }

}