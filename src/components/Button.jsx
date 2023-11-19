import { PropTypes } from 'prop-types'

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

function Button({ children, onClick = () => {} }) {
  return (
    <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Button