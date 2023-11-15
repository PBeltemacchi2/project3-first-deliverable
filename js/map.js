function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: { lat: 41.83505630493164, lng: -87.62705993652344 }
  })
  
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(41.83505630493164, -87.62705993652344), 
    map: map,
    title: "Illinois Tech"
  });
  
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(41.83088, -87.62116), 
    map: map,
    title: "McDonald's"
  });
  
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(41.83064, -87.63367), 
    map: map,
    title: "Chicago White Sox Field"
  });
}
