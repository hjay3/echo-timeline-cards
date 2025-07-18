import { memo, useRef, useState, useEffect } from 'react';
import { AudioMessage } from '@/types/chat';
import { Play, Pause, Volume2, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

interface AudioMessageCardProps {
  message: AudioMessage;
}

export const AudioMessageCard = memo<AudioMessageCardProps>(({ message }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-4">
      <audio ref={audioRef} src={message.src} preload="metadata" />
      
      <div className={cn(
        "bg-card-glass/50 rounded-xl p-6 border border-card-border/30",
        "backdrop-blur-sm"
      )}>
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          {message.isVoice ? (
            <Mic className="w-5 h-5 text-accent-media" />
          ) : (
            <Volume2 className="w-5 h-5 text-accent-media" />
          )}
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-foreground truncate">
              {message.title || (message.isVoice ? 'Voice Message' : 'Audio')}
            </h4>
            {message.artist && (
              <p className="text-sm text-muted-foreground truncate">
                {message.artist}
              </p>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={togglePlay}
            className="text-accent-media hover:text-accent-media hover:scale-110 transition-all duration-200"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </Button>

          <div className="flex-1 flex items-center gap-3">
            <span className="text-xs text-muted-foreground font-mono">
              {formatTime(currentTime)}
            </span>
            
            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={1}
              onValueChange={handleSeek}
              className="flex-1"
            />
            
            <span className="text-xs text-muted-foreground font-mono">
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

AudioMessageCard.displayName = 'AudioMessageCard';