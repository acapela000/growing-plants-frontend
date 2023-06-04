import { RigidBody } from "@react-three/rapier";

import { TreeOne } from "./Models/Trees/Tree-1";
import { TreeTwo } from "./Models/Trees/Tree-2";
import { TreeThree } from "./Models/Trees/Tree-3";


type TreesProps = {
    seeds: number;
}

type Tree = "TreeOne" | "TreeTwo" | "TreeThree";


export function Trees(props: TreesProps) {
    let remainderSeeds: number = props.seeds;

    // TreeOne is 1500 seeds, TreeTwo is 5000 seeds, TreeThree is 3700 seeds
    const randomTrees = () => {
        const trees: Tree[] = [];
        while (remainderSeeds > 0) {
            const randomNum = Math.floor(Math.random() * 3);
            let tree: Tree;
            if (randomNum === 0 && remainderSeeds >= 1500) {
                tree = "TreeOne";
                remainderSeeds -= 1500;
            } else if (randomNum === 1 && remainderSeeds >= 5000) {
                tree = "TreeTwo";
                remainderSeeds -= 5000;
            } else if (remainderSeeds >= 3700) {
                tree = "TreeThree";
                remainderSeeds -= 3700;
            } else {
                break;
            }
            trees.push(tree);
        }
        return trees;
    }

    return (
        <>
            <RigidBody colliders={false}>
                <group>
                    {randomTrees().map((tree, index) => {
                        const left: number = (Math.random() * 13.9) - 6.8;
                        const right: number = (Math.random() * 13.9) - 6.8;
                        const rotation: number = Math.random() * Math.PI * 2;

                        switch (tree) {
                            case "TreeOne":
                                return <TreeOne key={index} scale={[2, 2, 2]} position={[left, -.5, right]} rotation-y={rotation} />
                            case "TreeTwo":
                                return <TreeTwo key={index} scale={[1, 1, 1]} position={[left, .4, right]} rotation-y={rotation} />
                            case "TreeThree":
                                return <TreeThree key={index} scale={[1, 1, 1]} position={[left, .5, right]} rotation-y={rotation} />
                        }
                    })}
                </group>
            </RigidBody>
        </>
    )
};