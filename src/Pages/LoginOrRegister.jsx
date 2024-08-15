import NavBar from "../Components/NavBar"

function LoginOrRegister() {

  return (
    <>
      <NavBar></NavBar>
      <div className="w-full h-full">
      <div className="flex justify-center p-8">
        <h1 className="text-white text-7xl font-thin">Login/Register</h1>
      </div>
    </div>
    </>
  )
}

export default LoginOrRegister