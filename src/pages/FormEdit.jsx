import PropTypes from 'prop-types'
import Input from '../components/Input'
import useGetTeamByID from '../hooks/useGetTeamByID'
import { useParams } from 'react-router-dom'

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

  return (
    <form className='flex flex-col justify-center items-center gap-2'>
      <h1>
        Edit team: #{id} - {team.name}
      </h1>

      <Input name='name' type='text' placeholder={team.name} labelText='Name' />
      <Input
        name='country'
        type='text'
        placeholder={team.country}
        labelText='Country'
      />
      <Input
        name='shortName'
        type='text'
        placeholder={team.shortName}
        labelText='Short Name'
      />
      <Input name='tla' type='text' labelText='Tla' />
      <Input name='image' type='file' labelText='Image' />
      <Input
        name='address'
        type='text'
        placeholder={team.address}
        labelText='Address'
      />
    </form>
  )
}

export default FormEdit
