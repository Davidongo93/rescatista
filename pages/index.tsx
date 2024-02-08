import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarked,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { NextPage } from "next";
import NavBar from "../components/navBar/NavBar";
import Social from "../components/social/Social";

const Page: NextPage = () => {
  return (
    <>
      <NavBar />
      <div className="relative min-h-screen overflow-hidden">
        {/* Video de fondo */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/de43jseoy/video/upload/v1707266459/xtrj45mhlwpb7m0dosgt.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta el elemento de video.
        </video>

        {/* Contenedor del contenido superpuesto */}
        <div className="absolute right-8 top-20 ml-8 rounded-lg bg-indigo-200 bg-opacity-20 p-4 text-indigo-900 backdrop-blur-md">
          <div className="text-center font-bold">
            <div className="mb-2 text-3xl">Kevin Alexander Galeano Barbosa</div>
            <div className="mb-6 text-xl">
              Bombero - Rescatista - Instructor
            </div>
            <div className="text-center">
              <a
                href="mailto:espeletiafria@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="customIconLink"
              >
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mb-3 ml-6 mr-3 text-2xl"
                  ></FontAwesomeIcon>
                  <p> espeletiafria@gmail.com</p>
                </div>
              </a>
              <a href="https://wa.me/573003485579"
                target="_blank"
                rel="noopener noreferrer"
                className="customIconLink"
                >
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mb-9 ml-6 mr-3 text-2xl"
                ></FontAwesomeIcon>
                <p> +57 3003485579</p>
              </div>
              </a>
              <div className="text-2xl">
<Social/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
