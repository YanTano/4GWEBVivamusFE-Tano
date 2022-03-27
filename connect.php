<?php
	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];
	$email = $_POST['email'];
	$number = $_POST['number'];
	$donated = $_POST['donated'];
	$cardHolder = $_POST['cardHolder'];
	$cardNumber = $_POST['cardNumber'];
	$code = $_POST['code'];
	$date = $_POST['date'];
	$message = $_POST['message'];
	$hidden = $_POST['hidden'];

	// Database connection
	$conn = new mysqli('localhost','root','','vivamus');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into donation(firstName, lastName, email, number, donated, cardHolder, cardNumber, code, date, message, hidden) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("sssiisiiiss", $firstName, $lastName, $email, $number, $donated, $cardHolder, $cardNumber, $code, $date, $message, $hidden);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>