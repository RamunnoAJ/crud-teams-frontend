const API_URL = import.meta.env.VITE_BACKEND_URL

/**
 * @param {String} url
 * @returns {import('../entities/team').Team}
 */
export async function get(url) {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: 'GET',
    })

    const result = await response.json()
    return result
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @param {Number} id
 */
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

export async function resetTeams() {
  try {
    await fetch(`${API_URL}/teams/reset`, {
      method: 'POST',
    })
  } catch (error) {
    console.log(error)
  }
}

/**
 * @param {Number} id
 * @param {import('../entities/team').Team} team
 * @param {String} method
 */
export async function send(id, team, method) {
  try {
    const response = await fetch(`${API_URL}/teams/${id}`, {
      method: method,
      body: team,
    })
    return response
  } catch (error) {
    console.error(error)
  }
}
