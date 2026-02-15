<?php

use Bitrix\Main\Engine\Response\Render\View;

class DiffuserDetailController extends \BaseController implements \BaseControllerInterface
{
    public function getDetailAction(string $elementCode): View
    {
        return $this->renderView('/local/components/siu.catalog.diffusers.detail/lib/View/index.php', [
            'elementCode' => $elementCode,
        ]);
    }

}