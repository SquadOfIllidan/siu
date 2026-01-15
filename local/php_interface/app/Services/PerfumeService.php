<?php

namespace App\Services;

use App\Models\PerfumesDTO;
use App\Models\PerfumeDetailDTO;
use App\Repositories\PerfumeRepository;
use Bitrix\Main\IO\Path;

class PerfumeService
{

    private PerfumeRepository $perfumeRepository;

    public function __construct()
    {
        $this->perfumeRepository = new PerfumeRepository();
    }


    public function getPerfumes(int $sectionID): array
    {
        $perfumes = $this->perfumeRepository->get($sectionID);

        $perfumesDTO = [];



        foreach ($perfumes as $perfume) {
            $filepath = Path::combine(
                '/upload/',
                $perfume['PREVIEW_SUBDIR'],
                $perfume['PREVIEW_FILENAME']
            );

            $perfumesDTO[] = new PerfumesDTO(
                id: $perfume['ID'],
                name: $perfume['NAME'],
                code: $perfume['CODE'],
                previewPicture: $filepath,
            );
        }


        return $perfumesDTO;
    }

    public function getDetailPerfume(string $elementCode): PerfumeDetailDTO
    {
        $perfumeDetail = $this->perfumeRepository->getDetail($elementCode);


        $perfumeDetailDTO = [];
        $detailImages = [];


        foreach ($perfumeDetail as $item) {
            $filepath = Path::combine(
                '/upload/',
                $item['DETAIL_SUBDIR'],
                $item['DETAIL_FILENAME']
            );

            $detailImages[] = $filepath;

            $perfumeDetailDTO = new PerfumeDetailDTO(
                id: $item['ID'],
                name: $item['NAME'],
                brand: $item['BRAND_NAME'],
                detailImages: $detailImages,
            );
        }

        return $perfumeDetailDTO;
    }
}