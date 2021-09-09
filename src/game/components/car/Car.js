import {
    Group,
    BoxBufferGeometry,
    CylinderBufferGeometry,
    Mesh,
    MeshStandardMaterial,
    MathUtils
} from '../../../../node_modules/three/src/Three.js';

class Car extends Group {
    constructor(flatshade) {
        super(); //required for the Car class to have all functionality from Group class e.g. .add, .remove, etc.

        const speed = Math.random() * (9.5 - 10.5) + 10.5;

        //creating geometries
        const chassisGeom = new BoxBufferGeometry(4, 1, 2);
        const cabinGeom = new BoxBufferGeometry(1.5, 1, 1.7);
        const windShieldGeom = new BoxBufferGeometry(1, 1, 1.6);
        const wheelGeom = new CylinderBufferGeometry(0.4, 0.4, 0.4, 16);
        const frontLightGeom = new CylinderBufferGeometry(0.2, 0.2, 0.2, 16);
        const rearLightGeom = new BoxBufferGeometry(0.2, 0.2, 0.4);

        //creating materials
        const chassisMat = new MeshStandardMaterial({
            color: this.getRandomColor(),
            metalness: 0.5,
            flatShading: flatshade
        });
        const cabinMat = new MeshStandardMaterial({
            color: this.getRandomColor(),
            metalness: 0.5,
            flatShading: flatshade
        });
        const windShieldMat = new MeshStandardMaterial({
            color: 'lightblue',
            flatShading: flatshade
        });
        const wheelMat = new MeshStandardMaterial({
            color: 'darkslategray',
            flatShading: flatshade
        });
        const frontLightMat = new MeshStandardMaterial({
            color: 'white',
            emissive: 'white',
            flatShading: flatshade
        });
        const rearLightMat = new MeshStandardMaterial({
            color: 'red',
            emissive: 'red',
            flatShading: flatshade
        });

        //creating meshes
        const chassis = new Mesh(chassisGeom, chassisMat);
        chassis.position.set(0, 0, 0);

        const cabin = new Mesh(cabinGeom, cabinMat);
        cabin.position.set(-0.6, 0.7, 0);

        const windShield = new Mesh(windShieldGeom, windShieldMat);
        windShield.position.set(0, 0.5, 0);
        windShield.rotation.z = Math.PI / 1.5;

        const wheelFrontLeft = new Mesh(wheelGeom, wheelMat);
        wheelFrontLeft.position.set(1.2, -0.5, 1);
        wheelFrontLeft.rotation.x = Math.PI / 2;
        const wheelFrontRight = wheelFrontLeft.clone();
        wheelFrontRight.position.set(1.2, -0.5, -1);
        const wheelBackLeft = wheelFrontLeft.clone();
        wheelBackLeft.position.set(-1.2, -0.5, 1);
        const wheelBackRight = wheelFrontLeft.clone();
        wheelBackRight.position.set(-1.2, -0.5, -1);

        const frontLightLeft = new Mesh(frontLightGeom, frontLightMat);
        frontLightLeft.position.set(2, 0, -0.6);
        frontLightLeft.rotation.z = Math.PI / 2;
        const frontLightRight = frontLightLeft.clone();
        frontLightRight.position.set(2, 0, 0.6);

        const rearLightLeft = new Mesh(rearLightGeom, rearLightMat);
        rearLightLeft.position.set(-2, 0, -0.6);
        const rearLightRight = rearLightLeft.clone();
        rearLightRight.position.set(-2, 0, 0.6);

        //adding everything to the group
        this.add(chassis, cabin, windShield, wheelFrontLeft, wheelFrontRight, wheelBackLeft, wheelBackRight, frontLightLeft, frontLightRight, rearLightLeft, rearLightRight);
        
        this.tick = (delta) => {
            if(this.position.x < 40) {
                this.position.x += speed * delta;
            }
        }

        this.setColor = () => {
            chassis.material.color.set(this.getRandomColor());
            cabin.material.color.set(this.getRandomColor());
        }

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

}

export { Car };