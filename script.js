// Initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {
    center: [44.95, -93.09], // Centered on St. Paul (Lat/Long tool: http://itouchmap.com/latlong.html)
    zoom: 11 // Zoom level
});

/* Basemap: Thunderforest Spinal Map */
/* Other Leaflet.js Basemaps: http://leaflet-extras.github.io/leaflet-providers/preview */
/* To add the basemap to the map, use the .addTo(map) call */
L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
}).addTo(map);

var bikeways = L.esri.featureLayer({
    url: 'http://gis2.metc.state.mn.us/arcgis/rest/services/MetroGIS/Transportation/MapServer/3'
  }).addTo(map);

bikeways.bindPopup(function (feature) {
    return L.Util.template('<p>{SOURCE}<br>{SIDE}<br>{NOTES}</p>', feature.properties);
  });