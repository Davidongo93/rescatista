import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../../components/navBar/NavBar';
import Social from '../../components/social/Social';
import Footer from '../../components/footer/Footer';
import ExperienceCard from '../../components/experienceCard/ExperienceCard'; // Importa el componente de la tarjeta de experiencia
import experiences from '../../components/experienceCard/experiences'; // Importa el array de experiencias

const Home: NextPage = () => {


  return (
    <>
      <Head>
        <title>Kevin Alexander Galeano Bombero - Rescatista - Instructor</title>
      </Head>

      {/* Capa de fondo */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 object-cover w-full h-full"
        style={{ objectFit: "cover", position: "fixed" }}
      >
        <source src="https://res.cloudinary.com/de43jseoy/video/upload/v1704412192/xbtekdxt32y4xknarqiv.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video> 

      <NavBar />
      <main className="mx-auto max-w-[1960px] p-4 mt-14">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
         {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
        </div>
      </main>
      <Social />
      <Footer />
    </>
  );
};

export default Home
