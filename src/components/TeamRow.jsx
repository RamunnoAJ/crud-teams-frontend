import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteTeam } from '../services/api'
import Modal from './Modal'

TeamRow.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    tla: PropTypes.string,
    country: PropTypes.string,
  }),
  setUpdateTeams: PropTypes.func,
}

function TeamRow({ team, setUpdateTeams }) {
  const { id, name, tla, country } = team

  async function handleDelete() {
    await deleteTeam(id)
    await new Promise(resolve => setTimeout(resolve, 500))

    setUpdateTeams(prev => !prev)
  }

  return (
    team && (
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
          <Modal
            title='Delete Team'
            onAccept={handleDelete}
            body={`Are you sure you want to delete ${name}?`}>
            <FontAwesomeIcon icon={faTrash} size='lg' />
          </Modal>
        </td>
      </tr>
    )
  )
}

export default TeamRow
