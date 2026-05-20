import React from "react";
import Image from "next/image";

interface ExperienceCardProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  imageSrc,
  alt,
  title,
  description,
  startDate,
  endDate
}) => {
  const dateRange = `${startDate} - ${endDate || "Presente"}`;

  return (
    <div className="flex flex-col sm:flex-row bg-black/60 text-white p-4 rounded-lg items-start sm:items-center mt-4 mb-4 gap-4 sm:gap-8">
      <div className="w-full sm:w-auto flex-shrink-0">
        <Image
          src={imageSrc}
          alt={alt}
          className="rounded-lg w-full sm:w-[480px] h-auto"
          width={480}
          height={720}
        />
      </div>

      <div className="flex flex-col bg-black/40 text-white p-4 rounded-lg flex-grow">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-300 mb-2">{dateRange}</p>
        <p className="text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
