<?php

namespace Siu\Orders\Controllers;

use Bitrix\Main\Engine\ActionFilter\HttpMethod;
use Bitrix\Main\Engine\Controller;
use Bitrix\Main\Engine\Response\Render\View;
use Siu\Orders\Services\ActiveOrderService;

require_once $_SERVER['DOCUMENT_ROOT'] . '/local/php_interface/app/Controllers/BaseController.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/local/php_interface/app/Controllers/BaseControllerInterface.php';

class ActiveOrderController extends \BaseController implements \BaseControllerInterface
{

    private ActiveOrderService $orderService;

    public function __construct()
    {
        parent::__construct();
        $this->orderService = new ActiveOrderService();
    }

    public function configureActions(): array
    {
        return [
            'add' => [
                'prefilters' => [
                    new HttpMethod(['GET'])
                ],
            ],
            'remove' => [
                'prefilters' => [
                    new HttpMethod(['GET'])
                ],
            ],
            'get' => [
                'prefilters' => [
                    new HttpMethod(['GET'])
                ],
            ],
        ];
    }

    public function getAction(): array
    {
        return $this->orderService->get();
    }

    public function addAction(): void
    {
        $this->orderService->add();
    }

    public function removeAction(int $orderId): void
    {
        $this->orderService->remove($orderId);
    }

}