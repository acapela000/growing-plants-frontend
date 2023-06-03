/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 ./public/models/tree-3/model.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function TreeThree(props: any) {
  const { nodes, materials } = useGLTF('/models/tree-3/model.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Node-Mesh'].geometry} material={materials.mat20} castShadow receiveShadow />
      <mesh geometry={nodes['Node-Mesh_1'].geometry} material={materials.mat13} castShadow receiveShadow />
    </group>
  )
}

useGLTF.preload('/models/tree-3/model.glb')
