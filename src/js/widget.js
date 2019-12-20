/* Weather API
	- 날씨 정보 제공 : https://openweathermap.org
	- 위치 정보 제공 : https://ip-api.com

	- openweathermap
		api key를 발급받아 사용했음. 호출만 하면 JSON 파일을 바로 넘겨주기 때문에 원하는 자료를 쉽게 뽑아 쓸 수 있음. 여러 가지 방식에 대한 연습이 필요할 것으로 보임. 날씨 이미지도 제공. 지금은 도시 정보를 알아내는 방법을 몰라서 ip-api를 사용한 것임.

	- ip-api
		이건 뭐 그냥 호출만 하면 됨. 지금은 api key 필요 없는데 사실 지금 제대로 사용하고 있는지 알 수 없음. 기본적으로 ip를 통해 사용자의 대략적인 위치정보(lat, lon)를 알 수 있음. 도시의 이름까지 알아낼 수 있는데, 받아오는 내용을 확인하고 테스트해 봐야 알 수 있음.
		** 현재 Mixed Context 현상으로 인해 http 로드는 사용할 수 없을 듯 하여 대신할 API를 찾고 있다.
*/
$(function() {
	var ipinfoKey = "17f45312c140cf";
	$.getJSON("https://ipinfo.io/json?token=" + ipinfoKey
	,function(json) {
		console.log(json);
		$("#w-city").html(json.city);
		var locArray = json.loc.split(",");
		var lat = locArray[0];
		var lng = locArray[1];
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				lat = position.coords.latitude;
				lng = position.coords.longitude;
				getWeather(lat, lng); // 날씨 추적
			}, function() {
				handleLocationError(true, infoWindow);
			});
		} else {
			console.log("위치정보서비스 사용 불가 -> IP주소를 통해 대략적인 위치의 날씨를 출력");
			getWeather(lat, lng);
		}
	});

	function getWeather(lat, lng) { // 날씨 정보 읽어오는 부분
		var weatherKey = "56a89a0896774bfd861d459497cc1af4";
		$.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=" + weatherKey
		,function(json) {
			// console.log(json);
			/*절대 온도 주어지므로 받은 값에서 273을 뺌*/
			$("#w-temperature-celcius").html("기온 " + Math.round(json.main.temp - 273) + " C&deg;");
			$("#w-humidity").html("습도 " + json.main.humidity + " %");
			$("#w-overall").html(json.weather[0].main);
			$("#w-icon").html('<img src="http://openweathermap.org/img/w/' + json.weather[0].icon + '.png" alt="날씨 이미지">');
		});
	}
});