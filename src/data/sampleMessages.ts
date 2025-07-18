import { ChatMessage } from '@/types/chat';

export const sampleMessages: ChatMessage[] = [
  {
    id: '1',
    type: 'text',
    content: 'Welcome to the Timeline Chat! 🚀\n\nThis is a demonstration of our rich media chat interface with beautiful, colorful cards for different content types.',
    fontStyle: 'bold',
    timestamp: new Date(Date.now() - 5 * 60 * 1000)
  },
  {
    id: '2',
    type: 'text',
    content: 'Here\'s some code to show the monospace font style:\n\nconst timeline = {\n  scrollable: true,\n  mediaSupport: ["images", "videos", "audio", "3d", "charts"],\n  beautiful: true\n};',
    fontStyle: 'mono',
    timestamp: new Date(Date.now() - 4 * 60 * 1000)
  },
  {
    id: '3',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop',
    alt: 'Beautiful interior design',
    caption: 'Example of image display with smooth loading and captions',
    timestamp: new Date(Date.now() - 3 * 60 * 1000)
  },
  {
    id: '4',
    type: 'plotly',
    data: [
      {
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        y: [20, 35, 30, 35, 27, 45],
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: '#8b5cf6', size: 8 },
        line: { color: '#06b6d4', width: 3 }
      },
      {
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        y: [16, 28, 25, 32, 22, 38],
        type: 'bar',
        marker: { color: '#10b981' }
      }
    ],
    layout: {
      title: 'Sample Data Visualization',
      xaxis: { title: 'Months' },
      yaxis: { title: 'Values' }
    },
    caption: 'Interactive charts with Plotly.js - hover and zoom to explore!',
    timestamp: new Date(Date.now() - 2 * 60 * 1000)
  },
  {
    id: '5',
    type: 'threejs',
    sceneData: {
      color: '#8b5cf6',
      secondaryColor: '#06b6d4'
    },
    caption: '3D scene with Three.js - click and drag to interact!',
    timestamp: new Date(Date.now() - 1 * 60 * 1000)
  },
  {
    id: '6',
    type: 'text',
    content: 'This timeline supports lazy loading - scroll up to load older messages!',
    fontStyle: 'italic',
    timestamp: new Date()
  }
];

// Additional older messages for infinite scroll demo
export const olderMessages: ChatMessage[] = [
  {
    id: 'old-1',
    type: 'text',
    content: 'This is an older message from the timeline history...',
    fontStyle: 'normal',
    timestamp: new Date(Date.now() - 10 * 60 * 1000)
  },
  {
    id: 'old-2',
    type: 'plotly',
    data: [
      {
        values: [40, 30, 20, 10],
        labels: ['A', 'B', 'C', 'D'],
        type: 'pie',
        marker: {
          colors: ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b']
        }
      }
    ],
    layout: {
      title: 'Historical Data'
    },
    caption: 'Pie chart from earlier in the timeline',
    timestamp: new Date(Date.now() - 15 * 60 * 1000)
  }
];