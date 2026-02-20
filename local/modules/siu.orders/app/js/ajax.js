document.addEventListener('DOMContentLoaded', function (){

    let removeButtons = document.querySelectorAll('.remove-order');
    removeButtons.forEach(button => {
        button.addEventListener('click', function (){
            let orderId = this.getAttribute('data-order-id');
            let order = document.querySelector(`.order-card[data-order-id="${orderId}"]`);

            BX.ajax({
                url: '/bitrix/admin/remove/' + orderId,
                method: 'GET',
                dataType: 'json',


                onsuccess: () => {
                    order.remove();
                    checkEmptyOrders();
                },
                onfailure: () => {
                    console.log('NO')
                }
            })

        })
    })


    let checkEmptyOrders = () => {

        let orders = document.querySelectorAll('.order-card');

        if(orders.length === 0){
            showEmptyOrders();
        }

    }

    let showEmptyOrders = () => {
        let orderContainer = document.querySelector('.order-container')

        let emptyText = `<p style="text-align: center; color: #666; padding: 40px;">Заказов пока нет</p>`;

        orderContainer.insertAdjacentHTML('beforeend', emptyText);
    }


})
