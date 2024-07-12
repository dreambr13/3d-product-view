import React, { Suspense,useState, useEffect, useMemo,useContext } from 'react';
import * as THREE from 'three';
import { useFBX } from '@react-three/drei';

import { Canvas, useLoader } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import { FBXLoader } from 'three-stdlib'
import { MeshBasicMaterial } from 'three';
import { useSnapshot } from "valtio";
import { SharedDataContext } from '../App';
export default function Mobile(props){
  const BasicMaterial = new MeshBasicMaterial({color: new THREE.Color("#ff0000")})
  const fbx = useFBX("/Mobile/scene.fbx");
  const snap = useSnapshot(props.colors);
  const [hovered, setHovered] = useState(null);
  const [selObject, setSelObject] = useState(null);
  const { sharedData } = useContext(SharedDataContext);
  // fbx.traverse((child)=>{
  //   if(child.isMesh ){
  //     child.material.color = new THREE.Color(1,0,0)
  //   }
  // })
  useEffect(()=>{
    if(selObject){
      console.log('props: ', props)
      console.log('snap', snap)
      console.log(snap[snap.current])
      console.log(sharedData);
      selObject.material.color = new THREE.Color(sharedData);
    }
  }, [snap, sharedData])
  function clickObject(event){
    if(event.object){
      console.log(event.object)
      // event.object.material.color = new THREE.Color(1,0,0)
      event.stopPropagation();
      props.updateCurrent(event.object.name);
    }
  }
  function handlePointerOver(e){
    e.stopPropagation();
    setHovered(e.object.name);
  }
  function handlePointerOut(e){
    if (e.intersections.length === 0) {
      setHovered(null);
    }
  }
  function handlePointerDown(e){
    e.stopPropagation();
    console.log('robot:', e.object)
    console.log(snap)
    setSelObject(e.object)
    // e.object.material.color = props.snap.current
    props.updateCurrent(e.object.name);

  }
  function handlePointerMissed(e){
    props.updateCurrent(null);
  }
  const model = useMemo(() => fbx.clone(true), []);
  
  return (
    // <Canvas pixelRatio={[1, 2]} camera={{ position: [-2, 2, 4], fov: 50 }}>
    //   <directionalLight position={[10, 10, 5]} intensity={1.5} />
    //   <Suspense fallback={null}>
      <primitive 
        object={model} 
        onPointerOver={handlePointerOver} 
        onPointerOut={handlePointerOut} 
        onPointerMissed={handlePointerMissed} 
        onPointerDown={handlePointerDown} 
        scale={[0.003,0.003,0.003]} 
      />
    //   </Suspense>
    //   <OrbitControls autoRotate /> 
    // </Canvas>
  )
};
