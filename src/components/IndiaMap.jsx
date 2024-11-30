import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import indiaGeoJSON from "./india-states.geojson"; // Path to your GeoJSON file

const IndiaMap = () => {
  const onEachState = (state, layer) => {
    // Display state name on hover
    layer.bindPopup(`<b>${state.properties.name}</b>`);
  };

  return (
    <MapContainer
      center={[22.9734, 78.6569]} // Coordinates to center the map on India
      zoom={5} // Zoom level
      style={{ height: "100vh", width: "100%" }}
    >
      {/* Add OpenStreetMap tiles */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {/* Render GeoJSON data */}
      <GeoJSON data={indiaGeoJSON} onEachFeature={onEachState} />
    </MapContainer>
  );
};

export default IndiaMap;
