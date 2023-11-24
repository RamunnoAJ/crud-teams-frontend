import PropTypes from 'prop-types'

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
}

function Input({ name, type, labelText }) {
  return (
    <div className='flex flex-col w-full gap-2 max-w-xs'>
      <label htmlFor={name}>{labelText}:</label>
      <input type={type} name={name} id={name} />
    </div>
  )
}

export default Input
