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

// $("#workshopNav").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#workshops").offset().top
//     }, 1500);
// });
//     var $animation_elements = $('.ws');
//     var $window = $(window);
//
//     function check_if_in_view() {
//       var window_height = $window.height();
//       var window_top_position = $window.scrollTop();
//       var window_bottom_position = (window_top_position + window_height);
//
//       $.each($animation_elements, function() {
//         var $element = $(this);
//         var element_height = $element.outerHeight();
//         var element_top_position = $element.offset().top;
//         var element_bottom_position = (element_top_position + element_height);
//
//         //check to see if this current container is within viewport
//         if ((element_bottom_position >= window_top_position) &&
//         (element_top_position <= window_bottom_position)) {
//           $element.addClass('animated fadeInDown');
//         } else {
//           $element.removeClass('animated fadeInDown');
//     }
//   });
// }
//
// $window.on('scroll resize', check_if_in_view);
// $window.trigger('scroll');
