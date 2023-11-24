import { toast } from 'react-toastify'
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
    try {
      await deleteTeam(id)
      toast.success('Team deleted successfully', {
        onClose: () => setUpdateTeams(prev => !prev),
      })
    } catch (error) {
      toast.error('Error deleting team')
    }
  }

  return (
    team && (
      <tr className='border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 font-light last:border-none'>
        <td className='whitespace-nowrap px-6 py-4 font-bold'>{id}</td>
        <td className='whitespace-nowrap px-6 py-4'>{name}</td>
        <td className='whitespace-nowrap px-6 py-4 hidden md:table-cell'>
          {tla}
        </td>
        <td className='whitespace-nowrap px-6 py-4 hidden md:table-cell'>
          {country}
        </td>
        <td className='whitespace-nowrap px-6 py-4 flex justify-center gap-4'>
          <Link to={`/teams/${id}`}>
            <FontAwesomeIcon icon={faEye} size='lg' />
          </Link>
          <Link to={`/teams/${id}/edit`}>
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
