import { PropTypes } from 'prop-types'
import TeamRow from './TeamRow'

TeamsContainer.propTypes = {
  teams: PropTypes.array.isRequired,
  setUpdateTeams: PropTypes.func.isRequired,
}

function TeamsContainer({ teams, setUpdateTeams }) {
  return (
    teams && (
      <div className='flex flex-col rounded-lg border border-neutral-500'>
        <div className='overflow-x-auto p-4'>
          <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='min-w-full table-auto text-left text-sm shadow-sm mb-8'>
                <thead className='border-b border-neutral-500 font-bold'>
                  <tr>
                    <th className='px-6 py-4'>#</th>
                    <th className='px-6 py-4'>Name</th>
                    <th className='px-6 py-4 hidden md:table-cell'>TLA</th>
                    <th className='px-6 py-4 hidden md:table-cell'>Country</th>
                    <th className='px-6 py-4 text-center'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {teams &&
                    teams.map(team => (
                      <TeamRow
                        key={team.id}
                        team={team}
                        setUpdateTeams={setUpdateTeams}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default TeamsContainer
