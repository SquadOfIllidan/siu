<?php
namespace App\Services;

use Bitrix\Main\Application;
use Bitrix\Main\Context;
use Bitrix\Sale\Basket;
use Bitrix\Sale\Delivery\Services\EmptyDeliveryService;
use Bitrix\Sale\Delivery\Services\Manager;
use Bitrix\Sale\PaySystem;
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


    public function applyDiscountsToBasket(Basket $basket): array
    {
        if(!empty($basket->getBasketItems())) {
            if($this->order === null) {
                $this->createOrder($basket);
            }
            $this->order->getDiscount();
            $basket->refresh();
            $basket->save();
        }
        return [
            'success' => true,
        ];
    }

    public function saveOrder(Basket $basket, int $deliveryId, int $paymentId, array $props = []): array
    {
        $this->createOrder($basket);

        $this->setProperty($props);
        $this->setShipment($deliveryId);
        $this->setPayment($paymentId);


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

    public function setProperty(array $props): void
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
    }

    public function setShipment(int $deliveryId): void
    {
        $shipmentCollection = $this->order->getShipmentCollection();
        $shipmentCollection->calculateDelivery();

        $shipment = $shipmentCollection->createItem();
        $shipmentItemCollection = $shipment->getShipmentItemCollection();
        if ($deliveryId > 0) {
            $shipment->setField('DELIVERY_ID', $deliveryId);
            $shipment->setField('DELIVERY_NAME', Manager::getById($deliveryId)['NAME'] ?? '');
        } else {
            $shipment->setField('DELIVERY_ID', 0);
        }
        $shipment->setField('CURRENCY', $this->order->getCurrency());
        foreach ($this->order->getBasket() as $item)
        {
            $shipmentItem = $shipmentItemCollection->createItem($item);
            $shipmentItem->setQuantity($item->getQuantity());
        }
    }

    public function setPayment(int $paymentId): void
    {
        $paymentCollection = $this->order->getPaymentCollection();
        $payment = $paymentCollection->createItem();
        $paySystemService = PaySystem\Manager::getObjectById($paymentId);
        $payment->setFields(array(
            'PAY_SYSTEM_ID' => $paySystemService->getField("PAY_SYSTEM_ID"),
            'PAY_SYSTEM_NAME' => $paySystemService->getField("NAME"),
        ));
    }

}