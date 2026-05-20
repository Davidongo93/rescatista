import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp as brandWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faTree, faMountain, faHeart } from '@fortawesome/free-solid-svg-icons'

const faWhatsapp = brandWhatsapp as unknown as IconDefinition
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
import BackgroundVideo from '../../components/BackgroundVideo'

const ColombiaVertical: NextPage = () => {
  return (
    <>
      <Head>
        <title>Colombia Vertical — Arborismo Recreativo y Profesional</title>
        <meta
          name="description"
          content="Colombia Vertical: Arborismo recreativo y profesional en Colombia. Cursos, expediciones y actividades de escalada en altura."
        />
        <meta property="og:title" content="Colombia Vertical — Arborismo" />
        <meta property="og:description" content="Arborismo recreativo y profesional en Colombia" />
        <meta property="og:image" content="/fallback.jpg" />
      </Head>

      <NavBar />
      <BackgroundVideo src="https://res.cloudinary.com/de43jseoy/video/upload/v1704412192/xbtekdxt32y4xknarqiv.mp4" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center z-10 px-4">
        <div className="text-center space-y-6 max-w-2xl">
          <Image
            src="/fundacionColombiaVertical.jpg"
            alt="Colombia Vertical Logo"
            width={200}
            height={200}
            className="mx-auto rounded-lg"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Colombia Vertical
          </h1>
          <p className="text-xl md:text-2xl text-orange-400 font-semibold">
            Arborismo Recreativo y Profesional
          </p>
          <p className="text-lg text-white/80 max-w-xl">
            Descubre la experiencia de la escalada en altura con los mejores profesionales en Colombia
          </p>
          <div className="flex gap-4 justify-center flex-wrap pt-6">
            <a
              href="https://wa.me/573003485579"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-lg bg-orange-600 px-6 py-3 text-white transition hover:bg-orange-700"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
              <span>Contáctanos</span>
            </a>
            <a
              href="mailto:espeletiafria@gmail.com"
              className="flex items-center justify-center gap-3 rounded-lg bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700"
            >
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 mx-auto max-w-4xl px-4 py-20">
        <div className="bg-black/60 border border-indigo-500/20 rounded-lg p-8 md:p-12 backdrop-blur-md">
          <h2 className="text-4xl font-bold text-white mb-6">Nuestra Misión</h2>
          <p className="text-white/90 text-lg leading-relaxed mb-4">
            Colombia Vertical es una organización dedicada a promover el arborismo recreativo y profesional en Colombia. Ofrecemos experiencias seguras, educativas e inspiradoras para personas de todas las edades que desean conectar con la naturaleza desde una perspectiva vertical.
          </p>
          <p className="text-white/90 text-lg leading-relaxed">
            Nuestro equipo de profesionales especializados cuenta con amplia experiencia en rescate en altura, técnicas de escalada y gestión de seguridad, garantizando que cada actividad sea memorable y segura.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 mx-auto max-w-5xl px-4 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cursos */}
          <div className="bg-black/60 border border-indigo-500/20 rounded-lg p-8 backdrop-blur-md hover:border-indigo-500/40 transition">
            <div className="mb-4">
              <FontAwesomeIcon icon={faTree} className="text-4xl text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Cursos de Arborismo</h3>
            <p className="text-white/80">
              Aprende técnicas de escalada en altura, seguridad y manejo de equipos con instructores certificados.
            </p>
          </div>

          {/* Expediciones */}
          <div className="bg-black/60 border border-indigo-500/20 rounded-lg p-8 backdrop-blur-md hover:border-indigo-500/40 transition">
            <div className="mb-4">
              <FontAwesomeIcon icon={faMountain} className="text-4xl text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Expediciones</h3>
            <p className="text-white/80">
              Participa en expediciones guidadas en bosques y ecosistemas únicos de Colombia a gran altura.
            </p>
          </div>

          {/* Rescate en Altura */}
          <div className="bg-black/60 border border-indigo-500/20 rounded-lg p-8 backdrop-blur-md hover:border-indigo-500/40 transition">
            <div className="mb-4">
              <FontAwesomeIcon icon={faHeart} className="text-4xl text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Rescate en Altura</h3>
            <p className="text-white/80">
              Capacitación especializada en técnicas de rescate vertical y operaciones en altura.
            </p>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="relative z-10 mx-auto max-w-5xl px-4 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Colombia Vertical en Acción</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Documentary */}
          <div className="rounded-lg overflow-hidden">
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
          </div>

          {/* Trailer */}
          <div className="rounded-lg overflow-hidden">
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
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 mx-auto max-w-4xl px-4 py-20 mb-32">
        <div className="bg-black/60 border border-indigo-500/30 rounded-lg p-8 md:p-12 backdrop-blur-md text-center">
          <h2 className="text-4xl font-bold text-white mb-6">¡Únete a Colombia Vertical!</h2>
          <p className="text-white/90 text-lg mb-8">
            Contáctanos para más información sobre cursos, expediciones y actividades especiales.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/573003485579"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-lg bg-orange-600 px-8 py-3 text-white transition hover:bg-orange-700 text-lg font-semibold"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
              +57 300 348 5579
            </a>
            <a
              href="mailto:espeletiafria@gmail.com"
              className="flex items-center justify-center gap-3 rounded-lg bg-indigo-600 px-8 py-3 text-white transition hover:bg-indigo-700 text-lg font-semibold"
            >
              espeletiafria@gmail.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ColombiaVertical
