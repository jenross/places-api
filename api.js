// let map;
initMap();

let typeOfPlace; 
let cafe = document.getElementById('cafe');
let restaurant = document.getElementById('restaurant');
let bar = document.getElementById('bar');
let locationSearch; 
let place; 
let resultsArr = [];
let randomPick;
let groupArr = [];

const randomize = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// let service = new google.maps.places.PlacesService(map);

// let placeFilter = typeOfPlace.id; 

let ac = new google.maps.places.Autocomplete(document.getElementById('enterLocation'), {
    componentRestrictions: { country: 'us' }
});

google.maps.event.addListener(ac, 'place_changed', function() {
    place = ac.getPlace();
}); 

$(".create-hangout").on("click", function(event) {
    event.preventDefault();
    
        locationSearch = place.geometry.location; 
        let lat = place.geometry.location.lat();
        let lng = place.geometry.location.lng();
        const APIKEY = "AIzaSyDWLRgKxz3nTinzcUXCyjM1DNpe9e4_g2w";
        let initialQueryURL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${APIKEY}&location=${lat},${lng}&radius=1000&type=restaurant`;
        $.ajax({
            url: initialQueryURL,
            method: "GET"
        }).then(function(response) {
            // console.log(response);
            for (let i = 0; i < response.results.length; i++) {
                let place_id = response.results[i].place_id;
                // let place_name = response.results[i].name;
                // let open = response.results[i].opening_hours.open_now;
                // let photoResult = response.results[i].photos[0].html_attributions;
                // let address = response.results[i].vicinity;
                resultsArr.push(place_id);
                randomPick = resultsArr[randomize(0, resultsArr.length - 1)];
            }
            console.log(randomPick);
            let pickedQueryURL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?key=${APIKEY}&place_id=${randomPick}`;
            $.ajax({
                url: pickedQueryURL,
                method: "GET"
            }).then(function(response) {
                let pickLat = response.result.geometry.location.lat;
                let pickLng = response.result.geometry.location.lng;
                let pickName = response.result.name;
                let pickAddress = response.result.formatted_address;
                let pickIcon = response.result.icon;
                let pickOpenNow = response.result.opening_hours.open_now;
                let pickWebsite = response.result.website;
                // $("#")
            });
        });
});

var map;
var service;
var infowindow;

// function initMap() {
//     // The location of Uluru
//     var uluru = {lat: -25.344, lng: 131.036};
//     // The map, centered at Uluru
//     var map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    // var marker = new google.maps.Marker({position: uluru, map: map});
// }

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -25.344, lng: 131.036},
        zoom: 15
    });
    var sydney = new google.maps.LatLng(-33.867, 151.195);

    infowindow = new google.maps.InfoWindow();

    map = new google.maps.Map(
        document.getElementById('map'), {center: sydney, zoom: 15});

    var request = {
        query: 'Museum of Contemporary Art Australia',
        fields: ['name', 'geometry'],
    };

service = new google.maps.places.PlacesService(map);

service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
    }

    map.setCenter(results[0].geometry.location);
    }
});
}

function createMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}