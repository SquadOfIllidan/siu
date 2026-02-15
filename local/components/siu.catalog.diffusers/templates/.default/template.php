<?php
use Bitrix\Main\Page\Asset;
use Bitrix\Main\Application;

$asset = Asset::getInstance();
$asset->addCss('/local/components/siu.catalog.diffusers/lib/View/css/style.css');

$routes = Application::getInstance()->getRouter();



?>

<div class="diffusers">
    <?php if (empty($arResult['ITEMS'])): ?>
        <div class="diffusers-empty">
            Диффузоры не найдены
        </div>
    <?php else: ?>
        <?php foreach ($arResult['ITEMS'] as $item): ?>
            <div class="diffuser-card">
                <div class="diffuser-picture">
                    <a href="<?= $routes->route('diffusers_detail', ['elementCode' => $item['CODE']]) ?>" title="<?= htmlspecialchars($item['NAME']) ?>">
                        <?php if (!empty($item['PREVIEW_FILENAME'])): ?>
                            <img alt="<?= htmlspecialchars($item['NAME']) ?>"
                                 src="<?= '/upload/' . $item['PREVIEW_SUBDIR'] . '/' . $item['PREVIEW_FILENAME'] ?>">
                        <?php else: ?>
                            <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; color:#95a5a6;">
                                Нет фото
                            </div>
                        <?php endif; ?>
                    </a>
                </div>
                <div class="diffuser-name">
                    <?= htmlspecialchars($item['NAME']) ?>
                </div>
            </div>
        <?php endforeach; ?>
    <?php endif; ?>
</div>