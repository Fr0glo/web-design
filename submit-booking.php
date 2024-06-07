<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $table = $_POST['table'];
    $name = $_POST['name'];
    $date = $_POST['date'];

    // Display a confirmation message (This would typically involve saving the data to a database)
    echo "<h1>Booking Confirmation</h1>";
    echo "<p>Thank you, $name! Your booking for table $table on $date has been received.</p>";
    echo "<a href='index.html'>Back to Home</a>";
}
?>
