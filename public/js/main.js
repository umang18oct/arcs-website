/*function letTheLoaderRoll(){
  setTimeout(rollingLoader,3000);
}

function rollingLoader() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
*/
function init_map(){
  var myOptions = {
    zoom:15,
    center:new google.maps.LatLng(12.969264,79.15593799999999),
    scrollwheel: false,
    draggable: false,
    panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    overviewMapControl: true,
    rotateControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
  marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(12.969264,79.15593799999999)});
  // infowindow = new google.maps.InfoWindow({
  //          content: ''
  //      });
  // google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
  // infowindow.open(map,marker);
}
google.maps.event.addDomListener(window, 'load', init_map);
