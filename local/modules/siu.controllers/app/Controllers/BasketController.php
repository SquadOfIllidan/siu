<?php

namespace Siu\Controllers\Controllers;

use App\Services\BasketService;
use Bitrix\Main\Context;
use Bitrix\Main\Engine\Response\Json;

class BasketController extends BaseController implements BaseControllerInterface
{

    private BasketService $basketService;
    protected $request;

    public function __construct()
    {
        $this->request = Context::getCurrent()->getRequest();
        parent::__construct();
        $this->basketService = new BasketService();
    }


    public function getAction(): \Bitrix\Main\Engine\Response\Render\View
    {
        $basket = $this->basketService->get();
        return $this->renderView('/local/php_interface/app/View/Basket/index.php', [
            'basket' => $basket
        ]);
    }

    public function addAction(int $productId): Json
    {
        $this->basketService->add($productId);
        $quantity = $this->basketService->getQuantity($productId);

        return new Json([
            'quantity' => $quantity['QUANTITY']
        ]);
    }

    public function removeAction(int $productId): Json
    {
        $this->basketService->remove($productId);
        $quantity = $this->basketService->getQuantity($productId);

        $basket = $this->basketService->get();

        $totalPrice = 0;
        foreach ($basket as $item) {
            $totalPrice += $item->price;
        }

        if ($quantity && isset($quantity['QUANTITY'])) {
            return new Json([
                'quantity' => $quantity['QUANTITY'],
                'price' => $quantity['PRICE'],
                'priceForOne' => $quantity['PRICE'] / $quantity['QUANTITY'],
                'totalPrice' => $totalPrice
            ]);
        } else {
            return new Json([
                'quantity' => 0,
                'price' => 0,
                'priceForOne' => 0,
                'totalPrice' => $totalPrice
            ]);
        }
    }

    public function removeAllAction(): void
    {
        $this->basketService->removeAll();
        LocalRedirect($_SERVER['HTTP_REFERER']);
    }

}