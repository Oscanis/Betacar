//importing the Three world component, all programming will be taken care there
import { World } from './src/game/World.js';

function main() {
    //getting a reference to the container element
    const container = document.querySelector('#scene-container');
    const start = document.querySelector('#hudstart');
    const reset = document.querySelector('#hudreset');

    //creating the World instance
    const world = new World(container);

    //rendering the first frame
    //world.render();

    world.animate();

    //start the race on button click
    start.onclick = function() {
        world.start();
    }

    //reset scene on button click
    reset.onclick = function() {
        world.reset();
    }
    
}


main();