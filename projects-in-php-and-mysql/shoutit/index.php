<?php include 'database.php'; ?>
<?php 
    //Create SELECT query 
    $query = "SELECT * FROM shouts ORDER BY id DESC";

    //Variable to hold the results of the query , $con is the database connection to run the query
    $shouts = mysqli_query($con, $query);
 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SHOUT IT!</title>
    <link rel="stylesheet" href="css/style.css" type="text/css" />

</head>
<body>
    <div id="container">
        
        <header>
            <h1>SHOUT IT! Shoutbox</h1>
        </header>

        <div id="shouts">
            <ul>
                <!-- loops through the $shouts variable holding an array of key/value pairs from the database  -->
                <!-- while there is still rows in the database that match the query stored in $shouts -->
                <?php while($row = mysqli_fetch_assoc($shouts)) : ?>
                    <li class="shout"> <span> <?php echo $row['time']?> - </span> <strong><?php echo $row['user']?> : </strong> <?php echo $row['message']?></li>
                <?php endwhile;?>
            </ul>
        </div>
        
        <div id="input">

            <?php if(isset($_GET['error'])) : ?>
                <div class="error"> <?php echo $_GET['error']; ?> </div>
            <?php endif;?>

            <form method="post" action="process.php">
                <input type="text" name="user" placeholder="Enter Your Name" />
                <input type="text" name="message" placeholder="Enter A Message"/>
                <br/>
                <input class="shout-btn" type="submit" name="submit" value="Shout It Out"/>
            </form>
            
        </div>
    
    </div>
</body>
</html>