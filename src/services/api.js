const API_URL = import.meta.env.VITE_BACKEND_URL

export async function get(url) {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error fetching the data:', error)
    throw error
  }
}

export async function deleteTeam(id) {
  try {
    const response = await fetch(`${API_URL}/teams/${id}`, {
      method: 'DELETE',
    })

    return response
  } catch (error) {
    console.log(error)
  }
}
