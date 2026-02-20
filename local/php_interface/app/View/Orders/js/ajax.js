document.addEventListener('DOMContentLoaded', () => {
    let orderButton = document.querySelector('.order-btn');
    let selectDelivery = document.querySelector('.delivery-select');
    let selectPayment = document.querySelector('.payment-select');
    let phoneInput = document.querySelector('.order-phone-input');

    orderButton.disabled = true;

    phoneInput.placeholder = '+7(000)000-00-00'

    let phoneMask = IMask(phoneInput, {
        mask: '+{7}(000)000-00-00'
    });


    phoneInput.addEventListener('input', () => {
        orderButton.disabled = phoneMask.unmaskedValue.length !== 11
    });


    orderButton.addEventListener('click', () => {
        if(selectDelivery.value === ''){
            selectDelivery.value = 1;
        }
        if(selectPayment.value === ''){
            selectPayment.value = 2;
        }
        BX.ajax({
            url: '/orders/addapi',
            method: 'POST',
            dataType: 'json',
            data: {
                'deliveryId': selectDelivery.value,
                'paymentId': selectPayment.value,
                'userPhone': phoneInput.value
            },
            onsuccess: () => {
                console.log('YES');
            },

            onfailure: () => {
                console.log('NO');
            }
        })
    })
})