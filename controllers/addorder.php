<?php

require_once '../config/connect_db.php';

require "../models/user.php";

$user = checkAuthorization($link);

include "../models/orders.php";

addOrder($link, $user['id']);

header('Location: /account.php');

?>




