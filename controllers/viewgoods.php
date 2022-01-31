<?php

$countItems = 2;

require_once ($_SERVER['DOCUMENT_ROOT'].'/config/connect_db.php');

include_once ($_SERVER['DOCUMENT_ROOT']."/models/goods.php");

$page = (int)$_GET['page']?(int)$_GET['page']:1;
$goods = getGoods($link, $countItems, $page);

include_once ($_SERVER['DOCUMENT_ROOT']."/models/view.php");

echo view_include($_SERVER['DOCUMENT_ROOT'].'/templates/components/goods.php',
array('goods' => $goods));

$pages = getPages($link, $countItems);