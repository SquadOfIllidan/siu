document.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll('.sku-select');
    let offerPreviewPicture = document.querySelector('.preview-offer');
    let offerName = document.querySelector('.perfume-name');
    let addToCart = document.querySelectorAll('.addToCart');
    let removeFromButton = document.querySelector('.remove-btn');
    let offerQuantity = document.querySelector('.quantity_product');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => {
                btn.classList.remove('active')
            });
            button.classList.add('active');

            const priceContainer = document.querySelector('.price-container');

            const offerId = button.dataset.offerId;

            offerPreviewPicture.src = button.dataset.offerImage;
            priceContainer.innerHTML = button.dataset.offerPrice;
            offerName.innerHTML = button.dataset.offerName;

            if(button.dataset.offerQuantity){
                offerQuantity.innerHTML = button.dataset.offerQuantity;
            }
            else {
                offerQuantity.innerHTML = 0;
            }


            addToCart.forEach(item => {
               item.dataset.offerId = offerId;
            });
            removeFromButton.dataset.offerId = offerId;
        })
    })
})