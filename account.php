<?php
session_start();

require_once 'config/connect_db.php';

require "models/user.php";

$user = checkAuthorization($link);

include "models/goods.php";
//$goods = getAllGoods($link);
$goodsInCart = getAllGoodsInCart ($link, $user['id']);

include "models/orders.php";
$orders =  getUserOrders($link, $user['id'])

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
    <script src="js/account.js"></script>
</head>

<body>
<div class="account__container">
    <div class="account__title">
        <?php echo $user['name']; ?>, приветствуем Вас в личном кабинете!
    </div>

    <section class="featured-items center">
        <div id="goods-list" class="featured-items__products">
            <? include ('controllers/viewgoods.php') ?>
        </div>
    </section>

    <div class="account__title">
	    <a data-page="1" data-max="<?=$pages?>" id="showmore-button" href="">Показать еще</a>
    </div>
    <script>

    $(function(){
        $('#showmore-button').click(function (){
            var $target = $(this);
            var page = $target.attr('data-page');	
            page++;
    
            $.ajax({ 
                url: '/controllers/viewgoods.php?page=' + page,  
                dataType: 'html',
                success: function(data){
                    $('#goods-list').append(data);
                }
            });
    
            $target.attr('data-page', page);
            if (page ==  $target.attr('data-max')) {
                $target.hide();
            }		
    
            return false;
        });
    });

    </script>

    <?php
        if (mysqli_num_rows($goodsInCart) > 0){
            $dataTrue = true;
        }
    ?>
    <?php if ($dataTrue): ?>
    <div class="account__title">
        Ваша корзина:
    </div>

    <div class="cart__left">
        <?php while($data = mysqli_fetch_assoc($goodsInCart)):?>
            <div class="cart__left__product-card">
                <a href="good.php?id=<?=$data['good_id']?>" class="cart__left__product-card__img-container">
                    <img class="cart__left__product-card__img" src="img/<?=$data['imgfile']?>" alt="">
                </a>
                <div class="cart__left__product-card__info">
                    <div class="cart__left__product-card__top-block">
                        <a href="good.php?id=<?=$data['good_id']?>" class="cart__left__product-card__top-block__product-name">
                            <?=$data['name']?>
                        </a>
                        <div class="cart__left__product-card__top-block__close-icon delete-from-cart" data-id="<?=$data['good_id']?>">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                                    fill="#575757" />
                            </svg>
                        </div>
                    </div>
                    <p class="cart__left__product-card__info__text">Price: $<?=$data['price']?></p>
                    <p class="cart__left__product-card__info__text">Quantity: <?=$data['quantity']?></p>
                    <p class="cart__left__product-card__info__text">Total price: <span
                        class="cart__left__product-card__info__text__selectcolor">$<?=$data['quantity']*$data['price']?></span></p>
                </div>
            </div>
        <?php endwhile ?>
    </div>
        <div class="account__button-logout" onclick="window.location.href = 'controllers/addorder.php'">Оформить заказ</div>
    <? endif ?>

    <?php if ($orders): ?>
    <div class="account__title">
        Ваши заказы:
    </div>
    <? endif ?>
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
        Статус заказа: <?=$order['status']?>
        <div class="account__button-logout remove-order" data-id="<?=$number?>"> Отменить заказ</div>
        </div>
    <? endforeach?>
    <div class="account__button-logout" onclick="window.location.href = 'controllers/logout.php'">Выйти из личного кабинета</div>
</div>

</body>

</html>