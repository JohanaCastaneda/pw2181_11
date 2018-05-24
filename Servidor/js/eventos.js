
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

						$.ajax({
							cache:false,
							type: "POST",
							dataType: "json",
							url: "php/validaentrada.php",
							data:parametros,
							success: function(response){
								if(response.respuesta == true){ 
									//alert("Bienvenido");
									$("#secInicio").hide("slow");
									$("#frmUsuarios").show("slow");
									$("#txtNombreUsuario").focus();
								}else{
									alert("usuario o clave incorrecta(s)");
								}
							},
							error:function(xhr,ajaxOptions,thrownError){

							}
						});

	}
	var buscaUsuario = function(){
		var usuario = $("#txtNombreUsuario").val();
		var parametros= "opc=buscaUsuario"+
						"&usuario="+usuario+
						"&aleatorio="+Math.random();
		if (usuario != ""){
			$.ajax({
							cache:false,
							type: "POST",
							dataType: "json",
							url: "php/buscaUsuario.php",
							data:parametros,
							success: function(response){

								if(response.respuesta == true){
									$("#txtNombreUsuario").val(response.nombre);
									$("#txtClaveUsuario").val(response.clave)
								}else{
									$("#txtNombre").focus();
								}
								
								
							},
							error:function(xhr,ajaxOptions,thrownError){

							}
						});


		}
	}
	var teclaNombreUsuario = function(tecla){
		if(tecla.which == 13){
			buscaUsuario();

		}
	}
	$("#btnAceptar").on("click",Aceptar);
	$("#txtNombreUsuario").on("keypress",teclaNombreUsuario);
	$("#frmUsuarios").hide();
}

$(document).ready(inicioApp);