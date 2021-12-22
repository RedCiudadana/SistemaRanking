let mapa= new Map();
mapa.set("Guatemala","");

function getColor(d) {
  return d > 4000 ? '#800026' :
         d > 3000  ? '#BD0026' :
         d > 2000  ? '#E31A1C' :
         d > 1000  ? '#FC4E2A' :
         d > 500   ? '#FD8D3C' :
         d > 200   ? '#FEB24C' :
         d > 100   ? '#FED976' :
                    '#FFEDA0';
}

function style(feature) {
  return {
      fillColor: getColor(feature.properties.AREA_GEO),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
      popup: "soy un popup"
  };
}


//ESTILO DE CADA FEATURE
function onEachFeature(feature, layer) {
  layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      //click: zoomToFeature
  });
}

function resetHighlight(e) {
  mundata.resetStyle(e.target);
  info.update();
}

function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
  }
  info.update(layer.feature.properties);
}

//function zoomToFeature(e) {
//  map.fitBounds(e.target.getBounds());
//}





// Code goes here

L.Mask = L.Polygon.extend({
	options: {
		stroke: false,
		color: '#fff',
		fillOpacity:1,
		clickable: true,

		outerBounds: new L.LatLngBounds([-90, -360], [90, 360])
	},

	initialize: function (latLngs, options) {
        
         var outerBoundsLatLngs = [
			this.options.outerBounds.getSouthWest(),
			this.options.outerBounds.getNorthWest(),
			this.options.outerBounds.getNorthEast(),
			this.options.outerBounds.getSouthEast()
		];
        L.Polygon.prototype.initialize.call(this, [outerBoundsLatLngs, latLngs], options);	
	},

});
L.mask = function (latLngs, options) {
	return new L.Mask(latLngs, options);
};

var lat = 15.75277501902558;
var lng =  -90.368;
var zoom =  7.5;


//var map = L.map('map').setView([lat, lng], zoom);

var map = L.map('map', {
  center: [lng, lat],
  zoom: zoom,
  zoomSnap: 0.25,
	dragging: false
});

map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.boxZoom.disable();
map.keyboard.disable();
$(".leaflet-control-zoom").css("visibility", "hidden");

//limites del mapa para no tener mapa infinito
var southWest = L.latLng(17.926475979176438, -92.4169921875),
northEast = L.latLng(13.07947827722643, -88.04443359375),
bounds = L.latLngBounds(southWest, northEast);

map.setMaxBounds(bounds);
map.on('drag', function() {
  map.panInsideBounds(bounds, { animate: false });
});

var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='SEGEPLAN';
var osm = new L.TileLayer(osmUrl, {minZoom: 3, maxZoom: 8, attribution: osmAttrib});
map.addLayer(osm);

//solucion temporal al responsive
if(screen.width>400){
  map.setView(new L.LatLng(lat, lng), zoom);
}
else{
  map.setView(new L.LatLng(lat, lng), 7);
}


// transform geojson coordinates into an array of L.LatLng
var coordinates = guatemala.features[0].geometry.coordinates[0];
var latLngs = [];
for (i=0; i<coordinates.length; i++) {
    latLngs.push(new L.LatLng(coordinates[i][1], coordinates[i][0]));
}

L.mask(latLngs).addTo(map);

var mundata = L.geoJson(mundata, {
  style: style,
  onEachFeature: (function(feature, layer) {
    layer.on('mouseover', function() {
      //you bind the popup here, you can acces any property of your Geojson with feature.properties.propertyname
      layer.bindPopup('<p>' + feature.properties.mun + ' / ' + feature.properties.depto + '</p>').openPopup();
    });
    layer.on('click', function() {
      //you bind the popup here, you can acces any property of your Geojson with feature.properties.propertyname
      window.location="https://www.google.com"
    });
    layer.on("mouseout", function(evt) { this.closePopup(); });
  })
}).addTo(map);

var legend = L.control({position: 'bottomright'});
/*
legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 100, 200, 500, 1000, 2000, 3000, 4000],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + ' km<sup>2</sup>' + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);
*/
