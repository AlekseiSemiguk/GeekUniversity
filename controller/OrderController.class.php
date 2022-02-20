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
}