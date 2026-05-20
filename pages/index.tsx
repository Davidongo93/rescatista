import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { NextPage } from "next";
import NavBar from "../components/navBar/NavBar";
import Social from "../components/social/Social";
import BackgroundVideo from "../components/BackgroundVideo";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kevin Alexander Galeano — Rescatista, Bombero, Instructor</title>
        <meta
          name="description"
          content="Kevin Galeano Barbosa: Rescatista especializado, bombero instructor con 15+ años de experiencia en rescate vertical, montaña e incendios forestales."
        />
        <meta property="og:title" content="Kevin Alexander Galeano — Rescatista" />
        <meta property="og:description" content="Rescatista, bombero especializado e instructor de rescate" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og-image.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Kevin Alexander Galeano Barbosa',
              jobTitle: ['Rescatista', 'Bombero', 'Instructor'],
              url: 'https://rescatista.vercel.app',
              sameAs: [
                'https://www.instagram.com/judasgaleano/',
                'https://www.facebook.com/judas.a.galeano',
                'https://www.youtube.com/channel/UCicAuv0Aylu-BldY8OAkB3A',
                'https://www.tiktok.com/@judasgaleano',
              ],
            }),
          }}
        />
      </Head>
      <NavBar />
      <BackgroundVideo src="https://res.cloudinary.com/de43jseoy/video/upload/v1707266459/xtrj45mhlwpb7m0dosgt.mp4" />

      <div className="relative min-h-screen flex items-center justify-end z-10 px-4">
        {/* Contenedor del contenido superpuesto */}
        <div className="max-w-md rounded-lg bg-black/60 border border-indigo-500/30 p-6 text-white backdrop-blur-md">
          <div className="text-center">
            <h1 className="mb-2 text-3xl font-bold">Kevin Alexander Galeano Barbosa</h1>
            <p className="mb-6 text-lg text-orange-400">
              Bombero • Rescatista • Instructor
            </p>
            <div className="space-y-3">
              <a
                href="mailto:espeletiafria@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                <span>espeletiafria@gmail.com</span>
              </a>
              <a
                href="https://wa.me/573003485579"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-lg bg-orange-600 px-4 py-2 text-white transition hover:bg-orange-700"
              >
                <FontAwesomeIcon icon={faPhone} className="text-xl" />
                <span>+57 300 348 5579</span>
              </a>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <Social/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
