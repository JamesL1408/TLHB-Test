import React from 'react'
import ReactMapGL from 'react-map-gl';

function Map() {
  return <ReactMapGL 
  initialViewState={{
      longitude: -4.614208538631396,
      latitude: 51.81941411049011,
      zoom: 15
    }}
  mapStyle="mapbox://styles/james1408/cl3m79xdm001014plmcx3ztu9" 
  mapboxAccessToken={process.env.mapbox_key}>
  </ReactMapGL>

}

export default Map 