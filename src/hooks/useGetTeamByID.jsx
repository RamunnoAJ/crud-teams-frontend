import { useState, useEffect } from 'react'
import { getDataFromDB } from '../utils/getDataFromDB'

function useGetTeamByID(id) {
  const [team, setTeam] = useState([])

  useEffect(() => {
    const getTeam = async () => {
      const teamSelected = await getDataFromDB(`/teams/${id}`)
      setTeam(teamSelected)
    }

    getTeam()
  }, [id])

  return { team }
}

export default useGetTeamByID
