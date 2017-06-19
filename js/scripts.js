//AIzaSyA1ENv0vQTNyhcmIOxOewI-NlizlAis48A
function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };

    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
    map.setTilt(50);

    // Multiple markers location, latitude, and longitude
    var markers = [
        ['NgongLane Kibanda, NRB',-1.3004563, 36.7858376],
        ['Prestige Kibanda, NRB', -1.3004563, 36.7841961],
        ['Adams Kibanda, NRB', -1.3005692, 36.7786378],
        ['Korosho Kibanda, NRB', -1.3005323, 36.7823955],
        ['CIC bus-station Kibanda, NRB', -1.3005323, 36.7823955],
        ['Lenana Kibanda, NRB', -1.3005323, 36.7823955],
        ['Ole Dumu Kibanda, NRB', -1.3005323, 36.7823955],
        ['Ngong road kibanda, NRB', -1.3005323, 36.7823955],
        ['Muringa Kibanda, NRB', -1.3005323, 36.7823955]

    ];

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
        '<h3>Adams Kibanda</h3>' +
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
        '<h3>Muringa Kibanda</h3>' +
        '<p>The kibanda is well known for its delicious chapati and the sweet pilau.</p>' +
        '</div>']
    ];

    // Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow(), marker, i;

    // Place each marker on the map
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
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
