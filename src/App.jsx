import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Team from './components/Team'

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
