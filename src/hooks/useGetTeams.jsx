import { useState, useEffect } from 'react'
import { get } from '../services/api'

function useGetTeams() {
  const [teams, setTeams] = useState([])
  const [updateTeams, setUpdateTeams] = useState(false)

  async function getTeams() {
    try {
      const teamsData = await get('/teams')
      console.log(teamsData)
      setTeams(teamsData)
    } catch (error) {
      console.error('Error fetching the data:', error)
    }
  }

  useEffect(() => {
    getTeams()
  }, [updateTeams])

  return { teams, setUpdateTeams, updateTeams }
}

export default useGetTeams
