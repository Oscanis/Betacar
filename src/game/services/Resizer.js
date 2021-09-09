const setSize = (container, camera, renderer) => {
    //setting the camera's aspect ratio to match the container's proportions
    camera.aspect = container.clientWidth / container.clientHeight;

    //updating the camera's frustum
    camera.updateProjectionMatrix();

    //setting the renderer to the same size as our container element
    renderer.setSize(container.clientWidth, container.clientHeight);

    //setting the pixel ratio to ensure mobile device compatibility
    renderer.setPixelRatio(window.devicePixelRatio);    
}

class Resizer {
    constructor (container, camera, renderer) {
        setSize(container, camera, renderer);

        window.addEventListener('resize', () => {
            //calling setSize again if browser window is resized
            setSize(container, camera, renderer);
            this.onResize(); //re-render custom hook
        });
    }
}

export { Resizer };