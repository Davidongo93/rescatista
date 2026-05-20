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
        <meta property="og:image" content="/fallback.jpg" />
      </Head>
      <NavBar/>
      <BackgroundVideo src="https://res.cloudinary.com/de43jseoy/video/upload/v1704412192/xbtekdxt32y4xknarqiv.mp4" />

      <main className="relative z-10 mx-auto max-w-5xl pt-24 pb-32 px-4">
        <div className="mb-16 text-center">
          <p className="text-sm text-brand-orange-400 font-semibold uppercase tracking-[0.3em] mb-3">
            Recorrido profesional
          </p>
          <h1 className="text-display-xl font-display text-white mb-4">
            Mi <span className="gradient-text-fire">experiencia</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Más de 15 años especializándome en rescate, bombería e iniciativas
            humanitarias.
          </p>
        </div>

        <Timeline experiences={experiences} />
      </main>
      <Footer/>
    </>
  );
}
