<?php
namespace App\Services;

use Bitrix\Main\Context;
use Bitrix\Sale\Basket;
use Bitrix\Sale\Order;
class OrderApiService
{
    private ?Order $order = null;
    private string $siteId;
    public function __construct()
    {
        $this->siteId = Context::getCurrent()->getSite();
    }

    public function createOrder(Basket $basket): void
    {
        if (!empty($basket->getBasketItems())) {
            $this->order = Order::create($this->siteId, $basket->getFUserId());
            $this->order->setPersonTypeId(1);
            $this->order->setBasket($basket);
        }
    }


    public function applyDiscountsToBasket(Basket $basket): void
    {
        if(!empty($basket->getBasketItems())) {
            if($this->order === null) {
                $this->createOrder($basket);
                print_r($this->order);
                die();
            }
            $this->order->getDiscount();
            $basket->refresh();
            $basket->save();
        }
    }

    public function saveOrder(): array
    {
        $propertyCollection = $this->order->getPropertyCollection();


        if(!empty($props)){
            foreach ($propertyCollection as $property) {
                $code = $property->getField('CODE');
                if($code && isset($props[$code])){
                    $property->setValue($props[$code]);
                }
            }
        }

        $result = $this->order->save();

        if (!$result->isSuccess()) {
            $errors = $result->getErrorMessages();
            return [
                'success' => false,
                'errors' => $errors
            ];
        }
        return [
            'success' => true,
            'orderId' => $this->order->getId(),
            'order' => $this->order
        ];
    }


}