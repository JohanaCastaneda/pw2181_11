<?php
include 'conexiones.php';
function listado()
{
	$respuesta = false;
	//conectarnos al servidor de BD
	$con=conecta(); //Conectarse al servidor
	//$consulta="select * from usuarios where usuario= '".$usuario."' limit 1"; ///hace que la consulta se ejecute mas rapido
	$consulta=sprintf("select * from usuarios order by nombre");
	 $resConsulta=mysqli_query($con,$consulta);
		//preguntamos si se hizo el borrado
        $tabla="";
		if(mysqli_num_rows($resConsulta) > 0){ //insert o Update -delete
			$respuesta= true;
			//Para concatenar la tabla
			$tabla.= "<thead>";
			$tabla.= "<tr>";
			$tabla.= "<th>No</th>";
			$tabla.= "<th>Usuario</th>";
			$tabla.= "<th>Nombre</th>";
			$tabla.= "</tr>";
			$tabla.= "</thead>";
			$tabla.= "<tbody>";
			$cuenta=0;
			while ($registro=mysqli_fetch_array($resConsulta)){
				$cuenta= $cuenta +1;
				$tabla.= "<tr>";
				$tabla.= "<td>".$cuenta."</td>";
				$tabla.= "<td>".$registro["usuario"]."</td>";
				$tabla.= "<td>".$registro["nombre"]."</td>";
				$tabla.= "</tr>";

			}

               $tabla.= "</tbody>";
		}
	

	$salidaJSON = array ('respuesta' => $respuesta,'tabla' => $tabla);
	// var_dump($salidaJSON);

	print json_encode($salidaJSON);
}

$opc = $_POST["opc"];
switch ($opc) 
{
	case 'listado':
	listado();
	break;
	
	default:
	break;
}
?>
