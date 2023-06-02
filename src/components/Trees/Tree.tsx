'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';


function Model({ url, ...props }) {
    const { scene } = useGLTF(url)
    // <primitive object={...} mounts an already existing object
    return <primitive object={scene} {...props} />
}


export function Tree() {
    const tree: string = 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-lime/model.gltf';
    return (
        <Canvas camera={{ position: [-10, 10, 40], fov: 50 }}>
            <hemisphereLight color="white" groundColor="blue" intensity={0.75} />
            <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
            <group position={[0, -10, 0]}>
                <Model position={[0, 0.25, 0]} url={tree} />
                <ContactShadows scale={20} blur={10} far={20} />
            </group>
            <OrbitControls />
        </Canvas>
    );
}