<?php

namespace Siu\Controllers\Controllers;

use App\Services\PerfumeService;
use Bitrix\Main\Engine\Response\Render;

class PerfumeController extends BaseController implements BaseControllerInterface
{

    private PerfumeService $perfumeService;

    public function __construct()
    {
        parent::__construct();
        $this->perfumeService = new PerfumeService();
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

        return $this->renderView('/local/php_interface/app/View/Perfume/newDetail.php', [
            'result' => $result
        ]);
    }

}