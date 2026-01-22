<?php

use App\Services\BasketService;
use Bitrix\Main\Page\Asset;
use Bitrix\Main\Application;
use App\Services\PerfumeService;

$route = Application::getInstance()->getRouter();

$asset = Asset::getInstance();
$asset->addCss('/local/php_interface/app/View/Perfume/css/detail.css');
$asset->addJs('/local/php_interface/app/View/Perfume/js/script.js');
$asset->addJs('/local/php_interface/app/View/Perfume/js/ajax.js');

$perfumeService = new PerfumeService();
$basketService = new BasketService();

$offers = $perfumeService->getOffers($result->id);
$offerIds = array_column($offers, 'ID');
$offerQuantities = $basketService->getQuantity($offerIds);

$quantityMap = [];
foreach ($offerQuantities as $item) {
    $quantityMap[$item['PRODUCT_ID']] = (int)$item['QUANTITY'];
}

?>

<div class="detail-container">
    <h1 class="perfume-name"><?= htmlspecialcharsbx($offers[0]->name) ?></h1>
    <h1 class="perfume-brand"><?= htmlspecialcharsbx($result->brand) ?></h1>

    <?php
    if (!empty($result->detailImages)): ?>
        <div class="image-gallery">
            <?php
            foreach ($result->detailImages as $image): ?>
                <img class="gallery-image"
                     src="<?= htmlspecialcharsbx($image) ?>"
                     alt="<?= htmlspecialcharsbx($result->name) ?>">
            <?php
            endforeach; ?>
        </div>
    <?php
    else: ?>
        <p style="text-align: center; color: #666; padding: 40px;">Изображения отсутствуют</p>
    <?php
    endif; ?>

    <h2>Вариации товара</h2>
    <div class="product-container"
         data-base-route="<?= $route->route('basket_add', ['productId' => '__ID__']) ?>">
        <?php
        foreach ($offers as $index => $offer): ?>
        <?php $quantity = $quantityMap[$offer->id]; ?>

            <button class="sku-select <?= $index === 0 ? 'active' : '' ?>"
                    data-offer-id="<?= $offer->id ?>"
                    data-price="<?= $offer->price ?>"
                    data-offer-name="<?= $offer->name ?>"
                    data-preview-offer="<?= $offer->previewPicture ?>"
                    data-offer-quantity="<?= $quantity ?>"
            >
                <?= $offer->name ?>

            </button>
        <?php
        endforeach; ?>

        <div class="price-container">
            <?= $offers[0]->price ?>
        </div>
        <img class="preview-offer" src="<?= $offers[0]->previewPicture ?>" alt="picture">

    </div>

    <button class="addToCart" data-offer-id="<?= $offers[0]->id ?>">Добавить в корзину</button>

    <div class="quantity-container">
        <h1>На данный момент в корзине:</h1>
        <button class="addToCart" data-offer-id="<?= $offers[0]->id ?>">+</button>
        <span class="quantity_product"><?= $quantityMap[$offers[0]->id] ?></span>
        <button data-offer-id="<?= $offers[0]->id ?>" class="remove-btn">-</button>
    </div>



<!--    <a class="addToCart" href="--><?php //= $route->route('basket_add', ['productId' => $offers[0]->id]) ?><!--">Добавить в корзину</a>-->
</div>
