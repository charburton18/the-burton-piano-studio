import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import LoginOrRegister from "./Pages/LoginOrRegister"
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login-register' element={<LoginOrRegister/>} />
      </Routes>
    </>
  )
}

export default App