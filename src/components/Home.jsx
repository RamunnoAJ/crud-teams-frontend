import { Link } from 'react-router-dom'
import useGetTeams from '../hooks/useGetTeams'

function Home() {
  const { teams } = useGetTeams()

  return (
    <>
      <h1>Teams</h1>
      <ul>
        {teams.map(team => (
          <li key={team.id}>
            <Link to={`/teams/${team.id}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home
