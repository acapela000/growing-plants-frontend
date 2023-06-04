'use client';
import { OrbitControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Land } from "./Models/Land";
import { Trees } from "./Trees";
import { Octopus } from "./Models/Octopus";
import { House } from "./Models/House";
import { TreeFour } from "./Models/Trees/Tree-4";


export function Base() {
    return (
        <>
            <OrbitControls autoRotate maxPolarAngle={Math.PI / 2.18} autoRotateSpeed={0.3} maxDistance={33} minDistance={8} />

            <Trees seeds={300800} />

            {/* Brand */}
            <Octopus position={[1.5, -1.3, 9]} scale={[.04, .04, .04]} />

            {/* House */}
            <House position={[-1.5, -1.2, 8.5]} scale={[1, 1, 1]} rotation-y={Math.PI * 2.3} />

            {/* Stage */}
            <group position-y={-6.5} >
                <RigidBody colliders={false} type="fixed" position-y={0} >
                    <Land scale={[25, 7, 25]} />
                </RigidBody>
            </group>
        </>
    )

}