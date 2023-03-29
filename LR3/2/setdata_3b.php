<?php
    $username = $_POST["username"];
	$email = $_POST["email"];
    $message = $_POST["message"];

    header('Content-Type: application/json; charset=utf-8');

    try {
        $dbh = new PDO('pgsql:host=localhost;port=5432;dbname=PostgresDataBase;user=postgres;password=456');
        $sql = "INSERT INTO test.reviews VALUES('$username', '$email', '$message');";
        $affectedRowsNumber = $dbh->exec($sql);
    }
    catch(PDOException $e)
    {
        echo $e->getMessage();
    }
?>