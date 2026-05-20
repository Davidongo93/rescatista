import Head from "next/head";
import Timeline from "../../components/timeline/Timeline";
import experiences from "../../components/experienceCard/experiences";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import BackgroundVideo from "../../components/BackgroundVideo";

export default function ExperiencePage() {
  return (
    <>
      <Head>
        <title>Experiencia — Kevin Alexander Galeano Bombero Rescatista</title>
        <meta
          name="description"
          content="Experiencia profesional de Kevin Galeano: rescatista, bombero especializado, instructor y humanitario con 15+ años de experiencia."
        />
        <meta property="og:title" content="Experiencia — Kevin Alexander Galeano" />
        <meta
          property="og:description"
          content="Recorrido profesional en rescate, bombería e iniciativas humanitarias"
        />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <NavBar/>
      <BackgroundVideo src="https://res.cloudinary.com/de43jseoy/video/upload/v1704412192/xbtekdxt32y4xknarqiv.mp4" />

      <main className="relative z-10 mx-auto max-w-5xl mt-20 mb-32 px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Mi Experiencia
          </h1>
          <p className="text-white/80 text-lg">
            Más de 15 años especializándome en rescate, bombería e iniciativas humanitarias
          </p>
        </div>

        <Timeline experiences={experiences} />
      </main>
      <Footer/>
    </>
  );
}
