<?php 
session_start();
include_once("m/cookie.php");

define('DB_DRIVER','mysql');
define('DB_HOST','localhost');
define('DB_NAME','lesson07');
define('DB_USER','root');
define('DB_PASS','root');

spl_autoload_register(function ($classname) {
    include_once("c/$classname.php");
});

$action = 'action_';
$action .=(isset($_GET['act'])) ? $_GET['act'] : 'index';

switch ($_GET['c'])
{
	case 'articles':
		$controller = new C_Page();
		break;
	case 'User':
		$controller = new C_User();
		break;
	default:
		$controller = new C_Page();
}

$controller->request($action);
