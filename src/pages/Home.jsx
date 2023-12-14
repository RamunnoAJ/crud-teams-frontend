import { useEffect } from 'react'
import ResetButton from '../components/ResetButton'
import TeamsContainer from '../components/TeamsContainer'
import useGetTeams from '../hooks/useGetTeams'
import AddButton from '../components/AddButton'

function Home() {
  const { teams, setUpdateTeams } = useGetTeams()

  useEffect(() => {
    document.title = 'Teams Manager'
  })

  return (
    <main className='flex flex-col justify-center items-center gap-4 p-6 mx-auto max-w-7xl bg-[#262626] w-full text-neutral-200'>
      <h1 className='text-3xl md:text-5xl font-bold uppercase'>Teams</h1>
      <div className='flex flex-row gap-4 items-center justify-between '>
        <p>There are {teams.length} teams</p>
        <ResetButton setUpdateTeams={setUpdateTeams} />
        <AddButton />
      </div>
      <TeamsContainer teams={teams} setUpdateTeams={setUpdateTeams} />
    </main>
  )
}

export default Home
