$(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
			geocodeLatLng(lat, lng);
            getWeather(lat, lng);
        }, function() {
            handleLocationError(true, infoWindow);
        });
    } else {
        // 위치정보를 사용할 수 없는 경우 IP주소를 통한 대략적인 위치정보를 얻어낸다.
        getPosFromIP();
    }

    function geocodeLatLng (lat, lng) {
        var geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(lat, lng);
        geocoder.geocode({'location':latlng}
        ,function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
					console.log("Geocoder 위치 확인 완료");
					var address = results[0].formatted_address.split(" ");
					console.log(
						"result[0] : " + result[0] +
						"\nformatted_address : " + results[0].formatted_address +
						"\naddress : " + address
					);
                    $("#w-city").html(address[1] + " " + address[2] + " " + address[3]);
                } else {
                    console.log("Geocoder 위치 확인 실패");
                }
            } else {
                console.log("Geocoder 실행 실패\n상태 : " + status);
            }
        });
    }

    function getPosFromIP () {
        var ipinfoKey = "17f45312c140cf";
        $.getJSON("https://ipinfo.io/json?token=" + ipinfoKey
        ,function(json) {
            //console.log(json);
            var locArray = json.loc.split(",");
            var lat = locArray[0];
			var lng = locArray[1];
			$("#w-city").html(json.city);
            getWeather(lat, lng);
        });
    }

    function getWeather (lat, lng) { // 날씨 정보 읽어오는 부분
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