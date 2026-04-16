function init(){
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.83192243003991, -87.62705380862427);
	var mapOptions = {
		center: myLocation,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);
	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
	});
}
