<?php

namespace App\Services;
use Bitrix\Main\Engine\CurrentUser;
use App\Repositories\BasketRepository;
class BasketService
{

    private CurrentUser $user;
    private BasketRepository $basketRepository;

    public function __construct()
    {
        $this->user = CurrentUser::get();
        $this->basketRepository = new BasketRepository();
    }


    public function add(int $productId, int $price): void
    {
        $userId = $this->user->getId();

        $this->basketRepository->add($userId, $productId, $price);
    }

}