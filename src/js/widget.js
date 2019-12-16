/* Weather API */
//User location
/*
$.getJSON("http://ip-api.com/json", function(data) {
	var lat = data.lat;
	var lon = data.lon;
	var units = "metric";

	$("#city").html(data.city + ", " + data.country)
	//console.log(data);

	//Open weather API request
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=" + units + "&APPID=e95d958a11128b11ad3eb0fa101dae38"
	,function(json) {
		//console.log(json);
		$("#temperature-celcius").html(json.main.temp + " C&deg");
		$("#temperature-farenheit").html((json.main.temp * 1,8 + 32) + " F&deg");
		$("#humidity").html(json.main.humidity + " %");
		$("#overall").html(json.weather[0].main);
		$("#icon").html('<img src="http://openweathermap.org/img/w/' + json.weather[0].icon + '.png"</img>');
	});
});*/

$(function() {
	var lat, lon;
	var apiKey = "56a89a0896774bfd861d459497cc1af4";
	
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			function(position) {
				lat = position.coords.latitude;
				lon = position.coords.longitude;
				getWeather(lat, lon);
			}, function(error) {
				console.error(error);
			}, {
				enableHighAccuracy: false,
				maximumAge: 0,
				timeout: Infinity
		});
	} else {
		// weather 영역에 gps 지원을 안 할 경우 서울을 기준으로 출력
		alert("gps 지원 안 함");
	}

	getGoogleGeolaction();
	function getGoogleGeolaction() {
		$.getJSON("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyArG1UrTWcTp6tRbPZiXvp57jdwksLen3c"
		, function(json) {
			console.log(json.location);
		})
	}

	$(document).ready(function() {
		
	    $.getJSON("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyArG1UrTWcTp6tRbPZiXvp57jdwksLen3c", function(data) {
			console.log(data.location.lat);

	    });
	});
	
	function getWeather(lat, lon) {
		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey
		,function(json) {
			console.log(lat + " " + lon)
			console.log(json);
		});
	}
});

/*
$(function(){
	var lat, lon;
	var apiKey = "56a89a0896774bfd861d459497cc1af4";
	
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			lat = position.coords.latitude;
			lon = position.coords.longitude;
			console.log(lat + " " + lon);
			console.log(typeof(lat) + " " + typeof(lon));
		}, function(error) {
			console.error(error);
		}, {
			enableHighAccuracy: false,
			maximumAge: 0,
			timeout: Infinity
		});
	} else {
		// weather 영역에 gps 지원을 안 할 경우 서울을 기준으로 출력
		alert("gps 지원 안 함");
	}

	$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey
	,function(json) {
		console.log(lat + " " + lon)
		console.log(json);
	});
});*/