var $=requiere ('jquery');
var inicia= function(){
	//alert("pagina lista");
	//JSON=JavaScript Object Notation
	var nuevo=function(){//funcion anonima//
		$.ajax({
		  url: 'https://randomuser.me/api/',
		  dataType: 'json',
		  success: function(data) {
		    $("#nombre").html(data.results[0].name.first+" "+data.results[0].name.last);
		    $("#foto").attr("src",data.results[0].picture.large);
		  }
	});
	}
	$("#btnNuevo").on("click",nuevo);
 
}

$(document).ready(inicia); //funcion inicia//