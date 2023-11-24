import { useState, useEffect } from 'react'
import { get } from '../services/api'

function useGetTeamByID(id) {
  const [team, setTeam] = useState([])

  useEffect(() => {
    const getTeam = async () => {
      const teamSelected = await get(`/teams/${id}`)
      setTeam(teamSelected)
    }

    getTeam()
  }, [id])

  return { team }
}

export default useGetTeamByID
