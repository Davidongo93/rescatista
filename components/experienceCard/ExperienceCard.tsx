// ExperienceCard.js
import React from "react";
import Image from "next/image";

const ExperienceCard = ({ imageSrc, alt, title, description, startDate, endDate }) => {
  const dateRange = `${startDate} - ${endDate || "Presente"}`;

  return (
    <div className="relative bg-opacity-70 rounded-lg overflow-hidden my-4">
      <div className="flex bg-black bg-opacity-50 text-white p-4 rounded-lg items-center">
        <div className="relative h-20 w-20 md:h-32 md:w-32 lg:h-40 lg:w-40 mx-4 overflow-hidden  object-cover">
          <Image
            src={imageSrc}
            alt={alt}
            width={600}
            height={600}
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col ml-4">
          <h2 className="text-lg font-bold mb-1">{title}</h2>
          <p className="text-sm text-gray-300">{dateRange}</p>
          <p className="text-xs mt-1 max-w-xs">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
