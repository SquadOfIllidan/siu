<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/local/php_interface/app/Controllers/PerfumeController.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/local/php_interface/app/Controllers/BasketController.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/local/php_interface/app/Controllers/UserController.php';

use Bitrix\Main\Routing\RoutingConfigurator;
use Siu\Orders\Controllers\ActiveOrderController;
use Siu\Reviews\Controllers\ReviewController;


return function (RoutingConfigurator $routes) {



    $routes->prefix('perfumes')->group(function (RoutingConfigurator $routes)
    {
        $routes->get('{sectionID}', [PerfumeController::class, 'getPerfumesAction'])->name('perfumes');
        $routes->get('detail/{elementCode}', [PerfumeController::class, 'getPerfumeDetailAction'])->name('perfume_detail');
    });

    $routes->prefix('basket')->group(function (RoutingConfigurator $routes)
    {
        $routes->get('', [BasketController::class, 'getAction'])->name('basket');
        $routes->get('add/{productId}', [BasketController::class, 'addAction'])->name('basket_add');
        $routes->get('remove/{productId}', [BasketController::class, 'removeAction'])->name('basket_remove');
        $routes->get('remove', [BasketController::class, 'removeAllAction'])->name('basket_removeAll');
    });

    $routes->prefix('user')->group(function (RoutingConfigurator $routes){
        $routes->prefix('register')->group(function (RoutingConfigurator $routes){
            $routes->get('', [UserController::class, 'toRegisterAction'])->name('user_register');
            $routes->post('', [UserController::class, 'registerAction'])->name('user_register_post');
        });
        $routes->prefix('auth')->group(function (RoutingConfigurator $routes){
            $routes->get('', [UserController::class, 'toAuthAction'])->name('user_auth');
            $routes->post('', [UserController::class, 'authAction'])->name('user_auth_post');
        });
        $routes->get('logout', [UserController::class, 'logoutAction'])->name('user_logout');
    });

    $routes->prefix('orders')->group(function (RoutingConfigurator $routes){
        $routes->get('add', [ActiveOrderController::class, 'addAction'])->name('order_add');
    });

    $routes->prefix('bitrix/admin')->group(function (RoutingConfigurator $routes){
       $routes->get('remove/{orderId}', [ActiveOrderController::class, 'removeAction'])->name('order_remove');
    });

    $routes->prefix('reviews')->group(function (RoutingConfigurator $routes){
        $routes->post('add/{productId}', [ReviewController::class, 'addAction'])->name('review_add');
    });

};



