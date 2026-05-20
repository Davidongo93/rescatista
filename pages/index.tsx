import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";
import { NextPage } from "next";
import { motion } from "framer-motion";
import NavBar from "../components/navBar/NavBar";
import Social from "../components/social/Social";
import BackgroundVideo from "../components/BackgroundVideo";
import { WhatsAppFloatingButton } from "../components/icons/WhatsAppIcon";
import { ColombiaVerticalFloatingButton } from "../components/icons/ColombiaVerticalIcon";
import { Button } from "../components/ui/Button";

const Page: NextPage = () => {
  const videosRef = useRef<HTMLElement>(null);

  const scrollToVideos = () => {
    videosRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kevin Alexander Galeano Barbosa",
              jobTitle: ["Rescatista", "Bombero", "Instructor"],
              url: "https://rescatista.vercel.app",
              sameAs: [
                "https://www.instagram.com/judasgaleano/",
                "https://www.facebook.com/judas.a.galeano",
                "https://www.youtube.com/channel/UCicAuv0Aylu-BldY8OAkB3A",
                "https://www.tiktok.com/@judasgaleano",
              ],
            }),
          }}
        />
      </Head>
      <NavBar />
      <BackgroundVideo src="https://res.cloudinary.com/de43jseoy/video/upload/v1707266459/xtrj45mhlwpb7m0dosgt.mp4" />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center z-10 px-4 overflow-hidden">
        {/* Subtle vignette */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none"
        />

        {/* Main content */}
        <motion.div
          className="relative z-10 text-center max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm sm:text-base text-brand-orange-400 font-semibold uppercase tracking-[0.3em] mb-4"
          >
            Bombero · Rescatista · Instructor
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
            className="text-display-xl font-display text-white mb-6"
          >
            Kevin Alexander <br className="hidden xs:block" />
            <span className="gradient-text">Galeano Barbosa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg sm:text-xl text-white/85 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            15+ años de experiencia en rescate vertical, montaña, espacios
            confinados e incendios forestales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              as="a"
              href="mailto:espeletiafria@gmail.com"
              variant="primary"
              size="lg"
            >
              Contáctame
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToVideos}
            >
              Ver mi trabajo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-10 flex justify-center"
          >
            <Social />
          </motion.div>
        </motion.div>

        {/* Floating Colombia Vertical button (bottom-left) */}
        <ColombiaVerticalFloatingButton
          onClick={scrollToVideos}
          corner="bottom-left"
          size={64}
        />

        {/* Floating WhatsApp button (bottom-right) */}
        <WhatsAppFloatingButton corner="bottom-right" size={64} />

        {/* Pulsing scroll indicator */}
        <motion.button
          type="button"
          onClick={scrollToVideos}
          aria-label="Ver más"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="block"
          >
            <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
          </motion.span>
        </motion.button>
      </section>

      {/* VIDEOS SECTION — minimal, video-focused */}
      <section
        ref={videosRef}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-24 bg-black/40 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mb-16"
        >
          <p className="text-sm text-brand-orange-400 font-semibold uppercase tracking-[0.3em] mb-3">
            Colombia Vertical
          </p>
          <h2 className="text-display-lg font-display text-white">
            En <span className="gradient-text-fire">acción</span>
          </h2>
        </motion.div>

        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group"
          >
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-glow-soft border border-white/10">
              <iframe
                src="https://www.youtube.com/embed/m4rjfOJspfs"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Documental Colombia Vertical"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group"
          >
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-glow-soft border border-white/10">
              <iframe
                src="https://www.youtube.com/embed/iMnyO3NEhEY"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Tráiler Colombia Vertical"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Link href="/colombia-vertical" passHref legacyBehavior>
            <Button as="a" variant="gradient" size="lg">
              Conoce más de Colombia Vertical
            </Button>
          </Link>
        </motion.div>
      </section>
    </>
  );
};
export default Page;
