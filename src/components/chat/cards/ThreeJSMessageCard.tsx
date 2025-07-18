import { memo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { ThreeJSMessage } from '@/types/chat';

interface ThreeJSMessageCardProps {
  message: ThreeJSMessage;
}

// Simple 3D scene component - can be expanded with more complex scenes
const SimpleScene = ({ sceneData }: { sceneData: any }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      
      {/* Example: Rotating cube */}
      <mesh rotation={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={sceneData?.color || '#8b5cf6'} />
      </mesh>
      
      {/* Example: Floating sphere */}
      <mesh position={[3, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={sceneData?.secondaryColor || '#06b6d4'} />
      </mesh>
    </>
  );
};

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-64 bg-card-glass/50 rounded-xl border border-card-border/30">
    <div className="text-muted-foreground">Loading 3D scene...</div>
  </div>
);

export const ThreeJSMessageCard = memo<ThreeJSMessageCardProps>(({ message }) => {
  return (
    <div className="space-y-4">
      <div className="h-64 rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm">
        <Suspense fallback={<LoadingFallback />}>
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 6]} />
            <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              autoRotate
              autoRotateSpeed={2}
            />
            <SimpleScene sceneData={message.sceneData} />
          </Canvas>
        </Suspense>
      </div>
      
      {message.caption && (
        <p className="text-sm text-muted-foreground italic">
          {message.caption}
        </p>
      )}
    </div>
  );
});

ThreeJSMessageCard.displayName = 'ThreeJSMessageCard';