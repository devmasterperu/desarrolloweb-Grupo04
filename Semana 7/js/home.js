$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">La imagen #%curr%</a> no pudo ser cargada.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Javier Diaz</small>';
			}
		}
	});







});




// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -12.068137, lng: -77.060954};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {
      	zoom: 16,
      	center: uluru
      });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
  	position: uluru, map: map
  });
}





