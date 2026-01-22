<?php
use Bitrix\Main\Page\Asset;
use Bitrix\Main\Application;

$route = Application::getInstance()->getRouter();
$asset = Asset::getInstance();
$asset->addCss('/local/php_interface/app/View/Basket/css/styles.css');
$asset->addJs('/local/php_interface/app/View/Basket/js/ajax.js');
?>

<div class="basket-container">
    <h1 class="basket-title">Корзина покупок</h1>

    <?php if (empty($basket)): ?>
        <div class="basket-empty">
            <div class="basket-empty-icon">🛒</div>
            <p class="basket-empty-text">Ваша корзина пуста</p>
            <a href="/perfumes" class="continue-shopping">Продолжить покупки</a>
        </div>
    <?php else: ?>
        <div class="basket-items">
            <?php
            $totalPrice = 0;
            foreach ($basket as $item):
                $totalPrice += (float)($item->price ?? 0);
                ?>
                <div class="basket-item">
                    <?php if (!empty($item->previewPicture)): ?>
                        <img src="<?= htmlspecialcharsbx($item->previewPicture) ?>"
                             alt="<?= htmlspecialcharsbx($item->name) ?>"
                             class="item-image">
                    <?php else: ?>
                        <div class="item-image" style="background: #f0f0f0; display: flex; align-items: center; justify-content: center; color: #999;">
                            Нет фото
                        </div>
                    <?php endif; ?>

                    <div class="item-info">
                        <h2 class="item-name"><?= htmlspecialcharsbx($item->name) ?></h2>

                        <?php if (isset($item->price)): ?>
                            <p data-product-id="<?= $item->productId ?>" class="item-price"><?= number_format($item->price, 0, '', '') ?></p>
                        <?php endif; ?>


                        <div class="item-quantity" data-product-id="<?= $item->productId ?>">
                            Количество: <?= $item->quantity ?>
                        </div>
                    </div>

<!--                    <a href="--><?php //= $route->route('basket_remove', ['productId' => $item->productId]) ?><!--" class="remove-btn">-->
<!--                        ×-->
<!--                    </a>-->
                    <button class="remove-btn"
                            data-product-id="<?= $item->productId ?>"
                    >
                        ×
                    </button>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="basket-summary">
            <div class="summary-row">
                <span class="summary-label">Общая стоимость:</span>
                <span class="summary-value summary-total"><?= number_format($totalPrice, 0, '', '') ?> ₽</span>
            </div>
        </div>

        <div class="basket-actions">
            <a href="<?= $route->route('basket_removeAll') ?>" class="clear-basket">
                <span style="margin-right: 8px;">🗑️</span> Очистить корзину
            </a>
            <a href="#" class="checkout-btn">
                Оформить заказ
            </a>
        </div>
    <?php endif; ?>
</div>
