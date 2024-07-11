import React, { Suspense, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useFBX } from '@react-three/drei';

import { Canvas, useLoader } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import { FBXLoader } from 'three-stdlib'
import { MeshBasicMaterial } from 'three';
function Model({ url, ...props }) {
  const scene = useLoader(FBXLoader, url)
  return <primitive object={scene} {...props} />
}
const Mobile = () => {
  const BasicMaterial = new MeshBasicMaterial({color: new THREE.Color("#ff0000")})
  const fbx = useFBX("/Mobile/scene.fbx");
  fbx.children.forEach((mesh, i) => {
    mesh.material = BasicMaterial;
    mesh.sectionColor = new THREE.Color("#2080ff")
  });

  const model = useMemo(() => fbx.clone(true), []);
  // model.children.forEach((mesh, i) => { mesh.material = BasicMaterial; });

  return (
    // <Canvas pixelRatio={[1, 2]} camera={{ position: [-2, 2, 4], fov: 50 }}>
    //   <directionalLight position={[10, 10, 5]} intensity={1.5} />
    //   <Suspense fallback={null}>
      <primitive object={model} scale={[0.003,0.003,0.003]} />
    //   </Suspense>
    //   <OrbitControls autoRotate /> 
    // </Canvas>
  )
};

export default Mobile;