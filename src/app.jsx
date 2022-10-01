import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function ISS(props) {
    const gltf = useLoader(GLTFLoader, '/untitled.gltf')

    return (
        <mesh>
            <primitive object={gltf.scene} />
        </mesh>
    )
}