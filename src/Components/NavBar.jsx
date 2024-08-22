import {Link} from 'react-router-dom'

function NavBar() {

  return (
    <>
      <nav className="bg-zinc-900 p-5 flex justify-center px-10 h-100">
        <div className="flex justify-between w-1/2">
          <Link to="/"><p className="text-zinc-200 text-4xl font-thin">Home</p></Link>
          <Link to="/about"><p className="text-zinc-200 text-4xl font-thin">About</p></Link>
          <Link to="/contact"><p className="text-zinc-200 text-4xl font-thin">Contact</p></Link>
          <Link to="/login-register"><p className="text-zinc-200 text-4xl font-thin">Login</p></Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar