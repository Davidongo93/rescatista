import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
  const dateRange = startDate.trim()
    ? `${startDate} — ${endDate || 'Actualidad'}`
    : '';

  const ImageBlock = (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-glow-soft border border-white/10 group"
    >
      <Image
        src={imageSrc}
        alt={alt}
        fill
        quality={85}
        loading="lazy"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = '/placeholder.jpg';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </motion.div>
  );

  const ContentBlock = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="glass-card rounded-2xl p-6 lg:p-7"
    >
      <h3 className="text-xl lg:text-2xl font-display text-white mb-2">{title}</h3>
      {dateRange && (
        <p className="text-sm text-brand-orange-400 font-semibold uppercase tracking-wider mb-4">
          {dateRange}
        </p>
      )}
      <p className="text-white/85 leading-relaxed text-[15px]">{description}</p>
    </motion.div>
  );

  return (
    <div className="relative w-full">
      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-8 mb-16 items-center">
        {isEven ? (
          <>
            <div>{ImageBlock}</div>
            <div className="flex flex-col items-center self-stretch">
              <span className="w-4 h-4 rounded-full bg-gradient-to-br from-brand-indigo-400 to-brand-orange-500 ring-4 ring-black/80 shadow-glow-indigo" />
              <span className="w-px flex-1 bg-gradient-to-b from-brand-indigo-500/60 via-brand-orange-500/40 to-transparent mt-1" />
            </div>
            <div>{ContentBlock}</div>
          </>
        ) : (
          <>
            <div>{ContentBlock}</div>
            <div className="flex flex-col items-center self-stretch">
              <span className="w-4 h-4 rounded-full bg-gradient-to-br from-brand-orange-400 to-brand-indigo-500 ring-4 ring-black/80 shadow-glow-orange" />
              <span className="w-px flex-1 bg-gradient-to-b from-brand-orange-500/60 via-brand-indigo-500/40 to-transparent mt-1" />
            </div>
            <div>{ImageBlock}</div>
          </>
        )}
      </div>

      {/* Mobile layout */}
      <div className="md:hidden mb-10 pl-8 relative">
        {/* Vertical line */}
        <div className="absolute left-2.5 top-2 bottom-0 w-px bg-gradient-to-b from-brand-indigo-500/60 via-brand-orange-500/40 to-transparent" />
        {/* Node */}
        <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-gradient-to-br from-brand-indigo-400 to-brand-orange-500 ring-4 ring-black/80 shadow-glow-orange" />

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-4 overflow-hidden"
        >
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-white/10">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              quality={85}
              loading="lazy"
              sizes="100vw"
              className="object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/placeholder.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          <h3 className="text-lg font-display text-white mb-1.5">{title}</h3>
          {dateRange && (
            <p className="text-xs text-brand-orange-400 font-semibold uppercase tracking-wider mb-3">
              {dateRange}
            </p>
          )}

          <div
            className={`overflow-hidden transition-all duration-500 ${
              isExpanded ? 'max-h-[600px]' : 'max-h-16'
            }`}
          >
            <p className="text-white/85 leading-relaxed text-sm">{description}</p>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? 'Leer menos sobre ' + title : 'Leer más sobre ' + title}
            aria-expanded={isExpanded}
            className="mt-3 inline-flex items-center gap-1.5 text-brand-orange-400 hover:text-brand-orange-300 text-sm font-semibold transition-colors min-h-[44px]"
          >
            {isExpanded ? 'Leer menos' : 'Leer más'}
            <span
              aria-hidden="true"
              className={`inline-block transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            >
              ↓
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TimelineItem;
