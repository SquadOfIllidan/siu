<?php

use Bitrix\Main\Page\Asset;
use Bitrix\Main\Application;

$route = Application::getInstance()->getRouter();
$asset = Asset::getInstance();

$asset->addCss('/local/php_interface/app/View/Perfume/css/styles.css');
$APPLICATION->SetTitle('Парфюмы');

?>


<div class="page-container">
    <h1 class="page-title">Парфюмы</h1>

    <div class="perfumes-grid">
        <?php
        foreach ($result as $perfume): ?>
            <div class="perfume-card">
                <?php
                if (!empty($perfume->previewPicture)): ?>
                    <div class="image-wrapper">
                        <a href="<?= $route->route('perfume_detail', ['elementCode' => $perfume->code]) ?>">
                            <img src="<?= htmlspecialchars($perfume->previewPicture) ?>"
                                 alt="<?= htmlspecialchars($perfume->name) ?>">
                        </a>
                    </div>
                <?php
                endif; ?>
                <h3 class="perfume-name"><?= htmlspecialchars($perfume->name) ?></h3>
            </div>
        <?php
        endforeach; ?>
    </div>
</div>