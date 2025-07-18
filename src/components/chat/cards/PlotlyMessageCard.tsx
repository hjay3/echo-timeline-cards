import { memo, useMemo } from 'react';
import Plot from 'react-plotly.js';
import { PlotlyMessage } from '@/types/chat';

interface PlotlyMessageCardProps {
  message: PlotlyMessage;
}

export const PlotlyMessageCard = memo<PlotlyMessageCardProps>(({ message }) => {
  const plotConfig = useMemo(() => ({
    displayModeBar: false,
    responsive: true,
    ...message.config
  }), [message.config]);

  const layout = useMemo(() => ({
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    font: {
      color: '#ffffff',
      family: 'Inter, system-ui, sans-serif'
    },
    margin: { t: 40, r: 20, b: 40, l: 60 },
    ...message.layout
  }), [message.layout]);

  return (
    <div className="space-y-4">
      <div className="bg-card-glass/30 rounded-xl p-4 border border-card-border/20 backdrop-blur-sm">
        <Plot
          data={message.data}
          layout={layout}
          config={plotConfig}
          style={{ width: '100%', height: '400px' }}
          useResizeHandler={true}
        />
      </div>
      
      {message.caption && (
        <p className="text-sm text-muted-foreground italic">
          {message.caption}
        </p>
      )}
    </div>
  );
});

PlotlyMessageCard.displayName = 'PlotlyMessageCard';