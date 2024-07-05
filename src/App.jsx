import NavBar from "./Components/NavBar"
import Home from "./Pages/Home"
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <NavBar></NavBar>
        <Route path='/' element={<Home></Home>} />
      </Routes>
    </>
  )
}

export default App