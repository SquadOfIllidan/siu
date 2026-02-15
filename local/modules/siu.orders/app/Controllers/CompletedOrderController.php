<?php

namespace Siu\Orders\Controllers;

use Bitrix\Main\Engine\ActionFilter\HttpMethod;
use Siu\Orders\Services\CompletedOrderService;

class CompletedOrderController extends \Siu\Controllers\Controllers\BaseController implements \Siu\Controllers\Controllers\BaseControllerInterface
{

    private CompletedOrderService $completedOrderService;

    public function __construct()
    {
        parent::__construct();
        $this->completedOrderService = new CompletedOrderService();
    }

    public function configureActions(): array
    {

        return [
            'get' => [
                'prefilters' => [
                    new HttpMethod(['GET'])
                ],
            ],
        ];

    }

    public function getAction(): void
    {
        $this->completedOrderService->get();
    }

}