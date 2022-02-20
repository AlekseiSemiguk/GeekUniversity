<?php

namespace Admin;

class GoodsController extends \Controller
{
    public function update($data){
        
        $good_id = $data['id'];
        $title = htmlspecialchars($_POST['title']);
        $description = htmlspecialchars($_POST['description']);
        $price = htmlspecialchars($_POST['price']);
        $res = \Good::update($good_id, $title, $description, $price);
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

    public function new() {
        $title = htmlspecialchars($_POST['title']);
        $description = htmlspecialchars($_POST['description']);
        $price = htmlspecialchars($_POST['price']);

        $fileName = $_FILES['photo']['name'];
        $imageName =  $_FILES['photo']['tmp_name'];
        $path = $_SERVER['DOCUMENT_ROOT']."/public/img/".$_FILES['photo']['name'];
        move_uploaded_file($imageName,$path);

        \Good::addGood($title, $description, $price, $fileName);

        header('Location: /public/index.php?path=admin/orders');
    }
}
?>