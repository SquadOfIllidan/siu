<?php

use Bitrix\Main\Engine\ActionFilter\HttpMethod;
use Bitrix\Main\Engine\Controller;
abstract class BaseController extends Controller
{

    public function __construct()
    {
        parent::__construct();
    }

    public function getDefaultPreFilters(): array
    {
        return [];
    }

}