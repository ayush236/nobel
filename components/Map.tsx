'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect } from 'react'

// Fix for default marker icon in leaflet
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Map = () => {
  // Approximate coordinates for Kotihawa, Rupandehi, Nepal
  const position: [number, number] = [27.6333, 83.4667]

  return (
    <div className="w-full h-56 sm:h-80 md:h-96 relative z-0 rounded-xl overflow-hidden border-2 border-green-200">
      <MapContainer 
        center={position} 
        zoom={14} 
        scrollWheelZoom={false} 
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}>
          <Popup>
            Nobel Environment Academy <br /> Tilottama-15, Kotihawa.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
