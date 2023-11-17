import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Team from './pages/Team'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/teams/:id' element={<Team />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
