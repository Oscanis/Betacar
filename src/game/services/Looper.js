import { Clock } from '../../../node_modules/three/src/Three.js';

const clock = new Clock();

class Loop {
    constructor(camera, scene, renderer) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updatables = [];
    }

    start() {
        //setAnimationLoop is a new, improved  way to replace requestAnimationFrame
        this.renderer.setAnimationLoop( () => {
            //updating all animations via the tick()
            this.tick();

            //rendering a frame
            this.renderer.render(this.scene, this.camera);
        });
    }

    stop() {
        this.renderer.setAnimationLoop(null);
    }

    tick() {
        //getting the time passed since the last tick
        const delta = clock.getDelta();

        //sending out signals to all object in the updatable arrays to do the animation step
        for (const object of this.updatables) {
            object.tick(delta);
        }
    }
}

export { Loop };