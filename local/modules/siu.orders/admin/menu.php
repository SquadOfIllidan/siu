<?php

$aMenu[] = [
    "parent_menu" => "global_menu_store",
    "sort" => 0,
    "text" => 'Siu Заказы',
    "title" => 'Siu Заказы',
    "icon" => "sale_menu_icon",
    "page_icon" => "sale_page_icon",
    "items_id" => "menu_siu_orders",
    "items" => [
        [
          "text" => 'Активные заказы',
            "title" => 'Активные заказы',
            "url" => '/bitrix/admin/a_active_orders.php',
            "more_url" => [],
            "items_id" => "menu_siu_active"
        ],
        [
            "text" => 'Выполненные заказы',
            "title" => 'Выполненные заказы',
            "url" => '/bitrix/admin/a_completed_orders.php',
            "more_url" => [],
            "items_id" => "menu_siu_completed"
        ],
    ]
];

return $aMenu;
