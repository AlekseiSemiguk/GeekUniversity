function authRegFormToggle() {
    document.getElementsByClassName('auth-form')[0].classList.toggle('display-none');
    document.getElementsByClassName('reg-form')[0].classList.toggle('display-none');
}

function checkAuthForm() {

    if (document.getElementById('auth_email').validity.valueMissing) {
        $('.auth-error-js').text('заполните поле e-mail');
        return false;
    }

    if (document.getElementById('auth_email').validity.typeMismatch) {
        $('.auth-error-js').text('неверный e-mail');
        return false;
    }

    if (document.getElementById('auth_password').validity.valueMissing) {
        $('.auth-error-js').text('введите пароль');
        return false;
    }

    return true;
}

function checkRegForm() {
    if (document.getElementById('name').validity.valueMissing) {
        $('.reg-error-js').text('введите ваше имя');
        return false;
    }

    if (document.getElementById('email').validity.valueMissing) {
        $('.reg-error-js').text('заполните поле e-mail');
        return false;
    }

    if (document.getElementById('email').validity.typeMismatch) {
        $('.reg-error-js').text('неверный e-mail');
        return false;
    }

    if (document.getElementById('password').validity.valueMissing) {
        $('.reg-error-js').text('введите пароль');
        return false;
    }

    if (document.getElementById('password_confirm').validity.valueMissing) {
        $('.reg-error-js').text('подтвердите пароль');
        return false;
    }

    if ((document.getElementById('password').value) !== (document.getElementById('password_confirm').value)) {
        $('.reg-error-js').text('пароли не совпадают');
        return false;
    }

    return true;
}


$(document).ready(function () {

    $('#auth_button').click(function (e) {

        e.preventDefault();

        if (!checkAuthForm()) {
            return
        }

        let auth_email = $('#auth_email').val().toLowerCase();
        let auth_password = $('#auth_password').val();

        $.ajax({
            url: 'auth.php',
            method: 'POST',
            dataType: 'json',
            data: {
                'email': auth_email,
                'password': auth_password
            },

            success: function (data) {
                if (data.status) {
                    window.location.href = 'account.php';
                } else {
                    $('.auth-error-js').text(data.message);
                }
            }
        });
    });

    $('#registration_button').click(function (e) {

        e.preventDefault();

        if (!checkRegForm()) {
            return
        }

        let name = $('#name').val();
        let email = $('#email').val().toLowerCase();
        let password = $('#password').val();

        $.ajax({
            url: 'registration.php',
            method: 'POST',
            dataType: 'json',
            data: {
                'name': name,
                'email': email,
                'password': password
            },

            success: function (data) {
                if (data.status == true) {
                    window.location.href = 'account.php';
                } else {
                    $('.reg-error-js').text(data.message);
                }
            }
        });
    });
})