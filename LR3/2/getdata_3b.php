<?php
header('Content-Type: application/json; charset=utf-8');
try {
    $dbh = new PDO('pgsql:host=localhost;port=5432;dbname=PostgresDataBase;user=postgres;password=456');
    $sql = "SELECT * FROM test.reviews;";
    $result = array();
    foreach ($dbh->query($sql) as $row) {
        $username = $row['username'];
        $email = $row['email'];
        $message = $row['message'];
        $array = array("username"=>$username, "email"=>$email, "message"=>$message);
        array_push($result, $array);
    }
    echo json_encode($result);
}
catch(PDOException $e)
{
    echo $e->getMessage();
}
?>
