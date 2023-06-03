'use client';
import { Canvas } from "@react-three/fiber";
import { Base } from "./Base";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";
import LightSource from "./LightSource";


export function Garden() {
    return (
        <div className="h-screen">
            <Canvas
                id="my-canvas"
                shadows
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 100,
                    position: [80, 4.8, 28]
                }}
            >
                <color attach="background" args={["#b1dbfc"]} />
                <fog attach="fog" args={["#f2d830", 35, 60]} />
                <Suspense>
                    <Physics>
                        <Base />
                        <LightSource />
                    </Physics>
                </Suspense>
            </Canvas>
        </div>
    )
}