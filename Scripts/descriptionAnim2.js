import * as THREE from 'three';
import images from './imagesDescription';
import vertex from './shaders/vertexShader.glsl';
import fragment from './shaders/fragmentShader.glsl';


function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

// Mouse coordinates
let targetX = 0;
let targetY = 0;

// Load image textures for Mesh

const textureOne = new THREE.TextureLoader().load(images.imageOne);
const textureTwo = new THREE.TextureLoader().load(images.imageTwo);
const textureThree = new THREE.TextureLoader().load(images.imageThree);
//const textureFour = new THREE.TextureLoader().load(images.imageFour);

class Webgl {
    constructor() {
        this.container = document.querySelector('.main');
        this.links = [...document.querySelectorAll('.li')];
        //console.log(this.links)
        this.scene = new THREE.Scene();
        this.perspective = 1000; // Perspective / distance of the camera on the z axis
        this.sizes = new THREE.Vector2(0, 0); // Mesh sizes
        this.offset = new THREE.Vector2(0, 0); // Mesh position
        this.uniforms = {
            uTexture: { value: new THREE.TextureLoader().load(images.imageFour) },
            uAlpha: { value: 0.0 },
            uOffset: { value: new THREE.Vector2(0.0, 0.0) }
        }

        this.links.forEach((link, idx) => {
            link.addEventListener('mouseenter', () => {
                switch (idx) {
                    case 0:
                        this.uniforms.uTexture.value = textureOne;
                        break;
                    case 1:
                        this.uniforms.uTexture.value = textureTwo;
                        break;
                    case 2:
                        this.uniforms.uTexture.value = textureThree;
                        break;
                    // case 3:
                    //     this.uniforms.uTexture.value = textureFour;
                    //     break;
                }
            });

            link.addEventListener('mouseleave', () => {
                this.uniforms.uAlpha.value = lerp(this.uniforms.uAlpha.value, 0.0, 0.1);
            });

        })

        this.addEventListeners(document.querySelector('.ul'));
        this.setupCamera();
        this.onMouseMove();
        this.createMesh();
        this.render();
    }

    get viewport() {
        let width = window.innerWidth; // = this.container.offsetWidth;
        let height = window.innerHeight; // = this.container.offsetHeight;
        //console.log(width, height)
        let aspectRatio = width / height; //2.2192262602579134

        return {
            width,
            height,
            aspectRatio
        }
    }

    onMouseMove() {
        window.addEventListener('mousemove', (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        })
    }

    addEventListeners(element) {
        element.addEventListener('mouseenter', () => {
            this.linkHovered = true;
        })
        element.addEventListener('mouseleave', () => {
            this.linkHovered = false;
        })
    }

    setupCamera() {
        // Readjust dimentions on window resize
        window.addEventListener('resize', this.onWindowResize.bind(this));

        let fov = (180 * (2 * Math.atan(this.viewport.height / 2 / this.perspective))) / Math.PI;
        this.camera = new THREE.PerspectiveCamera(fov, this.viewport.aspectRatio, 0.1, 1000);
        this.camera.position.set(0, 0, this.perspective);

        // Renderer / canvas
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(this.viewport.width, this.viewport.height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);
    }

    createMesh() {
        this.geometry = new THREE.PlaneGeometry(1, 1, 20, 20);
        //this.material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        this.material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vertex,
            fragmentShader: fragment,
            transparent: true
        })

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.sizes.set(250, 350);
        this.mesh.scale.set(this.sizes.x, this.sizes.y);
        this.mesh.position.set(this.offset.x, this.offset.y, 0);
        this.scene.add(this.mesh);
    }

    onWindowResize() {
        this.camera.aspect = this.viewport.aspectRatio;
        this.camera.fov = (180 * (2 * Math.atan(this.viewport.height / 2 / this.perspective))) / Math.PI;
        this.renderer.setSize(this.viewport.width, this.viewport.height);
        this.camera.updateProjectionMatrix();
    }

    render() {
        this.offset.x = lerp(this.offset.x, targetX, 0.1);
        this.offset.y = lerp(this.offset.y, targetY, 0.1);
        this.uniforms.uOffset.value.set((targetX - this.offset.x) * 0.0005, -(targetY - this.offset.y) * 0.0005);
        this.mesh.position.set(this.offset.x - (window.innerWidth / 2), -this.offset.y + (window.innerHeight / 2));

        ///set uAlpha when list is hovered / unhovered
        this.linkHovered
            ? this.uniforms.uAlpha.value = lerp(this.uniforms.uAlpha.value, 1.0, 0.1)
            : this.uniforms.uAlpha.value = lerp(this.uniforms.uAlpha.value, 0.0, 0.1);

        for (let i = 0; i < this.links.length; i++) {
            if (this.linkHovered) {
                this.links[i].style.opacity = 0.2;
            } else {
                this.links[i].style.opacity = 9.2;
            }
        }

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render.bind(this));
    }
}


new Webgl();