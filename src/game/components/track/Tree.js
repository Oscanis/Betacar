import {
    Group,
    CylinderBufferGeometry,
    SphereBufferGeometry,
    Mesh,
    MeshStandardMaterial
} from '../../../../node_modules/three/src/Three.js';

class Tree extends Group {
    constructor (flatshade, sizeFactor) {
        super(); //required for the Car class to have all functionality from Group class e.g. .add, .remove, etc.

        const treeTopGeom = new SphereBufferGeometry(2 * sizeFactor, 8, 8);
        const treeTopMat = new MeshStandardMaterial({
            color: '#229954',
            flatShading: flatshade
        });
        const treeTop = new Mesh(treeTopGeom, treeTopMat);
        treeTop.position.set(0, 3, 0);

        const treeTrunkGeom = new CylinderBufferGeometry(0.7 * sizeFactor, 1, 2, 8);
        const treeTrunkMat = new MeshStandardMaterial({
            color: '#6F4E37',
            flatShading: flatshade
        });
        const treeTrunk = new Mesh(treeTrunkGeom, treeTrunkMat);
        treeTrunk.position.set(0, 1, 0);
        
        this.add(treeTop, treeTrunk);
    }
}

export { Tree };