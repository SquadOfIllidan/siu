<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/local/php_interface/app/Controllers/PerfumeController.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/local/php_interface/app/Controllers/BasketController.php';
use Bitrix\Main\Routing\RoutingConfigurator;



return function (RoutingConfigurator $routes) {

    $routes->prefix('perfumes')->group(function (RoutingConfigurator $routes)
    {
        $routes->get('{sectionID}', [PerfumeController::class, 'getPerfumesAction'])->name('perfumes');
        $routes->get('detail/{elementCode}', [PerfumeController::class, 'getPerfumeDetailAction'])->name('perfume_detail');
    });

    $routes->prefix('basket')->group(function (RoutingConfigurator $routes)
    {
        $routes->post('add', [BasketController::class, 'addAction'])->name('basket_add');
    });

};



