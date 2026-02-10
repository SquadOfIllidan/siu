<?php
use App\Services\OrderApiService;
use App\Services\BasketApiService;
use Bitrix\Main\Request;
use Bitrix\Main\Context;
use Bitrix\Main\Error;
class OrderApiController extends BaseController implements BaseControllerInterface
{

    private OrderApiService $orderApiService;
    private BasketApiService $basketApiService;
    protected $request;
    public function __construct()
    {
        parent::__construct();
        $this->orderApiService = new OrderApiService();
        $this->basketApiService = new BasketApiService();
        $this->request = Context::getCurrent()->getRequest();
    }

    public function saveOrderAction(): array
    {

        $basket = $this->basketApiService->returnBasket();
        return $this->orderApiService->saveOrder($basket, $this->postData['userPhone'], $this->postData['deliveryId'], $this->postData['paymentId']);
    }

}