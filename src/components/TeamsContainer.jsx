import useGetTeams from '../hooks/useGetTeams'
import TeamRow from './TeamRow'

function TeamsContainer() {
  const { teams, setUpdateTeams } = useGetTeams()

  return (
    <table className='w-full text-center table-auto border-separate border-spacing-x-1 bg-slate-800 text-slate-300 shadow-sm border-2 border-y-8 md:border-8 border-slate-800 mb-8'>
      <thead className='font-semibold bg-slate-700'>
        <tr>
          <th className='p-4 py-2'>ID</th>
          <th className='p-4 py-2'>Name</th>
          <th className='p-4 py-2 hidden md:table-cell'>TLA</th>
          <th className='p-4 py-2 hidden md:table-cell'>Country</th>
          <th className='p-4 py-2'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {teams.map(team => (
          <TeamRow key={team.id} team={team} setUpdateTeams={setUpdateTeams} />
        ))}
      </tbody>
    </table>
  )
}

export default TeamsContainer
