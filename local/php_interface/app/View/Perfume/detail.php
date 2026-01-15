<?php
use Bitrix\Main\Page\Asset;
use Bitrix\Main\Application;
use App\Repositories\PerfumeRepository;

$route = Application::getInstance()->getRouter();

$asset = Asset::getInstance();
$asset->addCss('/local/php_interface/app/View/Perfume/css/detail.css');

?>

<div class="detail-container">
    <h1 class="perfume-name"><?= htmlspecialchars($result->name) ?></h1>
    <h1 class="perfume-name"><?= htmlspecialchars($result->brand) ?></h1>

    <?php if (!empty($result->detailImages)): ?>
        <div class="image-gallery">
            <?php foreach ($result->detailImages as $image): ?>
                <img class="gallery-image"
                     src="<?= htmlspecialchars($image) ?>"
                     alt="<?= htmlspecialchars($result->name) ?>">
            <?php endforeach; ?>
        </div>
    <?php else: ?>
        <p style="text-align: center; color: #666; padding: 40px;">Изображения отсутствуют</p>
    <?php endif; ?>

    <button>
        <a href="<?= $route->route('basket_add') ?>">Добавить в корзину</a>
    </button>
</div>
