import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import { send } from '../services/api'
import Team from '../entities/Team'

Form.propTypes = {
  type: PropTypes.oneOf(['create', 'edit']).isRequired,
  team: PropTypes.oneOfType([PropTypes.instanceOf(Team), PropTypes.array]),
  onSuccess: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
}

function Form({ type, team, onSuccess, onError }) {
  const [teamData, setTeamData] = useState({})
  const [imageFile, setImageFile] = useState(null)
  const title = type === 'create' ? 'Create Team' : 'Edit Team'
  const httpMethod = type === 'create' ? 'POST' : 'PATCH'

  useEffect(() => {
    document.title = title
  })

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
      const response = await send(team?.id || 'create', formData, httpMethod)
      if (!response.ok) throw new Error(response.statusText)
      onSuccess()
    } catch (error) {
      onError()
    }
  }

  return (
    <>
      <form
        encType='multipart/form-data'
        className='flex flex-col justify-center items-center gap-2 py-8'
        onSubmit={handleSubmit}>
        <h1 className='text-3xl font-medium'>
          {title === 'Create Team' ? 'Create Team' : `Edit ${team?.name}`}
        </h1>

        <Input
          name='name'
          type='text'
          value={team?.name}
          labelText='Name'
          onChange={handleChange}
        />
        <Input
          name='country'
          type='text'
          value={team?.country}
          labelText='Country'
          onChange={handleChange}
        />
        <Input
          name='shortName'
          type='text'
          value={team?.shortName}
          labelText='Short Name'
          onChange={handleChange}
        />
        <Input
          name='tla'
          type='text'
          value={team?.tla}
          labelText='Tla'
          onChange={handleChange}
        />
        <Input
          name='image'
          type='file'
          labelText='Image'
          onChange={handleChange}
        />
        <Input
          name='address'
          type='text'
          value={team?.address}
          labelText='Address'
          onChange={handleChange}
        />
        <Input
          name='phone'
          type='text'
          value={team?.phone}
          labelText='Phone'
          onChange={handleChange}
        />
        <Input
          name='email'
          type='email'
          value={team?.email}
          labelText='Email'
          onChange={handleChange}
        />
        <Input
          name='website'
          type='text'
          value={team?.website}
          labelText='Website'
          onChange={handleChange}
        />
        <Input
          name='founded'
          type='number'
          value={team?.founded}
          labelText='Founded'
          onChange={handleChange}
        />
        <Input
          name='Stadium'
          type='text'
          value={team?.venue}
          labelText='Stadium'
          onChange={handleChange}
        />
        <Input
          name='colors'
          type='text'
          value={team?.clubColors}
          labelText='Colors'
          onChange={handleChange}
        />

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Form
