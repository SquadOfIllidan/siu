<?php

namespace Siu\Orders\Repositories;

use Siu\Orders\Models\ActiveOrdersTable;
use App\Repositories\BaseRepositoryInterface;
class ActiveOrderRepository
{

    public function get(): array
    {
        return ActiveOrdersTable::query()
            ->setSelect(['*'])
            ->fetchAll();
    }

    public function add(int $userId, array $orderData): void
    {
        ActiveOrdersTable::add([
            'USER_ID' => $userId,
            'ORDER_DATA' => json_encode($orderData, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)
        ]);
    }

    public function remove(int $orderId): void
    {
        ActiveOrdersTable::delete($orderId);
    }

    public function getById(int $orderId): array
    {
        return ActiveOrdersTable::query()
            ->where('ID', $orderId)
            ->setSelect(['*'])
            ->fetch();
    }

}