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

if ($_POST['feedback']) {
    $text = mysqli_real_escape_string($link, $_POST['text']);
    $date = date('Y-m-d H:i:s');
    $query = sprintf("INSERT INTO `feedback` (`user_id`, `date`, `text`) VALUES ('$user_id', '$date', '%s')", $text);
    mysqli_query($link, $query);
}

$query = "SELECT * FROM `feedback` LEFT JOIN `users` ON `feedback`.`user_id` = `users`.`id` ORDER BY `date` DESC";
$feedbacks = mysqli_query($link,$query);

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