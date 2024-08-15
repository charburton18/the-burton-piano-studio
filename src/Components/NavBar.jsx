import {Link} from 'react-router-dom'

function NavBar() {

  return (
    <>
      <nav className="bg-zinc-900 p-5 flex justify-between px-10 outline outline-gray-500 outline-1">
        <Link to="/"><p className="text-zinc-200">Home</p></Link>
        <Link to="/about"><p className="text-zinc-200">About</p></Link>
        <Link to="/contact"><p className="text-zinc-200">Contact</p></Link>
        <Link to="/login-register"><p className="text-zinc-200">Login/Register</p></Link>
      </nav>
    </>
  )
}

export default NavBar