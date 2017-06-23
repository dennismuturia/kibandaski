var myNumbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var randomArray=[4,8,10,20,25];
$("#random").click (function(){
  var number=myNumbers.length;
  var selected=Math.floor(Math.random()*number);
  $("#display").text(selected);
  for(var j=0; j<randomArray.length;j++){
    if(selected===randomArray[j]){
      $("#display").text("You have won! Grab yourself free lunch and a 500ml bottle of hot mbuzi bone soup at one of our listed kibandaskis")
    }
  }
  //console.log(selectedt;
});
new WOW().init();
//AIzaSyA1ENv0vQTNyhcmIOxOewI-NlizlAis48A
function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
    var icony = 'Food_2.svg'

    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
    map.setTilt(50);

    // Multiple markers location, latitude, and longitude
    var markers = [
        ['Nzomos Court, NRB',-1.3004563, 36.7858376],
        ['Prestige Kibanda, NRB', -1.3004563, 36.7841961],
        ['Adams Kibanda, NRB', -1.3005692, 36.7786378],
        ['Milcah REstuarant, NRB', -1.2926831, 36.7684812],
        ['CIC bus-station Kibanda, NRB',-1.300835 ,36.776335 ],
        ['Lenana Kibanda, NRB',-1.288795 ,36.792146 ],
        ['Ole Dumu Kibanda, NRB', -1.2927807, 36.7570858],
        ['Ngong road kibanda, NRB',-1.3006198 , 36.7773287],
        ['Lala Court, NRB',-1.296242 ,36.7724823],
        ['Mama Kims, NRB',-1.306643 ,36.782662],
        ['Mama Oliech, NRB',-1.301556 ,36.7978416]

    ];
    var input = document.getElementById('pac-input');

     var autocomplete = new google.maps.places.Autocomplete(input);
     autocomplete.bindTo('bounds', map);

     map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

     var infowindow = new google.maps.InfoWindow();
     var infowindowContent = document.getElementById('infowindow-content');
     infowindow.setContent(infowindowContent);
     var marker = new google.maps.Marker({
       map: map
     });
     marker.addListener('click', function() {
       infowindow.open(map, marker);
     });

     autocomplete.addListener('place_changed', function() {
       infowindow.close();
       var place = autocomplete.getPlace();
       if (!place.geometry) {
         return;
       }

       if (place.geometry.viewport) {
         map.fitBounds(place.geometry.viewport);
       } else {
         map.setCenter(place.geometry.location);
         map.setZoom(17);
       }

       // Set the position of the marker using the place ID and location.
       marker.setPlace({
         placeId: place.place_id,
         location: place.geometry.location
       });
       marker.setVisible(true);

       infowindowContent.children['place-name'].textContent = place.name;
       infowindowContent.children['place-id'].textContent = place.place_id;
       infowindowContent.children['place-address'].textContent =
           place.formatted_address;
       infowindow.open(map, marker);
     });

    // Info window content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>NgongLane Kibanda</h3>' +
        '<p>Offers the best in kibanda food with a special of chapati madondo</p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Prestige Kibanda</h3>' +
        '<p>the kibanda is highly praised for its githeri and ugali matumbo</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Milcah Restuarant</h3>' +
        '<p>The kibanda is well known for its delicious chapati and the sweet pilau.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Korosho Kibanda</h3>' +
        '<p>The kibanda is well known for its delicious chapati and the sweet pilau.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>CIC bus-station Kibanda</h3>' +
        '<p>The kibanda is well known for its delicious chapati and the sweet pilau.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Lenana Kibanda</h3>' +
        '<p>The kibanda is well known for its delicious chapati and the sweet pilau.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Ole Dumu Kibanda</h3>' +
        '<p>The kibanda is well known for its delicious chapati and the sweet pilau.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Ngong road kibanda</h3>' +
        '<p>The kibanda is well known for its delicious chapati and the sweet pilau.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Lala Court</h3>' +
        '<p>The kibanda is well known for its delicious chapati and the sweet pilau.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Mama kims</h3>' +
        '<p>The kibanda is well known for its delicious chapati and the sweet pilau.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Mama Oliech</h3>' +
        '<p>The kibanda is well known for its delicious chapati and the sweet pilau.</p>' +
        '</div>']
    ];

    // Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    //icon style

    // Place each marker on the map
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            icon :icony,
            title: markers[i][0]
        });

        // Add info window to marker
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Center the map to fit all markers on the screen
        map.fitBounds(bounds);
    }

    // Set zoom level
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });


}
