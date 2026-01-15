<?php
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
?>

</main>


<footer class="footer" data-footer>
    <div class="footer__discount">
        <h3 class="footer__title">Скидка 10% на первый заказ</h3>
        <p class="footer__discount-info">Подпишитесь на нашу рассылку и получите промокод на скидку:</p>

        <form class="subscription-form footer__discount-form" data-subscription>
            <label class="subscription-form__label">
                <input class="subscription-form__email" placeholder="E-mail" type="email" data-subscription-email name="email">
                <span class="subscription-form__caption" data-subscription-caption data-error="Неправильный формат e-mail">E-mail</span>

                <button class="button subscription-form__button _anim _b-top _space-between" type="submit" data-subscription-submit disabled>
                    <span class="button__text">Отправить</span>
                </button>

            </label>
        </form>
        <p class="subscription-success uppercase" data-subscription-result>
            Вы успешно подписаны!
        </p>
    </div>
    <nav class="footer__menu" aria-label="Дополнительная">
        <div>
            <h3 class="footer__title">Каталог</h3>
            <ul class="footer__menu-list">
                <li class="footer__menu-item">
                    <a class="footer__menu-link" href="/category.html">Ароматы для тела</a>
                </li>
                <li class="footer__menu-item">
                    <a class="footer__menu-link" href="/category.html">Диффузоры</a>
                </li>
                <li class="footer__menu-item">
                    <a class="footer__menu-link" href="/category.html">Наборы пробников</a>
                </li>
                <li class="footer__menu-item">
                    <a class="footer__menu-link" href="/category.html">Свечи</a>
                </li>
            </ul>
        </div>
        <div>
            <h3 class="footer__title">Компания</h3>
            <ul class="footer__menu-list">
                <li class="footer__menu-item">
                    <a class="footer__menu-link" href="/about.html">О нас</a>
                </li>
                <li class="footer__menu-item">
                    <a class="footer__menu-link" href="/shops.html">Найти магазин</a>
                </li>
                <li class="footer__menu-item">
                    <a class="footer__menu-link" href="/help.html#contacts">Контакты</a>
                </li>
            </ul>
        </div>
        <div>
            <h3 class="footer__title">Помощь</h3>
            <ul class="footer__menu-list">
                <li class="footer__menu-item">
                    <a class="footer__menu-link" href="/help.html#faq">FAQ</a>
                </li>
                <li class="footer__menu-item">
                    <a class="footer__menu-link" href="/help.html#payment">Оплата</a>
                </li>
                <li class="footer__menu-item">
                    <a class="footer__menu-link" href="/help.html#delivery">Доставка и Возврат</a>
                </li>
                <li class="footer__menu-item">
                    <a class="footer__menu-link" href="/help.html#privacy-policy">Политика конфиденциальности</a>
                </li>
                <li class="footer__menu-item">
                    <a class="footer__menu-link" href="/help.html#cookies">Использование Cookies</a>
                </li>
            </ul>
        </div>
        <div>
            <h3 class="footer__title">Мы в соцсетях</h3>
            <ul class="footer__menu-list">
                <li class="footer__menu-item">
                    <a class="footer__menu-link" href="#" target="_blank">VK</a>
                </li>
                <li class="footer__menu-item">
                    <a class="footer__menu-link" href="#" target="_blank">Telegram</a>
                </li>
                <li class="footer__menu-item">
                    <a class="footer__menu-link" href="#" target="_blank">YouTube</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="footer__copyright">
        <p>©2023 SIU, Все права защищены</p>
        <p>Дизайн — rap.digital</p>
    </div>
</footer>

</div>

