<?php

class DiffuserController extends \BaseController implements \BaseControllerInterface
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getAction(int $sectionId): \Bitrix\Main\Engine\Response\Render\View
    {
        return $this->renderView('/local/components/siu.catalog.diffusers/lib/View/index.php', [
            'sectionId' => $sectionId,
        ]);
    }
}