import { useState } from 'react';

interface UseImageFallbackOptions {
  fallbackSrc?: string;
  onError?: () => void;
}

export function useImageFallback(options: UseImageFallbackOptions = {}) {
  const { fallbackSrc = '/placeholder.jpg', onError } = options;
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  const handleImageError = () => {
    setImageSrc(fallbackSrc);
    onError?.();
  };

  return {
    src: imageSrc,
    onError: handleImageError,
  };
}
