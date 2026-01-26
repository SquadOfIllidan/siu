<?php

namespace Siu\Orders\Models;

use Bitrix\Main\ORM\Data\DataManager;
use Bitrix\Main\ORM\Fields\IntegerField;
use Bitrix\Main\ORM\Fields\JsonField;


class ActiveOrdersTable extends DataManager
{

    public function __construct()
    {

    }

    public static function getTableName(): string
    {

        return "a_active_user_orders";

    }

    public static function getMap(): array
    {

        return [
            (new IntegerField('ID'))
                ->configurePrimary()
                ->configureAutocomplete(),
            (new IntegerField('USER_ID')),
            (new JsonField('ORDER_DATA'))
        ];

    }
}