function bhamMap() {
    var mapOptions = {
        center: new google.maps.LatLng(48.747493, -122.463324),
        zoom: 15,
    }

    var map = new google.maps.Map(document.getElementById("bhamMap"), mapOptions);
    var service = new google.maps.places.PlacesService(map);
    var infowindow = new google.maps.InfoWindow();

    service.getDetails({ placeId: "ChIJi_VX1ZSjhVQRIAU8G_CvOIs" }, function(place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location,
            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                    place.formatted_address + '</div>');
                infowindow.open(map, this);
            });
        }
    });
}
