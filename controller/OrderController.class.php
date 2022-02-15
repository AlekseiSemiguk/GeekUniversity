<?php

class OrderController extends Controller
{
    public function cancelorder(){
        $email = \User::checkAuthorization();
        $userId = \User::getUserId($email);
        \Order::updateUserStatus('4', $_POST['order_number'], $userId);
        $response = [
            "status" => true,
        ];
        return $response;
    }

    public function newOrder(){
        $email = \User::checkAuthorization();
        $userId = \User::getUserId($email);
        \Order::newOrder($userId);

        header('Location: /public/index.php?path=account');
    }

    public function add(){
        $_GET['asAjax'] = true;

        $result = [
            'result' => 0
        ];

        $id_good = (int)$_POST['id_good'];
        if($id_good > 0){
            $basket = new Basket();
            $basket->setIdGood($id_good);
            $basket->setPrice(Good::getGoodPrice($id_good));
            $basket->save();
            $result['result'] = 1;
        }

        return json_encode($result);
    }
}