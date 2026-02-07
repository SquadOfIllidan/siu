document.addEventListener('DOMContentLoaded', () => {
    let orderButton = document.querySelector('.order-btn');
    let selectDelivery = document.querySelector('.delivery-select');
    let selectPayment = document.querySelector('.payment-select');
    let phoneInput = document.querySelector('.order-phone-input');

    orderButton.disabled = true;

    phoneInput.addEventListener('input', () => {
        orderButton.disabled = phoneInput.value === '';
    })

    orderButton.addEventListener('click', () => {
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