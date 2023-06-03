import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Land(props:any) {
  const { nodes, materials } = useGLTF('/models/land/model.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Island01_Cylinder-Mesh'].geometry} material={materials.Dirt} />
      <mesh geometry={nodes['Island01_Cylinder-Mesh_1'].geometry} material={materials.Grass} receiveShadow castShadow />
    </group>
  )
}

useGLTF.preload('/models/land/model.glb')
