import { memo, useRef } from 'react';
import { VideoMessage } from '@/types/chat';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoMessageCardProps {
  message: VideoMessage;
}

export const VideoMessageCard = memo<VideoMessageCardProps>(({ message }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-xl bg-black">
        <video
          ref={videoRef}
          src={message.src}
          poster={message.poster}
          className="w-full h-auto max-h-96 object-cover"
          controls
          preload="metadata"
        />
        
        {/* Custom play overlay - optional enhancement */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20">
          <Button
            variant="ghost"
            size="lg"
            onClick={togglePlay}
            className="text-white hover:text-accent-media hover:scale-110 transition-all duration-200"
          >
            <Play className="w-12 h-12" />
          </Button>
        </div>
      </div>
      
      {message.caption && (
        <p className="text-sm text-muted-foreground italic">
          {message.caption}
        </p>
      )}
    </div>
  );
});

VideoMessageCard.displayName = 'VideoMessageCard';