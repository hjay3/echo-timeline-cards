import { memo } from 'react';
import { ChatMessage } from '@/types/chat';
import { TextMessageCard } from './cards/TextMessageCard';
import { ImageMessageCard } from './cards/ImageMessageCard';
import { VideoMessageCard } from './cards/VideoMessageCard';
import { AudioMessageCard } from './cards/AudioMessageCard';
import { ThreeJSMessageCard } from './cards/ThreeJSMessageCard';
import { PlotlyMessageCard } from './cards/PlotlyMessageCard';
import { cn } from '@/lib/utils';

interface MessageCardProps {
  message: ChatMessage;
  className?: string;
}

const getCardVariant = (type: ChatMessage['type']) => {
  switch (type) {
    case 'text':
      return 'bg-gradient-text border-accent-text/20';
    case 'image':
    case 'video':
      return 'bg-gradient-media border-accent-media/20';
    case 'audio':
      return 'bg-gradient-media border-accent-media/20';
    case 'plotly':
      return 'bg-gradient-data border-accent-data/20';
    case 'threejs':
      return 'bg-gradient-3d border-accent-3d/20';
    default:
      return 'bg-gradient-primary border-primary/20';
  }
};

export const MessageCard = memo<MessageCardProps>(({ message, className }) => {
  const cardVariant = getCardVariant(message.type);
  
  const baseClasses = cn(
    "relative rounded-2xl p-6 mb-6 backdrop-blur-sm",
    "border border-card-border shadow-card",
    "transition-all duration-300 hover:scale-[1.02] hover:shadow-glow",
    "animate-fade-in",
    cardVariant,
    className
  );

  const renderMessageContent = () => {
    switch (message.type) {
      case 'text':
        return <TextMessageCard message={message} />;
      case 'image':
        return <ImageMessageCard message={message} />;
      case 'video':
        return <VideoMessageCard message={message} />;
      case 'audio':
        return <AudioMessageCard message={message} />;
      case 'threejs':
        return <ThreeJSMessageCard message={message} />;
      case 'plotly':
        return <PlotlyMessageCard message={message} />;
      default:
        return null;
    }
  };

  return (
    <div className={baseClasses}>
      {/* Timestamp */}
      <div className="absolute top-2 right-2 text-xs text-muted-foreground font-mono opacity-60">
        {message.timestamp.toLocaleTimeString()}
      </div>
      
      {/* Message content */}
      <div className="mt-4">
        {renderMessageContent()}
      </div>
    </div>
  );
});

MessageCard.displayName = 'MessageCard';