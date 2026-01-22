<?php
use App\Models\BasketTable;
use Bitrix\Main\Engine\ActionFilter\HttpMethod;
use Bitrix\Main\Engine\Controller;
use App\Services\BasketService;
use Bitrix\Main\Context;
use Bitrix\Main\Engine\Response\Json;

class BasketController extends Controller
{

    private BasketService $basketService;
    protected $request;

    public function __construct()
    {
        $this->request = Context::getCurrent()->getRequest();
        parent::__construct();
        $this->basketService = new BasketService();
    }

    public function configureActions(): array
    {

        return [
            'get' => [
                'prefilters' => [
                    new HttpMethod(['GET']),
                ]
            ],
            'add' => [
                'prefilters' => [
                    new HttpMethod(['GET']),
                ]
            ],
            'remove' => [
                'prefilters' => [
                    new HttpMethod(['GET']),
                ],
            ],
            'removeAll' => [
                'prefilters' => [
                    new HttpMethod(['GET']),
                ],
            ],
        ];

    }

    public function getAction(): \Bitrix\Main\Engine\Response\Render\View
    {
        $basket = $this->basketService->get();
        return $this->renderView('/local/php_interface/app/View/Basket/index.php', [
            'basket' => $basket
        ]);
    }

    public function addAction(int $productId): Json
    {
        $this->basketService->add($productId);
        $quantity = $this->basketService->getQuantity($productId);

        return new Json([
            'quantity' => $quantity['QUANTITY']
        ]);
    }

    public function removeAction(int $productId): Json
    {
        $this->basketService->remove($productId);
        $quantity = $this->basketService->getQuantity($productId);

        return new Json([
            'quantity' => $quantity['QUANTITY'],
            'price' => $quantity['PRICE'],
            'priceForOne' => $quantity['PRICE'] / $quantity['QUANTITY'],
        ]);
    }

    public function removeAllAction(): void
    {
        $this->basketService->removeAll();
        LocalRedirect($_SERVER['HTTP_REFERER']);
    }

}