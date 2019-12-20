$(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            geocodeLatLng(lat, lng);
        }, function() {
            handleLocationError(true, infoWindow);
        });
    } else {
        // 위치정보를 사용할 수 없는 경우 IP주소를 통한 대략적인 위치정보를 얻어낸다.
        getPosFromIP();
    }

    function geocodeLatLng(lat, lng) {
        var geocoder = new google.maps.Geocoder();
        console.log(geocoder);
        var latlng = new google.maps.LatLng(lat, lng);
        console.log(latlng);
        geocoder.geocode( { 'location' : latlng}, function(results, status) {
            console.log('status: ' + status + ', results: ' + results);
            if (status === 'OK') {
                if (results[0]) {
                    console.log(results[0].formatted_address); //*******
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