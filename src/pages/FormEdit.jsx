import useGetTeamByID from '../hooks/useGetTeamByID'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Form from '../components/Form'
import { toast } from 'react-toastify'

function FormEdit() {
  const { id } = useParams()
  const { team } = useGetTeamByID(id)
  const navigate = useNavigate()

  function onSuccess() {
    toast.success('Team updated successfully', {
      onClose: () => navigate(`/teams/${id}`),
    })
  }

  function onError() {
    toast.error('Error updating team')
  }

  return (
    <>
      <Link to='/'>Back</Link>
      <Form type='edit' team={team} onSuccess={onSuccess} onError={onError} />
    </>
  )
}

export default FormEdit
