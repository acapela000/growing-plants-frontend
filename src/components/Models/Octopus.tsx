/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 ./public/models/octopus/model.glb -t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Octopus_mesh: THREE.Mesh
  }
  materials: {
    lambert2SG: THREE.MeshStandardMaterial
  }
}

export function Octopus(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/octopus/model.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Octopus_mesh.geometry} material={materials.lambert2SG} />
    </group>
  )
}

useGLTF.preload('/models/octopus/model.glb')
