document.addEventListener('DOMContentLoaded', function (){
    let buttons = document.querySelectorAll('.remove-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function (){

            let productId = this.dataset.productId;
            let productPrice = document.querySelector(`.item-price[data-product-id="${productId}"]`);
            let productQuantity = document.querySelector(`.item-quantity[data-product-id="${productId}"]`);
            let itemElement = this.closest('.basket-item');
            let totalPrice = document.querySelector('.summary-value');
            let total = parseInt(totalPrice.innerText);

            BX.ajax({
                url: '/basket/remove/' + productId,
                method: 'GET',
                dataType: 'json',
                onsuccess: function (response){
                    productQuantity.innerText = 'Количество:' + ' ' + response.quantity;
                    productPrice.innerText = response.price;
                    totalPrice.innerText = total - response.priceForOne + ' ' + '₽';
                    if(!response.priceForOne){
                        totalPrice.remove();
                    }
                    if(!response.quantity){
                        itemElement.remove();
                    }
                    checkBasketEmpty();
                },
                onfailure: function (){
                    console.log('NO')
                }
            })

        })
    });

    function checkBasketEmpty(){
        let basketItem = document.querySelectorAll('.basket-item');
        let basketItems = document.querySelector('.basket-items');
        let basketSummary = document.querySelector('.basket-summary');
        let basketActions = document.querySelector('.basket-actions');

        if(basketItem.length === 0){
            if(basketItems){
                basketItems.remove();
            }
            if(basketSummary){
                basketSummary.remove();
            }
            if(basketActions){
                basketActions.remove();
            }
            showEmptyBasket();
        }
    }

    function showEmptyBasket(){
        let basketContainer = document.querySelector('.basket-container');
        let basketEmpty = document.querySelector('.basket-empty');

        if(basketEmpty){
            basketEmpty.style.display = 'block';
        }
        else {
            let emptyHtml = `<div class="basket-empty">
            <div class="basket-empty-icon">🛒</div>
            <p class="basket-empty-text">Ваша корзина пуста</p>
            <a href="/perfumes" class="continue-shopping">Продолжить покупки</a>
        </div>`;

            basketContainer.insertAdjacentHTML('beforeend', emptyHtml);
        }
    }
})