<?php

$arComponentParameters = [
    "GROUPS" => [
        "BASE" => [
            "NAME" => "Базовые настройки"
        ],
        "CACHE_SETTINGS" => [
            "NAME" => "Настройки кеширования"
        ],
    ],
    "PARAMETERS" => [
        "ELEMENT_CODE" => [
            "PARENT" => "BASE",
            "NAME" => "Код элемента",
            "TYPE" => "STRING"
        ],
        "CACHE_TIME" => [
            "PARENT" => "CACHE_SETTINGS",
            "NAME" => "Время кеширования (сек.)",
            "TYPE" => "STRING",
            "DEFAULT" => "3600",
        ],
    ]
];

return $arComponentParameters;