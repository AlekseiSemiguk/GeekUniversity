<?php

class UserController extends Controller
{
    function registration(){
        
        $name = htmlspecialchars(strip_tags($_POST['name']));
        $email = htmlspecialchars(strip_tags($_POST['email']));
        $password = htmlspecialchars(strip_tags($_POST['password']));
        $password_confirm = htmlspecialchars(strip_tags($_POST['password_confirm']));
    
        $res = User::regUser($name, $email, $password, $password_confirm);
        
        if ($res === true) {
            $response = [
                "status" => true,
            ];
            
        } else {
            $response = [
                "status" => false,
                "message" => $res,
            ];
        }
        return $response;
    }

    function authorization(){
        $email = htmlspecialchars(strip_tags($_POST['email']));
        $password = htmlspecialchars(strip_tags($_POST['password']));

        $res = User::authUser($email, $password);

        if ($res === true) {
            $response = [
                "status" => true,
            ];
        } elseif ($res == 'admin') {
            $response = [
            "status" => true,
            "admin" => true,
            ];
        } else {
            $response = [
                "status" => false,
                "message" => $res,
            ];
        }
        return $response;
    }

    function logout(){
        User::logout();
    }

}