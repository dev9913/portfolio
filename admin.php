<?php
$password = "admin123"; // change to your own password
if(!isset($_SERVER['PHP_AUTH_USER']) || $_SERVER['PHP_AUTH_PW'] !== $password){
    header('WWW-Authenticate: Basic realm="Admin Area"');
    header('HTTP/1.0 401 Unauthorized');
    echo "Unauthorized";
    exit;
}

$messages = file_exists("messages.txt") ? file("messages.txt", FILE_IGNORE_NEW_LINES) : [];
?>
<!DOCTYPE html>
<html>
<head>
    <title>Admin - Messages</title>
</head>
<body>
    <h1>Contact Form Messages</h1>
    <?php if(empty($messages)): ?>
        <p>No messages yet.</p>
    <?php else: ?>
        <ul>
            <?php foreach($messages as $msg): ?>
                <li><?php echo htmlspecialchars($msg); ?></li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>
</body>
</html>
