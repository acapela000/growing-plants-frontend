import React from "react"
import { useGLTF } from "@react-three/drei"


export default function ForestModel(props: any) {
  const { nodes, materials } = useGLTF("/models/merged-transformed.glb")

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
        <mesh castShadow receiveShadow geometry={nodes.Floor_Grass_0_22.geometry} material={materials.DarkEarth} />
        <mesh castShadow receiveShadow geometry={nodes.Floor_Grass_0_23.geometry} material={materials.Earth} />
      </group>
    </group>
  )
}

useGLTF.preload("/models/merged-transformed.glb")