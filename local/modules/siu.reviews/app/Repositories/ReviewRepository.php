<?php

namespace Siu\Reviews\Repositories;
use Siu\Reviews\Models\ReviewsTable;
class ReviewRepository
{

    public function get(int $productId): array
    {

        return ReviewsTable::query()
            ->where('PRODUCT_ID', $productId)
            ->setSelect(['*'])
            ->fetchAll();

    }

    public function add(int $userId, int $productId, string $review_text): void
    {
        ReviewsTable::add([
            'USER_ID' => $userId,
            'PRODUCT_ID' => $productId,
            'REVIEW_TEXT' => $review_text
        ]);
    }

}