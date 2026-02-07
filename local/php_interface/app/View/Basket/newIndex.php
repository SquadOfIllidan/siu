<?php

use Bitrix\Main\Page\Asset;
use Bitrix\Main\Application;
$route = Application::getInstance()->getRouter();


$asset = Asset::getInstance();
$asset->addCss('/local/php_interface/app/View/Basket/css/newStyles.css');
$asset->addJs('/local/php_interface/app/View/Orders/js/ajax.js');


?>

<h1>Корзина</h1>

<?php foreach ($basket as $item): ?>
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


<button class="order-btn">Оформить заказ</button>
