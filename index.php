<?php
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
use Bitrix\Main\Mail\Event;
use Bitrix\Main\Application;

$application = Application::getInstance();
$APPLICATION->SetTitle("Главная");



//Event::sendImmediate([
//    "EVENT_NAME" => "MAIL_FORM",          // Тип почтового события
//    "LID" => "s1",
//    'MESSAGE_ID' => 86,
//    "C_FIELDS" => [
//        "EMAIL_TO" => "vladislav.kuzovov@mail.ru",
//        "TEXT" => "Это основной текст сообщения, который будет отображен в письме.",
//    ],
//]);

?>



    <section class="hero page__hero">
        <div class="hero__content">
            <h2 class="hero__title text-title">Flawsome <span>Eau de&nbsp;Parfum</span></h2>
            <p class="hero__description">Минеральный, интимный, прозрачный, комплиментарный аромат, созданный на
                основе амброксана.</p>

            <a class="button hero__link _anim _b-top _space-between" href="/good.html">
                <span class="button__text">Купить сейчас</span>
            </a>

        </div>
        <div class="hero__image-block">
            <picture class="hero__picture" data-parallax-image-block>
                <img class="hero__image" src="<?= SITE_TEMPLATE_PATH ?>/assets/images/hero/hero-bg.jpg"
                     srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/hero/hero-bg@2x.jpg 2x" width="720" height="750"
                     alt="">
            </picture>
            <div class="hero__elem">
                <picture>
                    <img class="hero__elem-image" src="<?= SITE_TEMPLATE_PATH ?>/assets/images/hero/hero-elem.png"
                         srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/hero/hero-elem@2x.png 2x" width="400"
                         height="400" alt="">
                </picture>
            </div>
        </div>
    </section>

    <section class="popular-goods page__popular-goods">

        <div class="slider swiper" data-slider data-slider-navigation data-slider-pagination>
            <h3 class="text-bascerville popular-goods__title">Самое популярное</h3>
            <div class="swiper-wrapper">
                <div class="good page__good swiper-slide" data-good data-good-category="Eau de Parfum">
                    <a class="good__link-wrap" href="/good.html">
                        <picture class="good__picture">
                            <img class="good__img full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum.png"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum@2x.png 2x"
                                 width="240" height="240" alt="" loading="lazy" data-good-image>
                        </picture>
                        <picture class="good__picture-cover">
                            <img class="good__img-cover full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-cover.jpg"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-cover@2x.jpg 2x"
                                 width="460" height="" alt="" loading="lazy">
                        </picture>
                        <p class="good__subtitle" data-good-name>EUNOIA</p>
                        <p class="good__description"><span>Белые цветы, альдегиды, амбра, мускус</span><span
                                    data-good-volume>50 мл</span></p>
                    </a>
                    <div class="good__info">

                        <button class="button good__link _b-top _f-start _anim _cart-add" type="button" data-good-add
                                data-popup-opener="cart" data-popup-opener-delay="1">
                            <span class="button__text">Добавить в корзину</span>
                        </button>

                        <p class="good__price" data-price data-good-price>6 900 ₽</p>
                    </div>
                </div>

                <div class="good page__good swiper-slide" data-good data-good-category="Eau de Parfum">
                    <a class="good__link-wrap" href="/good.html">
                        <picture class="good__picture">
                            <img class="good__img full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum.png"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum@2x.png 2x"
                                 width="240" height="240" alt="" loading="lazy" data-good-image>
                        </picture>
                        <picture class="good__picture-cover">
                            <img class="good__img-cover full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-2-cover.jpg"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-2-cover@2x.jpg 2x"
                                 width="460" height="" alt="" loading="lazy">
                        </picture>
                        <p class="good__subtitle" data-good-name>HYGGE</p>
                        <p class="good__description"><span>Дерево, смола, ваниль</span><span
                                    data-good-volume>50 мл</span></p>
                    </a>
                    <div class="good__info">

                        <button class="button good__link _b-top _f-start _anim _cart-add" type="button" data-good-add
                                data-popup-opener="cart" data-popup-opener-delay="1">
                            <span class="button__text">Добавить в корзину</span>
                        </button>

                        <p class="good__price" data-price data-good-price>6 900 ₽</p>
                    </div>
                </div>

                <div class="good page__good swiper-slide" data-good data-good-category="Eau de Parfum">
                    <a class="good__link-wrap" href="/good.html">
                        <picture class="good__picture">
                            <img class="good__img full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum.png"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum@2x.png 2x"
                                 width="240" height="240" alt="" loading="lazy" data-good-image>
                        </picture>
                        <picture class="good__picture-cover">
                            <img class="good__img-cover full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-3-cover.jpg"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-3-cover@2x.jpg 2x"
                                 width="460" height="" alt="" loading="lazy">
                        </picture>
                        <p class="good__subtitle" data-good-name>KEFI</p>
                        <p class="good__description"><span>Манго, маракуйя, ваниль, пион</span><span data-good-volume>50 мл</span>
                        </p>
                    </a>
                    <div class="good__info">

                        <button class="button good__link _b-top _f-start _anim _cart-add" type="button" data-good-add
                                data-popup-opener="cart" data-popup-opener-delay="1">
                            <span class="button__text">Добавить в корзину</span>
                        </button>

                        <p class="good__price" data-price data-good-price>6 900 ₽</p>
                    </div>
                </div>

                <div class="good page__good swiper-slide" data-good data-good-category="Eau de Parfum">
                    <a class="good__link-wrap" href="/good.html">
                        <picture class="good__picture">
                            <img class="good__img full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum.png"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum@2x.png 2x"
                                 width="240" height="240" alt="" loading="lazy" data-good-image>
                        </picture>
                        <picture class="good__picture-cover">
                            <img class="good__img-cover full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-cover.jpg"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-cover@2x.jpg 2x"
                                 width="460" height="" alt="" loading="lazy">
                        </picture>
                        <p class="good__subtitle" data-good-name>EUNOIA</p>
                        <p class="good__description"><span>Белые цветы, альдегиды, амбра, мускус</span><span
                                    data-good-volume>50 мл</span></p>
                    </a>
                    <div class="good__info">

                        <button class="button good__link _b-top _f-start _anim _cart-add" type="button" data-good-add
                                data-popup-opener="cart" data-popup-opener-delay="1">
                            <span class="button__text">Добавить в корзину</span>
                        </button>

                        <p class="good__price" data-price data-good-price>6 900 ₽</p>
                    </div>
                </div>

                <div class="good page__good swiper-slide" data-good data-good-category="Eau de Parfum">
                    <a class="good__link-wrap" href="/good.html">
                        <picture class="good__picture">
                            <img class="good__img full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum.png"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum@2x.png 2x"
                                 width="240" height="240" alt="" loading="lazy" data-good-image>
                        </picture>
                        <picture class="good__picture-cover">
                            <img class="good__img-cover full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-2-cover.jpg"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-2-cover@2x.jpg 2x"
                                 width="460" height="" alt="" loading="lazy">
                        </picture>
                        <p class="good__subtitle" data-good-name>HYGGE</p>
                        <p class="good__description"><span>Дерево, смола, ваниль</span><span
                                    data-good-volume>50 мл</span></p>
                    </a>
                    <div class="good__info">

                        <button class="button good__link _b-top _f-start _anim _cart-add" type="button" data-good-add
                                data-popup-opener="cart" data-popup-opener-delay="1">
                            <span class="button__text">Добавить в корзину</span>
                        </button>

                        <p class="good__price" data-price data-good-price>6 900 ₽</p>
                    </div>
                </div>

                <div class="good page__good swiper-slide" data-good data-good-category="Eau de Parfum">
                    <a class="good__link-wrap" href="/good.html">
                        <picture class="good__picture">
                            <img class="good__img full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum.png"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum@2x.png 2x"
                                 width="240" height="240" alt="" loading="lazy" data-good-image>
                        </picture>
                        <picture class="good__picture-cover">
                            <img class="good__img-cover full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-3-cover.jpg"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-3-cover@2x.jpg 2x"
                                 width="460" height="" alt="" loading="lazy">
                        </picture>
                        <p class="good__subtitle" data-good-name>KEFI</p>
                        <p class="good__description"><span>Манго, маракуйя, ваниль, пион</span><span data-good-volume>50 мл</span>
                        </p>
                    </a>
                    <div class="good__info">

                        <button class="button good__link _b-top _f-start _anim _cart-add" type="button" data-good-add
                                data-popup-opener="cart" data-popup-opener-delay="1">
                            <span class="button__text">Добавить в корзину</span>
                        </button>

                        <p class="good__price" data-price data-good-price>6 900 ₽</p>
                    </div>
                </div>

            </div>

            <div class="slider__navigation-wrapper">

                <button class="button swiper-button-prev slider__button-prev" type="button" aria-label="Prev">
                </button>

                <button class="button swiper-button-next slider__button-next" type="button" aria-label="Next">
                </button>

            </div>
            <div class="swiper-pagination slider__pagination-wrapper"></div>
        </div>

    </section>

    <section class="categories page__categories">
        <div class="categories__item _background-dark">
            <a class="categories__link" href="/category.html">
                <picture class="categories__picture">
                    <img class="categories__image"
                         src="<?= SITE_TEMPLATE_PATH ?>/assets/images/categories/category-1.jpg"
                         srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/categories/category-1@2x.jpg 2x" width="720"
                         height="720" alt="">
                </picture>
                <h2 class="categories__title text-title">Ароматы <br> для тела</h2>

                <button class="button categories__button _b-top" type="button">
                    <span class="button__text">Подробнее</span>
                </button>

            </a>
        </div>
        <div class="categories__item _background-light">
            <a class="categories__link" href="#">
                <picture class="categories__picture">
                    <img class="categories__image"
                         src="<?= SITE_TEMPLATE_PATH ?>/assets/images/categories/category-2.jpg"
                         srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/categories/category-2@2x.jpg 2x" width="720"
                         height="720" alt="">
                </picture>
                <h2 class="categories__title text-title">Диффузоры</h2>

                <button class="button categories__button _b-top" type="button">
                    <span class="button__text">Подробнее</span>
                </button>

            </a>
        </div>
    </section>

    <section class="brand-mission page__brand-mission" data-brand-mission>
        <div class="brand-mission__content">
            <h2 class="brand-mission__title" data-brand-mission-title
                data-lottie-animation="/<?= SITE_TEMPLATE_PATH ?>/assets/jsons/SIU.json">
            </h2>
            <div class="brand-mission__slider swiper">
                <ul class="brand-mission__list swiper-wrapper">
                    <li class="brand-mission__item swiper-slide" data-brand-item>
                        <picture>
                            <img class="brand-mission__image"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/brand-mission/brand-mission-1.jpg"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/brand-mission/brand-mission-1@2x.jpg 2x"
                                 width="220" height="360" alt="">
                        </picture>
                        <p class="brand-mission__description">
                            <sup>[1]</sup>
                            Ты - Вселенная. <br> Внутри тебя целый мир.
                        </p>
                    </li>
                    <li class="brand-mission__item swiper-slide" data-brand-item>
                        <picture>
                            <img class="brand-mission__image"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/brand-mission/brand-mission-2.jpg"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/brand-mission/brand-mission-2@2x.jpg 2x"
                                 width="220" height="360" alt="">
                        </picture>
                        <p class="brand-mission__description">
                            <sup>[2]</sup>
                            Посмотри на своё отражение в зеркале. Ты прекрасна.
                        </p>
                    </li>
                    <li class="brand-mission__item swiper-slide" data-brand-item>
                        <picture>
                            <img class="brand-mission__image"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/brand-mission/brand-mission-2.jpg"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/brand-mission/brand-mission-2@2x.jpg 2x"
                                 width="220" height="360" alt="">
                        </picture>
                        <p class="brand-mission__description">
                            <sup>[3]</sup>
                            Мы лишь поможем подчеркнуть твою природную красоту. Ментальное и физическое здоровье - наш
                            главный приоритет.
                        </p>
                    </li>
                </ul>
            </div>
        </div>

        <a class="button brand-mission__link _anim _b-top _space-between" href="/about.html">
            <span class="button__text">Миссия бренда</span>
        </a>

    </section>

    <section class="body-fragrances page__body-fragrances">

        <div class="slider swiper" data-slider data-slider-navigation data-slider-pagination>
            <h3 class="text-bascerville body-fragrances__title">Ароматы для тела</h3>
            <div class="swiper-wrapper">
                <div class="good page__good swiper-slide" data-good data-good-category="">
                    <a class="good__link-wrap" href="/good.html">
                        <picture class="good__picture">
                            <img class="good__img full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum.png"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum@2x.png 2x"
                                 width="240" height="240" alt="" loading="lazy" data-good-image>
                        </picture>
                        <picture class="good__picture-cover">
                            <img class="good__img-cover full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-cover.jpg"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-cover@2x.jpg 2x"
                                 width="460" height="" alt="" loading="lazy">
                        </picture>
                        <p class="good__subtitle" data-good-name>EUNOIA</p>
                        <p class="good__description"><span>Белые цветы, альдегиды, амбра, мускус</span><span
                                    data-good-volume>50 мл</span></p>
                    </a>
                    <div class="good__info">

                        <button class="button good__link _b-top _f-start _anim _cart-add" type="button" data-good-add
                                data-popup-opener="cart" data-popup-opener-delay="1">
                            <span class="button__text">Добавить в корзину</span>
                        </button>

                        <p class="good__price" data-price data-good-price>6 900 ₽</p>
                    </div>
                </div>

                <div class="good page__good swiper-slide" data-good data-good-category="">
                    <a class="good__link-wrap" href="/good.html">
                        <picture class="good__picture">
                            <img class="good__img full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum.png"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum@2x.png 2x"
                                 width="240" height="240" alt="" loading="lazy" data-good-image>
                        </picture>
                        <picture class="good__picture-cover">
                            <img class="good__img-cover full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-2-cover.jpg"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-2-cover@2x.jpg 2x"
                                 width="460" height="" alt="" loading="lazy">
                        </picture>
                        <p class="good__subtitle" data-good-name>HYGGE</p>
                        <p class="good__description"><span>Дерево, смола, ваниль</span><span
                                    data-good-volume>50 мл</span></p>
                    </a>
                    <div class="good__info">

                        <button class="button good__link _b-top _f-start _anim _cart-add" type="button" data-good-add
                                data-popup-opener="cart" data-popup-opener-delay="1">
                            <span class="button__text">Добавить в корзину</span>
                        </button>

                        <p class="good__price" data-price data-good-price>6 900 ₽</p>
                    </div>
                </div>

                <div class="good page__good swiper-slide" data-good data-good-category="">
                    <a class="good__link-wrap" href="/good.html">
                        <picture class="good__picture">
                            <img class="good__img full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum.png"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum@2x.png 2x"
                                 width="240" height="240" alt="" loading="lazy" data-good-image>
                        </picture>
                        <picture class="good__picture-cover">
                            <img class="good__img-cover full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-3-cover.jpg"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-3-cover@2x.jpg 2x"
                                 width="460" height="" alt="" loading="lazy">
                        </picture>
                        <p class="good__subtitle" data-good-name>KEFI</p>
                        <p class="good__description"><span>Манго, маракуйя, ваниль, пион</span><span data-good-volume>50 мл</span>
                        </p>
                    </a>
                    <div class="good__info">

                        <button class="button good__link _b-top _f-start _anim _cart-add" type="button" data-good-add
                                data-popup-opener="cart" data-popup-opener-delay="1">
                            <span class="button__text">Добавить в корзину</span>
                        </button>

                        <p class="good__price" data-price data-good-price>6 900 ₽</p>
                    </div>
                </div>

                <div class="good page__good swiper-slide" data-good data-good-category="">
                    <a class="good__link-wrap" href="/good.html">
                        <picture class="good__picture">
                            <img class="good__img full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum.png"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum@2x.png 2x"
                                 width="240" height="240" alt="" loading="lazy" data-good-image>
                        </picture>
                        <picture class="good__picture-cover">
                            <img class="good__img-cover full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-cover.jpg"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-cover@2x.jpg 2x"
                                 width="460" height="" alt="" loading="lazy">
                        </picture>
                        <p class="good__subtitle" data-good-name>EUNOIA</p>
                        <p class="good__description"><span>Белые цветы, альдегиды, амбра, мускус</span><span
                                    data-good-volume>50 мл</span></p>
                    </a>
                    <div class="good__info">

                        <button class="button good__link _b-top _f-start _anim _cart-add" type="button" data-good-add
                                data-popup-opener="cart" data-popup-opener-delay="1">
                            <span class="button__text">Добавить в корзину</span>
                        </button>

                        <p class="good__price" data-price data-good-price>6 900 ₽</p>
                    </div>
                </div>

                <div class="good page__good swiper-slide" data-good data-good-category="">
                    <a class="good__link-wrap" href="/good.html">
                        <picture class="good__picture">
                            <img class="good__img full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum.png"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum@2x.png 2x"
                                 width="240" height="240" alt="" loading="lazy" data-good-image>
                        </picture>
                        <picture class="good__picture-cover">
                            <img class="good__img-cover full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-2-cover.jpg"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-2-cover@2x.jpg 2x"
                                 width="460" height="" alt="" loading="lazy">
                        </picture>
                        <p class="good__subtitle" data-good-name>HYGGE</p>
                        <p class="good__description"><span>Дерево, смола, ваниль</span><span
                                    data-good-volume>50 мл</span></p>
                    </a>
                    <div class="good__info">

                        <button class="button good__link _b-top _f-start _anim _cart-add" type="button" data-good-add
                                data-popup-opener="cart" data-popup-opener-delay="1">
                            <span class="button__text">Добавить в корзину</span>
                        </button>

                        <p class="good__price" data-price data-good-price>6 900 ₽</p>
                    </div>
                </div>

                <div class="good page__good swiper-slide" data-good data-good-category="">
                    <a class="good__link-wrap" href="/good.html">
                        <picture class="good__picture">
                            <img class="good__img full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum.png"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-1-parfum@2x.png 2x"
                                 width="240" height="240" alt="" loading="lazy" data-good-image>
                        </picture>
                        <picture class="good__picture-cover">
                            <img class="good__img-cover full-size-img"
                                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-3-cover.jpg"
                                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/body-fragrances/slide-3-cover@2x.jpg 2x"
                                 width="460" height="" alt="" loading="lazy">
                        </picture>
                        <p class="good__subtitle" data-good-name>KEFI</p>
                        <p class="good__description"><span>Манго, маракуйя, ваниль, пион</span><span data-good-volume>50 мл</span>
                        </p>
                    </a>
                    <div class="good__info">

                        <button class="button good__link _b-top _f-start _anim _cart-add" type="button" data-good-add
                                data-popup-opener="cart" data-popup-opener-delay="1">
                            <span class="button__text">Добавить в корзину</span>
                        </button>

                        <p class="good__price" data-price data-good-price>6 900 ₽</p>
                    </div>
                </div>

            </div>

            <div class="slider__navigation-wrapper">

                <button class="button swiper-button-prev slider__button-prev" type="button" aria-label="Prev">
                </button>

                <button class="button swiper-button-next slider__button-next" type="button" aria-label="Next">
                </button>

            </div>
            <div class="swiper-pagination slider__pagination-wrapper"></div>
        </div>

    </section>
    <section class="individual-selection">
        <div class="individual-selection__content">
            <h2 class="individual-selection__title text-title">Индивидуальный подбор</h2>
            <p class="individual-selection__description">Пообщайтесь с нашим экспертом онлайн, либо оставьте заявку,
                чтобы индивидуально подобрать лучший аромат из нашей новой коллекции</p>

            <a class="button individual-selection__link _b-top _space-between _anim" href="/collection.html">
                <span class="button__text">Попробовать сейчас</span>
            </a>

        </div>
        <picture class="individual-selection__picture">
            <source srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/individual-selection/individual-selection-bg_mobile.jpg, <?= SITE_TEMPLATE_PATH ?>/assets/images/individual-selection/individual-selection-bg_mobile@2x.jpg 2x"
                    media="(max-width: 740px)">
            <img class="individual-selection__image"
                 src="<?= SITE_TEMPLATE_PATH ?>/assets/images/individual-selection/individual-selection-bg.jpg, <?= SITE_TEMPLATE_PATH ?>/assets/images/individual-selection/individual-selection-bg_mobile@2x.jpg 2x"
                 srcset="<?= SITE_TEMPLATE_PATH ?>/assets/images/individual-selection/individual-selection-bg@2x.jpg"
                 width="1165" height="750" alt="">
        </picture>
    </section>

    <button class="button _chat page__button" type="button" data-chat-button>
        <svg class="button__icon" undefined aria-hidden="true" role="presentation">
            <use xlink:href="#icon-chat"/>
        </svg>

    </button>

<?php
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>