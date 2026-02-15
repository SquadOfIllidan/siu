<?php

namespace Siu\Controllers\Controllers\components;

use Bitrix\Main\Engine\Response\Render\View;
use Siu\Controllers\Controllers\BaseController;
use Siu\Controllers\Controllers\BaseControllerInterface;

class DiffuserDetailController extends BaseController implements BaseControllerInterface
{
    public function getDetailAction(string $elementCode): View
    {
        return $this->renderView('/local/components/siu.catalog.diffusers.detail/lib/View/index.php', [
            'elementCode' => $elementCode,
        ]);
    }

}