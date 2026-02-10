<?php

use Bitrix\Main\Engine\ActionFilter\HttpMethod;
use Bitrix\Main\Engine\Controller;
use Bitrix\Main\Context;
abstract class BaseController extends Controller
{
    protected array $postData;


    public function __construct()
    {
        parent::__construct();
        $post = Context::getCurrent()->getRequest()->getPostList()->toArray();
        foreach ($post as $k => $v) {
            $this->postData[$k] = htmlspecialcharsbx($v);
//            if ($this->postData[$k] === '') {
//                $this->postData[$k] = 1;
//            }
        }
    }

    public function getDefaultPreFilters(): array
    {
        return [];
    }

}