import { useState, useEffect } from 'react'
import { getDataFromDB } from '../utils/getDataFromDB'

function useGetTeams() {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    async function getTeams() {
      const teamsData = await getDataFromDB('/teams')
      setTeams(teamsData)
    }

    getTeams()
  })

  return { teams }
}

export default useGetTeams
