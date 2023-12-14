import { toast } from 'react-toastify'
import { PropTypes } from 'prop-types'
import { resetTeams } from '../services/api'
import Button from './Button'

ResetButton.propTypes = {
  setUpdateTeams: PropTypes.func,
}

function ResetButton({ setUpdateTeams = () => {} }) {
  async function handleClick() {
    try {
      await resetTeams()
      toast.success('Teams resetted successfully', {
        onClose: () => setUpdateTeams(prev => !prev),
      })
    } catch (error) {
      toast.error('Error resetting teams')
    }
  }

  return (
    <Button onClick={handleClick} color='blue'>
      Reset Teams
    </Button>
  )
}

export default ResetButton
