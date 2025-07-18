import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { ChatMessage } from '@/types/chat';
import { MessageCard } from './MessageCard';
import { Button } from '@/components/ui/button';
import { ChevronUp, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineProps {
  messages: ChatMessage[];
  onLoadMore?: () => void;
  hasMore?: boolean;
  isLoadingMore?: boolean;
  className?: string;
}

export const Timeline = memo<TimelineProps>(({ 
  messages, 
  onLoadMore, 
  hasMore = false, 
  isLoadingMore = false,
  className 
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);

  // Handle scroll events
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const isNearTop = scrollTop < 100;
    const isNearBottom = scrollTop + clientHeight > scrollHeight - 100;

    // Show scroll to top button when not near bottom
    setShowScrollTop(!isNearBottom && scrollTop > 400);

    // Auto-scroll should be disabled when user scrolls up
    if (!isNearBottom && shouldAutoScroll) {
      setShouldAutoScroll(false);
    }

    // Load more when near top
    if (isNearTop && hasMore && !isLoadingMore && onLoadMore) {
      onLoadMore();
    }
  }, [hasMore, isLoadingMore, onLoadMore, shouldAutoScroll]);

  // Auto-scroll to bottom for new messages
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !shouldAutoScroll) return;

    const isNearBottom = 
      container.scrollTop + container.clientHeight > 
      container.scrollHeight - 100;

    if (isNearBottom) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, shouldAutoScroll]);

  const scrollToTop = () => {
    scrollContainerRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    setShouldAutoScroll(true);
    scrollContainerRef.current?.scrollTo({
      top: scrollContainerRef.current.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className={cn("relative flex-1 overflow-hidden", className)}>
      {/* Timeline container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="h-full overflow-y-auto overflow-x-hidden"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'hsl(var(--primary)) transparent'
        }}
      >
        {/* Load more indicator */}
        {hasMore && (
          <div className="flex justify-center py-8">
            {isLoadingMore ? (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Loading older messages...</span>
              </div>
            ) : (
              <Button
                variant="ghost"
                onClick={onLoadMore}
                className="text-muted-foreground hover:text-foreground"
              >
                <ChevronUp className="w-4 h-4 mr-2" />
                Load older messages
              </Button>
            )}
          </div>
        )}

        {/* Messages */}
        <div className="px-6 py-4 space-y-0">
          {messages.map((message, index) => (
            <MessageCard
              key={message.id}
              message={message}
              className={cn(
                "animate-fade-in",
                // Stagger animation delays for smooth entrance
                `animation-delay-${Math.min(index * 100, 500)}ms`
              )}
            />
          ))}
        </div>

        {/* Bottom spacer for better last message visibility */}
        <div className="h-20" />
      </div>

      {/* Floating scroll controls */}
      {showScrollTop && (
        <Button
          variant="secondary"
          size="icon"
          onClick={scrollToTop}
          className={cn(
            "absolute top-6 right-6 z-10",
            "shadow-lg hover:shadow-glow transition-all duration-300",
            "bg-card-glass/80 backdrop-blur-sm border border-card-border"
          )}
        >
          <ChevronUp className="w-4 h-4" />
        </Button>
      )}

      {!shouldAutoScroll && (
        <Button
          variant="secondary"
          onClick={scrollToBottom}
          className={cn(
            "absolute bottom-6 right-6 z-10",
            "shadow-lg hover:shadow-glow transition-all duration-300",
            "bg-card-glass/80 backdrop-blur-sm border border-card-border"
          )}
        >
          <ChevronUp className="w-4 h-4 rotate-180 mr-2" />
          New messages
        </Button>
      )}
    </div>
  );
});

Timeline.displayName = 'Timeline';