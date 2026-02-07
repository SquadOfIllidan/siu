document.addEventListener('DOMContentLoaded', () => {
    let orderButton = document.querySelector('.order-btn');
    let text = orderButton.innerHTML;

    orderButton.addEventListener('click', () => {
        BX.ajax({
            url: '/orders/addapi',
            method: 'POST',
            dataType: 'json',
            data: {
                'text': text
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