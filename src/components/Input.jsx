import PropTypes from 'prop-types'

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

function Input({ name, type, labelText, onChange, value }) {
  return (
    <div className='flex flex-col w-full gap-2 max-w-xs'>
      <label htmlFor={name}>{labelText}:</label>
      <input
        className='px-4 py-2 rounded bg-slate-100 text-black'
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        defaultValue={value}
      />
    </div>
  )
}

export default Input
