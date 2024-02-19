// import landingPage from "./assets/images/landingpage.png";
import logo from "/images/logo.png";

function App() {
  return (
    <>
      <div className="fixed bg-landing-page bg-cover bg-center h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-neutral-400 opacity-45"></div>
        <div className="flex flex-col justify-center items-center h-full w-full">
          <h1 className="hidden">MARTENA GNATOLOGIA & POSTURA</h1>
          <img
            src={logo}
            alt="Martena Gnalogia & Postura"
            className="w-1/2 md:w-1/3 lg:w-1/4"
          />
        </div>
      </div>
    </>
  );
}

export default App;
