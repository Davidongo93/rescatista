import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTree,
  faMountain,
  faShieldHalved,
  faFireFlameCurved,
  faHeartPulse,
  faPersonFalling,
  faWater,
  faBoxOpen,
  faGraduationCap,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import NavBar from '../../components/navBar/NavBar'
import BackgroundVideo from '../../components/BackgroundVideo'
import { Button } from '../../components/ui/Button'
import { WhatsAppFloatingButton } from '../../components/icons/WhatsAppIcon'
import { ColombiaVerticalIcon } from '../../components/icons/ColombiaVerticalIcon'
import { allVideos } from '../../components/data/videos'

// Distinct images per section — none of these duplicate home hero or experience timeline ordering
const SECTION_IMAGES = {
  hero: '/monteluna.jpg',
  frontA:
    'https://res.cloudinary.com/de43jseoy/image/upload/c_fill,w_900,h_700,q_auto,f_auto/v1707277775/kgb/315284902_10159061139693589_2117555199762630088_n_ikvovp.jpg',
  frontB:
    'https://res.cloudinary.com/de43jseoy/image/upload/c_fill,w_900,h_700,q_auto,f_auto/v1707273670/kgb/904326_10151373926768589_453318434_o_q7n5lw.jpg',
  products:
    'https://res.cloudinary.com/de43jseoy/image/upload/c_fill,w_900,h_700,q_auto,f_auto/v1707273666/kgb/18449610_10154611870153589_2539226693417145266_o_opvajs.jpg',
  contact: '/fundacionColombiaVertical.jpg',
}

