import React, { useState } from 'react';
import Image from 'next/image';

interface TimelineItemProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isEven?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  imageSrc,
  alt,
  title,
  description,
  startDate,
  endDate,
  isEven = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dateRange = `${startDate} - ${endDate || 'Actualidad'}`;

  return (
    <div className="relative w-full">
      {/* Desktop layout */}
      <div className="hidden md:flex gap-8 mb-12 items-start">
        {isEven ? (
          <>
            {/* Image on left */}
            <div className="w-1/3 flex-shrink-0">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={alt}
                  width={300}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.jpg';
                  }}
                />
              </div>
            </div>
            {/* Content on right */}
            <div className="w-2/3 pt-4">
              <div className="flex gap-4 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 ring-4 ring-black/60"></div>
                  <div className="w-1 h-32 bg-indigo-300/40"></div>
                </div>
                <div className="flex-1 bg-black/60 rounded-lg p-6 border border-indigo-500/20">
                  <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                  <p className="text-sm text-orange-400 font-semibold mb-3">{dateRange}</p>
                  <p className="text-white/90 leading-relaxed text-sm">{description}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Content on left */}
            <div className="w-2/3">
              <div className="flex gap-4 items-start justify-end">
                <div className="flex-1 bg-black/60 rounded-lg p-6 border border-indigo-500/20 text-right">
                  <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                  <p className="text-sm text-orange-400 font-semibold mb-3">{dateRange}</p>
                  <p className="text-white/90 leading-relaxed text-sm">{description}</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 ring-4 ring-black/60"></div>
                  <div className="w-1 h-32 bg-indigo-300/40"></div>
                </div>
              </div>
            </div>
            {/* Image on right */}
            <div className="w-1/3 flex-shrink-0">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={alt}
                  width={300}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.jpg';
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile layout */}
      <div className="md:hidden mb-8 pl-6 relative">
        {/* Timeline line */}
        <div className="absolute left-2 top-0 bottom-0 w-1 bg-indigo-300/40"></div>

        {/* Timeline node */}
        <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-indigo-600 ring-4 ring-black/60 -ml-3"></div>

        {/* Content */}
        <div className="bg-black/60 rounded-lg p-4 border border-indigo-500/20">
          {/* Image */}
          <div className="mb-4 rounded-lg overflow-hidden">
            <Image
              src={imageSrc}
              alt={alt}
              width={300}
              height={400}
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = '/placeholder.jpg';
              }}
            />
          </div>

          {/* Title and date */}
          <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
          <p className="text-sm text-orange-400 font-semibold mb-3">{dateRange}</p>

          {/* Collapsible description */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isExpanded ? 'max-h-96' : 'max-h-16'
            }`}
          >
            <p className="text-white/90 leading-relaxed text-sm">{description}</p>
          </div>

          {/* Toggle button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors"
          >
            {isExpanded ? 'Leer menos' : 'Leer más'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
