export const BASE_URL = import.meta.env.VITE_BACKEND_URL
/**
 * @param {string} url
 */
export async function getDataFromDB(url) {
  try {
    const response = await fetch(`${BASE_URL}${url}`)
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`)

    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}
