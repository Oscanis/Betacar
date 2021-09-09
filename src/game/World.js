import { Scene,
         PerspectiveCamera,
         DirectionalLight,
         AmbientLight,
         Color,
         Fog
} from '../../node_modules/three/src/Three.js';

import { createCameraControls } from './services/CameraController.js';
import { createRenderer } from './services/Renderer.js';
import { Resizer } from './services/Resizer.js';
import { Loop } from './services/Looper.js';

import { Car } from './components/car/Car.js';
import { Track } from './components/track/Track.js';
import { FinishLine } from './components/track/FinishLine.js';



//setting up module-scope variables so cannot be accessed from outside
let renderer;
let scene;
let camera;
let loop;
let flatShading;
let car1;
let car2;
let car3;

class World {

    //Creating the instance
    constructor(container) {
        //setting up components and services
        renderer = createRenderer();

        //setting up the scene
        const scene = new Scene();
        scene.background = new Color('lightgrey');  
        //scene.fog = new Fog('white', 80, 120);

        //creating and positioning the camera
        const camera = new PerspectiveCamera(
            35, //fov
            1, //aspect ratio
            0.1, //near clipping plane
            150 //far clipping plane
        );
        camera.position.set(0, 40, 60);

        //setting up camera controls, passing the camera to control and the control area, which is the canvas accessed through the Renderer
        const cameraControls = createCameraControls(camera, renderer.domElement);

        //initializing the resizer
        const resizer = new Resizer(container, camera, renderer);

        //creating lights. Params: color, intensity
        const light = new DirectionalLight('white', 3);
        light.position.set(10, 10, 10);
        light.target.position.set(0, 0, 0);
        const ambientLight = new AmbientLight('white', 1);
        scene.add(light, ambientLight);

        //flatshading yes/no
        flatShading = true;

        //creating the racetrack
        const racetrack = new Track(flatShading);
        const finish = new FinishLine(flatShading);
        
        //adding the cars
        car1 = new Car(flatShading);
        car1.position.set(-35, 1, -4.8);
        car2 = new Car(flatShading);
        car2.position.set(-35, 1, 0);
        car3 = new Car(flatShading);
        car3.position.set(-35, 1, 4.8);
        
        scene.add(racetrack, finish, car1, car2, car3);

        // initializing the animation loop. Add the cameraControls to update with each tick() to ensure smoothness
        loop = new Loop(camera, scene, renderer);
        loop.updatables.push(cameraControls);

        

        //In case of on-demand render, fire render when the camera moves to avoid render/movement bugs
        //controls.addEventListener('change', () => {
        //  this.render();
        //});

        //appending the canvas to the container element
        container.append(renderer.domElement);
    }

    //Rendering
    render() {
        //drawing a single frame on demand
        renderer.render(scene, camera);
    }

    animate() {
        //starting the loop in Looper service
        loop.start();
    }

    stop() {
        //stopping the loop in Looper service
        loop.stop();
    }

    start() {
        loop.updatables.push(car1, car2, car3);
    }

    reset() {
        //stop the animation loop and reset the scene
        loop.updatables.pop();
        loop.updatables.pop();
        loop.updatables.pop();
        car1.position.set(-35, 1, -4.8);
        car1.setColor();
        car2.position.set(-35, 1, 0);
        car2.setColor();
        car3.position.set(-35, 1, 4.8);
        car3.setColor();
    }

}

export { World };