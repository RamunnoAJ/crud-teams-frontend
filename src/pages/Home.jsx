import ResetButton from '../components/ResetButton'
import TeamsContainer from '../components/TeamsContainer'
import useGetTeams from '../hooks/useGetTeams'

function Home() {
  const { teams, setUpdateTeams } = useGetTeams()

  return (
    <main className='flex flex-col justify-center items-center gap-4 py-6 w-11/12 mx-auto max-w-7xl'>
      <h1 className='text-3xl md:text-5xl font-bold uppercase'>Teams</h1>
      <ResetButton setUpdateTeams={setUpdateTeams} />
      <TeamsContainer teams={teams} setUpdateTeams={setUpdateTeams} />
    </main>
  )
}

export default Home
