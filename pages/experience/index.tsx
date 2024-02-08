import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import experiences from "../../components/experienceCard/experiences";
import NavBar from "../../components/navBar/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar/>
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
      <main className="relative min-w-screen mt-12">

        <div className="relative z-0 flex flex-col justify-center items-center h-auto">
            {/* Mapear el arreglo de experiencias para renderizar las tarjetas */}
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
        </div>
      </main>
    </div>
  );
}
