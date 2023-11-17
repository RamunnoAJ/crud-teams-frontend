import { useState, useEffect } from 'react'
import { getDataFromDB } from '../utils/getDataFromDB'

function useGetTeams() {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)
  const [updateTeams, setUpdateTeams] = useState(false)

  const getTeams = async () => {
    setLoading(true)
    try {
      const teamsData = await getDataFromDB('/teams')
      setTeams(teamsData)
    } catch (error) {
      console.error(error)
    }

    setLoading(false)
  }

  useEffect(() => {
    getTeams()
  }, [updateTeams])

  return { teams, setUpdateTeams, loading }
}

export default useGetTeams
