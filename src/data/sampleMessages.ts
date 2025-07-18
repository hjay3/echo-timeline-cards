import { ChatMessage } from '@/types/chat';

export const sampleMessages: ChatMessage[] = [
  {
    id: '1',
    type: 'text',
    content: '✨ **SICKENINGLY BEAUTIFUL TIMELINE CHAT** ✨\n\nWelcome to the most aesthetically stunning chat experience! Featuring *morphing gradients*, **floating particles**, and `glassmorphism effects` that will make your eyes weep tears of joy! 🌈',
    fontStyle: 'bold',
    timestamp: new Date(Date.now() - 12 * 60 * 1000)
  },
  {
    id: '2',
    type: 'text',
    content: '🎨 **TYPOGRAPHY SHOWCASE** 🎨\n\n*Elegant italics dance across the screen*\n**Bold statements command attention**\n`Monospace code whispers secrets`\n\n> "The future of design is not just beautiful—it\'s transcendent"\n\n~~Strike through the ordinary~~ and embrace the ***extraordinary***!',
    fontStyle: 'normal',
    timestamp: new Date(Date.now() - 11 * 60 * 1000)
  },
  {
    id: '3',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
    alt: 'Matrix digital rain aesthetic',
    caption: '🌌 Matrix-style digital aesthetics with floating particles and aurora borealis effects',
    timestamp: new Date(Date.now() - 10 * 60 * 1000)
  },
  {
    id: '4',
    type: 'text',
    content: '// 🚀 ANIMATED CODE BLOCKS WITH SYNTAX HIGHLIGHTING\nconst aestheticOverload = {\n  particles: "floating in zero gravity",\n  gradients: "morphing like liquid dreams",\n  animations: "cascading like digital waterfalls",\n  beauty: "sickeningly gorgeous! 💫"\n};\n\nfunction createMagic() {\n  return aestheticOverload.particles\n    .map(particle => particle.dance())\n    .filter(dream => dream.isBeautiful)\n    .reduce((magic, reality) => magic + reality);\n}',
    fontStyle: 'mono',
    timestamp: new Date(Date.now() - 9 * 60 * 1000)
  },
  {
    id: '5',
    type: 'plotly',
    data: [
      {
        x: ['Particles', 'Gradients', 'Blur Effects', 'Animations', 'Typography'],
        y: [95, 98, 92, 99, 96],
        type: 'bar',
        marker: { 
          color: ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'],
          opacity: 0.8
        }
      }
    ],
    layout: {
      title: '💫 AESTHETIC IMPACT METRICS 💫',
      xaxis: { title: 'Visual Elements' },
      yaxis: { title: 'Beauty Score (%)' },
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      font: { color: '#ffffff' }
    },
    caption: '📊 Scientific proof that this design causes aesthetic overload',
    timestamp: new Date(Date.now() - 8 * 60 * 1000)
  },
  {
    id: '6',
    type: 'threejs',
    sceneData: {
      color: '#8b5cf6',
      secondaryColor: '#06b6d4'
    },
    caption: '🔮 Interactive 3D scene with floating geometric poetry - drag to control the universe!',
    timestamp: new Date(Date.now() - 7 * 60 * 1000)
  },
  {
    id: '7',
    type: 'text',
    content: '🎭 **MICRO-INTERACTIONS GALORE** 🎭\n\n• Ripple effects that bloom like digital flowers 🌸\n• Cards that tilt with magnetic personality 🧲\n• Elastic scrolling with momentum physics ⚡\n• Borders that trace themselves like neon lightning ⚡\n• Floating timestamps that appear like gentle whispers 👻',
    fontStyle: 'normal',
    timestamp: new Date(Date.now() - 6 * 60 * 1000)
  },
  {
    id: '8',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    alt: 'Developer workspace with colorful code',
    caption: '💻 Workspace enhanced with glassmorphism and floating particle systems',
    timestamp: new Date(Date.now() - 5 * 60 * 1000)
  },
  {
    id: '9',
    type: 'plotly',
    data: [
      {
        r: [77, 83, 94, 89, 86, 91, 88],
        theta: ['Particles', 'Gradients', 'Animations', 'Typography', 'Glassmorphism', 'Micro-interactions', 'Color Harmony'],
        type: 'scatterpolar',
        fill: 'toself',
        marker: { color: '#06b6d4', size: 8 },
        line: { color: '#8b5cf6', width: 2 }
      }
    ],
    layout: {
      title: '🕸️ AESTHETIC WEB OF BEAUTY',
      polar: {
        radialaxis: {
          visible: true,
          range: [0, 100]
        }
      },
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      font: { color: '#ffffff' }
    },
    caption: '🕷️ Radar chart showing the interconnected web of visual elements',
    timestamp: new Date(Date.now() - 4 * 60 * 1000)
  },
  {
    id: '10',
    type: 'text',
    content: '🌊 **DYNAMIC BACKGROUND SYMPHONY** 🌊\n\nBehind these cards, witness:\n\n🔹 Animated mesh gradients flowing like digital silk\n🔹 Floating blob animations that breathe with life\n🔹 Aurora borealis effects painting the digital sky\n🔹 Subtle noise textures adding infinite depth\n🔹 Time-of-day themes shifting like nature\'s mood\n\n*Close your eyes and feel the aesthetic vibrations...*',
    fontStyle: 'italic',
    timestamp: new Date(Date.now() - 3 * 60 * 1000)
  },
  {
    id: '11',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop',
    alt: 'Starry night sky with cosmic beauty',
    caption: '🌌 Cosmic inspiration for our floating particle systems and morphing gradients',
    timestamp: new Date(Date.now() - 2 * 60 * 1000)
  },
  {
    id: '12',
    type: 'text',
    content: '🎨 **THE GRAND FINALE** 🎨\n\n***This is not just a chat application—this is digital poetry in motion!***\n\nEvery pixel breathes, every gradient flows, every animation tells a story of transcendent beauty. The typography dances, the colors sing, and the interactions create ripples in the fabric of aesthetic space-time.\n\n*Welcome to the future of sickeningly beautiful design!* ✨🌈💫',
    fontStyle: 'bold',
    timestamp: new Date(Date.now() - 1 * 60 * 1000)
  }
];

