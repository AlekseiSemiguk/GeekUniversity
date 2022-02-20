<?php

class User extends Model {
    
    public static function regUser ($name, $email, $password, $password_confirm)
    {

        $res = db::getInstance()->Select(
            'SELECT * FROM `users` WHERE `email` = :email',
        ['email' => $email]);

        if (is_array($res) && count($res) > 0) {
            return "пользователь с таким е-мейл уже существует";
        }

        if ($password != $password_confirm) {
            return "пароли не совпадают";
        }

        $salt = '';
        $saltLength = 8;
        for($i=0; $i<$saltLength; $i++) {
            $salt .= chr(mt_rand(97,122));
        }
        $password = md5($password.$salt);
        $role = 'user';

        $res = db::getInstance()->Query(
            'INSERT INTO `users` (`name`, `email`, `password`, `salt`, `role`) VALUES (:name, :email, :password, :salt, :role)',
        ['name' => $name, 'email' => $email, 'password' => $password, 'salt' => $salt, 'role' => $role]);

        if ($res) {
            $_SESSION['user_email'] = $email;
            return true;
        } else {
            return "ошибка при регистрации, попробуйте еще раз";
        }    

        return true;
    }

    public static function AuthUser ($email, $password)
    {

        $res = db::getInstance()->Select(
            'SELECT * FROM `users` WHERE `email` = :email',
        ['email' => $email]);

        if (!is_array($res) || count($res) < 1) {
            return "пользователь с таким e-mail не зарегистрирован";
        }

        $user_salt = $res[0]['salt'];
        $password = md5($password.$user_salt);
        
        if ($res[0]['password'] == $password) {
            $_SESSION['user_email'] = $email;
            if ($res[0]['role'] == "admin") {
                $_SESSION['admin'] = true;
                return "admin";
            }
            return true;
        } else {
            return 'неверный пароль';
        }
    }

    public static function getUserId ($email) {
        $res = db::getInstance()->Select(
            'SELECT * FROM `users` WHERE `email` = :email',
        ['email' => $email]);

        return $res[0]['id'];
    }

    public static function checkAdmin () {
        if (!$_SESSION['user_email']) {
            header('Location: /public/index.php');
        }
        if ($_SESSION['admin'] && $_SESSION['admin'] = true) {
            return true;
        }
        
        $email = $_SESSION['user_email'];

        $res = db::getInstance()->Select(
            'SELECT * FROM `users` WHERE `email` = :email',
        ['email' => $email]);

        if ($res && $res[0]['role'] == 'admin')
        {
            $_SESSION['admin'] = true;
            return true;
        }
        return false;
    }

    public static function checkAuthorization() {
        if (!$_SESSION['user_email']) {
            header('Location: /public/index.php');
        }

        return $_SESSION['user_email'];
    }

    public static function logout() {
        if ($_SESSION['user_email']) {
            unset($_SESSION['user_email']);
        }
        if ($_SESSION['admin']) {
            unset($_SESSION['admin']);
        }
        header('Location: /public/index.php');
    }
}