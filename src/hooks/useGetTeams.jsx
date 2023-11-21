import { useState, useEffect } from 'react'
import { get } from '../services/api'

function useGetTeams() {
  const [teams, setTeams] = useState([])
  const [updateTeams, setUpdateTeams] = useState(false)

  useEffect(() => {
    async function getTeams() {
      try {
        const teamsData = await get('/teams')
        setTeams(teamsData)
      } catch (error) {
        console.error('Error fetching the data:', error)
      }
    }

    getTeams()
  }, [updateTeams])

  return { teams, setUpdateTeams }
}

export default useGetTeams
