import { useState, useEffect } from 'react'
import { get } from '../services/api'
import teamsMapper from '../mappers/teams'

function useGetTeams() {
  const [teams, setTeams] = useState([])
  const [updateTeams, setUpdateTeams] = useState(false)

  useEffect(() => {
    async function getTeams() {
      try {
        const teamsData = await get('/teams')
        const teamsMapped = teamsData.map(t => teamsMapper(t))
        setTeams(teamsMapped)
      } catch (error) {
        console.error('Error fetching the data:', error)
      }
    }

    getTeams()
  }, [updateTeams])

  return { teams, setUpdateTeams }
}

export default useGetTeams
