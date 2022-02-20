<?php

namespace Admin;

class OrdersController extends \Controller
{
    public $view = 'admin/orders';
    protected $onlyAdmin = true;
    
    function __construct()
    {
        parent::__construct();
        $this->title = 'Заказы';
    }

    public function index($data)
    {
        $orders = \Order::getOrders();
        $statusList = \OrderStatus::getList();
        $goods = \Good::getAllGoods();
        $content_data['orders'] = $orders;
        $content_data['statusList'] = $statusList;
        $content_data['goods'] = $goods;
        
        return $content_data;
    }

    public function updatestatus($data){
        
        $order_number = $data['id'];
        $status_id = (int)$_POST['status'];
        $res = \Order::updateStatus($status_id, $order_number);
        if ($res->rowCount() > 0) {
            $response = [
                "message" => 'статус заказа обновлён',
            ];
        } else {
            $response = [
                "message" => 'при обновлении статуса произошла ошибка',
            ];
        }
        
        return $response;
    }

}
?>