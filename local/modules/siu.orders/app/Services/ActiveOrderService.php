<?php

namespace Siu\Orders\Services;
use Siu\Orders\Repositories\ActiveOrderRepository;
use App\Services\BasketService;
use Bitrix\Main\Engine\CurrentUser;
use App\Services\BaseServiceInterface;
use Siu\Orders\Services\CompletedOrderService;
class ActiveOrderService implements BaseServiceInterface
{
    private ActiveOrderRepository $activeOrderRepository;
    private CompletedOrderService $completedOrderService;
    private BasketService $basketService;
    private CurrentUser $currentUser;
    private int $userId;

    public function __construct()
    {

        $this->basketService = new BasketService();
        $this->activeOrderRepository = new ActiveOrderRepository();
        $this->completedOrderService = new CompletedOrderService();
        $this->currentUser = CurrentUser::get();
        $this->userId = $this->currentUser->getId();

    }

    public function get(): array
    {
        return $this->activeOrderRepository->get();
    }

    public function add(): void
    {
        $basket = $this->basketService->get();
        $this->activeOrderRepository->add($this->userId, $basket);
        $this->basketService->removeAll();
    }

    public function remove(int $orderId): void
    {
        $orderComplete = $this->activeOrderRepository->getById($orderId);
        $this->completedOrderService->add($orderComplete['USER_ID'], json_decode($orderComplete['ORDER_DATA'], true));
        $this->activeOrderRepository->remove($orderId);
    }

}