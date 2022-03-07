import React from 'react'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'

const containerStyle = {
  position: 'static',
  width: '100%',
  height: '70%',
  overflow: "hidden"
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
  apiKey: "AIzaSyB9e8C_OyXh4mtQfJjdKSWKDFUJIoRtaJM"
})(MapContainer)
