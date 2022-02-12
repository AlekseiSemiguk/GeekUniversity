$(document).ready(function () {

    $('.add-to-cart').click(function (e) {

        e.preventDefault();
        let good_id = $(this).attr('data-id');
        $.ajax({
            url: 'controllers/cart.php',
            method: 'POST',
            dataType: 'json',
            data: {
                'id': good_id,
                'action': 'add'
            },

            success: function (data) {
                if (data.status == true) {
                    window.location.href = 'account.php';
                } else {
                    alert (data.message);
                }
            }
        });
    });

    $('.delete-from-cart').click(function (e) {

        e.preventDefault();
        let good_id = $(this).attr('data-id');
        $.ajax({
            url: 'controllers/cart.php',
            method: 'POST',
            dataType: 'json',
            data: {
                'id': good_id,
                'action': 'delete'
            },

            success: function (data) {
                if (data.status == true) {
                    window.location.href = 'account.php';
                } else {
                    alert (data.message);
                }
            }
        });
    });

    
    $('.remove-order').click(function (e) {

        e.preventDefault();
        let order_number = $(this).attr('data-id');
        $.ajax({
            url: 'controllers/updateorder.php',
            method: 'POST',
            dataType: 'json',
            data: {
                'order_number': order_number,
                'status': 4,
            },

            success: function (data) {
                if (data.status == true) {
                    window.location.href = 'account.php';
                } else {
                    alert (data.message);
                }
            }
        });
    });

    $('.save-changes').click(function (e) {

        e.preventDefault();
        let good_id = $(this).attr('data-id');
        let title = $('#title_'+good_id).val();
        let description = $('#description_'+good_id).val();
        let price = $('#price_'+good_id).val();
        $.ajax({
            url: 'controllers/updategood.php',
            method: 'POST',
            dataType: 'json',
            data: {
                'good_id': good_id,
                'title': title,
                'description': description,
                'price': price,
            },

            success: function (data) {
                if (data.status == true) {
                    window.location.href = 'admin.php';
                } else {
                    alert (data.message);
                }
            }
        });
    });

    $('.update-order').click(function (e) {

        e.preventDefault();
        let order = $(this).attr('data-id');
        let order_status = $('#select'+order).val();
        $.ajax({
            url: '/public/index.php?path=admin/orders/updatestatus/'+order+'&asAjax=true',
            method: 'POST',
            dataType: 'json',
            data: {
                'status': order_status,
            },

            success: function (data) {
                alert (data.message);
            }
        });
    });
})