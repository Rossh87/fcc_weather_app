$(document).ready(function(){

		let imgs = ['url("weather_app_imgs/spring.jpeg")\;', 'url("weather_app_imgs/summer.jpeg")\;', 'url("weather_app_imgs/autumn.jpg")\;', 'url("weather_app_imgs/winter.jpeg")\;'];


	if ("geolocation" in navigator){
		navigator.geolocation.getCurrentPosition(function(res){
			let latitude = res.coords.latitude;
			let longitude = res.coords.longitude;
			let allDataFields=document.getElementsByTagName("td");
			let insertTemp=document.getElementById("temp");
			let insertWindSpeed=document.getElementById("windspeed");
			let tempUnit = document.getElementById("tempUnit");
			let speedUnit =document.getElementById("speedUnit");
			let widgetBody = document.querySelector(".app-body");
			$.ajax({
				url: "https://fcc-weather-api.glitch.me/api/current?lon="+longitude+"&lat="+latitude,
				method: "GET",
				success: function (data){
					let fahrenheit = (data.main.temp*1.8 + 32).toFixed(2);
					let mph = (data.wind.speed/1.61).toFixed(2);
					let metric = true;
					$(insertTemp).text(data.main.temp);
					console.log(data.main.temp);
					$(insertWindSpeed).text(data.wind.speed);
					$(allDataFields[3]).text(data.main.humidity + " %");
					$(insertWindSpeed).text(data.wind.speed);
					$(allDataFields[7]).text(data.weather[0].description);
					if (Number(data.main.temp) < 0){
						widgetBody.style.backgroundImage = 'url("weather_app_imgs/winter.jpeg")';
					} else if (data.main.temp < 13){
						widgetBody.style.backgroundImage = 'url("weather_app_imgs/autumn.jpg")';
					} else if (data.main.temp < 24){
						widgetBody.style.backgroundImage = 'url("weather_app_imgs/spring.jpeg")';
					} else {
						widgetBody.style.backgroundImage = 'url("weather_app_imgs/summer.jpeg")';
					}

					widgetBody.addEventListener("click", function(e){
						if (metric){
							metric = false;
							$(insertTemp).text(fahrenheit);
							$(insertWindSpeed).text(mph);
							$(tempUnit).text("F");
							$(speedUnit).text("mph");
						} else {
							metric = true;
							$(insertTemp).text(data.main.temp);
							$(insertWindSpeed).text(data.wind.speed);
							$(tempUnit).text("C");
							$(speedUnit).text("kph");
						}
					})
				}
			});
		});
	}
})

	