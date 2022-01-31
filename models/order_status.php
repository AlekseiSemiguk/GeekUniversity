<? 
function getOrderStatus($db)
{
    $query = "SELECT * FROM `order_status`";

    $arStatus = mysqli_query($db, $query);

    while($status = mysqli_fetch_assoc($arStatus)) {
        $ar[$status['id']] = $status['title'];
    }
    return $ar;
}