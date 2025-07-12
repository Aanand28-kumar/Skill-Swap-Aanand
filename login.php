<?php
require 'db.php';

$email = $_POST['email'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT id, password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($userId, $hashedPassword);
$stmt->fetch();

if ($stmt->num_rows > 0 && password_verify($password, $hashedPassword)) {
    session_start();
    $_SESSION['user_id'] = $userId;
    echo "Login success!";
} else {
    echo "Invalid credentials.";
}
?>
