<?php
if ($_POST['feedback']) {
    $text = mysqli_real_escape_string($link, $_POST['text']);
    $date = date('Y-m-d H:i:s');
    $query = sprintf("INSERT INTO `feedback` (`user_id`, `date`, `text`) VALUES ('{$user['id']}', '$date', '%s')", $text);
    mysqli_query($link, $query);
}

include ($_SERVER['DOCUMENT_ROOT']."/models/feedback.php");
$feedbacks = getAllFeedbacks($link);