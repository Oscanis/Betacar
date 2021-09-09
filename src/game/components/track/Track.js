import {
    Group,
    PlaneBufferGeometry,
    Mesh,
    MeshStandardMaterial,
    MathUtils
} from '../../../../node_modules/three/src/Three.js';

import { Road } from './Road.js';
import { Tree } from './Tree.js';

class Track extends Group {
    constructor(flatshade) {
        super(); //required for the Car class to have all functionality from Group class e.g. .add, .remove, etc.

        //creating ground plane
        const groundGeom = new PlaneBufferGeometry(100, 100, 128, 128);
        const groundMat = new MeshStandardMaterial({
            color: 'darkgreen',
            flatShading: flatshade
        });

        const ground = new Mesh(groundGeom, groundMat);
        ground.rotation.x = Math.PI / -2;

        //adding road and obstacles
        const road = new Road(flatshade);

        //adding trees. 10 at one side of the road, 10 at the other, randomly placed
        const trees = new Group();
        for (let i = 0; i < 10; i++) {
            const tree = new Tree(flatshade, Math.random() * (0.8 - 1.2) + 1.2); //random size multiplier
            tree.position.set(Math.floor(Math.random() * 80) - 40, 0, Math.floor(Math.random() * 30) - 40); //random x and z position
            trees.add(tree);
        }
        for (let i = 0; i < 10; i++) {
            const tree = new Tree(flatshade, Math.random() * (0.8 - 1.2) + 1.2); //random size multiplier
            tree.position.set(Math.floor(Math.random() * 80) - 40, 0, Math.floor(Math.random() * 30) + 10); //random x and z position
            trees.add(tree);
        }

        //adding everything to the group
        this.add(ground, road, trees);
        
    }

    //random color for Car
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    tick(delta) {
    }
}

export { Track };