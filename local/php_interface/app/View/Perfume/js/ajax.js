document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.querySelectorAll('.addToCart');
    let quantity = document.querySelector('.quantity_product');
    let buttonRemove = document.querySelector('.remove-btn')

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            let productId = this.getAttribute('data-offer-id');

            BX.ajax({
                url: '/basket/add/' + productId,
                method: 'GET',
                dataType: 'json',
                onsuccess: function (response) {
                    console.log('YES');
                    quantity.innerText = response.data.quantity;
                    const skuButton = document.querySelector(`.sku-select[data-offer-id="${productId}"]`);
                    if (skuButton) {
                        skuButton.setAttribute('data-offer-quantity', response.quantity);
                    }
                },
                onfailure: function () {
                    console.log('NO')
                }
            })
        })
    });
    buttonRemove.addEventListener('click', function (){
        let productId = this.getAttribute('data-offer-id');

        BX.ajax({
            url: '/basket/remove/' + productId,
            method: 'GET',
            dataType: 'json',
            onsuccess: function (response) {
                console.log('YES');
                quantity.innerText = response.quantity;
                const skuButton = document.querySelector(`.sku-select[data-offer-id="${productId}"]`);
                if (skuButton) {
                    skuButton.setAttribute('data-offer-quantity', response.quantity);
                }
            },
            onfailure: function () {
                console.log('NO')
            }
        })
    })
})