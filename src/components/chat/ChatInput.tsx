import { memo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  Send, 
  Image, 
  Video, 
  Mic, 
  BarChart3, 
  Box,
  Type,
  Bold,
  Italic,
  Code
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { TextMessage } from '@/types/chat';

interface ChatInputProps {
  onSendMessage: (content: string, type: 'text', options?: any) => void;
  onSendMedia: (file: File, type: 'image' | 'video' | 'audio') => void;
  onSendChart: () => void;
  onSend3D: () => void;
  className?: string;
}

export const ChatInput = memo<ChatInputProps>(({
  onSendMessage,
  onSendMedia,
  onSendChart,
  onSend3D,
  className
}) => {
  const [message, setMessage] = useState('');
  const [fontStyle, setFontStyle] = useState<TextMessage['fontStyle']>('normal');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    onSendMessage(message.trim(), 'text', { fontStyle });
    setMessage('');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'video' | 'audio') => {
    const file = e.target.files?.[0];
    if (file) {
      onSendMedia(file, type);
    }
    // Reset input
    e.target.value = '';
  };

  const fontStyleOptions = [
    { value: 'normal', icon: Type, label: 'Normal' },
    { value: 'bold', icon: Bold, label: 'Bold' },
    { value: 'italic', icon: Italic, label: 'Italic' },
    { value: 'mono', icon: Code, label: 'Code' }
  ] as const;

  return (
    <div className={cn(
      "border-t border-card-border bg-card-glass/50 backdrop-blur-sm p-4",
      className
    )}>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Font style selector */}
        <div className="flex gap-2">
          {fontStyleOptions.map(({ value, icon: Icon, label }) => (
            <Button
              key={value}
              type="button"
              variant={fontStyle === value ? "default" : "ghost"}
              size="sm"
              onClick={() => setFontStyle(value)}
              className="text-xs"
            >
              <Icon className="w-3 h-3 mr-1" />
              {label}
            </Button>
          ))}
        </div>

        {/* Message input */}
        <div className="flex gap-3">
          <div className="flex-1">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className={cn(
                "min-h-[60px] max-h-32 resize-none",
                "bg-card-glass/30 border-card-border",
                "focus:ring-primary focus:border-primary"
              )}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Button
              type="submit"
              size="icon"
              disabled={!message.trim()}
              className="bg-gradient-primary hover:scale-110 transition-all duration-200"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Media and content type buttons */}
        <div className="flex gap-2 justify-center">
          {/* Image upload */}
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, 'image')}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <Button type="button" variant="outline" size="sm">
              <Image className="w-4 h-4 mr-2" />
              Image
            </Button>
          </div>

          {/* Video upload */}
          <div className="relative">
            <input
              type="file"
              accept="video/*"
              onChange={(e) => handleFileUpload(e, 'video')}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <Button type="button" variant="outline" size="sm">
              <Video className="w-4 h-4 mr-2" />
              Video
            </Button>
          </div>

          {/* Audio upload */}
          <div className="relative">
            <input
              type="file"
              accept="audio/*"
              onChange={(e) => handleFileUpload(e, 'audio')}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <Button type="button" variant="outline" size="sm">
              <Mic className="w-4 h-4 mr-2" />
              Audio
            </Button>
          </div>

          {/* Chart button */}
          <Button 
            type="button" 
            variant="outline" 
            size="sm"
            onClick={onSendChart}
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Chart
          </Button>

          {/* 3D button */}
          <Button 
            type="button" 
            variant="outline" 
            size="sm"
            onClick={onSend3D}
          >
            <Box className="w-4 h-4 mr-2" />
            3D Scene
          </Button>
        </div>
      </form>
    </div>
  );
});

ChatInput.displayName = 'ChatInput';