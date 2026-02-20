<?php
use Bitrix\Main\Page\Asset;
use Siu\Orders\Services\CompletedOrderService;
use Bitrix\Main\Application;

require_once($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_admin_before.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php');

$route = Application::getInstance()->getRouter();

// Подключаем стили
$asset = Asset::getInstance();
$asset->addCss('/local/modules/siu.orders/admin/css/styles.css');
$asset->addJs('/local/modules/siu.orders/app/js/ajax.js');


$APPLICATION->ShowCSS();
$APPLICATION->SetTitle('Заказы SIU');

$orderService = new CompletedOrderService();
$orders = $orderService->get();

require_once($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_admin_after.php');
?>

    <div class="order-container" style="padding: 20px;">
        <h1 style="color: #333; margin-bottom: 30px;">📦 Заказы SIU</h1>

        <?php if (empty($orders)): ?>
            <p style="text-align: center; color: #666; padding: 40px;">Заказов пока нет</p>
        <?php else: ?>
            <?php foreach ($orders as $order):
                $orderData = json_decode($order['ORDER_DATA'], true);
                $totalPrice = 0;
                ?>
                <div class="order-card" data-order-id="<?= $order['ID'] ?>">
                    <div class="order-header">
                        <h2>Заказ #<?= htmlspecialcharsbx($order['ID']) ?></h2>
                        <p style="margin: 5px 0 0 0; opacity: 0.9;">Пользователь ID: <?= htmlspecialcharsbx($order['USER_ID']) ?></p>
                    </div>

                    <?php foreach ($orderData as $item):
                        $totalPrice += $item['price'];
                        ?>
                        <div class="product-item">
                            <?php if ($item['previewPicture']): ?>
                                <img src="<?= $item['previewPicture'] ?>"
                                     alt="<?= $item['name'] ?>"
                                     class="product-image">
                            <?php endif; ?>

                            <div>
                                <div class="product-name">
                                    <h1><?= htmlspecialcharsbx($item['name']) ?></h1>
                                    <span>Количество: <?= number_format($item['quantity'], 0, '', '') ?></span>
                                    <h2>Цена: <?= number_format($item['price'], 0, '', '') ?></h2>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>

                    <div class="order-total">
                        Итого: <?= number_format($totalPrice, 0, '', '') ?> ₽
                    </div>
                </div>
            <?php endforeach; ?>
        <?php endif; ?>
    </div>

<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/epilog_admin.php');
?>