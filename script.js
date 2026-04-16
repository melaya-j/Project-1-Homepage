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
		animation: google.maps.Animation.DROP,
		icon: 'hum.jpg'
	});

	var contentString = '<h1>IIT Tower</h1><p>IIT Tower is on the south end of the Mies IIT campus. The official name is Micheal Paul Galvin Tower. IIT Tower is on the south end of the Mies IIT campus. The official name is Micheal Paul Galvin Tower. IIT Tower is on the south end of the Mies IIT campus. The official name is Micheal Paul Galvin Tower. IIT Tower is on the south end of the Mies IIT campus. The official name is Micheal Paul Galvin Tower.IIT Tower is on the south end of the Mies IIT campus. The official name is Micheal Paul Galvin Tower. IIT Tower is on the south end of the Mies IIT campus. The official name is Micheal Paul Galvin Tower. IIT Tower is on the south end of the Mies IIT campus. The official name is Micheal Paul Galvin Tower. IIT Tower is on the south end of the Mies IIT campus. The official name is Micheal Paul Galvin Tower.</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});



}

google.maps.event.addDomListener(window, 'load', init);


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  const slideWidth = slides[0].clientWidth;
  document.querySelector('.slides').style.transform = `translateX(-${index * slideWidth}px)`;
}
