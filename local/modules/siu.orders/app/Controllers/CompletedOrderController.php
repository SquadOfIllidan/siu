<?php

namespace Siu\Orders\Controllers;

use Bitrix\Main\Engine\ActionFilter\HttpMethod;
use Bitrix\Main\Engine\Response\Render\View;
use Siu\Orders\Services\CompletedOrderService;

class CompletedOrderController extends \BaseController implements \BaseControllerInterface
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