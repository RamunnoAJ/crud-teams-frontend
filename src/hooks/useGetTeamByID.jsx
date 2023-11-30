import { useState, useEffect } from 'react'
import { get } from '../services/api'
import teamsMapper from '../mappers/teams'

function useGetTeamByID(id) {
  const [team, setTeam] = useState([])

  useEffect(() => {
    const getTeam = async () => {
      const teamSelected = await get(`/teams/${id}`)
      const mappedTeam = teamsMapper(teamSelected)
      setTeam(mappedTeam)
    }

    getTeam()
  }, [id])

  return { team }
}

export default useGetTeamByID
