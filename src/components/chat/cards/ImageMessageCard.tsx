import { memo, useState } from 'react';
import { ImageMessage } from '@/types/chat';
import { cn } from '@/lib/utils';

interface ImageMessageCardProps {
  message: ImageMessage;
}

export const ImageMessageCard = memo<ImageMessageCardProps>(({ message }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-xl">
        {isLoading && (
          <div className="absolute inset-0 bg-card-glass animate-pulse flex items-center justify-center">
            <div className="text-muted-foreground">Loading image...</div>
          </div>
        )}
        
        {hasError ? (
          <div className="bg-card-glass p-8 rounded-xl text-center text-muted-foreground">
            Failed to load image
          </div>
        ) : (
          <img
            src={message.src}
            alt={message.alt || 'Shared image'}
            className={cn(
              "w-full h-auto max-h-96 object-cover transition-opacity duration-300",
              isLoading ? "opacity-0" : "opacity-100"
            )}
            onLoad={handleLoad}
            onError={handleError}
          />
        )}
      </div>
      
      {message.caption && (
        <p className="text-sm text-muted-foreground italic">
          {message.caption}
        </p>
      )}
    </div>
  );
});

ImageMessageCard.displayName = 'ImageMessageCard';