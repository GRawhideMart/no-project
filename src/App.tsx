// import landingPage from "./assets/images/landingpage.png";
import Header from "./components/Header.component";
import { useScrollSnap } from "./hooks/useScrollSnap";
import logo from "/images/logo.png";

function App() {
  const mainRef = useScrollSnap();

  return (
    <>
      <Header />
      <main ref={mainRef}>
        <section className="landing-page overflow-hidden">
          <div className="relative bg-landing-page bg-scroll bg-cover bg-center h-screen w-screen">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-amber-500 opacity-35"></div>
            <div className="flex flex-col justify-center items-center h-full w-full">
              <img
                src={logo}
                alt="Martena Gnalogia & Postura"
                className="w-1/2 md:w-1/3 lg:w-1/4"
              />
              <h1 className="hidden">MARTENA GNATOLOGIA & POSTURA</h1>
            </div>
          </div>
        </section>

        <div>OVERFLOW</div>
      </main>
    </>
  );
}

export default App;
