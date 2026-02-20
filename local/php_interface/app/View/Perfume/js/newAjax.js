document.addEventListener('DOMContentLoaded', () => {
    let addButtons = document.querySelectorAll('.addToCart');
    let removeButton = document.querySelector('.remove-btn');
    let quantity = document.querySelector('.quantity_product');


    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            let productId = button.dataset.offerId
            BX.ajax({
                url: '/basket/add/' + productId,
                method: 'POST',
                dataType: 'json',
                onsuccess: (response) => {
                    console.log('YES')
                    quantity.innerHTML = response.data.quantity
                    const skuButton = document.querySelector(`.sku-select[data-offer-id="${productId}"]`);
                    skuButton.dataset.offerQuantity = response.data.quantity
                },
                onfailure: () => {
                    console.log('NO');
                }
            });
        });
    });

    removeButton.addEventListener('click', () => {

        let productId = removeButton.dataset.offerId
        console.log(productId);
        BX.ajax({
            url: '/basket/remove/' + productId,
            method: 'GET',
            dataType: 'json',
            onsuccess: (response) => {
                console.log(productId);
                quantity.innerHTML = response.data.quantity
                const skuButton = document.querySelector(`.sku-select[data-offer-id="${productId}"]`);
                skuButton.dataset.offerQuantity = response.data.quantity
            },
            onfailure: () => {
                console.log('NO');
            }
        });
    })
})