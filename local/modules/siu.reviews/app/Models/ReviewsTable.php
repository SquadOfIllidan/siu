<?php
namespace Siu\Reviews\Models;
use Bitrix\Main\ORM\Data\DataManager;
use Bitrix\Main\ORM\Fields\IntegerField;
use Bitrix\Main\ORM\Fields\StringField;
class ReviewsTable extends DataManager
{

    public static function getTableName(): string
    {
        return 'a_user_reviews';
    }

    public static function getMap(): array
    {
        return [
            (new IntegerField('ID'))
            ->configurePrimary()
            ->configureAutocomplete(),
            (new IntegerField('USER_ID')),
            (new IntegerField('PRODUCT_ID')),
            (new StringField('REVIEW_TEXT'))
        ];
    }

}