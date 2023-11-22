import Team from '../entities/Team'

/**
 * @param {Object} apiData
 * @returns {import('../entities/team').Team}
 */
export default function teamsMapper(apiData) {
  const {
    id,
    name,
    country,
    shortName,
    tla,
    crestUrl,
    address,
    phone,
    website,
    email,
    founded,
    clubColors,
    venue,
    lastUpdated,
  } = apiData

  return new Team(
    id,
    name,
    country,
    shortName,
    tla,
    crestUrl,
    address,
    phone,
    website,
    email,
    founded,
    clubColors,
    venue,
    lastUpdated,
  )
}
