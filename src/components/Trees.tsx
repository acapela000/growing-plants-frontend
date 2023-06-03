import { RigidBody} from "@react-three/rapier";

import { TreeOne } from "./Models/Tree-1";


type TreesProps = {
    amount: number;
}

export function Trees(props: TreesProps) {
    return (
        <>
            <RigidBody
                colliders={false}
                scale={[2, 2, 2]}>
                <group>
                    <TreeOne />
                </group>
            </RigidBody>
        </>
    )
};