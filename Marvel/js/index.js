var marvel=function()
{
	var Buscar=function()
	{
		var personaje=$("#txtPersonaje").val();
		var url="http://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith=";

		var cantidadComics = 0;
		var comics = "";

		var cantidadSeries = 0;
		var series = "";

		url=url + personaje;

		$.ajax({
			url: url,
			dataType: "json",
			success: function(response)
			{
				if(response.code == 200)//OK
				{
					//console.log(response);

					$("#nombre").attr("src",response.data.results[0].name);
					$("#foto").attr("src",response.data.results[0].thumbnail.path+"."+response.data.results[0].thumbnail.extension);
					//alert(response.data.results[0].name)
					cantidadComics=response.data.results[0].comics.returned;

					cantidadSeries=response.data.results[0].series.returned;

					//COMICS

					for (var i = 0; i < cantidadComics; i++) 
					{
						comics+=response.data.results[0].comics.items[i].name+"<br>";
					}
					$("#comics").html(comics);

					//SERIES

					for (var i = 0; i < cantidadSeries; i++) 
					{
						series+=response.data.results[0].series.items[i].name+"<br>";
					}
					$("#series").html(series);


				}
			}


		});
	}
	var teclapersonaje = function(tecla)
	{
		//13 + 10
		//retorno de carro y avance de linea

		if(tecla.which == 13)//Enter
		{
			Buscar();
		}
	}
	$("#btnBuscar").on("click",Buscar);
	$("#txtPersonaje").on("keypress",teclapersonaje) //validar tecla

}
$(document).ready(marvel);



