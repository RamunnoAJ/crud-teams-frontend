import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Team from './pages/Team'
import FormEdit from './pages/FormEdit'

function App() {
  return (
    <div className='bg-[#262626] text-neutral-200 h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/teams/:id' element={<Team />} />
          <Route path='/teams/:id/edit' element={<FormEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
