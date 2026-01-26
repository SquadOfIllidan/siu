<?php

namespace Siu\Reviews\Controllers;

use Bitrix\Main\Engine\ActionFilter\HttpMethod;
use Bitrix\Main\Engine\Controller;
use Siu\Reviews\Services\ReviewService;

class ReviewController extends Controller
{
    private ReviewService $reviewService;

    public function __construct()
    {

        parent::__construct();
        $this->reviewService = new ReviewService();

    }

    public function configureActions(): array
    {
        return [
            'get' => [
                'prefilters' => [
                    new HttpMethod(['GET'])
                ],
            ],
            'add' => [
                'prefilters' => [
                    new HttpMethod(['POST'])
                ]
            ]
        ];
    }

    public function getAction(int $productId): array
    {
        return $this->reviewService->get($productId);
    }

    public function addAction(int $productId): void
    {
        $this->reviewService->add($productId);
    }

}