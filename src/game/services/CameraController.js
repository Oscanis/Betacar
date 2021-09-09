import { OrbitControls } from '../../../node_modules/three/examples/jsm/controls/OrbitControls.js';

function createCameraControls(camera, canvas) {

    const controls = new OrbitControls(camera, canvas);

    //damping for more realistic camera movement
    controls.enableDamping = true;

    //enabling-disabling controls & directions
    //controls.enabled = false;
    //controls.enableRotate = false;
    //controls.enableZoom = false;
    //controls.enablePan = false;

    //zoom limits. Make sure to keep this in the camera's min-max clipping plane
    controls.minDistance = 5;
    controls.maxDistance = 80;

    //horizontal rotation limits in radians
    //controls.minAzimuthAngle = - Infinity; // default
    //controls.maxAzimuthAngle = Infinity; // default

    //vertical rotation limits in radians
    //controls.minPolarAngle = Math.PI; // default
    controls.maxPolarAngle = Math.PI / 2.1; // default

    //enable/disable autorotate
    //controls.autoRotate = true;
    //controls.autoRotateSpeed = 1;

    //adding tick() so the controls are updated with the rendering
    controls.tick = () => controls.update();


    return controls;

}

export { createCameraControls };