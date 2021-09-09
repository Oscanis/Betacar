import { WebGLRenderer } from '../../../node_modules/three/src/Three.js';

function createRenderer() {
    const renderer = new WebGLRenderer({antialias: true});

    // turn on the physically correct lighting model as it's off by default for compatibility reasons
    renderer.physicallyCorrectLights = true;

    return renderer;
}

export { createRenderer };