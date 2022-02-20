<?php

class AccountController extends Controller
{
    public $view = 'orders';

    function __construct()
    {
        parent::__construct();
        $this->title = 'Заказы';
    }

    public function index($data)
    {
        $email = User::checkAuthorization();
        $userId = User::getUserId($email);
        $allGoods = Good::getAllGoods();
        $goodsInCart = Cart::getGoodInCart($userId);
        $userOrders = Order::getUserOrders($userId);
        
        $data = ['allGoods' => $allGoods, 'goodsInCart' => $goodsInCart, 'userOrders' => $userOrders];

        return $data;
        
    }
}
?>