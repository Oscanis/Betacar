import {
    Group,
    BoxBufferGeometry,
    Mesh,
    MeshStandardMaterial
} from '../../../../node_modules/three/src/Three.js';

class Road extends Group {
    constructor (flatshade) {
        super(); //required for the Car class to have all functionality from Group class e.g. .add, .remove, etc.

        //creating meshes
        const roadGeom = new BoxBufferGeometry(80, 0.2, 15);
        const roadMat = new MeshStandardMaterial({
            color: 'grey',
            flatShading: flatshade
        });
        const road = new Mesh(roadGeom, roadMat);
        
        const edgeGeom = new BoxBufferGeometry(80.01, 0.3, 0.5);
        const edgeMat = new MeshStandardMaterial({
            color: 'white',
            flatShading: flatshade
        });
        const edgeLeft = new Mesh(edgeGeom, edgeMat);
        edgeLeft.position.set(0, 0, -7.5);
        const edgeRight = edgeLeft.clone();
        edgeRight.position.set(0, 0, 7.5);


        this.add(road, edgeLeft, edgeRight);
    }
}

export { Road };