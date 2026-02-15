<?php

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}

$arComponentParameters = [
    "GROUPS" => [
        "BASE" => [
            "NAME" => "Базовые настройки",
            "SORT" => 200,
        ],
    ],

    "PARAMETERS" => [
        "SECTION_ID" => [
            "PARENT" => "BASE",
            "NAME" => "ID секции",
            "TYPE" => "STRING",
        ],
    ],
];