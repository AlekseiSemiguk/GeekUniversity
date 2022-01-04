<?php
session_start();

require_once 'connect_db.php';

if (!$_SESSION['user_email']) {
    header('Location: index.php');
}

$user_email = $_SESSION['user_email'];

$user = mysqli_query($link, "SELECT * FROM `users` WHERE `email` = '$user_email'");

if (mysqli_num_rows($user) > 0) {
    $user = mysqli_fetch_assoc($user);
    $user_name = $user['name'];
    $user_id = $user['id'];
} else {
    echo 'непредвиденная ошибка';
    if ($_SESSION['user_email']) {
        unset($_SESSION['user_email']);
    }
    die();
}

$good_id = (int)$_GET['id'];

$query = "SELECT * FROM `goods` WHERE `id` = '$good_id'";
$goods = mysqli_query($link,$query);

?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Подробно</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/account.js"></script>
</head>

<body>
<div class="account__container">
    
    <div class="cart__left cart__left__one">
        <?php while($data = mysqli_fetch_assoc($goods)):?>
            <div class="cart__left__product-card">
                <div class="cart__left__product-card__img-container-one">
                    <img class="cart__left__product-card__img-one" src="img/<?=$data['imgfile']?>" alt="">
                </div>
                <div class="cart__left__product-card__info">
                    <div class="cart__left__product-card__top-block">
                        <div class="cart__left__product-card__top-block__product-name">
                            <?=$data['name']?>
                        </div>
                        <div class="cart__left__product-card__top-block__close-icon" onclick="window.location.href = 'account.php'">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                                    fill="#575757" />
                            </svg>
                        </div>
                    </div>
                    <p class="cart__left__product-card__info__text">Price: $<?=$data['price']?></p>
                    <p class="cart__left__product-card__info__text">Description: <?=$data['description']?></p>
                </div>
            </div>
        <?php endwhile ?>
    </div>

    <div class="account__button-logout add-to-cart" data-id="<?=$good_id?>">Add to Cart</div>
</div>
</body>

</html>