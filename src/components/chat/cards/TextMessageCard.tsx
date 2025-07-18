import { memo } from 'react';
import { TextMessage } from '@/types/chat';
import { cn } from '@/lib/utils';

interface TextMessageCardProps {
  message: TextMessage;
}

const getFontStyleClasses = (fontStyle?: TextMessage['fontStyle']) => {
  switch (fontStyle) {
    case 'bold':
      return 'font-bold text-xl';
    case 'italic':
      return 'italic font-medium text-lg';
    case 'script':
      return 'font-serif text-2xl italic tracking-wide';
    case 'mono':
      return 'font-mono text-base bg-card-glass/50 p-4 rounded-lg border border-card-border/30';
    default:
      return 'font-body text-lg leading-relaxed';
  }
};

export const TextMessageCard = memo<TextMessageCardProps>(({ message }) => {
  const fontClasses = getFontStyleClasses(message.fontStyle);
  
  return (
    <div className={cn(
      "prose prose-invert prose-lg max-w-none",
      fontClasses
    )}>
      <p className="text-foreground m-0 whitespace-pre-wrap">
        {message.content}
      </p>
    </div>
  );
});

TextMessageCard.displayName = 'TextMessageCard';