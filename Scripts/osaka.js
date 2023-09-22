import * as THREE from 'three';
import vertexShader from './shaders/vertexShader.glsl';
import fragmentShader from './shaders/fragmentShader.glsl';


const images = [...document.querySelectorAll('img')];
const slider = document.querySelector('.slider');
let sliderWidth;
let imageWidth;
let current = 0;
let target = 0;
const ease = .05;

// images.forEach((img, idx) => {
//     img.style.backgroundImage = `url(./images/osaka/${idx + 1}.jpg)`
// })

function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

function setTransform(el, transform) {
    el.style.transform = transform;
}

function init() {
    sliderWidth = slider.getBoundingClientRect().width;
    imageWidth = sliderWidth / images.length;
    document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
}

console.log(-(target - current) * 0.0002);

function animate() {
    current = parseFloat(lerp(current, target, ease)).toFixed(2);
    target = window.scrollY;
    setTransform(slider, `translateX(-${current}px)`);
    //requestAnimationFrame(animate);
}

//init();
//animate();

class EffectCanvas {
    constructor() {
        this.container = document.querySelector('main');
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;

        this.images = [...document.querySelectorAll('img')];

        console.log(this.images);

        this.meshItems = []; // Used to store all meshes we will be creating.
        this.setupCamera();
        this.createMeshItems();
        this.render();
    }

    // Getter function used to get screen dimensions used for the camera and mesh materials
    get viewport() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let aspectRatio = width / height;
        return {
            width,
            height,
            aspectRatio
        };

        // let width = this.width;
        // let height = this.height;
        // let aspectRatio = width / height;

        // return {
        //     width,
        //     height,
        //     aspectRatio
        // }
    }

    setupCamera() {
        window.addEventListener('resize', this.resize.bind(this));

        // Create new scene
        this.scene = new THREE.Scene();

        // Initialize perspective camera
        let perspective = 1000;
        const fov = (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI; //2 * Math.atan((this.height / 2) / perspective) * (180 / Math.PI);
        this.camera = new THREE.PerspectiveCamera(fov, this.viewport.aspectRatio, 1, 1000);
        this.camera.position.set(0, 0, perspective) // set the camera position on the z axis, equal to this.camera.position.z = 1000;

        //renderer
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(this.viewport.width, this.viewport.height); // uses the getter viewport function above to set size of canvas / renderer
        this.renderer.setPixelRatio(window.devicePixelRatio); // Import to ensure image textures do not appear blurred.
        this.container.appendChild(this.renderer.domElement); // append the canvas to the main element

    }

    resize() {
        init();
        this.camera.aspect = this.viewport.aspectRatio; // readjust the aspect ratio.
        this.camera.updateProjectionMatrix(); // Used to recalulate projectin dimensions.
        this.renderer.setSize(this.viewport.width, this.viewport.height);
    }

    createMeshItems() {
        this.images.forEach(image => {
            let meshItem = new MeshItem(image, this.scene);
            this.meshItems.push(meshItem);
        });
    }

    render() {
        animate();
        for (let i = 0; i < this.meshItems.length; i++) {
            this.meshItems[i].render();
        }
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render.bind(this));
    }

}


// const texture = images.map(img => new THREE.TextureLoader().load(img))
// console.log(texture);

class MeshItem {
    constructor(element, scene) {
        this.element = element;
        this.scene = scene;
        this.offset = new THREE.Vector2(0, 0);
        this.sizes = new THREE.Vector2(0, 0);
        this.createMesh();
    }

    getDimensions() {
        const { width, height, top, left } = this.element.getBoundingClientRect();
        this.sizes.set(width, height);
        //this.offset.set(-left + window.innerWidth / 2 - width / 2, top - window.innerHeight / 2 + height / 2.5);

        this.container = document.querySelector('main');
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.offset.set(-left + this.width / 2 - width / 2.13, top - this.height / 2 + height / 2.97);
    }

    createMesh() {
        this.geometry = new THREE.PlaneGeometry(1, 1, 30, 30); // new THREE.PlaneGeometry(100, 100, 10, 10)
        //let material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });

        this.imageTexture = new THREE.TextureLoader().load(this.element);
        console.log(this.imageTexture);

        this.uniforms = {
            uTexture: { value: this.imageTexture },
            uOffset: { value: new THREE.Vector2(0, 0) },
            uAlpha: { value: 1.0 } // A value of 0.0 indicates fully transparent, 1.0 is fully opaque. alpha - controls the default clear alpha value. When set to true, the value is 0. Otherwise it's 1. Default is false.
        }
        this.material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.getDimensions();
        this.mesh.position.set(this.offset.x, this.offset.y, 0);
        this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);

        this.scene.add(this.mesh);
    }

    render() {
        // repeatedly called
        this.getDimensions();
        this.mesh.position.set(this.offset.x, this.offset.y, 0);
        this.mesh.scale.set(this.sizes.x, this.sizes.y, 0);
        this.uniforms.uOffset.value.set(-(target - current) * 0.0002, 0.0); // (0.0, -(target - current) * 0.0002) : the value is -0
    }
}

init();
new EffectCanvas();





