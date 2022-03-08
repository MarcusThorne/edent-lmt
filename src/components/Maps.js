import React from 'react'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'

const containerStyle = {
  position: 'absolute',
  left: '0px',
  height: '50%',
  width: "100%",
  overflow: "hidden !important",
}

function MapContainer(props) {
  return (
    <Map google = {props.google}
      style={containerStyle}
      zoom = {15}
      initialCenter = {
        {
          lat: 51.086522860124006,
          lng: -4.063742800000001
        }
      }
    >
      <Marker lat={51.086522860124006} lng={-4.063742800000001} />
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer)
