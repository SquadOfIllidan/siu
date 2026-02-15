
<div class="diffuser-detail">
    <div class="diffuser-detail-header">
        <div class="diffuser-detail-images">
            <?php foreach ($arResult['DETAIL']->detailImages as $image): ?>
                <img src="<?= htmlspecialchars($image) ?>" alt="">
            <?php endforeach; ?>
        </div>

        <div>
            <h1 class="diffuser-detail-name">
                <?= htmlspecialchars($arResult['DETAIL']->name) ?>
            </h1>

            <div class="diffuser-detail-brand">
                Бренд: <?= htmlspecialchars($arResult['DETAIL']->brand) ?>
            </div>

            <div class="diffuser-detail-price">
                <?= number_format($arResult['DETAIL']->price, 0, '.', ' ') ?> ₽
            </div>
        </div>
    </div>
    <div class="quantity_product"><?= 0 ?></div>
    <button data-offer-id="<?= $arResult['DETAIL']->id ?>" class="addToCart">Добавить в корзину</button>
</div>
