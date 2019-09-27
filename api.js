let map;
let typeOfPlace; 
let cafe = document.getElementById('cafe');
let restaurant = document.getElementById('restaurant');
let bar = document.getElementById('bar');
let locationSearch; 
let place; 
// let service = new google.maps.places.PlacesService(map);
//need to move this into onclick function 
// if (cafe.checked = true) {
//     typeOfPlace = cafe; 
// } else if (restaurant.checked = true) {
//     typeOfPlace = restaurant; 
// } else if (bar.checked = true) {
//     typeOfPlace = bar; 
// }

// let placeFilter = typeOfPlace.id; 

let ac = new google.maps.places.Autocomplete(document.getElementById('enterLocation'), {
    componentRestrictions: { country: 'us' }
});

google.maps.event.addListener(ac, 'place_changed', function() {
    place = ac.getPlace();
}); 

$(".create-hangout").on("click", function(event) {
    event.preventDefault();
    // if (cafe.checked = true) {
    //     typeOfPlace = cafe; 
    // } else if (restaurant.checked = true) {
    //     cafe.checked = false; 
    //     bar.checked = false; 
    //     typeOfPlace = restaurant; 
    // } else if (bar.checked = true) {
    //     cafe.checked = false; 
    //     restaurant.checked = false; 
    //     typeOfPlace = bar; 
    // }
    
    // let placeFilter = typeOfPlace.id; 
    // google.maps.event.addListener(ac, 'place_changed', function() {
    //     let place = ac.getPlace();
    //     // console.log(place.formatted_address);
    //     // console.log(place.url);
    //     // console.log(place.geometry.location);
        locationSearch = place.geometry.location; 
        const APIKEY = "AIzaSyDWLRgKxz3nTinzcUXCyjM1DNpe9e4_g2w";
        let initialQueryURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${APIKEY}&location=${locationSearch}&radius=1000&type=restaurant`;
        $.ajax({
            url: initialQueryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
        });
            // let request = {
            //     location: locationSearch, 
            //     radius: 5000, 
            //     types: [ 'restaurant' ]
            // };
            // service.search(request);
            // console.log(request);

});


// let locationInput = document.getElementById('enterLocation');
// let googleLogo = document.getElementById('google-logo');

// let locationResult;
// let searchResults;
// let map; 

// Google Maps Initializer
// function initMap() {
//     console.log("working");
//     // let location = venue0;
//     map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: -34.397, lng: 150.644},
//           zoom: 15
//       });
    // searchResults.forEach(function(e, i) {
    //   makeMarker(locationResult[i]);
    // })
// }

// initMap();

// gMaps Marker Creation
// function makeMarker(locationResult) {
//     var marker = new google.maps.Marker({position: searchResults.coords, map: map});
//     let infoWindow = new google.maps.InfoWindow({
//       content:searchResults.content
//     });
//     marker.addListener('click', function() {
//       infoWindow.open(map, marker);
//     })
// }

// let locationInput = document.getElementById('enterLocation');
// let map;
// function initMap() {
//  // Create the map.
//  let pyrmont = {lat: -33.866, lng: 151.196};
//  map = new google.maps.Map(document.getElementById('map'), {
//    center: pyrmont,
//    zoom: 17
//  });

 // Create the places service.
//  let service = new google.maps.places.PlacesService(map);
//  let getNextPage = null;
//  let moreButton = document.getElementById('more');
//  moreButton.onclick = function() {
//    moreButton.disabled = true;
//    if (getNextPage) getNextPage();
//  };

 // Perform a nearby search.
//  service.nearbySearch(
//      {location: locationInput, radius: 1000, type: ['restaurant']},
//      function(results, status, pagination) {
//        if (status !== 'OK') return;
      //  createMarkers(results);
      //  moreButton.disabled = !pagination.hasNextPage;
      //  getNextPage = pagination.hasNextPage && function() {
      //    pagination.nextPage();
      //  };
    //  });


// function createMarkers(places) {
//  let bounds = new google.maps.LatLngBounds();
//  let placesList = document.getElementById('places');
//  for (let i = 0, place; place = places[i]; i++) {
//     let image = {
//       url: place.icon,
//       size: new google.maps.Size(71, 71),
//       origin: new google.maps.Point(0, 0),
//       anchor: new google.maps.Point(17, 34),
//       scaledSize: new google.maps.Size(25, 25)
//     };
//     let marker = new google.maps.Marker({
//       map: map,
//       icon: image,
//       title: place.name,
//       position: place.geometry.location
//     });
//     let li = document.createElement('li');
//     li.textContent = place.name;
//     placesList.appendChild(li);
//     bounds.extend(place.geometry.location);
//   }
//   map.fitBounds(bounds);
// }

// let map;
// let service;
// let infowindow;

// function initMap() {
//     let sydney = new google.maps.LatLng(-33.867, 151.195);

//     infowindow = new google.maps.InfoWindow();

//     map = new google.maps.Map(
//         document.getElementById('map'), {center: sydney, zoom: 15});

//     let request = {
//         query: 'Museum of Contemporary Art Australia',
//         fields: ['name', 'geometry'],
//     };

//     service = new google.maps.places.PlacesService(map);

//     service.findPlaceFromQuery(request, function(results, status) {
//         if (status === google.maps.places.PlacesServiceStatus.OK) {
//         for (var i = 0; i < results.length; i++) {
//             createMarker(results[i]);
//         }
//         map.setCenter(results[0].geometry.location);
//     }
//     });
// }

// function createMarker(place) {
//     var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location
//     });

//     google.maps.event.addListener(marker, 'click', function() {
//     infowindow.setContent(place.name);
//     infowindow.open(map, this);
//     });
// }