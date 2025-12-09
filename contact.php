<?php
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $date = date("Y-m-d H:i:s");

    $entry = "[$date] Name: $name | Email: $email | Message: $message" . PHP_EOL;

    file_put_contents("messages.txt", $entry, FILE_APPEND);

    header("Location: index.html?success=1");
    exit();
}
?>
