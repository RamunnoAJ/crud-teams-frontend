import { deleteTeam } from '../services/api'

function useDeleteTeam() {
  async function onDeleteTeam(id) {
    try {
      const response = await deleteTeam(id)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  return { onDeleteTeam }
}

export default useDeleteTeam
