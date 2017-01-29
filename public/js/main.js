function init_map(){
  var myOptions = {
    zoom:15,
    center:new google.maps.LatLng(12.969264,79.15593799999999),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
  marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(12.969264,79.15593799999999)});
  google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
  infowindow.open(map,marker);
}
google.maps.event.addDomListener(window, 'load', init_map);
