<?php

namespace App\Services;
use App\Models\BasketDTO;
use Bitrix\Main\Engine\CurrentUser;
use App\Repositories\BasketRepository;
use App\Services\PerfumeService;
use App\Services\BaseServiceInterface;


class BasketService implements BaseServiceInterface
{

    private CurrentUser $user;
    private BasketRepository $basketRepository;
    private PerfumeService $perfumeService;
    private $userId;

    public function __construct()
    {
        $this->user = CurrentUser::get();
        $this->userId = $this->user->getId();
        $this->basketRepository = new BasketRepository();
        $this->perfumeService = new PerfumeService();
    }

    public function get(): array
    {
        $basket = $this->basketRepository->get($this->userId);

        $basketDTO = [];


        foreach ($basket as $item) {
            $basketDTO[] = new BasketDTO(
                userId: $this->user->getId(),
                name: $item['NAME'],
                productId: $item['PRODUCT_ID'],
                quantity: $item['QUANTITY'],
                price: $item['PRICE'],
                previewPicture: $item['PREVIEW'],
            );
        }
        return $basketDTO;

    }

    public function add(int $productId): void
    {
        $offer = $this->perfumeService->getOffer($productId);
        $this->basketRepository->add($this->userId, $offer->id, $offer->price, $offer->name, $offer->previewPicture);


        $this->addPresent($productId);
    }

    public function remove(int $productId): void
    {
        $this->basketRepository->remove($this->userId, $productId);

        $present = $this->perfumeService->getPresent($productId);
        $price = $this->checkPrice($productId);

        if((int)$price['PRICE'] < (int)$present['PRICE_FOR_PRESENT_ADD']){
            $this->basketRepository->remove($this->userId, $present['PRESENT_ID']);
        }
    }

    public function removeAll(): void
    {
        $this->basketRepository->removeAll($this->userId);
    }

    public function getQuantity(int | array $productId): array
    {
        return $this->basketRepository->getQuantity($productId, $this->userId);
    }

    public function addPresent(int $productId): void
    {
        $present = $this->perfumeService->getPresent($productId);

        $price = $this->checkPrice($productId);



        if((int)$price['PRICE'] >= (int)$present['PRICE_FOR_PRESENT_ADD']){
            $this->basketRepository->addPresent($this->userId, $productId, $present['PRESENT_ID'], $present['PRESENT_NAME']);
        }
        else{
            $this->basketRepository->remove($this->userId, $present['PRESENT_ID']);
        }
    }

    public function checkPrice(int $productId): array
    {
        return $this->basketRepository->checkPrice($this->userId, $productId);
    }

}