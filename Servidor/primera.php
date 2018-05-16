<?php 

	$parametro1 = $_GET["parametro1"];
	for ($i=0; $i < 10 ; $i++) 
	{ 
		print("Texto ".$i."<br>");
	}
?>


<html >
<head>
	
	<title></title>
</head>
<body>
	Hola mundo <?php print($parametro1); ?>
</body>
</html>