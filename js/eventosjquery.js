// $ = es jquery

var inicia = function()
{
	var nuevo = function()
	{
		//JSON=JAVASCRIPT OBJECT NOTATION
		$.ajax(
		{
  			url: 'https://randomuser.me/api/',
 			dataType: 'json',
  			success: function(data) 
  			{
  				$("#nombre").html(data.results[0].name.first+" "+data.results[0].name.last);
    			
    			$("#foto").attr("src",data.results[0].picture.large);
  			}
		});
   

	}
	$("#btnNuevo").on("click", nuevo) //encerder un evento al dar click
	
}

$(document).ready(inicia);
