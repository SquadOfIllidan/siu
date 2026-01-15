<?php

namespace App\Controllers;

use App\Models\BasketTable;
use Bitrix\Main\Engine\ActionFilter\HttpMethod;
use Bitrix\Main\Engine\Controller;
use App\Services\BasketService;

class BasketController extends Controller
{

    private BasketService $basketService;

    public function __construct()
    {
        parent::__construct();
        $this->basketService = new BasketService();
    }

    public function configureActions(): array
    {

        return [
            'add' => [
                'prefilters' => [
                    new HttpMethod(['POST']),
                ]
            ]
        ];

    }

    public function addAction(int $productId, int $price)
    {
        $this->basketService->add($productId, $price);
    }

}