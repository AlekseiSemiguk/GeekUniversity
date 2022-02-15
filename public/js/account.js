$(document).ready(function () {

    $('.add-to-cart').click(function (e) {

        e.preventDefault();
        let good_id = $(this).attr('data-id');
        $.ajax({
            url: '/public/index.php?path=goods/addtocart/'+'&asAjax=true',
            method: 'POST',
            dataType: 'json',
            data: {
                'id': good_id,
            },

            success: function () {
                window.location.href = '/public/index.php?path=account';
            }
        });
    });

    $('.delete-from-cart').click(function (e) {

        e.preventDefault();
        let good_id = $(this).attr('data-id');
        $.ajax({
            url: '/public/index.php?path=goods/deletefromcart/'+'&asAjax=true',
            method: 'POST',
            dataType: 'json',
            data: {
                'id': good_id,
            },

            success: function () {
                window.location.href = '/public/index.php?path=account';
            }
        });
    });

    
    $('.remove-order').click(function (e) {

        e.preventDefault();
        let order_number = $(this).attr('data-id');
        $.ajax({
            url: '/public/index.php?path=order/cancelorder/'+'&asAjax=true',
            method: 'POST',
            dataType: 'json',
            data: {
                'order_number': order_number,
            },

            success: function () {
                window.location.href = '/public/index.php?path=account';
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