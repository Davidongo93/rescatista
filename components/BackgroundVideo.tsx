import React from 'react';

interface BackgroundVideoProps {
  src: string;
  posterSrc?: string;
  className?: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  src,
  posterSrc = '/fallback.jpg',
  className = 'fixed inset-0 object-cover w-full h-full -z-10',
}) => {
  return (
    <video
      autoPlay
      muted
      loop
      className={className}
      poster={posterSrc}
      playsInline
      style={{ objectFit: 'cover' }}
    >
      <source src={src} type="video/mp4" />
      Tu navegador no soporta el elemento de video.
    </video>
  );
};

export default BackgroundVideo;
