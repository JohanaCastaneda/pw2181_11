
var inicioApp=function()
{
	var Aceptar = function()
	{
		event.preventDefault();
		var usuario=$("#txtUsuario").val();
		var clave=$("#txtClave").val();
		var parametros= "opc=validaentrada"+
						"&usuario="+usuario+
						"&clave="+clave+
						"&id="+Math.random();//hace que el numero cambie cada que se ejecute la funcion
		//alert(parametros)

						$.ajax(
						{
							cache:false,
							type: "POST",
							dataType: "json",
							url: "php/validaentrada.php",
							data:parametros,
							success: function(response)
							{
								if(response.respuesta == true)
								{ $("#secInicio").hide("slow");
									//alert("Bienvenido");
								}
								else
								{
									alert("usuario o clave incorrecta(s)");
								}
							},
							error:function(xhr,ajaxOptions,thrownError){

							}
						});

	}
	$("#btnAceptar").on("click",Aceptar);
}

$(document).ready(inicioApp);