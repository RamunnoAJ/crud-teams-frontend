import PropTypes from 'prop-types'
import Input from '../components/Input'
import useGetTeamByID from '../hooks/useGetTeamByID'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { send } from '../services/api'
import { useState } from 'react'
import { toast } from 'react-toastify'

FormEdit.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    country: PropTypes.string,
    shortName: PropTypes.string,
    tla: PropTypes.string,
    crestUrl: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    email: PropTypes.string,
    founded: PropTypes.string,
    clubColors: PropTypes.string,
    venue: PropTypes.string,
    lastUpdated: PropTypes.string,
  }),
}

function FormEdit() {
  const { id } = useParams()
  const { team } = useGetTeamByID(id)
  const [teamData, setTeamData] = useState({})
  const [imageFile, setImageFile] = useState(null)
  const navigate = useNavigate()

  function handleChange(e) {
    if (e.target.name === 'image') {
      setImageFile(e.target.files[0])
    } else {
      setTeamData(prev => ({
        ...prev,
        [e.target.name]: e.target.value,
      }))
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const teamUpdated = {
      ...team,
      ...teamData,
      lastUpdated: new Date().toISOString(),
    }

    const formData = new FormData()
    formData.append('image', imageFile)
    for (const key in teamUpdated) {
      formData.append(key, teamUpdated[key])
    }

    try {
      await send(id, formData, 'PATCH')
      toast.success('Team updated successfully', {
        onClose: () => navigate(`/teams/${id}`),
      })
    } catch (error) {
      toast.error('Error updating team')
    }
  }

  return (
    <>
      <Link to='/'>Back</Link>
      <form
        encType='multipart/form-data'
        className='flex flex-col justify-center items-center gap-2 py-8'
        onSubmit={handleSubmit}>
        <h1>
          Edit team: #{id} - {team.name}
        </h1>

        <Input
          name='name'
          type='text'
          placeholder={team.name}
          labelText='Name'
          onChange={handleChange}
        />
        <Input
          name='country'
          type='text'
          placeholder={team.country}
          labelText='Country'
          onChange={handleChange}
        />
        <Input
          name='shortName'
          type='text'
          placeholder={team.shortName}
          labelText='Short Name'
          onChange={handleChange}
        />
        <Input name='tla' type='text' labelText='Tla' onChange={handleChange} />
        <Input
          name='image'
          type='file'
          labelText='Image'
          onChange={handleChange}
        />
        <Input
          name='address'
          type='text'
          placeholder={team.address}
          labelText='Address'
          onChange={handleChange}
        />
        <Input
          name='phone'
          type='text'
          labelText='Phone'
          onChange={handleChange}
        />
        <Input
          name='email'
          type='email'
          labelText='Email'
          onChange={handleChange}
        />
        <Input
          name='website'
          type='text'
          labelText='Website'
          onChange={handleChange}
        />
        <Input
          name='founded'
          type='number'
          labelText='Founded'
          onChange={handleChange}
        />
        <Input
          name='Stadium'
          type='text'
          labelText='Stadium'
          onChange={handleChange}
        />
        <Input
          name='colors'
          type='text'
          labelText='Colors'
          onChange={handleChange}
        />

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default FormEdit
