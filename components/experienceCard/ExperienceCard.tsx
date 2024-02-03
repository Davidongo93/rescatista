import React from 'react';

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
  endDate,
}) => {
  return (
    <div className="relative mb-5">
      <div className="group after:content block w-full cursor-pointer after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
        <div className="overflow-hidden">
          <img
            src={imageSrc}
            alt={alt}
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            style={{ transform: 'translate3d(0, 0, 0)' }}
          />
        </div>
        <div className=" text-xl p-4 bg-white/10 rounded-b-lg">
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <p className="text-gray-900 mb-2">{`${startDate} - ${endDate}`}</p>
          <p className="text-gray-900">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
