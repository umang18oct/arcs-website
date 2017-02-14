/*function letTheLoaderRoll(){
  setTimeout(rollingLoader,3000);
}

function rollingLoader() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
*/
function stackChange(){
if (window.innerWidth < 768){
  document.getElementById("bg4").classList.remove("four")
  document.getElementById("bg4").classList.remove("x");
  document.getElementById("workshops").classList.remove("five");
  document.getElementById("workshops").classList.remove("x");
  document.getElementById("contactLarge").classList.remove("six");
  document.getElementById("contactLarge").classList.remove("x");
  document.getElementById("footer").classList.remove("seven");
  document.getElementById("footer").classList.remove("x");

  document.getElementById("section1").classList.add("one");
  document.getElementById("section1").classList.add("x");
  document.getElementById("section2").classList.add("two");
  document.getElementById("section2").classList.add("x");
  document.getElementById("carousalMain").classList.add("three");
  document.getElementById("carousalMain").classList.add("x");
  document.getElementById("img3Small").classList.add("four");
  document.getElementById("img3Small").classList.add("x");
  document.getElementById("aboutSmall").classList.add("five");
  document.getElementById("aboutSmall").classList.add("x");
  document.getElementById("workshopHeading").classList.add("six");
  document.getElementById("workshopHeading").classList.add("x");
  document.getElementById("ws1").classList.add("seven");
  document.getElementById("ws1").classList.add("x");
  document.getElementById("ws2").classList.add("eight");
  document.getElementById("ws2").classList.add("x");
  document.getElementById("ws3").classList.add("nine");
  document.getElementById("ws3").classList.add("x");
  document.getElementById("map").classList.add("ten");
  document.getElementById("map").classList.add("x");
  document.getElementById("contact").classList.add("eleven");
  document.getElementById("contact").classList.add("x");
  document.getElementById("footer").classList.add("twelve");
  document.getElementById("footer").classList.add("x");
}
else {
  document.getElementById("img3Small").classList.remove("four")
  document.getElementById("img3Small").classList.remove("x");
  document.getElementById("aboutSmall").classList.remove("five")
  document.getElementById("aboutSmall").classList.remove("x");
  document.getElementById("workshopHeading").classList.remove("six");
  document.getElementById("workshopHeading").classList.remove("x");
  document.getElementById("ws1").classList.remove("seven");
  document.getElementById("ws1").classList.remove("x");
  document.getElementById("ws2").classList.remove("eight");
  document.getElementById("ws2").classList.remove("x");
  document.getElementById("ws3").classList.remove("nine");
  document.getElementById("ws3").classList.remove("x");
  document.getElementById("map").classList.remove("ten");
  document.getElementById("map").classList.remove("x");
  document.getElementById("contact").classList.remove("eleven");
  document.getElementById("contact").classList.remove("x");
  document.getElementById("footer").classList.remove("twelve");
  document.getElementById("footer").classList.remove("x");

  document.getElementById("section1").classList.add("one");
  document.getElementById("section1").classList.add("x");
  document.getElementById("section2").classList.add("two");
  document.getElementById("section2").classList.add("x");
  document.getElementById("carousalMain").classList.add("three");
  document.getElementById("carousalMain").classList.add("x");
  document.getElementById("bg4").classList.add("four")
  document.getElementById("bg4").classList.add("x");
  document.getElementById("workshops").classList.add("five");
  document.getElementById("workshops").classList.add("x");
  // $("sponsorship").classList.add("four x");
  document.getElementById("contactLarge").classList.add("six");
  document.getElementById("contactLarge").classList.add("x");
  document.getElementById("footer").classList.add("seven");
  document.getElementById("footer").classList.add("x");
}
$('.x').stack();
}

function init_map(){
  var myOptions = {
    zoom:15,
    center:new google.maps.LatLng(12.969264,79.15593799999999),
    scrollwheel: false,
    draggable: true,
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
