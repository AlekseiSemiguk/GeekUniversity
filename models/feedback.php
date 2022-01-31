<?php

function getAllFeedbacks($db)
{
    $query = "SELECT * FROM `feedback` LEFT JOIN `users` ON `feedback`.`user_id` = `users`.`id` ORDER BY `date` DESC";
    return mysqli_query($db, $query);
}