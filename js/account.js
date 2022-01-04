$(document).ready(function () {

    $('.add-to-cart').click(function (e) {

        e.preventDefault();
        let good_id = $(this).attr('data-id');
        $.ajax({
            url: 'cart.php',
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
            url: 'cart.php',
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
})