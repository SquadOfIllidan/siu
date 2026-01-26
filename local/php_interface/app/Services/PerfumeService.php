<?php

namespace App\Services;

use App\Models\OffersDTO;
use App\Models\OfferDTO;
use App\Models\PerfumesDTO;
use App\Models\PerfumeDetailDTO;
use App\Repositories\PerfumeRepository;
use Bitrix\Main\IO\Path;
use App\Services\BaseServiceInterface;

class PerfumeService implements BaseServiceInterface
{

    private PerfumeRepository $perfumeRepository;

    public function __construct()
    {
        $this->perfumeRepository = new PerfumeRepository();
    }

    public function getOffer($productId): OfferDTO
    {
        $offer = $this->perfumeRepository->getOffer($productId);

        $offerDTO = [];

        foreach ($offer as $off) {
            $filepath = Path::combine(
                '/upload/',
                $off['FILE_SUBDIR'],
                $off['FILE_NAME']
            );

            $offerDTO = new OfferDTO(
                id: $off['ID'],
                name: $off['NAME'],
                price: $off['PRICE_OFFER'],
                previewPicture: $filepath
            );
        }

        return $offerDTO;

    }

    public function getOffers($productId): array
    {
        $offers = $this->perfumeRepository->getOffers($productId);



        $offersDTO = [];

        foreach ($offers as $offer) {
            $filepath = Path::combine(
                '/upload/',
                $offer['FILE_SUBDIR'],
                $offer['FILE_NAME']
            );

            $offersDTO[] = new OffersDTO(
                id: $offer['ID'],
                name: $offer['NAME'],
                price: $offer['PRICE_OFFER'],
                previewPicture: $filepath
            );
        }

        return $offersDTO;

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