document.addEventListener('DOMContentLoaded', function() {

    const buttons = document.querySelectorAll('.sku-select');
    const price = document.querySelector('.price-container');
    const addToCart = document.querySelectorAll('.addToCart');
    const removeFromBasket = document.querySelector('.remove-btn');
    const perfumeName = document.querySelector('.perfume-name');
    const previewOffer = document.querySelector('.preview-offer')
    let quantity = document.querySelector('.quantity_product');

    buttons.forEach(button => {
        button.addEventListener('click', function (){

            buttons.forEach(btn => {
               btn.classList.remove('active');
            });
            this.classList.add('active');

            const offerId = this.getAttribute('data-offer-id');
            const offerPrice = this.getAttribute('data-price');
            const offerName = this.getAttribute('data-offer-name');
            const quantityProduct = this.getAttribute('data-offer-quantity');

            price.innerText = offerPrice;
            perfumeName.innerText = offerName;
            previewOffer.src = this.dataset.previewOffer;
            quantity.innerText = quantityProduct;


            updateAddToCartLink(removeFromBasket, addToCart, offerId);
        })
    });
})


function updateAddToCartLink(removeFromBasket, addToCart, offerId) {
    addToCart.forEach(item => {
        item.dataset.offerId = offerId;
    })
    removeFromBasket.dataset.offerId = offerId;
}