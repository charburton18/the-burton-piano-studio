import NavBar from "../Components/NavBar"

function Home() {

  return (
    <>
    <NavBar></NavBar>
    <div className="bg-zinc-900 w-full h-full">
      <div className="flex justify-center p-8">
        <h1 className="text-white text-7xl font-thin">The Burton Piano Studio</h1>
      </div>
    </div>

    <section className="flex justify-center">
      <div className="bg-gray-500 flex justify-center flex-col p-8">
        <h2 className="text-white text-5xl font-thin text-center">Welcome!</h2>
        <br></br>
        <p className="text-white font-light text-3xl text-center">Welcome to our studio!</p>
      </div>
    </section>


      <div className="fixed bottom-0">
        <img className="w-full h-full object-bottom" src=".././piano-studio-images/piano-public-domain-cropped.jpg"></img>
      </div>
    </>
  )
}

export default Home