<?
class M_User {

    public function __construct () {
        $connect_str = DB_DRIVER . ':host='. DB_HOST . ';dbname=' . DB_NAME;
        $this->db = new PDO($connect_str,DB_USER,DB_PASS);
    }

	public function auth($login,$pass){

        $sth = $this->db->prepare("SELECT * FROM `users` WHERE `email` = ?");
        $sth->execute(array($login));
        $user = $sth->fetch(PDO::FETCH_ASSOC);

        if (is_array($user)) {
            $password = md5($pass.$user['salt']);
            if ($user['password'] == $password) {
                $_SESSION['user_email'] = $login;
                return true;
            }
        }
        return false;
    }

    public function checkAuthentication()
    {
        if (!$_SESSION['user_email']) {
            header('Location: index.php');
        }
    }
    
    public function checkAuthorization()
    {
        $this->checkAuthentication();
        $user_email = $_SESSION['user_email'];
        $sth = $this->db->prepare("SELECT * FROM `users` WHERE `email` = ?");
        $sth->execute(array($user_email));
        $user = $sth->fetch(PDO::FETCH_ASSOC);
        if (is_array($user)) {
            return $user['name'];
        }
        return false;
    }

    public function registration($name, $login, $password, $password_confirm){

        $sth = $this->db->prepare("SELECT * FROM `users` WHERE `email` = ?");
        $sth->execute(array($login));
        $user = $sth->fetch(PDO::FETCH_ASSOC);

        if (is_array($user)) {
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
        $sth = $this->db->prepare("INSERT INTO `users` (`name`, `email`, `password`, `salt`, `role`) VALUES (?, ?, ?, ?, ?)");
        $res = $sth->execute(array($name, $login, $password, $salt, $role));
        if ($res) {
            $_SESSION['user_email'] = $login;
            return $res;
        } else {
            return "ошибка при регистрации, попробуйте еще раз";
        }    
    }
}