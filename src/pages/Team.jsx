import useGetTeamByID from '../hooks/useGetTeamByID'
import { useParams, Link, useNavigate } from 'react-router-dom'
import MapContainer from '../components/MapContainer'
import Modal from '../components/Modal'
import { deleteTeam } from '../services/api'
import { toast } from 'react-toastify'

function Team() {
  const { id } = useParams()
  const { team } = useGetTeamByID(id)
  const navigate = useNavigate()

  let image = team.crestUrl

  if (image && !image.includes('http')) {
    image = `http://localhost:8080/api${image}`
  }

  async function handleDelete() {
    try {
      await deleteTeam(id)
      toast.success('Team deleted successfully', {
        onClose: () => navigate('/'),
      })
    } catch (error) {
      toast.error('Error deleting team')
    }
  }

  return (
    <div className='flex flex-col justify-center items-center relative max-w-sm mx-auto'>
      <Link
        to='/'
        className='absolute top-0 left-0 text-blue-500 hover:underline'>
        Back
      </Link>
      <article className='flex flex-col justify-center items-center'>
        <img src={image} width={100} height={100} />
        <h1>{team.name}</h1>
        <p>{team.country}</p>
        <p>{team.tla}</p>
        <p>{team.address}</p>
        <p>{team.phone}</p>
        <Link
          to={team.website}
          target='_blank'
          className='text-blue-500 hover:underline'>
          {team.website}
        </Link>
        <p>{team.email}</p>
        <p>{team.founded}</p>
        <p>{team.clubColors}</p>
        <p>{team.venue}</p>

        <MapContainer address={team.address} />
        <div className='flex flex-row gap-4 mt-4'>
          <Link to={`/teams/${id}/edit`}>
            <button
              type='button'
              className='py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white transition-all ease-in-out duration-300'>
              Edit
            </button>
          </Link>
          <Modal
            title='Delete Team'
            onAccept={handleDelete}
            body={`Are you sure you want to delete ${team.name}?`}>
            <span className='py-2 px-4 bg-red-600 hover:bg-red-700 rounded-md text-white transition-all ease-in-out duration-300'>
              Eliminar
            </span>
          </Modal>
        </div>
      </article>
    </div>
  )
}

export default Team
