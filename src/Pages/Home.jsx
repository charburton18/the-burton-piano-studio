import NavBar from "../Components/NavBar"

function Home() {

  return (
    <>
    <NavBar></NavBar>
    <div id="homeImg" className="bg-[url(piano-studio-images/piano-1920x670.jpg)] bg-fixed bg-top bg-no-repeat">
        <div id="emptyDiv" className="min-h-40"></div>
      <div className="flex justify-start align-bottom p-8">
        <h1 className="text-white text-7xl font-thin">The<br></br>Burton<br></br>Piano<br></br>Studio</h1>
      </div>
    </div>

    <section id="homeWhiteSection" className="flex justify-center">
      <div className="flex justify-center flex-col align-middle p-8">
        <h2 className="text-zinc-900 text-5xl font-thin text-center pb-5">Welcome!</h2>
        <p className="text-zinc-900 font-light text-3xl text-center pb-60">Welcome to our studio! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis, nisi sed venenatis mollis, leo felis sagittis libero, at dignissim erat purus a tortor. Pellentesque vel augue massa. Proin euismod ante in euismod aliquam. Vestibulum gravida lectus et nibh gravida aliquam.</p>
      </div>
    </section>

    <footer></footer>
    </>
  )
}

export default Home