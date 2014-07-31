var map;
  function initialize() {
  var mapStyle= [
  {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#000000" },
      { "visibility": "on" },
      { "weight": 3 }
     
    ]
  }
]
;
    var mapDiv = document.getElementById('map-canvas');
   map = new google.maps.Map(mapDiv, {
      center:new google.maps.LatLng(0,0),
      zoom: 3,
      mapTypeId: google.maps.MapTypeId.ROADMAP
       //styles: mapStyle
    });

    google.maps.event.addListenerOnce(map, 'tilesloaded', addMarkers);

  }

  function addMarkers() {
    var image = new google.maps.MarkerImage(
              'images/mark.png',
              null, // size
              null, // origin
              new google.maps.Point( 5, 5), // anchor (move to center of marker)
              new google.maps.Size( 10, 10 ) // scaled size (required for Retina display icon)
            );
     var contentString = '<b> something something </b>';
    var bounds = map.getBounds();
    var southWest = bounds.getSouthWest();
    var northEast = bounds.getNorthEast();
    var lngSpan = northEast.lng() - southWest.lng();
    var latSpan = northEast.lat() - southWest.lat();
    var i=0;
    var interval = setInterval(function() {
   
      var latLng = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
                                          southWest.lng() + lngSpan * Math.random());
      
  //  var toggle= setInterval(function() { toggleMarker() }, 1000);
     
  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
        var marker = new google.maps.Marker({
        flat: true,
        icon: image,
        map: map,
        optimized: false,
        position: latLng,
          
             
              title: 'WOINX',
              visible: true

      });

 google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });      
        
       // toggleMarker(marker);
       
i++;
        
      if(i>10) clearInterval(interval); 
        
    }, 5000);
  
  }/