const ColombiaVertical: NextPage = () => {
  return (
    <>
      <Head>
        <title>Colombia Vertical — Arborismo, Treeline y Sistemas de Protección</title>
        <meta
          name="description"
          content="Fundación Colombia Vertical: arborismo, treeline, sistemas contra caídas y formación profesional. Seguridad industrial, brigadas e interventoría con Kevin Galeano."
        />
        <meta property="og:title" content="Colombia Vertical — Arborismo y Treeline" />
        <meta
          property="og:description"
          content="Empresa de arborismo, treeline y sistemas de protección contra caídas. Comercialización y formación en deportes extremos."
        />
        <meta property="og:image" content="/fundacionColombiaVertical.jpg" />
      </Head>

      <NavBar />
      <BackgroundVideo src="https://res.cloudinary.com/de43jseoy/video/upload/v1704412192/xbtekdxt32y4xknarqiv.mp4" />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center z-10 px-4 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 pointer-events-none"
        />

        <motion.div
          className="relative z-10 text-center max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 150 }}
            className="flex justify-center mb-6"
          >
            <ColombiaVerticalIcon size={88} className="drop-shadow-2xl" />
          </motion.div>

          <p className="text-sm sm:text-base text-brand-orange-400 font-semibold uppercase tracking-[0.3em] mb-4">
            Fundación
          </p>

          <h1 className="text-display-2xl font-display text-white mb-4">
            Colombia <span className="gradient-text">Vertical</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            Arborismo, treeline y sistemas de protección contra caídas.
            Formación profesional y comercialización de equipos para deportes
            extremos y seguridad industrial.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              as="a"
              href="#frentes"
              variant="primary"
              size="lg"
            >
              Conoce nuestros frentes
            </Button>
            <Button
              as="a"
              href="https://wa.me/573003485579"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
            >
              Hablemos por WhatsApp
            </Button>
          </motion.div>
        </motion.div>

        <WhatsAppFloatingButton corner="bottom-right" size={64} />
      </section>

      {/* INTRO — DOS FRENTES */}
      <section
        id="frentes"
        className="relative z-10 mx-auto max-w-6xl px-4 py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-brand-orange-400 font-semibold uppercase tracking-[0.3em] mb-3">
            Mi proyecto
          </p>
          <h2 className="text-display-lg font-display text-white mb-4">
            Dos <span className="gradient-text-fire">frentes</span>{' '}
            profesionales
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Combino mi experiencia bomberil con un proyecto de crecimiento en
            deportes extremos, formación y comercialización de equipos
            especializados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Card Frente A */}
          <motion.a
            href="#frente-a"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative overflow-hidden rounded-2xl glass-card p-8 hover:border-brand-indigo-400/40 transition-all duration-500 hover:shadow-glow-indigo cursor-pointer"
          >
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-brand-indigo-500/20 rounded-full blur-3xl group-hover:bg-brand-indigo-500/30 transition-colors duration-500" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo-500/20 border border-brand-indigo-400/30 mb-5">
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className="w-3 h-3 text-brand-indigo-300"
                />
                <span className="text-xs font-semibold text-brand-indigo-200 uppercase tracking-wider">
                  Sustento actual
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display text-white mb-3">
                Seguridad Industrial &amp; Sector Bomberil
              </h3>
              <p className="text-white/75 leading-relaxed mb-6">
                Interventorías, formaciones especializadas y consultoría en
                primeros auxilios, brigadas, control de incendios y rescates
                de alta complejidad.
              </p>
              <span className="inline-flex items-center gap-2 text-brand-indigo-300 font-semibold group-hover:gap-3 transition-all">
                Ver más
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </motion.a>

          {/* Card Frente B */}
          <motion.a
            href="#frente-b"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative overflow-hidden rounded-2xl glass-card p-8 hover:border-brand-orange-400/40 transition-all duration-500 hover:shadow-glow-orange cursor-pointer"
          >
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-brand-orange-500/20 rounded-full blur-3xl group-hover:bg-brand-orange-500/30 transition-colors duration-500" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange-500/20 border border-brand-orange-400/30 mb-5">
                <FontAwesomeIcon
                  icon={faTree}
                  className="w-3 h-3 text-brand-orange-300"
                />
                <span className="text-xs font-semibold text-brand-orange-200 uppercase tracking-wider">
                  Crecimiento &amp; Futuro
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display text-white mb-3">
                Deporte Extremo, Arborismo &amp; Emprendimiento
              </h3>
              <p className="text-white/75 leading-relaxed mb-6">
                Treeline, sistemas de protección contra caídas, y
                comercialización + formación en arborismo: cuerdas, anclajes,
                cascos, líneas de vida y equipo profesional.
              </p>
              <span className="inline-flex items-center gap-2 text-brand-orange-300 font-semibold group-hover:gap-3 transition-all">
                Ver más
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </motion.a>
        </div>
      </section>

      {/* FRENTE A — SEGURIDAD INDUSTRIAL Y BOMBERIL */}
      <section
        id="frente-a"
        className="relative z-10 mx-auto max-w-7xl px-4 py-24"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-glow-soft border border-white/10 order-2 lg:order-1"
          >
            <Image
              src={SECTION_IMAGES.frontA}
              alt="Operaciones de rescate y seguridad industrial"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-indigo-300 font-bold mb-1">
                Frente A
              </p>
              <p className="text-2xl font-display text-white">
                Operaciones en campo
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 lg:order-2"
          >
            <p className="text-sm text-brand-indigo-300 font-semibold uppercase tracking-[0.3em] mb-3">
              Frente A
            </p>
            <h2 className="text-display-lg font-display text-white mb-6">
              Seguridad Industrial &amp;{' '}
              <span className="text-brand-indigo-300">Sector Bomberil</span>
            </h2>
            <p className="text-white/85 text-lg leading-relaxed mb-8">
              Es mi base actual y se enfoca en{' '}
              <strong className="text-white">
                interventorías y formaciones especializadas
              </strong>{' '}
              para empresas, brigadistas, rescatistas y equipos de respuesta.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: faHeartPulse,
                  title: 'Primeros Auxilios',
                  desc: 'Brigadas, atención prehospitalaria y respuesta inmediata.',
                },
                {
                  icon: faFireFlameCurved,
                  title: 'Control de Incendios',
                  desc: 'Estructurales, forestales y brigadas especializadas.',
                },
                {
                  icon: faPersonFalling,
                  title: 'Rescate Vertical',
                  desc: 'Alturas, montaña y espacios confinados.',
                },
                {
                  icon: faWater,
                  title: 'Rescate Acuático',
                  desc: 'Operaciones en ríos, lagos y aguas vivas.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group flex gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-brand-indigo-400/40 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-brand-indigo-500/30 to-brand-indigo-700/30 border border-brand-indigo-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="w-4 h-4 text-brand-indigo-300"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-white/65 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FRENTE B — COLOMBIA VERTICAL / TREELINE */}
      <section
        id="frente-b"
        className="relative z-10 mx-auto max-w-7xl px-4 py-24"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-sm text-brand-orange-400 font-semibold uppercase tracking-[0.3em] mb-3">
              Frente B
            </p>
            <h2 className="text-display-lg font-display text-white mb-6">
              Deporte Extremo &amp;{' '}
              <span className="text-brand-orange-400">Arborismo</span>
            </h2>
            <p className="text-white/85 text-lg leading-relaxed mb-8">
              Es el proyecto que estoy desarrollando para crecer, generar
              mejores ingresos y proyectar el futuro a través de la{' '}
              <strong className="text-white">
                Fundación Colombia Vertical
              </strong>
              : una empresa dedicada al{' '}
              <strong className="text-brand-orange-300">treeline</strong> y a
              los sistemas de protección contra caídas en deportes extremos.
            </p>

            <div className="space-y-3">
              {[
                {
                  icon: faTree,
                  title: 'Treeline & Arborismo',
                  desc: 'Disciplinas verticales sobre árbol con técnica deportiva y profesional.',
                },
                {
                  icon: faMountain,
                  title: 'Sistemas Contra Caídas',
                  desc: 'Diseño e implementación de protección en deportes extremos y trabajo en alturas.',
                },
                {
                  icon: faGraduationCap,
                  title: 'Formación Especializada',
                  desc: 'Cursos certificados para deportistas, técnicos y operadores.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group flex gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-brand-orange-400/40 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange-500/30 to-brand-orange-700/30 border border-brand-orange-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="w-5 h-5 text-brand-orange-300"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      {item.title}
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-glow-soft border border-white/10"
          >
            <Image
              src={SECTION_IMAGES.frontB}
              alt="Treeline y arborismo Colombia Vertical"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-orange-300 font-bold mb-1">
                Frente B
              </p>
              <p className="text-2xl font-display text-white">
                Treeline &amp; Arborismo
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTOS Y COMERCIALIZACIÓN */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-brand-orange-400 font-semibold uppercase tracking-[0.3em] mb-3">
            Comercialización
          </p>
          <h2 className="text-display-lg font-display text-white mb-4">
            Productos &amp;{' '}
            <span className="gradient-text-fire">equipamiento</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Distribuimos y formamos en equipo certificado de las mejores marcas
            del sector para deportistas, brigadistas y profesionales.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-5 relative aspect-square lg:aspect-auto rounded-3xl overflow-hidden shadow-glow-soft border border-white/10"
          >
            <Image
              src={SECTION_IMAGES.products}
              alt="Equipos profesionales de rescate y arborismo"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo-900/40 via-transparent to-brand-orange-900/40 mix-blend-overlay" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
          >
            {[
              { label: 'Arborismo', desc: 'Equipo deportivo y técnico' },
              { label: 'Anclajes', desc: 'Estructurales y portátiles' },
              { label: 'Cuerdas', desc: 'Dinámicas, estáticas y semi-estáticas' },
              { label: 'Cascos', desc: 'Certificados para deporte y trabajo' },
              { label: 'Líneas de vida', desc: 'Sistemas verticales y horizontales' },
              { label: 'Contra caídas', desc: 'Arnés, retractiles y absorbedores' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                className="group relative p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-orange-400/40 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-orange-500/10 rounded-full blur-2xl group-hover:bg-brand-orange-500/20 transition-colors" />
                <FontAwesomeIcon
                  icon={faBoxOpen}
                  className="w-5 h-5 text-brand-orange-300 mb-3"
                />
                <p className="font-display text-lg text-white mb-1">
                  {item.label}
                </p>
                <p className="text-white/65 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-brand-orange-400 font-semibold uppercase tracking-[0.3em] mb-3">
            Colombia Vertical
          </p>
          <h2 className="text-display-lg font-display text-white">
            En <span className="gradient-text">acción</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {allVideos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl overflow-hidden border border-white/10 shadow-glow-soft"
            >
              <div className="relative aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                  loading="lazy"
                />
              </div>
              <p className="text-white text-center py-4 font-semibold bg-white/[0.03]">
                {video.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative z-10 mx-auto max-w-5xl px-4 py-24 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl glass-card p-8 md:p-14"
        >
          {/* Decorative gradient blobs */}
          <div
            aria-hidden="true"
            className="absolute -top-32 -left-32 w-80 h-80 bg-brand-indigo-500/20 rounded-full blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -right-32 w-80 h-80 bg-brand-orange-500/20 rounded-full blur-3xl"
          />

          <div className="relative grid md:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FontAwesomeIcon
                  icon={faHandshake}
                  className="w-5 h-5 text-brand-orange-400"
                />
                <p className="text-sm text-brand-orange-400 font-semibold uppercase tracking-[0.3em]">
                  Trabajemos juntos
                </p>
              </div>
              <h2 className="text-display-md font-display text-white mb-3">
                ¿Listo para llevar tu equipo o evento al siguiente nivel?
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Solicita una cotización de formación, interventoría o equipo
                profesional certificado.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button
                as="a"
                href="https://wa.me/573003485579"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                +57 300 348 5579
              </Button>
              <Button
                as="a"
                href="mailto:espeletiafria@gmail.com"
                variant="outline"
                size="lg"
              >
                Enviar email
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default ColombiaVertical
