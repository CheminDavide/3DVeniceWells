let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: new google.maps.LatLng(45.43479, 12.33937),
    mapTypeId: "terrain",
  });

  map.data.loadGeoJson(
    "./venezia_centrale_veredapozzo2.json"
  );

  map.data.setStyle({
    fillColor: 'red',
    strokeWeight: 1
  });
  var infowindow = new google.maps.InfoWindow({
    content: "hello"
  });
  map.data.addListener('click', function(event) {
    let id = event.feature.getProperty('ID');
    let i_sub = event.feature.i;
    let html = id + "<br/>" + i_sub;
    infowindow.setContent(html); // show the html variable in the infowindow
    infowindow.setPosition(event.latLng);
    infowindow.setOptions({
      pixelOffset: new google.maps.Size(0, 0)
    }); // move the infowindow up slightly to the top of the marker icon
    infowindow.open(map);
  });
}