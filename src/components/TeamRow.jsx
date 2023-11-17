import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

TeamRow.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    tla: PropTypes.string,
    country: PropTypes.string,
  }),
}

function TeamRow({ team }) {
  const { id, name, tla, country } = team
  return (
    <tr>
      <td className='p-4 py-2'>{id}</td>
      <td className='p-4 py-2 text-start'>{name}</td>
      <td className='p-4 py-2 hidden md:table-cell'>{tla}</td>
      <td className='p-4 py-2 hidden md:table-cell'>{country}</td>
      <td className='p-4 py-2 flex justify-center gap-4'>
        <Link to={`/s/${id}`}>
          <FontAwesomeIcon icon={faEye} size='lg' />
        </Link>
        <Link to={`/s/${id}/edit`}>
          <FontAwesomeIcon icon={faEdit} size='lg' />
        </Link>
        <button onClick={() => console.log(id)}>
          <FontAwesomeIcon icon={faTrash} size='lg' />
        </button>
      </td>
    </tr>
  )
}

export default TeamRow
