import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Team from './pages/Team'
import FormEdit from './pages/FormEdit'
import Toast from './components/Toast'
import FormCreate from './pages/FormCreate'

function App() {
  return (
    <div className='bg-[#262626] text-neutral-200 min-h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team/create' element={<FormCreate />} />
          <Route path='/teams/:id' element={<Team />} />
          <Route path='/teams/:id/edit' element={<FormEdit />} />
        </Routes>
      </BrowserRouter>
      <Toast />
    </div>
  )
}

export default App
