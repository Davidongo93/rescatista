import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import cloudinary from '../../utils/cloudinary'
import getBase64ImageUrl from '../../utils/generateBlurPlaceholder'
import type { ImageProps } from '../../utils/types'
import { useLastViewedPhoto } from '../../utils/useLastViewedPhoto'
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
import BackgroundVideo from '../../components/BackgroundVideo'
import { allVideos } from '../../components/data/videos'

const Modal = dynamic(() => import('../../components/Modal'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
    <div className="text-white">Cargando galería...</div>
  </div>,
})

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  const router = useRouter()
  const { photoId } = router.query
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto()
  const [activeTab, setActiveTab] = useState<'fotos' | 'videos'>('fotos')

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null)

  const videos = allVideos

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: 'center' })
      setLastViewedPhoto(null)
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto])

  return (
    <>
      <Head>
        <title>Galería — Kevin Alexander Galeano Rescatista Bombero</title>
        <meta
          name="description"
          content="Galería de fotos de Kevin Galeano Barbosa documentando sus operaciones de rescate, expediciones y eventos profesionales."
        />
        <meta property="og:title" content="Galería — Kevin Alexander Galeano" />
        <meta property="og:description" content="Fotos de rescates, expediciones y operaciones profesionales" />
        <meta property="og:image" content="/fallback.jpg" />
      </Head>

      <NavBar/>
      <BackgroundVideo src="https://res.cloudinary.com/de43jseoy/video/upload/v1704412192/xbtekdxt32y4xknarqiv.mp4" />

      <main className="relative z-10 mx-auto max-w-[1960px] p-4 pt-24">
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId)
            }}
          />
        )}

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p className="text-sm text-brand-orange-400 font-semibold uppercase tracking-[0.3em] mb-3">
            Archivo visual
          </p>
          <h1 className="text-display-lg font-display text-white mb-3">
            Galería
          </h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Operaciones de rescate, expediciones, formaciones y momentos en
            campo.
          </p>
        </motion.div>

        {/* Tab Switcher — original segmented control */}
        <div className="mb-10 flex justify-center">
          <div className="relative inline-flex p-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
            <motion.div
              className="absolute inset-y-1 rounded-full bg-gradient-to-r from-brand-indigo-600 to-brand-orange-600 shadow-glow-soft"
              initial={false}
              animate={{
                x: activeTab === 'fotos' ? 4 : 'calc(100% - 4px)',
                width: 'calc(50% - 4px)',
              }}
              style={{ left: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
            <button
              onClick={() => setActiveTab('fotos')}
              className={`relative z-10 px-6 sm:px-8 py-2.5 rounded-full font-semibold text-sm transition-colors duration-300 min-w-[100px] ${
                activeTab === 'fotos' ? 'text-white' : 'text-white/60 hover:text-white/90'
              }`}
            >
              Fotos
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`relative z-10 px-6 sm:px-8 py-2.5 rounded-full font-semibold text-sm transition-colors duration-300 min-w-[100px] ${
                activeTab === 'videos' ? 'text-white' : 'text-white/60 hover:text-white/90'
              }`}
            >
              Videos
            </button>
          </div>
        </div>

        {/* Photos Tab */}
        {activeTab === 'fotos' && (
          <motion.div
            key="fotos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4"
          >
            {images.map(({ id, public_id, format, blurDataUrl }) => (
              <Link
                key={id}
                href={`/gallery/?photoId=${id}`}
                as={`/p/${id}`}
                ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
                shallow
                className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:shadow-highlight"
              >
                <Image
                  alt="Operación documentada — Kevin Galeano"
                  className="transform rounded-xl brightness-90 transition duration-500 will-change-auto group-hover:brightness-110 group-hover:scale-[1.02]"
                  style={{ transform: 'translate3d(0, 0, 0)' }}
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
                />
              </Link>
            ))}
          </motion.div>
        )}

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <motion.div
            key="videos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
          >
            {videos.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
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
          </motion.div>
        )}
      </main>
      <Footer/>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by('public_id', 'desc')
    .max_results(400)
    .execute()
  let reducedResults: ImageProps[] = []

  let i = 0
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    })
    i++
  }

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image)
  })
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
  }

  return {
    props: {
      images: reducedResults,
    },
  }
}
