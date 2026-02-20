<?php

namespace Siu\Orders\Services;
use Siu\Orders\Repositories\CompletedOrderRepository;


class CompletedOrderService
{
    private CompletedOrderRepository $completedOrderRepository;

    public function __construct()
    {

        $this->completedOrderRepository = new CompletedOrderRepository();

    }

    public function get(): array
    {

        return $this->completedOrderRepository->get();

    }

    public function add(int $userId, array $orderData): void
    {

        $this->completedOrderRepository->add($userId, $orderData);

    }

}