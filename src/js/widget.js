$(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            initMap(lat, lng);
        }, function() {
            handleLocationError(true, infoWindow);
        });
    } else {
        // 위치정보를 사용할 수 없는 경우 IP주소를 통한 대략적인 위치정보를 얻어낸다.
        getPosFromIP();
    }

    function initMap(lat, lng) {
        // 전혀 필요없는 map이지만 도시 정보를 읽어오기 위해 쓴다... 일단...
        var map = new google.maps.Map(document.getElementById('map'),
        { zoom: 8, center: {lat: parseFloat(lat), lng: parseFloat(lng)}});
        var geocoder = new google.maps.Geocoder;
        geocodeLatLng(geocoder, map);
    }

    function geocodeLatLng(geocoder, map) {
        var input = map.center.lat + "," + map.center.lng;
        console.log(map);
        var latlngStr = input.split(',', 2);
        var latlng = { lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
        geocoder.geocode({'location': latlng}, function(results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    console.log(results[0]); //*******
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }

    function getPosFromIP() {
        var ipinfoKey = "17f45312c140cf";
        $.getJSON("https://ipinfo.io/json?token=" + ipinfoKey
	,function(json) {
		//console.log(json);
		$("#w-city").html(json.city);
		var locArray = json.loc.split(",");
		var lat = locArray[0];
		var lng = locArray[1];
        initMap(lat, lng);
	});
    }
});