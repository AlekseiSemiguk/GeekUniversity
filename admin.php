<?php
session_start();

require_once 'config/connect_db.php';

require "models/user.php";

if (!checkAdmin()) {
    header('Location: index.php');
}

include "models/goods.php";
$goods = getAllGoods($link);

include "models/orders.php";
if ($_GET['user']){
    $user_id = (int)$_GET['user'];
    $orders =  getUserOrders($link, $user_id);
}

include "models/order_status.php";
$arStatus = getOrderStatus($link);
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Админка</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/account.js"></script>
</head>

<body>
<div class="account__container">

    <section class="featured-items center">
        <div class="featured-items__products">
            <?php while($data = mysqli_fetch_assoc($goods)):?>
                <div class="featured-items__products__container">
                    <div class="featured-items__products__container__imagebox">
                        <img class="featured-items__products__container__imagebox__img" src="img/<?=$data['imgfile']?>"
                            alt="product image">
                    </div>
                    <input class="featured-items__products__container__heading justify" id="title_<?=$data['id']?>" value ="<?=$data['name']?>" >
                    <textarea class="featured-items__products__container__text justify" id="description_<?=$data['id']?>" rows="5"><?=$data['description']?></textarea>
                    <input class="featured-items__products__price justify" id="price_<?=$data['id']?>" value="<?=$data['price']?>">
                    <div class="account__button-logout save-changes" data-id="<?=$data['id']?>">Сохранить изменения</div>
                </div>
            <?php endwhile ?>
        </div>
    </section>


    <h2>Добавить новый товар</h2>
    <form action="controllers/addgood.php" method="post" enctype="multipart/form-data">
        <label>Наименование</label><input class="featured-items__products__container__heading justify" name="title">
        <label>Описание</label><textarea class="featured-items__products__container__text justify" name="description" rows="5">
        </textarea>
        <label>Цена</label><input class="featured-items__products__price justify" name="price">
        <p>Выберите файл в формате JPG/JPEG или GIF</p>
        <input type="file" name="photo" accept="image/jpeg,image/gif"><br><br>
        <input type="submit" value="Добавить товар">
    </form>

    <?php if ($orders): ?>
    <div class="account__title">
        Заказы пользователя ID: <?=$user_id?>
    </div>
    <? foreach ($orders as $number => $order): ?>
        <div class="order">
        Номер заказа: <?=$number?>
        <? foreach ($order['positions'] as $position): ?>
            <div class="cart__left__product-card">
                <div class="cart__left__product-card__img-container">
                    <img class="cart__left__product-card__img" src="img/<?=$position['imgfile']?>" alt="">
                </div>
                <div class="cart__left__product-card__info">
                    <div class="cart__left__product-card__top-block">
                        <div class="cart__left__product-card__top-block__product-name">
                            <?=$position['name']?>
                        </div>
                    </div>
                    <p class="cart__left__product-card__info__text">Price: $<?=$position['price']?></p>
                    <p class="cart__left__product-card__info__text">Quantity: <?=$position['quantity']?></p>
                    <p class="cart__left__product-card__info__text">Total price: <span
                        class="cart__left__product-card__info__text__selectcolor">$<?=$position['quantity']*$position['price']?></span></p>
                </div>
            </div>
        <? endforeach?>
        <p>

        Статус заказа:
            <select size="4" id="select<?=$number?>">
            <?php
                foreach($arStatus as $key => $status) { ?>
                <option <?= $status == $order['status']?'selected':''?> value="<?=$key?>"><?=$status?></option>
            <?php ;}
            ?>
            </select>
        </p>

        <div class="account__button-logout update-order" data-id="<?=$number?>"> Сохранить статус заказа</div>
        </div>
    <? endforeach?>
    <? endif ?>
   
    <div class="account__button-logout" onclick="window.location.href = 'controllers/logout.php'">Выйти из админки</div>
</div>

</body>

</html>