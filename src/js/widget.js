/* Weather API
	- 날씨 정보 제공 : https://openweathermap.org
	- 위치 정보 제공 : https://ip-api.com

	- openweathermap
		api key를 발급받아 사용했음. 호출만 하면 JSON 파일을 바로 넘겨주기 때문에 원하는 자료를 쉽게 뽑아 쓸 수 있음. 여러 가지 방식에 대한 연습이 필요할 것으로 보임. 날씨 이미지도 제공. 지금은 도시 정보를 알아내는 방법을 몰라서 ip-api를 사용한 것임.

	- ip-api
		이건 뭐 그냥 호출만 하면 됨. 지금은 api key 필요 없는데 사실 지금 제대로 사용하고 있는지 알 수 없음. 기본적으로 ip를 통해 사용자의 대략적인 위치정보(lat, lon)를 알 수 있음. 도시의 이름까지 알아낼 수 있는데, 받아오는 내용을 확인하고 테스트해 봐야 알 수 있음.
		{ // example data
			"query": "24.48.0.1",
			"status": "success",
			"country": "Canada",
			"countryCode": "CA",
			"region": "QC",
			"regionName": "Quebec",
			"city": "Montreal",
			"zip": "H1S",
			"lat": 45.5808,
			"lon": -73.5825,
			"timezone": "America/Toronto",
			"isp": "Le Groupe Videotron Ltee",
			"org": "Videotron Ltee",
			"as": "AS5769 Videotron Telecom Ltee"
		}
*/
$(function() {
	var lat, lon;
	var apiKey = "56a89a0896774bfd861d459497cc1af4";
	
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			function(position) {
				lat = position.coords.latitude;
				lon = position.coords.longitude;
				printCityFromIP();
				getWeather(lat, lon);
			}, function(error) {
				// 에러 처리라는 건 알겠지만 필요성을 모르겠음
				console.error(error);
				// 여기에 ip 읽고 날씨 출력하는 함수 호출 가능? 일부로 오류를 낼 수도 없고 참...
			}, {
				// 필요성을 모르겠음
				enableHighAccuracy: false,
				maximumAge: 0,
				timeout: Infinity
		});
	} else {
		// GPS 정보를 사용할 수 없는 경우 아이피 추적을 통해 대략적인 위치를 계산해주는 API(ip-api) 사용
		getLocationFromIP();
	}

	function getLocationFromIP() {
		$.getJSON("https://ip-api.com/json", function(data) {
			lat = data.lat;
			lon = data.lon;
			getWeather(lat, lon);
		});
	}

	function printCityFromIP() {
		$.getJSON("https://ip-api.com/json", function(data) {
			/*console.log(
				"ip-api data" +
				"\nquery       : " + data.query +
				"\nstatus      : " + data.status +
				"\ncountry     : " + data.country +
				"\ncountryCode : " + data.countryCode +
				"\nregion      : " + data.region +
				"\nregionName  : " + data.regionName +
				"\ncity        : " + data.city +
				"\nzip         : " + data.zip +
				"\nlat         : " + data.lat +
				"\nlon         : " + data.lon +
				"\ntimezone    : " + data.timezone +
				"\nisp         : " + data.isp +
				"\norg         : " + data.org +
				"\nas          : " + data.as
			);*/
			$("#w-city").html(data.city)
		});
	}
	
	function getWeather(lat, lon) { // 날씨 정보 읽어오는 부분
		$.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey
		,function(json) {
			//console.log(lat + " " + lon);
			//console.log(json);

			/*절대 온도 주어지므로 받은 값에서 273을 뺌*/
			$("#w-temperature-celcius").html("기온 " + Math.round(json.main.temp - 273) + " C&deg;");
			$("#w-humidity").html("습도 " + json.main.humidity + " %");
			$("#w-overall").html(json.weather[0].main);
			$("#w-icon").html('<img src="http://openweathermap.org/img/w/' + json.weather[0].icon + '.png" alt="날씨 이미지">');
		});
	}
});