<div class="popups" data-popups>
    <div class="popups__popup" data-popup="filter" data-popup-pos="bottom" data-popup-open-animation="slideIn" data-popup-close-animation="slideOut">

        <form class="filter" data-filter>
            <div class="filter__content">

                <button class="button filter__button _close-filter" type="button" data-popup-closer data-filter-closer-cross aria-label="Закрыть">
                    <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                        <use xlink:href="#icon-cross-mobile" />
                    </svg>

                </button>

                <div class="filter__category">
                    <div class="filter__block" data-filter-block>
                        <h3 class="filter__title text-bascerville">
                            Категории

                            <button class="button filter__button _arrow-down-filter" type="button" data-arrow-down aria-label="Развернуть">
                                <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                    <use xlink:href="#icon-arrow-down" />
                                </svg>

                            </button>

                        </h3>
                        <ul class="filter__list">
                            <li class="filter__list-item" data-filter-item="home">
                                <input type="checkbox" data-filter-checkbox value="home">

                                <button class="button filter__button _delete-filter" type="button" data-cross aria-label="Отменить выбор">
                                    <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                        <use xlink:href="#icon-cross" />
                                    </svg>

                                </button>

                                <input type="hidden" value="home">

                                <button class="button filter__button-text _text-filter" type="button">
                                    <span class="button__text">Для дома</span>
                                </button>

                            </li>
                            <li class="filter__list-item" data-filter-item="body">
                                <input type="checkbox" data-filter-checkbox value="body">

                                <button class="button filter__button _delete-filter" type="button" data-cross aria-label="Отменить выбор">
                                    <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                        <use xlink:href="#icon-cross" />
                                    </svg>

                                </button>

                                <input type="hidden" value="body">

                                <button class="button filter__button-text _text-filter" type="button">
                                    <span class="button__text">Для тела</span>
                                </button>

                            </li>
                            <li class="filter__list-item" data-filter-item="cars">
                                <input type="checkbox" data-filter-checkbox value="cars">

                                <button class="button filter__button _delete-filter" type="button" data-cross aria-label="Отменить выбор">
                                    <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                        <use xlink:href="#icon-cross" />
                                    </svg>

                                </button>

                                <input type="hidden" value="cars">

                                <button class="button filter__button-text _text-filter" type="button">
                                    <span class="button__text">Для авто</span>
                                </button>

                            </li>
                        </ul>
                    </div>
                    <div class="filter__block" data-filter-block>
                        <h3 class="filter__title text-bascerville">
                            Группы ароматов

                            <button class="button filter__button _arrow-down-filter" type="button" data-arrow-down aria-label="Развернуть">
                                <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                    <use xlink:href="#icon-arrow-down" />
                                </svg>

                            </button>

                        </h3>
                        <ul class="filter__list">
                            <li class="filter__list-item" data-filter-item="floral">
                                <input type="checkbox" data-filter-checkbox value="floral">

                                <button class="button filter__button _delete-filter" type="button" data-cross aria-label="Отменить выбор">
                                    <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                        <use xlink:href="#icon-cross" />
                                    </svg>

                                </button>

                                <input type="hidden" value="floral">

                                <button class="button filter__button-text _text-filter" type="button">
                                    <span class="button__text">Цветочные</span>
                                </button>

                            </li>
                            <li class="filter__list-item" data-filter-item="aquatic">
                                <input type="checkbox" data-filter-checkbox value="aquatic">

                                <button class="button filter__button _delete-filter" type="button" data-cross aria-label="Отменить выбор">
                                    <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                        <use xlink:href="#icon-cross" />
                                    </svg>

                                </button>

                                <input type="hidden" value="aquatic">

                                <button class="button filter__button-text _text-filter" type="button">
                                    <span class="button__text">Акватические</span>
                                </button>

                            </li>
                            <li class="filter__list-item" data-filter-item="powdery">
                                <input type="checkbox" data-filter-checkbox value="powdery">

                                <button class="button filter__button _delete-filter" type="button" data-cross aria-label="Отменить выбор">
                                    <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                        <use xlink:href="#icon-cross" />
                                    </svg>

                                </button>

                                <input type="hidden" value="powdery">

                                <button class="button filter__button-text _text-filter" type="button">
                                    <span class="button__text">Пудровые</span>
                                </button>

                            </li>
                            <li class="filter__list-item" data-filter-item="woody">
                                <input type="checkbox" data-filter-checkbox value="woody">

                                <button class="button filter__button _delete-filter" type="button" data-cross aria-label="Отменить выбор">
                                    <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                        <use xlink:href="#icon-cross" />
                                    </svg>

                                </button>

                                <input type="hidden" value="woody">

                                <button class="button filter__button-text _text-filter" type="button">
                                    <span class="button__text">Древесные</span>
                                </button>

                            </li>
                        </ul>
                    </div>
                </div>
                <div class="filter__notes" data-filter-block>
                    <h3 class="filter__title text-bascerville">
                        Ноты

                        <button class="button filter__button _arrow-down-filter" type="button" data-arrow-down aria-label="Развернуть">
                            <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                <use xlink:href="#icon-arrow-down" />
                            </svg>

                        </button>

                    </h3>
                    <ul class="filter__list">
                        <li class="filter__list-item" data-filter-item="ambroxan">
                            <input type="checkbox" data-filter-checkbox value="ambroxan">

                            <button class="button filter__button _delete-filter" type="button" data-cross aria-label="Отменить выбор">
                                <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                    <use xlink:href="#icon-cross" />
                                </svg>

                            </button>

                            <input type="hidden" value="ambroxan">

                            <button class="button filter__button-text _text-filter" type="button">
                                <span class="button__text">Амброксан</span>
                            </button>

                        </li>
                        <li class="filter__list-item" data-filter-item="tree">
                            <input type="checkbox" data-filter-checkbox value="tree">

                            <button class="button filter__button _delete-filter" type="button" data-cross aria-label="Отменить выбор">
                                <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                    <use xlink:href="#icon-cross" />
                                </svg>

                            </button>

                            <input type="hidden" value="tree">

                            <button class="button filter__button-text _text-filter" type="button">
                                <span class="button__text">Дерево</span>
                            </button>

                        </li>
                        <li class="filter__list-item" data-filter-item="musk">
                            <input type="checkbox" data-filter-checkbox value="musk">

                            <button class="button filter__button _delete-filter" type="button" data-cross aria-label="Отменить выбор">
                                <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                    <use xlink:href="#icon-cross" />
                                </svg>

                            </button>

                            <input type="hidden" value="musk">

                            <button class="button filter__button-text _text-filter" type="button">
                                <span class="button__text">Мускус</span>
                            </button>

                        </li>
                        <li class="filter__list-item" data-filter-item="aldehydes">
                            <input type="checkbox" data-filter-checkbox value="aldehydes">

                            <button class="button filter__button _delete-filter" type="button" data-cross aria-label="Отменить выбор">
                                <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                    <use xlink:href="#icon-cross" />
                                </svg>

                            </button>

                            <input type="hidden" value="aldehydes">

                            <button class="button filter__button-text _text-filter" type="button">
                                <span class="button__text">Альдегиды</span>
                            </button>

                        </li>
                        <li class="filter__list-item" data-filter-item="iris">
                            <input type="checkbox" data-filter-checkbox value="iris">

                            <button class="button filter__button _delete-filter" type="button" data-cross aria-label="Отменить выбор">
                                <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                    <use xlink:href="#icon-cross" />
                                </svg>

                            </button>

                            <input type="hidden" value="iris">

                            <button class="button filter__button-text _text-filter" type="button">
                                <span class="button__text">Ирис</span>
                            </button>

                        </li>
                        <li class="filter__list-item" data-filter-item="peony">
                            <input type="checkbox" data-filter-checkbox value="peony">

                            <button class="button filter__button _delete-filter" type="button" data-cross aria-label="Отменить выбор">
                                <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                    <use xlink:href="#icon-cross" />
                                </svg>

                            </button>

                            <input type="hidden" value="peony">

                            <button class="button filter__button-text _text-filter" type="button">
                                <span class="button__text">Пион</span>
                            </button>

                        </li>
                        <li class="filter__list-item" data-filter-item="bergamot">
                            <input type="checkbox" data-filter-checkbox value="bergamot">

                            <button class="button filter__button _delete-filter" type="button" data-cross aria-label="Отменить выбор">
                                <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                    <use xlink:href="#icon-cross" />
                                </svg>

                            </button>

                            <input type="hidden" value="bergamot">

                            <button class="button filter__button-text _text-filter" type="button">
                                <span class="button__text">Бергамот</span>
                            </button>

                        </li>
                        <li class="filter__list-item" data-filter-item="lemon">
                            <input type="checkbox" data-filter-checkbox value="lemon">

                            <button class="button filter__button _delete-filter" type="button" data-cross aria-label="Отменить выбор">
                                <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                    <use xlink:href="#icon-cross" />
                                </svg>

                            </button>

                            <input type="hidden" value="lemon">

                            <button class="button filter__button-text _text-filter" type="button">
                                <span class="button__text">Лимон</span>
                            </button>

                        </li>
                        <li class="filter__list-item" data-filter-item="resin">
                            <input type="checkbox" data-filter-checkbox value="resin">

                            <button class="button filter__button _delete-filter" type="button" data-cross aria-label="Отменить выбор">
                                <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                    <use xlink:href="#icon-cross" />
                                </svg>

                            </button>

                            <input type="hidden" value="resin">

                            <button class="button filter__button-text _text-filter" type="button">
                                <span class="button__text">Смола</span>
                            </button>

                        </li>
                        <li class="filter__list-item" data-filter-item="white-flowers">
                            <input type="checkbox" data-filter-checkbox value="white-flowers">

                            <button class="button filter__button _delete-filter" type="button" data-cross aria-label="Отменить выбор">
                                <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                    <use xlink:href="#icon-cross" />
                                </svg>

                            </button>

                            <input type="hidden" value="white-flowers">

                            <button class="button filter__button-text _text-filter" type="button">
                                <span class="button__text">Белые цветы</span>
                            </button>

                        </li>
                        <li class="filter__list-item" data-filter-item="meadow-grasses">
                            <input type="checkbox" data-filter-checkbox value="meadow-grasses">

                            <button class="button filter__button _delete-filter" type="button" data-cross aria-label="Отменить выбор">
                                <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                    <use xlink:href="#icon-cross" />
                                </svg>

                            </button>

                            <input type="hidden" value="meadow-grasses">

                            <button class="button filter__button-text _text-filter" type="button">
                                <span class="button__text">Луговые травы</span>
                            </button>

                        </li>
                        <li class="filter__list-item" data-filter-item="vanilla">
                            <input type="checkbox" data-filter-checkbox value="vanilla">

                            <button class="button filter__button _delete-filter" type="button" data-cross aria-label="Отменить выбор">
                                <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                    <use xlink:href="#icon-cross" />
                                </svg>

                            </button>

                            <input type="hidden" value="vanilla">

                            <button class="button filter__button-text _text-filter" type="button">
                                <span class="button__text">Ваниль</span>
                            </button>

                        </li>
                        <li class="filter__list-item" data-filter-item="mango">
                            <input type="checkbox" data-filter-checkbox value="mango">

                            <button class="button filter__button _delete-filter" type="button" data-cross aria-label="Отменить выбор">
                                <svg class="button__icon" fill="none" aria-hidden="true" role="presentation">
                                    <use xlink:href="#icon-cross" />
                                </svg>

                            </button>

                            <input type="hidden" value="mango">

                            <button class="button filter__button-text _text-filter" type="button">
                                <span class="button__text">Манго</span>
                            </button>

                        </li>
                    </ul>
                </div>
            </div>
            <div class="filter__wrapper-btn">

                <button class="button filter__button _clear-filter" type="button" data-filter-clear>
                    <span class="button__text">Очистить все</span>
                </button>

                <button class="button filter__button _apply-filter" type="button" data-filter-apply data-popup-closer>
                    <span class="button__text">Применить <span data-filter-counter></span></span>
                </button>

            </div>
        </form>
    </div>
    <div class="popups__popup" data-popup="cart" data-popup-pos="right" data-popup-open-animation="slideIn" data-popup-close-animation="slideOut">

        <section class="cart page__cart" data-cart>

            <button class="button cart__button _close-cart" type="button" data-popup-closer data-cart-closer-cross aria-label="Закрыть">
                <svg class="button__icon" undefined aria-hidden="true" role="presentation">
                    <use xlink:href="#icon-cross-mobile" />
                </svg>

            </button>

            <div class="cart__content">
                <ul class="cart__goods" data-cart-goods>
                    <li class="cart__good" data-cart-item>
                        <picture class="cart__picture">
                            <img class="cart__image" src="assets/images/good/bottle.png" srcset="assets/images/good/bottle@2x.png 2x" width="60" height="60" alt="" loading="lazy" data-cart-image>
                        </picture>
                        <div class="cart__description">
                            <p>
                                <span class="cart__name" data-cart-name>EUNOIA</span>
                                <span class="cart__volume" data-cart-volume>50 мл</span>
                                <span class="cart__category" data-cart-category>Eau de Parfum</span>
                            </p>
                        </div>
                        <div class="cart__counter" data-counter-container>

                            <button class="button cart__button  _counter-minus" type="button" data-counter-minus aria-label="Минус">
                                <span class="button__text">-</span>
                            </button>

                            <input class="cart__counter-input" data-cart-input type="text" value="1">

                            <button class="button cart__button _counter-plus" type="button" data-counter-plus aria-label="Плюс">
                                <span class="button__text">+</span>
                            </button>

                        </div>
                        <div class="cart__price-info">
                            <span class="cart__price" data-cart-price>6 900 ₽</span>

                            <button class="button cart__button _cart-delete" type="button" data-good-delete>
                                <span class="button__text">Убрать</span>
                            </button>

                        </div>
                    </li>
                </ul>
                <div class="cart__might-like">
                    <h3 class="cart__title">Вам может понравиться</h3>
                    <ul class="cart__goods">
                        <li class="cart__good _might-like" data-good-category="Eau de Parfum">
                            <picture class="cart__picture">
                                <img class="cart__image" src="assets/images/good/bottle.png" srcset="assets/images/good/bottle@2x.png 2x" width="60" height="60" alt="" loading="lazy" data-good-image>
                            </picture>
                            <div class="cart__description">
                                <p>
                                    <span class="cart__name" data-good-name>EUNOIA</span>
                                    <span class="cart__volume" data-good-volume>100 мл</span>
                                    <span class="cart__category" data-good-category> Eau de Parfum</span>
                                </p>
                            </div>
                            <div class="cart__price-info">
                                <span class="cart__price" data-good-price>9 900 ₽</span>

                                <button class="button cart__button _cart-add" type="button" data-good-add>
                                    <span class="button__text">Добавить +</span>
                                </button>

                            </div>
                        </li>
                        <li class="cart__good _might-like" data-good-category="Eau de Parfum">
                            <picture class="cart__picture">
                                <img class="cart__image" src="assets/images/good/bottle.png" srcset="assets/images/good/bottle@2x.png 2x" width="60" height="60" alt="" loading="lazy" data-good-image>
                            </picture>
                            <div class="cart__description">
                                <p>
                                    <span class="cart__name" data-good-name>KEFI</span>
                                    <span class="cart__volume" data-good-volume>100 мл</span>
                                    <span class="cart__category" data-good-category> Eau de Parfum</span>
                                </p>
                            </div>
                            <div class="cart__price-info">
                                <span class="cart__price" data-good-price>9 900 ₽</span>

                                <button class="button cart__button _cart-add" type="button" data-good-add>
                                    <span class="button__text">Добавить +</span>
                                </button>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="cart__footer">
                <div class="cart__total text-title">
                    <p class="cart__total-text">Итого</p>
                    <p class="cart__total-price" data-total-price>6 900 ₽</p>
                </div>

                <a class="button cart__button _cart-next-step _background _disabled" href="/checkout.html" data-next-step>
                    <span class="button__text">Оформить заказ</span>
                </a>

                <p class="cart__note">Для заказов по РФ доставка бесплатная</p>
            </div>
        </section>
    </div>
</div>



<script src="assets/js/bundle.js?f94c5f1f124be0097f10fd44c5659418"></script>
</body>

</html>
