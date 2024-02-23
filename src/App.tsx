import Header from "./components/Header.component";
import SEO from "./components/SEO.component";
import { LazyTextAnimation } from "./components/LazyTextGenerateEffect.component";
import { useScrollSnap } from "./hooks/useScrollSnap";
import logo from "/images/logo.png";
import personSmiling from "./assets/person_smiling.png";
import { cn } from "./utils/cn";
import LandingPageImage from "./assets/landingpage.png";
import backgroundImage from "./assets/bg.png";
import aboutImage from "./assets/about.png";
import telecranium from "./assets/telecranium.png";
import intraoralScanner from "./assets/intraoral_scanner.png";
import bite from "./assets/bite.png";
import { InfiniteMovingCards } from "./components/InfiniteMovingCards.component";
import Footer from "./components/Footer.component";

function App() {
  const mainRef = useScrollSnap();

  const services = [
    {
      image: telecranium,
      name: "Telecranio",
      description:
        "Costruiamo un modello del tuo cranio per i problemi mandibolari",
    },
    {
      image: intraoralScanner,
      name: "Scanner Intraorale",
      description: "Scansione 3D della tua bocca per una diagnosi precisa",
    },
    {
      image: bite,
      name: "Bite",
      description:
        "Risolviamo le tue cefalee facendoti respirare meglio la notte",
    },
  ];

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
          <div className="relative h-screen w-screen">
            <div className="amber-overlay"></div>
            <img
              src={LandingPageImage}
              alt="Background Landing Page"
              className="absolute inset-0 w-full h-full background-image object-cover object-center"
            />
            <div className="relative flex flex-col justify-center items-center h-full w-full z-10">
              <h2 className="font-serif pt-16 px-16 text-center font-black text-3xl text-amber-100">
                <LazyTextAnimation words="info@cdo-online.it - Via Lecce, 89 - Carmiano (LE)" />
              </h2>
              <h3 className="font-serif pb-16 text-center font-black text-lg text-amber-100">
                <LazyTextAnimation words="+39 333 454 63 20" />
              </h3>
              <img
                src={logo}
                alt="Martena Gnalogia & Postura"
                className="logo-image"
              />
              <div className="-m-5">
                <h1 className="inline-block font-serif text-xl md:text-4xl text-amber-100 text-center uppercase font-extrabold p-16">
                  <LazyTextAnimation
                    words="Specialisti in gnatologia e posturologia dal 1993. Allevia il
                  dolore ATM e migliora la postura a Carmiano. Contattaci oggi!"
                  />
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="hero-section overflow-hidden">
          <SEO
            title="Martena Gnalogia & Postura: Chi Siamo | Carmiano, Lecce"
            description="Gnatologi e posturologi esperti a Carmiano dal 1993. Vieni a scoprire come possiamo aiutarti a migliorare la tua postura e alleviare i disturbi ATM."
            type="article"
            name="Martena Gnalogia & Postura"
          />
          <div className="relative h-screen w-screen p-16">
            <div className="green-overlay"></div>
            <img
              src={backgroundImage}
              alt="Background texture"
              className="absolute inset-0 w-full h-full background-image object-contain object-center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 h-screen md:pb-52">
              <h2 className="pt-16 text-3xl uppercase font-bold md:px-16 col-span-1 md:col-span-2 z-10">
                Permettici di presentarci
              </h2>
              <div className="md:px-16 col-span-1 md:col-span-2 md:flex md:items-center z-10">
                <LazyTextAnimation
                  className={cn("text-green-800 mt-4 text-xl md:w-2/3 z-10")}
                  words="Dal 1993 colleghiamo i tuoi disagi temporo-mandibolari all'impostazione della tua bocca. Dire che siamo solo dentisti è come dire che Leonardo era solo un pittore!"
                />
                <img
                  src={personSmiling}
                  alt="A person smiling"
                  className="w-fit md:w-1/3 mt-4 rounded-full border-green-800 border-4 z-10"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="about overflow-hidden">
          <SEO
            title="Martena Gnalogia & Postura: Servizi | Carmiano, Lecce"
            description="Specialisti in gnatologia e posturologia a Carmiano. Scopri i nostri servizi per alleviare il dolore ATM e migliorare la tua postura."
            type="article"
            name="Martena Gnalogia & Postura"
          />
          <div className="relative h-screen w-screen p-16">
            <div className="green-overlay"></div>
            <img
              src={backgroundImage}
              alt="Background texture"
              className="absolute inset-0 w-full h-full background-image object-contain object-center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 h-screen md:pb-52">
              <h2 className="pt-16 text-3xl uppercase font-bold md:px-16 col-span-1 md:col-span-2 z-10">
                I nostri dottori curano il tuo benessere a 360°
              </h2>
              <div className="md:px-16 col-span-1 md:col-span-2 md:flex md:items-center z-10">
                <img
                  src={aboutImage}
                  alt="A person smiling"
                  className="w-48 h-48 md:w-96 md:h-96 mt-4 object-cover rounded-full border-green-800 border-4 z-10"
                />
                <h2 className="text-green-800 mt-4 text-xl md:w-2/3 z-10 md:px-16">
                  <LazyTextAnimation
                    words="Forniamo cure ortodontiche,
gnatologiche, posturologiche e
podologiche. Igiene, ortodonzia,
gnatologia, podologia, qualsiasi -ologia
che tu voglia la puoi trovare da noi!"
                  />
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="services overflow-hidden">
          <SEO
            title="Martena Gnalogia & Postura: Servizi | Carmiano, Lecce"
            description="Specialisti in gnatologia e posturologia a Carmiano. Scopri i nostri servizi per alleviare il dolore ATM e migliorare la tua postura."
            type="article"
            name="Martena Gnalogia & Postura"
          />
          <div className="relative h-screen w-screen p-16">
            <div className="green-overlay"></div>
            <img
              src={backgroundImage}
              alt="Background texture"
              className="absolute inset-0 w-full h-full background-image object-contain object-center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 h-screen md:flex md:flex-col md:justify-center md:items-center">
              <h2 className="pt-16 text-3xl uppercase font-bold md:px-16 col-span-1 md:col-span-2 z-10 md:pb-11">
                I nostri servizi
              </h2>
              <InfiniteMovingCards
                items={services}
                speed="slow"
                direction="left"
                className="col-span-1 md:col-span-2 px-0"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {/** WEBSITE DRAWN AND CODED BY GIULIO MARIO MARTENA. ALL RIGHTS RESERVED. giulio.mario.martena@cdo-online.it */}
    </>
  );
}

export default App;
