<?php
session_start();

require_once 'config/connect_db.php';

require "models/user.php";

$user = checkAuthorization($link);

include 'controllers/feedback.php';

?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Личный кабинет</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery-3.6.0.min.js"></script>
</head>

<body>
<div class="account__container">
    <section class="featured-items center">
        <div class="featured-items__products">
            <?php while($data = mysqli_fetch_assoc($feedbacks)):?>
                <div class="featured-items__products__container">
                    <div class="featured-items__products__container__heading"><?=$data['name']?></div>
                    <div class="featured-items__products__container__text"><?=$data['text']?></div>
                    <div class="featured-items__products__price"><?=date('d.m.Y H:i:s', strtotime($data['date']))?></div>
                </div>
            <?php endwhile ?>
        </div>
    </section>

    <form method="post">
        <div class="cart__left">
            <div class="cart__left__product-card">
                <div class="cart__left__product-card__info">
                    <p>Оставьте свой отзыв:</p>
                    <div class="cart__left__product-card__info__quantity">
                        <p><textarea rows="5" cols="105" name="text"></textarea></p>
                    </div>
                </div>
            </div>
        </div>
        <input type="submit" name="feedback" value="Отправить">
    </form>
</div>
</body>

</html>