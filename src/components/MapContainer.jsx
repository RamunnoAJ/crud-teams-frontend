import { PropTypes } from 'prop-types'

MapContainer.propTypes = {
  address: PropTypes.string,
}

function MapContainer({ address }) {
  const mapAddress = address?.split(' ').join('+')

  return (
    <>
      {mapAddress && (
        <iframe
          width='600'
          height='450'
          loading='lazy'
          allowFullScreen
          referrerPolicy='no-referrer-when-downgrade'
          src={`https://www.google.com/maps/embed/v1/place?key=${
            import.meta.env.VITE_GOOGLE_MAPS_API_KEY
          }&q=${mapAddress}`}></iframe>
      )}
    </>
  )
}

export default MapContainer
