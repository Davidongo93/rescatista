import React from 'react';
import TimelineItem from './TimelineItem';

interface ExperienceData {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

interface TimelineProps {
  experiences: ExperienceData[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="w-full">
      <div className="relative">
        {experiences.map((experience, index) => (
          <TimelineItem
            key={index}
            {...experience}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
