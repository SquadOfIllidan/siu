<?php

namespace App\Services;

use Bitrix\Currency\CurrencyManager;
use Bitrix\Main\ArgumentException;
use Bitrix\Main\ArgumentTypeException;
use Bitrix\Main\Context;
use Bitrix\Main\FileTable;
use Bitrix\Main\NotImplementedException;
use Bitrix\Main\ORM\Fields\Relations\Reference;
use Bitrix\Sale\Basket;
use Bitrix\Sale\Order;
use Bitrix\Sale\Fuser;
use Bitrix\Sale\ProductTable;
use Bitrix\Iblock\Elements\ElementOffersTable;
use App\Services\OrderApiService;

class BasketApiService
{
    private Basket $basket;
    private int $fuserId;
    private string $siteId;
    private OrderApiService $orderApiService;

    /**
     * @throws ArgumentTypeException
     * @throws ArgumentException
     * @throws NotImplementedException
     */
    public function __construct()
    {
        $this->fuserId = Fuser::getId();
        $this->siteId = Context::getCurrent()->getSite();
        $this->orderApiService = new OrderApiService();
        $this->loadBasket();
    }

    /**
     * @throws ArgumentTypeException
     * @throws ArgumentException
     * @throws NotImplementedException
     */
    private function loadBasket(): void
    {
        $this->basket = Basket::loadItemsForFUser($this->fuserId, $this->siteId);
        if (!$this->basket) {
            $this->basket = Basket::create($this->siteId);
            $this->basket->setFUserId($this->fuserId);
        }
    }

    public function returnBasket(): Basket
    {
        return $this->basket;
    }


    public function getBasket(): array
    {
        $this->orderApiService->applyDiscountsToBasket($this->basket);


        $items = [];
        foreach ($this->basket->getBasketItems() as $basketItem) {
            $picture = $this->getProductPicture($basketItem->getProductId());
            $picturePath = $picture['PREVIEW_SUBDIR'] . '/' . $picture['PREVIEW_FILENAME'];
            $items[] = [
                'id' => $basketItem->getId(),
                'PRODUCT_ID' => $basketItem->getProductId(),
                'QUANTITY' => $basketItem->getQuantity(),
                'price' => $basketItem->getPrice(),
                'picture' => '/upload/' . $picturePath,
                'base_price' => $basketItem->getBasePrice(),
                'discount_price' => $basketItem->getDiscountPrice(),
                'discount_percent' => $basketItem->getBasePrice() > 0
                    ? round(($basketItem->getDiscountPrice() / $basketItem->getBasePrice()) * 100, 2)
                    : 0,
                'name' => $basketItem->getField('NAME'),
                'currency' => $basketItem->getCurrency(),
                'basket' => $this->basket
            ];
        }
        return $items;
    }

    public function addToBasketApi(int $productId, $quantity = 1): array
    {
        $existingItem = null;
        $items = $this->basket->getBasketItems();


        foreach ($items as $item) {
            if ($item->getProductId() == $productId) {
                $existingItem = $item;
                break;
            }
        }

        if ($existingItem) {
            $existingItem->setField('QUANTITY', $existingItem->getQuantity() + $quantity);
        } else {
            $existingItem = $this->basket->createItem('catalog', $productId);

            $existingItem->setFields([
                'QUANTITY' => $quantity,
                'CURRENCY' => CurrencyManager::getBaseCurrency(),
                'LID' => $this->siteId,
                'PRODUCT_PROVIDER_CLASS' => 'CCatalogProductProvider',
            ]);
        }

        $result = $this->basket->save();

        if (!$result->isSuccess()) {
            return [
                'success' => false,
                'errors' => $result->getErrorMessages()
            ];
        }

        $this->orderApiService->applyDiscountsToBasket($this->basket);

        return [
            'success' => true,
            'message' => 'Товар добавлен в корзину',
            'quantity' => $existingItem->getQuantity()
        ];
    }


    public function deleteBasketApi(int $productId): array
    {
        $items = $this->basket->getBasketItems();
        $deleteItem = null;

        if (!empty($items)) {
            foreach ($items as $item) {
                if ($item->getProductId() == $productId) {
                    $deleteItem = $item;
                    break;
                }
            }

            if ($deleteItem) {
                if ($deleteItem->getQuantity() > 1) {
                    $deleteItem->setField('QUANTITY', $deleteItem->getQuantity() - 1);
                } else {
                    $this->basket->getItemById($deleteItem->getId())->delete();
                }
            }
        }
        $result = $this->basket->save();

        if (!$result->isSuccess()) {
            return [
                'success' => false,
                'message' => 'Товар не удален из корзины',
            ];
        }
        $this->orderApiService->applyDiscountsToBasket($this->basket);
        return [
            'success' => true,
            'message' => 'Товар удален из корзины',
            'quantity' => $deleteItem->getQuantity()
        ];
    }

    public function getProductPicture(int $productId): array
    {
        return ElementOffersTable::query()
            ->where('ID', $productId)
            ->setSelect([
                'PREVIEW_PICTURE',
                'PREVIEW_SUBDIR' => 'PREVIEW_FILE.SUBDIR',
                'PREVIEW_FILENAME' => 'PREVIEW_FILE.FILE_NAME',
            ])
            ->registerRuntimeField(
                new Reference(
                    'PREVIEW_FILE',
                    FileTable::class,
                    [
                        '=this.PREVIEW_PICTURE' => 'ref.ID'
                    ],
                    ['join_type' => 'LEFT']
                )
            )
            ->fetch();
    }
}