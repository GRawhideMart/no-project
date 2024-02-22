import Header from "./components/Header.component";
import SEO from "./components/SEO.component";
import { TextGenerateEffect } from "./components/TextGenerateEffect.component";
import { useScrollSnap } from "./hooks/useScrollSnap";
import logo from "/images/logo.png";
import personSmiling from "/images/person_smiling.png";

function App() {
  const mainRef = useScrollSnap();

  return (
    <>
      <Header />
      <main ref={mainRef}>
        <section className="landing-page overflow-hidden">
          <SEO
            title="Martena Gnalogia & Postura: Gnatologo e Posturologo a Carmiano, Lecce"
            description="Specialisti in gnatologia e posturologia dal 1993. Allevia il dolore ATM e migliora la postura a Carmiano. Contattaci oggi!"
            type="website"
            name="Martena Gnalogia & Postura"
          />
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

        <section className="about-us overflow-hidden">
          <SEO
            title="Martena Gnalogia & Postura: Chi Siamo | Carmiano, Lecce"
            description="Gnatologi e posturologi esperti a Carmiano dal 1993. Vieni a scoprire come possiamo aiutarti a migliorare la tua postura e alleviare i disturbi ATM."
            type="article"
            name="Martena Gnalogia & Postura"
          />
          <div className="bg-watermark bg-scroll bg-transparent bg-center h-screen w-screen p-16">
            <div className="absolute inset-0 bg-gradient-to-t from-white to-emerald-500 opacity-90 p-16">
              <div className="flex flex-col h-screen">
                <h2 className="py-20 text-3xl uppercase font-bold px-16">
                  Permettici di presentarci
                </h2>
                <div className="flex justify-center items-center px-16">
                  <TextGenerateEffect
                    className="text-green-800 mt-4 text-xl"
                    words="Dal 1993 colleghiamo i tuoi disagi
temporo-mandibolari all'impostazione
della tua bocca. Dire che siamo solo
dentisti è come dire che Leonardo era
solo un pittore!"
                  />
                  <img
                    src={personSmiling}
                    alt="A person smiling"
                    className="w-1/3"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
