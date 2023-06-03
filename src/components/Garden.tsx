'use client';
import { Canvas } from "@react-three/fiber";
import { Base } from "./Base";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";
import LightSource from "./LightSource";
import { Loader } from "@react-three/drei";
import { Overlay } from "./Overlay";


export function Garden() {
    return (
        <>
            <Canvas id="my-canvas" shadows camera={{
                    fov: 40,
                    near: 0.1,
                    far: 100,
                    position: [80, 4.8, 28]}}>
                <color attach="background" args={["#b1dbfc"]} />
                <fog attach="fog" args={["#f2d830", 35, 60]} />
                <Suspense>
                    <Physics>
                        <Base />
                        <LightSource />
                    </Physics>
                </Suspense>
            </Canvas>

            <Loader />
            <Overlay />
        </>
    )
}