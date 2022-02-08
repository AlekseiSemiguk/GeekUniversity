<?php
//
// Конттроллер страницы чтения.
//
include_once('m/M_User.php');

class C_User extends C_Base
{
	//
	// Конструктор.
	//
	
	public function action_auth(){
		$this->title = 'Авторизация';
        $user = new M_User();
		$info = "Необходимо авторизоваться";
        if($_POST){
			$email = $_POST['email'];
			$password = $_POST['password'];
            $success = $user->auth($email,$password);
			if ($success) {
				header('Location: /index.php?c=User');
			} else {
				$info = "Не верные данные";
			}
		    $this->content = $this->Template('v/v_auth.php', array('text' => $info));
		}
		else {
			$this->content = $this->Template('v/v_auth.php', array('text' => $info));
		}
	}

	public function action_index(){
		$this->title = 'Личный кабинет';
        $user = new M_User();

        if($name = $user->checkAuthorization()){
		    $this->content = $this->Template('v/v_account.php', array('text' => $name));
		}
		else {
			header('Location: /index.php?act=auth&c=User');
		}
	}

	public function action_logout(){
		if ($_SESSION['user_email']) {
			unset($_SESSION['user_email']);
		}
		header('Location: /index.php?act=auth&c=User');
	}

	public function action_reg(){
		$user = new M_User();
		if($user->checkAuthorization()){
		    header('Location: /index.php?c=User');
		}
		$this->title = 'Регистрация';
		if($_POST){
			$name = $_POST['name'];
			$login = $_POST['email'];
			$password = $_POST['password'];
			$password_confirm = $_POST['password_confirm'];
            $success = $user->registration($name, $login, $password, $password_confirm);
			if ($success === true) {
				header('Location: /index.php?c=User');
			}
		    $this->content = $this->Template('v/v_reg.php', array('text' => $success));
		}
		else {
			$this->content = $this->Template('v/v_reg.php');
		}

	}
}
