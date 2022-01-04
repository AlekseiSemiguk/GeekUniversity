<?php
session_start();

if ($_SESSION['user_email']) {
    header('Location: account.php');
}

?>


<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson 07</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/index.js"></script>
</head>

<body>

    <div class="title">
        <h2>Покупки в нашем магазине возможны только для авторизованных пользователей</h1>
    </div>

    <div class="auth-reg-form">

        <form class="auth-form" action="#" method="POST">
            <div class="auth-reg-form__heading">Авторизация</div>
            <label class="auth-reg-form__label" for="auth_email">E-mail:</label>
            <input class="auth-reg-form__input" type="email" required id="auth_email">
            <label class="auth-reg-form__label" for="auth_password">Пароль:</label>
            <input class="auth-reg-form__input" type="password" required id="auth_password">
            <div class="auth-reg-form__errors auth-error-js"></div>
            <div class="auth-reg-form__buttons-container">
                <button class="auth-reg-form__button" id="auth_button" type="submit">Войти</button>
                <div class="auth-reg-form__button-reverse" onclick="authRegFormToggle()">Зарегистрироваться</div>
            </div>
        </form>



        <form class="reg-form display-none" action="#" method="POST">
            <div class="auth-reg-form__heading">Регистрация</div>
            <label class="auth-reg-form__label" for="name">Имя:</label>
            <input class="auth-reg-form__input" type="text" required id="name">
            <label class="auth-reg-form__label" for="email">E-mail:</label>
            <input class="auth-reg-form__input" type="email" required id="email">
            <label class="auth-reg-form__label" for="password">Пароль:</label>
            <input class="auth-reg-form__input" type="password" required id="password">
            <label class="auth-reg-form__label" for="confirm-password">Подтвердите пароль:</label>
            <input class="auth-reg-form__input" type="password" required id="password_confirm">
            <div class="auth-reg-form__errors reg-error-js"></div>
            <div class="auth-reg-form__buttons-container">
                <button class="auth-reg-form__button" type="submit" id="registration_button">Зарегистрироваться</button>
                <div class="auth-reg-form__button-reverse" onclick="authRegFormToggle()">Войти</div>
            </div>
        </form>

    </div>

</body>

</html>