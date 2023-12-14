import { PropTypes } from 'prop-types'
import cx from 'classnames'

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
}

function Button({ children, onClick = () => {}, color }) {
  return (
    <button
      className={cx(` text-white font-bold py-2 px-4 rounded`, {
        'bg-blue-500 hover:bg-blue-700': color === 'blue',
        'bg-green-700 hover:bg-green-800': color === 'green',
      })}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
