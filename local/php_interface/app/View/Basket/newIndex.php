<?php

use Bitrix\Main\Page\Asset;
use Bitrix\Main\Application;
use App\Services\OrderApiService;
use App\Services\BasketApiService;
use Bitrix\Sale\Discount\Gift\Manager;
$route = Application::getInstance()->getRouter();

$basketApi = new BasketApiService();

$asset = Asset::getInstance();
$asset->addCss('/local/php_interface/app/View/Basket/css/newStyles.css');
$asset->addJs('/local/php_interface/app/View/Orders/js/ajax.js');

$orderApi = new OrderApiService();

$deliveries = $orderApi->getDeliveries();
$payments = $orderApi->getPayments();

//$giftManager = Manager::getInstance()->setUserId(\Bitrix\Main\Engine\CurrentUser::get()->getId());
//$giftCollections = $giftManager->getCollectionsByBasket($basketApi->returnBasket());

echo '<pre>';
//foreach ($giftCollections as $giftCollection) {
//    foreach ($giftCollection as $gift) {
//        print_r($gift->getProductId());
//    }
//}

?>

<script src="https://unpkg.com/imask" defer></script>


<?php if (!empty($basket['items'])): ?>
<?php foreach ($basket['items'] as $item): ?>
    <div class="basket-item">
        <div class="product-image">
            <img src="<?= $item['picture'] ?>" alt="picture">
        </div>

        <div class="product-info">
            <div class="product-name"><?= $item['name'] ?></div>

            <div class="product-quantity">Количество: <?= $item['QUANTITY'] ?></div>

            <div class="prices">
                <div class="product-price-without-discount">
                    <?= $item['base_price'] ?> <span class="currency"><?= $item['currency'] ?></span>
                </div>

                <?php if ($item['discount_percent'] > 0): ?>
                    <div class="product-price-with-discount">
                        <?= $item['discount_price'] ?> <span class="currency"><?= $item['currency'] ?></span>
                    </div>

                    <div class="discount">-<?= $item['discount_percent'] ?>%</div>
                <?php endif; ?>
            </div>
        </div>
    </div>
<?php endforeach; ?>

<div class="total-price">
    Итоговая цена: <?= $basket['total_price'] ?>
</div>

<div class="deliveries">
    <label for="delivery-select">
        <select class="delivery-select" id="delivery-select" name="delivery_id">
            <option value="">-- Выберите доставку --</option>
            <?php foreach ($deliveries as $delivery): ?>
                <option value="<?= $delivery['ID'] ?>">
                    <?= $delivery['NAME'] ?>
                </option>
            <?php endforeach; ?>
        </select>
    </label>
</div>

    <div class="payments">
        <label for="payment-select">
            <select class="payment-select" id="payment-select" name="payment_id">
                <option value="">-- Выберите способ оплаты --</option>
                <?php foreach ($payments as $payment): ?>
                    <option value="<?= $payment['ID'] ?>">
                        <?= $payment['NAME'] ?>
                    </option>
                <?php endforeach; ?>
            </select>
        </label>
    </div>

    <label>
        <input placeholder="Введите номер телефона" type="text" class="order-phone-input" required>
    </label>

    <button class="order-btn">Оформить заказ</button>

<?php else: ?>
    <div class="empty-basket">
        Корзина пуста
    </div>

<?php endif; ?>

