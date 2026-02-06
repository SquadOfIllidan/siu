<?php

use App\Services\BasketService;
use Bitrix\Main\Page\Asset;
use Bitrix\Main\Application;
use App\Services\PerfumeService;
use Siu\Reviews\Services\ReviewService;
use App\Services\BasketApiService;


$asset = Asset::getInstance();
$asset->addCss('/local/php_interface/app/View/Perfume/css/detail.css');
$asset->addJs('/local/php_interface/app/View/Perfume/js/newScript.js');
$asset->addJs('/local/php_interface/app/View/Perfume/js/newAjax.js');

$perfumeService = new PerfumeService();
$basketApiService = new BasketApiService();

$offers = $perfumeService->getOffers($result->id);

$basket = $basketApiService->getBasket();

$quantityArr = [];

if($basket){
    foreach ($basket as $item){
        $quantityArr[$item['PRODUCT_ID']] = $item['QUANTITY'];
    }
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
    <?php foreach ($offers as $index => $offer): ?>


    <button class="sku-select <?= $index === 0 ? 'active' : '' ?>"
            data-offer-id="<?= $offer->id ?>"
            data-offer-name="<?= $offer->name ?>"
            data-offer-image="<?= $offer->previewPicture ?>"
            data-offer-price="<?= $offer->price ?>"
            data-offer-quantity="<?= $quantityArr[$offer->id] ?>"
    >

        <?= $offer->name ?></button>

    <?php endforeach; ?>

    <div class="product-container">

        <img class="preview-offer" src="<?= $offers[0]->previewPicture ?>" alt="picture">

        <div class="price-container">
            <?= $offers[0]->price ?>
        </div>

    </div>


    <button class="addToCart" data-offer-id="<?= $offers[0]->id ?>">Добавить в корзину</button>

    <div class="quantity-container">
        <h1>На данный момент в корзине:</h1>
        <button class="addToCart" data-offer-id="<?= $offers[0]->id ?>">+</button>
        <span class="quantity_product"><?= $quantityArr[$offers[0]->id] ?? 0 ?></span>
        <button class="remove-btn" data-offer-id="<?= $offers[0]->id ?>">-</button>
    </div>
</div>



