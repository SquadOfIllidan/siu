<?php
use Bitrix\Main\Engine\ActionFilter\HttpMethod;
use Bitrix\Main\Engine\CurrentUser;
use App\Services\BasketApiService;
use Bitrix\Main\Request;
use Bitrix\Main\Context;
use Bitrix\Main\Error;

class BasketApiController extends BaseController implements BaseControllerInterface
{
    private BasketApiService $basketApiService;
    protected $request;

    public function __construct()
    {
        parent::__construct();
        $this->basketApiService = new BasketApiService();
        $this->request = Context::getCurrent()->getRequest();
    }

    public function addToBasketApiAction(int $productId): array
    {
        return $this->basketApiService->addToBasketApi($productId);
    }

    public function deleteBasketApiAction(int $productId): array
    {
        return $this->basketApiService->deleteBasketApi($productId);
    }

    public function getBasketApiAction(): \Bitrix\Main\Engine\Response\Render\View
    {
        return $this->renderView('/local/php_interface/app/View/Basket/newIndex.php', [
            'basket' => $this->basketApiService->getBasket()
        ]);
    }
}