import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'

function getAddressCoordinates(address) {
  const geocoder = new window.google.maps.Geocoder()

  return new Promise((resolve, reject) => {
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        resolve(results[0].geometry.location)
      } else {
        reject(status)
      }
    })
  })
}

MapContainer.propTypes = {
  address: PropTypes.string,
}

function MapContainer({ address }) {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 })

  useEffect(() => {
    const geocodeAddress = async () => {
      try {
        const coords = await getAddressCoordinates(address)
        setCoordinates(coords)
      } catch (error) {
        console.log(error)
      }
    }

    geocodeAddress()
  }, [address])

  const mapStyles = {
    height: '400px',
    width: '100%',
  }

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={coordinates}>
        <Marker position={coordinates} />
      </GoogleMap>
    </LoadScript>
  )
}

export default MapContainer
