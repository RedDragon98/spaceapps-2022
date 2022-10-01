import { ISS } from './app'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <ISS position={[0, 0, 0]} />
      </Canvas>,
  </React.StrictMode>
);