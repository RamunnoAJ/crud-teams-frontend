import useGetTeamByID from '../hooks/useGetTeamByID'
import { useParams, Link } from 'react-router-dom'
import MapContainer from './MapContainer'

function Team() {
  const { id } = useParams()

  const { team } = useGetTeamByID(id)

  return (
    <div>
      <img src={team.crestUrl} />
      <p>{team.id}</p>
      <h1>{team.name}</h1>
      <p>{team.country}</p>
      <p>{team.tla}</p>
      <p>{team.shortName}</p>
      <p>{team.address}</p>
      <p>{team.phone}</p>
      <Link to={team.website} target='_blank'>
        {team.website}
      </Link>
      <p>{team.email}</p>
      <p>{team.founded}</p>
      <p>{team.clubColors}</p>
      <p>{team.venue}</p>

      <MapContainer address={team.address} />
    </div>
  )
}

export default Team