// Additional older messages for infinite scroll demo
export const olderMessages: ChatMessage[] = [
  {
    id: 'old-1',
    type: 'text',
    content: '📜 **ANCIENT TIMELINE WISDOM** 📜\n\nThese are the scrolls of older messages, hidden in the depths of time until summoned by your scroll-up incantation! Each message a relic of aesthetic beauty from the past...',
    fontStyle: 'italic',
    timestamp: new Date(Date.now() - 25 * 60 * 1000)
  },
  {
    id: 'old-2',
    type: 'plotly',
    data: [
      {
        x: ['Dawn', 'Morning', 'Noon', 'Sunset', 'Midnight'],
        y: [45, 78, 95, 88, 62],
        type: 'scatter',
        mode: 'lines+markers',
        line: { 
          color: '#8b5cf6',
          width: 3,
          shape: 'spline'
        },
        marker: { 
          size: 12,
          color: '#06b6d4',
          line: { color: '#ffffff', width: 2 }
        }
      }
    ],
    layout: {
      title: '🌅 BEAUTY LEVELS THROUGHOUT THE DAY 🌅',
      xaxis: { title: 'Time of Day' },
      yaxis: { title: 'Aesthetic Intensity' },
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      font: { color: '#ffffff' }
    },
    caption: '📈 Historical data showing peak aesthetic performance at noon',
    timestamp: new Date(Date.now() - 30 * 60 * 1000)
  },
  {
    id: 'old-3',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
    alt: 'Colorful code on computer screen',
    caption: '💾 Ancient code scrolls with early implementations of digital beauty',
    timestamp: new Date(Date.now() - 35 * 60 * 1000)
  },
  {
    id: 'old-4',
    type: 'text',
    content: '🔮 **PROPHECY OF AESTHETIC OVERLOAD** 🔮\n\n*In the beginning, there was darkness...*\n*Then came gradients, and it was good.*\n*Then came animations, and it was beautiful.*\n*Then came micro-interactions, and it was transcendent.*\n\n**And thus, the sickeningly beautiful timeline was born!** ✨',
    fontStyle: 'bold',
    timestamp: new Date(Date.now() - 40 * 60 * 1000)
  },
  {
    id: 'old-5',
    type: 'threejs',
    sceneData: {
      color: '#10b981',
      secondaryColor: '#f59e0b'
    },
    caption: '🌊 Ancient 3D realm where the first floating particles learned to dance',
    timestamp: new Date(Date.now() - 45 * 60 * 1000)
  }
];