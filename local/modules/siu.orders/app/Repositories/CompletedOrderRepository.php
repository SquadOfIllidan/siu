<?php

namespace Siu\Orders\Repositories;

use Siu\Orders\Models\CompletedOrderTable;


class CompletedOrderRepository
{

    public function get(): array
    {

        return CompletedOrderTable::query()
            ->setSelect(['*'])
            ->fetchAll();

    }

    public function add(int $userId, array $orderData): void
    {

        CompletedOrderTable::add([
            'USER_ID' => $userId,
            'ORDER_DATA' => json_encode($orderData)
        ]);

    }

}