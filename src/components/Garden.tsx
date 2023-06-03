'use client';
import { Canvas } from "@react-three/fiber";
import { Base } from "./Base";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";
import LightSource from "./LightSource";
import { Bvh } from "@react-three/drei";


export function Garden() {
    return (
        <div className="h-screen">
            <Canvas
                id="my-canvas"
                gl={{
                    powerPreference: "high-performance",
                    alpha: false,
                    antialias: false,
                    stencil: false,
                    depth: false
                }}
                dpr={1}
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
                <Suspense fallback="null">
                    <Physics debug>
                        <Bvh>
                            {/* <ForestModel /> */}
                            <Base/>
                        </Bvh>
                        <LightSource />
                    </Physics>
                </Suspense>
            </Canvas>
        </div>
    )
}