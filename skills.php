<?php
require 'db.php';

$result = $conn->query("SELECT * FROM skills");

$skills = [];
while ($row = $result->fetch_assoc()) {
    $skills[] = $row;
}

echo json_encode($skills);
?>
