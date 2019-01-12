import "./styles.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "font-awesome/css/font-awesome.css";

// basemaps to choose from
const basemaps = {
  esriGrey:
    "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
  esriDarkGrey:
    "http://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
  nokiahybrid:
    "https://{s}.maptile.maps.svc.ovi.com/maptiler/v2/maptile/newest/hybrid.day/{z}/{x}/{y}/256/png8",
  esriSatellite:
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
};

// add a map
const mapSettings = {};
let map = L.map("map", mapSettings).setView([45, -123], 10);
L.tileLayer(basemaps.esriGrey, {}).addTo(map);

// add a marker to the map
var circle = L.circle(map.getCenter(), {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);

// keep the marker in the middle of the map
map.on("move", () => {
  circle.setLatLng(map.getCenter());
});
