import { PropTypes } from 'prop-types'
import { resetTeams } from '../services/api'
import Button from './Button'

ResetButton.propTypes = {
  setUpdateTeams: PropTypes.func,
}

function ResetButton({ setUpdateTeams = () => {} }) {
  async function handleClick() {
    await resetTeams()
    setUpdateTeams(prev => !prev)
  }

  return <Button onClick={handleClick}>Reset Teams</Button>
}

export default ResetButton
