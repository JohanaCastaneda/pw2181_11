<?php
include 'conexiones.php';
function borrarusuario()
{
	$respuesta = false;
	$usuario = GetSQLValueString($_POST["usuario"],"text");
	//conectarnos al servidor de BD
	$con=conecta();
	//$consulta="select * from usuarios where usuario= '".$usuario."' limit 1"; ///hace que la consulta se ejecute mas rapido
	$consulta=sprintf("delete from usuarios where usuario = %s",$usuario);
	
		mysqli_query($con,$consulta);
		//preguntamos si se hizo el borrado

		if(mysqli_affected_rows($con) > 0){ //insert o Update -delete
			$respuesta= true;

		}
	

	$salidaJSON = array ('respuesta' => $respuesta);
	// var_dump($salidaJSON);

	print json_encode($salidaJSON);
}

$opc = $_POST["opc"];
switch ($opc) 
{
	case 'borrarusuario':
	borrarusuario();
	break;
	
	default:
	break;
}