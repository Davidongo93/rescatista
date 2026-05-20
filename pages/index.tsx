import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import { motion } from "framer-motion";
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
        <meta property="og:image" content="/fallback.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/fallback.jpg" />
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
            <Link href="/colombia-vertical">
              <div className="mt-6 rounded-lg border border-orange-400/60 hover:border-orange-400 transition overflow-hidden cursor-pointer">
                <Image
                  src="/fundacionColombiaVertical.jpg"
                  alt="Colombia Vertical"
                  width={100}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
            </Link>
            <div className="mt-6 flex justify-center gap-4">
              <Social/>
            </div>
          </div>
        </div>

        {/* Pulsing scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/60">
          <FontAwesomeIcon icon={faChevronDown} className="w-8 h-8" />
        </div>
      </div>

      {/* Colombia Vertical Video Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-black/20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full max-w-5xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Colombia Vertical en Acción
          </h2>
          <p className="text-white/80 text-center text-lg mb-12">
            Explora el mundo del arborismo recreativo y profesional
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Documentary */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="rounded-lg overflow-hidden"
            >
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/m4rjfOJspfs"
                  className="absolute inset-0 w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Documental Colombia Vertical"
                />
              </div>
              <p className="text-white text-center mt-4 font-semibold">Documental Colombia Vertical</p>
            </motion.div>

            {/* Trailer */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="rounded-lg overflow-hidden"
            >
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/iMnyO3NEhEY"
                  className="absolute inset-0 w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Tráiler Colombia Vertical"
                />
              </div>
              <p className="text-white text-center mt-4 font-semibold">Tráiler Colombia Vertical</p>
            </motion.div>
          </div>

          <div className="text-center pt-8">
            <Link href="/colombia-vertical">
              <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition">
                Conoce más sobre Colombia Vertical
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};
export default Page;
