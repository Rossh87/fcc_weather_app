$(document).ready(function(){

	var allDataFields=document.getElementsByTagName("td");

	if ("geolocation" in navigator){
		navigator.geolocation.getCurrentPosition(function(res){
			var latitude = res.coords.latitude;
			var longitude = res.coords.longitude;
				$.ajax({
					url: "https://fcc-weather-api.glitch.me/api/current?lon="+latitude+"&lat="+longitude,
					method: "GET",
					success: function(data){
						console.log(data);
						$(allDataFields[0]).text(data.main.temp);
						$(allDataFields[1]).text(data.main.humidity);
						$(allDataFields[2]).text(data.wind.speed);
					}
				});
			
		});
	}
	

})

	