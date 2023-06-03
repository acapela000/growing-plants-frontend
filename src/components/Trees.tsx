import { RigidBody} from "@react-three/rapier";

import { TreeOne } from "./Models/Trees/Tree-1";
import { TreeTwo } from "./Models/Trees/Tree-2";
import { TreeThree } from "./Models/Trees/Tree-3";


type TreesProps = {
    amount: number;
}

export function Trees(props: TreesProps) {
    return (
        <>
            <RigidBody colliders={false}>
                <group>
                    <TreeOne scale={[2,2,2]} position={[1, -.5, -2]} rotation-y={Math.PI} />
                    <TreeOne scale={[2,2,2]} position={[.75, -.5, -1.6]} rotation-y={Math.PI-2} />
                    <TreeTwo scale={[1,1,1]} position={[5, .4, -1.6]} rotation-y={Math.PI} />
                    <TreeThree scale={[1,1,1]} position={[-1.6, .5, 5]} rotation-y={Math.PI} />
                </group>
            </RigidBody>
        </>
    )
};