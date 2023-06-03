'use client';
import { OrbitControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Land } from "./Models/Land";
import { TreeOne } from "./Models/Tree-1";
import { Trees } from "./Trees";


export function Base() {
    return (
        <>
            <OrbitControls autoRotate maxPolarAngle={Math.PI / 2.18} autoRotateSpeed={0.3} maxDistance={33} minDistance={8} />

            {/* Threes */}
            <Trees amount={10} />

            {/* Stage */}
            <group position-y={-5}>
                <RigidBody colliders={false} type="fixed" position-y={-0.5} >
                    <Land scale={[15, 5, 15]} />
                </RigidBody>
            </group>
        </>
    )

}