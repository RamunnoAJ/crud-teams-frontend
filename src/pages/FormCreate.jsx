import { Link, useNavigate } from 'react-router-dom'
import Form from '../components/Form'
import { toast } from 'react-toastify'

function FormCreate() {
  const navigate = useNavigate()

  function onSuccess() {
    toast.success('Team created successfully', {
      onClose: () => navigate(`/`),
    })
  }

  function onError() {
    toast.error('Error creating team')
  }

  return (
    <>
      <Link to='/'>Back</Link>
      <Form type='create' onSuccess={onSuccess} onError={onError} />
    </>
  )
}

export default FormCreate
