<?php

namespace Siu\Reviews\Services;
use Bitrix\Main\Request;
use Siu\Reviews\Repositories\ReviewRepository;
use Bitrix\Main\Engine\CurrentUser;
use Bitrix\Main\Application;

class ReviewService
{
    protected Request $request;
    private CurrentUser $user;
    private ReviewRepository $reviewRepository;

    public function __construct()
    {
        $this->request = Application::getInstance()->getContext()->getRequest();
        $this->reviewRepository = new ReviewRepository();
        $this->user = CurrentUser::get();
    }

    public function get(int $productId): array
    {

        return $this->reviewRepository->get($productId);

    }

    public function add(int $productId): void
    {
        $reviewText = $this->request->getPost('review_text');
        $this->reviewRepository->add($this->user->getId(), $productId, $reviewText);
    }

}