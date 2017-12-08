// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var source ="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!
  function initMap() {

  var sanFrancisco = {lat: 37.78, lng: -122.44};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: sanFrancisco
  });
}
initMap();










});
