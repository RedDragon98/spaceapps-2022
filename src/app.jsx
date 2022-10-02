import React, { useEffect, useRef } from "react";
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from "three";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(
        () => {
            const controls = new OrbitControls(camera, gl.domElement);

            controls.minDistance = 20;
            controls.maxDistance = 40;
            return () => {
                controls.dispose();
            };
        },
        [camera, gl]
    );
    return null;
};

const Sphere = () => {
    const colorMap = useLoader(TextureLoader, 'bg.png')
    
    const boxRef = useRef();

    useFrame(() => {
        boxRef.current.rotation.y += 0.01;
    });

    return (
    <mesh position={[0, 0, 0]} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25} ref={boxRef}>
        <sphereGeometry attach="geometry" args={[20, 16, 16]} />
        <meshStandardMaterial map={colorMap}/>
    </mesh>
    );
}
  

export const App = () => {
    const gltf = useLoader(GLTFLoader, '/untitled.gltf');

    return (
        <Canvas>
            <CameraController />
            <ambientLight />
            <spotLight intensity={0.3} position={[5, 10, 50]} />
            <Sphere/>
            {/*<primitive object={new THREE.AxesHelper(10)} />*/}
            <mesh>
            <primitive object={gltf.scene} position={[0, 28, 0]} scale={[0.2, 0.2, 0.2]} rotation={[0, 0, 90]}/>
            </mesh>
        </Canvas>
    );
};