import { Link } from 'react-router-dom'
import Button from './Button'

function AddButton() {
  return (
    <Button onClick={() => {}} color='green'>
      <Link to='/team/create'>Add Team</Link>
    </Button>
  )
}

export default AddButton
