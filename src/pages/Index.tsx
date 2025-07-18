import { useState, useCallback } from 'react';
import { Timeline } from '@/components/chat/Timeline';
import { ChatInput } from '@/components/chat/ChatInput';
import { ChatMessage, MessageType } from '@/types/chat';
import { sampleMessages, olderMessages } from '@/data/sampleMessages';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(sampleMessages);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = useCallback((content: string, type: MessageType, options?: any) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
      ...options
    } as ChatMessage;

    setMessages(prev => [...prev, newMessage]);
  }, []);

  const handleSendMedia = useCallback((file: File, type: 'image' | 'video' | 'audio') => {
    // In a real app, you'd upload the file and get a URL
    const url = URL.createObjectURL(file);
    
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type,
      src: url,
      timestamp: new Date(),
      title: type === 'audio' ? file.name : undefined,
      caption: `Uploaded ${type}: ${file.name}`
    } as ChatMessage;

    setMessages(prev => [...prev, newMessage]);
    
    toast({
      title: "Media uploaded",
      description: `Your ${type} has been added to the timeline.`,
    });
  }, [toast]);

  const handleSendChart = useCallback(() => {
    const chartData = [
      {
        x: ['Product A', 'Product B', 'Product C', 'Product D'],
        y: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
        type: 'bar',
        marker: { color: ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'] }
      }
    ];

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'plotly',
      data: chartData,
      layout: {
        title: 'Random Data Chart',
        xaxis: { title: 'Products' },
        yaxis: { title: 'Sales' }
      },
      caption: 'Generated sample chart',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
  }, []);

  const handleSend3D = useCallback(() => {
    const colors = ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];
    const sceneData = {
      color: colors[Math.floor(Math.random() * colors.length)],
      secondaryColor: colors[Math.floor(Math.random() * colors.length)]
    };

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'threejs',
      sceneData,
      caption: 'Interactive 3D scene - drag to rotate!',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
  }, []);

  const handleLoadMore = useCallback(() => {
    if (isLoadingMore) return;
    
    setIsLoadingMore(true);
    
    // Simulate loading delay
    setTimeout(() => {
      setMessages(prev => [...olderMessages, ...prev]);
      setHasMore(false); // For demo, only load once
      setIsLoadingMore(false);
    }, 1000);
  }, [isLoadingMore]);

  return (
    <div className="min-h-screen bg-timeline-bg text-foreground">
      <div className="h-screen flex flex-col max-w-4xl mx-auto">
        {/* Header */}
        <header className="border-b border-card-border bg-card-glass/30 backdrop-blur-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Timeline Chat
              </h1>
              <p className="text-sm text-muted-foreground">
                Rich media chat with scrollable timeline
              </p>
            </div>
            <div className="text-xs text-muted-foreground font-mono">
              {messages.length} messages
            </div>
          </div>
        </header>

        {/* Timeline */}
        <Timeline
          messages={messages}
          onLoadMore={handleLoadMore}
          hasMore={hasMore}
          isLoadingMore={isLoadingMore}
          className="flex-1"
        />

        {/* Chat Input */}
        <ChatInput
          onSendMessage={handleSendMessage}
          onSendMedia={handleSendMedia}
          onSendChart={handleSendChart}
          onSend3D={handleSend3D}
        />
      </div>
    </div>
  );
};

export default Index;
