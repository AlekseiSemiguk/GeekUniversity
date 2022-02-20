<?php

class GoodsController extends \Controller
{
    public $view = 'goods';

    public function detail($data){
        $goodId = $data['id'];
        $res = \Good::getGood($goodId);
        return $res[0];
    }

    public function addtocart(){

        $email = \User::checkAuthorization();
        $userId = \User::getUserId($email);
        \Cart::addToCart($userId, $_POST['id']);
        $response = [
            "status" => true,
            "message" => $_POST['id']
        ];
        return $response;
    }

    public function deletefromcart(){

        $email = \User::checkAuthorization();
        $userId = \User::getUserId($email);
        \Cart::deleteFromCart($userId, $_POST['id']);
        $response = [
            "status" => true,
            "message" => $_POST['id']
        ];
        return $response;
    }

}
?>