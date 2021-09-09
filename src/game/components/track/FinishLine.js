import {
    Group,
    BoxBufferGeometry,
    Mesh,
    MeshStandardMaterial
} from '../../../../node_modules/three/src/Three.js';

class FinishLine extends Group {
    constructor(flatshade) {
        super();

        const headGeom = new BoxBufferGeometry(0.2, 3, 16);
        const headMat = new MeshStandardMaterial({
            color: 'white',
            flatShading: flatshade
        });
        const head = new Mesh(headGeom, headMat);
        head.position.set(39, 6, 0);

        const pole1Geom = new BoxBufferGeometry(0.2, 6, 0.2);
        const pole1Mat = new MeshStandardMaterial({
            color: 'white',
            flatShading: flatshade
        });
        const pole1 = new Mesh(pole1Geom, pole1Mat);
        pole1.position.set(39, 3, -7.5);
        const pole2 = pole1.clone();
        pole2.position.set(39, 3, 7.5);

        this.add(head, pole1, pole2);
    }
}

export { FinishLine };
