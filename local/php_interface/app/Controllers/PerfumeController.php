<?php
use Bitrix\Main\Engine\ActionFilter\HttpMethod;
use \Bitrix\Main\Engine\Response\Render;
use App\Services\PerfumeService;

require_once $_SERVER['DOCUMENT_ROOT'] . '/local/php_interface/app/Controllers/BaseController.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/local/php_interface/app/Controllers/BaseControllerInterface.php';

class PerfumeController extends BaseController implements BaseControllerInterface
{

    private PerfumeService $perfumeService;

    public function __construct()
    {
        parent::__construct();
        $this->perfumeService = new PerfumeService();
    }

    public function configureActions(): array
    {
        return [
            'getPerfumes' => [
                'prefilters' => [
                    new HttpMethod(['GET'])
                ]
            ],
            'getPerfumeDetail' => [
                'prefilters' => [
                    new HttpMethod(['GET'])
                ]
            ],
        ];
    }


    public function getPerfumesAction(int $sectionID): Render\View
    {
        $result = $this->perfumeService->getPerfumes($sectionID);

        return $this->renderView('/local/php_interface/app/View/Perfume/index.php', [
            'result' => $result
        ]);
    }

    public function getPerfumeDetailAction(string $elementCode): Render\View
    {
        $result = $this->perfumeService->getDetailPerfume($elementCode);

        return $this->renderView('/local/php_interface/app/View/Perfume/detail.php', [
            'result' => $result
        ]);
    }

}