import React from "react";
import Image from "next/image";
import Footer from "../footer/Footer";

const ExperienceCard = ({ imageSrc, alt, title, description, startDate, endDate }) => {
  const dateRange = `${startDate} - ${endDate || "Presente"}`;

  return (
    <div className="flex bg-black bg-opacity-50 text-white p-4 rounded-lg -full items-center mt-4 mb-4">
      {/* Condición para verificar si la vista es vertical (como en dispositivos móviles) */}
      {typeof window !== 'undefined' && window.innerWidth < window.innerHeight ? (
        <div className="flex flex-col w-full">
          <Image
            src={imageSrc}
            alt={alt}
            className="rounded-full mx-auto"
            width={720}
            height={480}
            sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
          />
          <div className="flex flex-col mt-4">
            <h2 className="text-lg font-bold mb-1">{title}</h2>
            <p className="text-sm text-gray-300">{dateRange}</p>
            <p className="text-xl mt-1 max-w-lg">{description}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full  mb-4">
          <Image
            src={imageSrc}
            alt={alt}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
            className="rounded-full m-6"
          />
          <div className="flex flex-col ml-4">
            <h2 className="text-lg font-bold mb-1">{title}</h2>
            <p className="text-sm text-gray-300">{dateRange}</p>
            <p className="text-xl mt-1 max-w-lg">{description}</p>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default ExperienceCard;
