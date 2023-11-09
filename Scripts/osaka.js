import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis';




/** @format */
const svg = document.getElementById("svg");
const tl = gsap.timeline();
const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

tl.from(".loader-wrap-heading h1", {
    delay: 0.1,
    y: 200,
    skewY: 10,
}).to(".loader-wrap-heading h1", {
    delay: 0.3,
    y: -200,
    skewY: 10,
});
tl.to(svg, {
    delay: 0.3,
    duration: 0.8,
    attr: { d: curve },
    ease: "power2.easeIn",
}).to(svg, {
    delay: 0.3,
    duration: 0.8,
    attr: { d: flat },
    ease: "power2.easeOut",
});
tl.to(".loader-wrap", {
    y: -1500,
});
tl.to(".loader-wrap", {
    zIndex: -1,
    display: "none",
});




// // Pixelates Image Reveal Effect
// let imageArray = [];

// let section = document.querySelector('section');
// let div = document.querySelector('.gallery div');
// let image = document.querySelectorAll('.gallery img');
// let images = [...document.querySelectorAll('.gallery img')];
// console.log(images[0].getBoundingClientRect());

// let options = {
//     rootMargin: '0px',
//     threshold: 1.0
// }

// let callback = (entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {

//             console.log(entry.target.classList[0]);
//             imageArray[+entry.target.classList[0]].reveal();

//         }
//     });
// });

// let observer = new IntersectionObserver(callback, options);

// class PixelImage {
//     constructor(id, image, width, height) {
//         this.id = id;
//         this.image = image;
//         this.styleWidth = width;
//         this.styleHeight = height;
//         this.width = width * window.devicePixelRatio;
//         this.height = height * window.devicePixelRatio;
//         this.percent = 0.001;
//         this.applyCanvas();
//         this.draw();
//     }

//     applyCanvas() {
//         this.canvas = document.createElement('canvas');
//         this.canvas.classList.add(this.id);
//         this.ctx = this.canvas.getContext('2d');
//         this.items = document.querySelectorAll('.gallery .item');
//         this.items.appendChild(this.canvas);
//         this.canvas.width = this.width;
//         this.canvas.height = this.height;
//         this.canvas.style.width = `${this.styleWidth}px`;
//         this.canvas.style.height = `${this.styleHeight}px`;
//         this.scaledWidth = this.width * this.percent;
//         this.scaledHeight = this.height * this.percent;

//         // turn off image aliasing
//         this.ctx.msImageSmoothingEnabled = false;
//         this.ctx.mozImageSmoothingEnabled = false;
//         this.ctx.webkitImageSmoothingEnabled = false;
//         this.ctx.imageSmoothingEnabled = false;

//         observer.observe(this.canvas);
//     }

//     draw() {
//         this.ctx.drawImage(this.image, 0, 0, this.scaledWidth, this.scaledHeight);
//         this.ctx.drawImage(this.canvas, 0, 0, this.scaledWidth, this.scaledHeight, 0, 0, this.width, this.height);
//     }

//     reveal() {
//         this.canvas.classList.add('active');
//         this.percent = this.percent < .1 ? this.percent += .002 : this.percent += .2;
//         if (this.percent > 1) this.percent = 1;
//         this.scaledWidth = this.width * this.percent;
//         this.scaledHeight = this.height * this.percent;

//         this.ctx.drawImage(this.image, 0, 0, this.scaledWidth, this.scaledHeight);
//         this.ctx.drawImage(this.canvas, 0, 0, this.scaledWidth, this.scaledHeight, 0, 0, this.width, this.height);
//         if (this.percent < 1) requestAnimationFrame(this.reveal.bind(this));
//     }
// }

// function generatePixelImages() {
//     let images = [...document.querySelectorAll('.gallery img')];
//     images.forEach((img, idx) => {
//         let { width, height } = img.getBoundingClientRect();
//         let pixelImage = new PixelImage(idx, image, width, height);
//         imageArray.push(pixelImage);
//     })
// }

// setTimeout(() => {
//     generatePixelImages();
// }, 100)

//items.appendChild(images);
// section.appendChild(items);


//Register GSAP ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// 1st Slider Scroll
//Get the gallery from the DOM
const gallery = document.querySelector(".gallery");

//Get the gallery total width
let galleryWidth = gallery.offsetWidth;
console.log(galleryWidth);

//Get the amount to scroll horizontally by subtracting the window width from the full width of the gallery
let amountToScroll = (galleryWidth - window.innerWidth) + 100;
console.log(amountToScroll);

gsap.to(gallery, {
    x: -amountToScroll,
    ease: "none",
    scrollTrigger: {
        trigger: "#sliderOne",
        start: "top top",
        end: "+=" + amountToScroll,
        pin: true,
        scrub: true,

        onUpdate: self => {
            let skewAmount = self.getVelocity() / 200;
            gsap.to(gallery, {
                skewX: skewAmount,
                //overwrite: true,
                ease: "power1.out"
            })
        },

        onScrubComplete: () => {
            gsap.to(gallery, {
                skewX: 0,
                duration: 0.2,
                ease: "power1.out"
            })
        }
    }
});

// 2nd Slider Scroll

const galleryTwo = document.querySelector(".galleryTwo");
//console.log(galleryTwo)

let galleryTwoWidth = galleryTwo.offsetWidth;
console.log(galleryTwoWidth);

let amountToScrollTwo = (galleryTwoWidth - window.innerWidth) + 110;
console.log(amountToScrollTwo);

gsap.set(galleryTwo, { xPercent: -75, yPercent: 20, scale: 0 }); //, yPercent: 20, scale: 0

gsap.to(galleryTwo, {
    yPercent: 0,
    scale: 1,
    //opacity: 1,
    duration: 1.5,
    ease: "power1.out",
    //immediateRender: false, // otherwise scrollTrigger will force the render right away and the starting values that get locked in would be affected by the from() above
    scrollTrigger: {
        trigger: ".gallery-wrapper-Two",
        start: "top center",
        end: "top top",
        scrub: true,
        //markers: true
    }
});

gsap.to(galleryTwo, {
    x: amountToScrollTwo,
    ease: "none",
    scrollTrigger: {
        trigger: ".gallery-wrapper-Two",
        start: "top top",
        end: "+=" + amountToScrollTwo,
        pin: true,
        scrub: true, //Set animation progress to scroll position
        //markers: true
    }
});


window.addEventListener("mousemove", function (event) {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let positionX = (event.clientX / width) - 0.55;
    let positionY = (event.clientY / height) - 0.55;
    gsap.to(".galleryTwo img", {
        rotationY: positionX * 50,
        rotationX: -positionY * 50,
        ease: "none"
    });

})


// let images = [...document.querySelectorAll('.galleryTwo img')];

// console.log(images[2].getBoundingClientRect().width)

// 3rd Slider Scroll
const galleryThree = document.querySelector(".galleryThree");

// let galleryThreeWidth = galleryThree.offsetWidth;
// //console.log(galleryThreeWidth);

// let amountToScrollThree = (galleryThreeWidth - window.innerWidth) + 50;
// //console.log(amountToScrollThree);

gsap.set(galleryThree, { xPercent: 68, yPercent: 20, scale: 0, opacity: 0 });
gsap.to(galleryThree, {
    xPercent: 0,
    yPercent: 0,
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "power1.out",
    //immediateRender: false, // otherwise scrollTrigger will force the render right away and the starting values that get locked in would be affected by the from() above
    scrollTrigger: {
        trigger: ".gallery-wrapper-Three",
        start: "top center",
        end: "top top",
        scrub: true,
        //markers: true
    }
});

// gsap.to(galleryThree, {
//     x: -amountToScrollThree,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".gallery-wrapper-Three",
//         start: "top top",
//         end: "+=" + amountToScrollThree,
//         pin: true,
//         scrub: true, //Set animation progress to scroll position
//     }
// });

//Initialize Lenis smooth scrolling
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const links = [...document.querySelectorAll('.galleryThree h2')];

console.log(canvas);
console.log(links);

function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

import image1 from '../images/osaka/1.jpg';
import image2 from '../images/osaka/2.jpg';
import image3 from '../images/osaka/3.jpg';
import image4 from '../images/osaka/4.jpg';
import image5 from '../images/osaka/5.jpg';
import image6 from '../images/osaka/6.jpg';

let imgIndex = 0;
// Load images into an array for reference
const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
];

//console.log(images)

let imageArr = [];

// Canvas mousemove variables
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    //console.log(targetX, targetY);
})

let section = document.querySelector('section');

images.forEach((image, idx) => {

    let elImage = new Image(700);
    elImage.src = image;
    //console.log(elImage.src)

    elImage.classList.add('project-image');
    document.body.append(elImage);
    imageArr.push(elImage);

})

// Draw images to the canvas

let percent = 0;
let target = 0;

function drawImage(idx) {
    let { width, height } = imageArr[idx].getBoundingClientRect();
    console.log({ width, height })
    canvas.width = (width / 2) * window.devicePixelRatio;
    canvas.height = (height / 2) * window.devicePixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`

    // pixelate by diabling the smoothing
    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.msSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    if (target === 1) {
        // 2 speeds to make the effect more gradual
        if (percent < 0.2) {
            percent += .01;
        } else if (percent < 1) {
            percent += .1;
        }
    } else if (target === 0) {
        if (percent > 0.2) {
            percent -= .3;
        } else if (percent > 0) {
            percent -= .01;
        }
    }

    let scaledWidth = width * percent;
    let scaledHeight = height * percent;

    if (percent >= 1) {
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        ctx.drawImage(imageArr[idx], 0, 0, width, height);
    } else {
        ctx.drawImage(imageArr[idx], 0, 0, scaledWidth, scaledHeight);
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        if (canvas.width !== 0 && canvas.height !== 0) {
            ctx.drawImage(canvas, 0, 0, scaledWidth, scaledHeight, 0, 0, width, height);
        }
    }
}

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', () => {
        for (let j = 0; j < links.length; j++) {
            if (j !== i) {
                links[j].style.opacity = 0.2;
                links[j].style.zIndex = 0;
            } else {
                links[j].style.opacity = 1;
                links[j].style.zIndex = 3;
            }
        }
    })

    links[i].addEventListener('mouseleave', () => {
        for (let i = 0; i < links.length; i++) {
            links[i].style.opacity = 1;
        }
    })

    links[i].addEventListener('mouseenter', () => {
        imgIndex = i;
        target = 1;
    });

    links[i].addEventListener('mouseleave', () => {
        target = 0;
    })
}

function animate() {
    currentX = lerp(currentX, targetX, 0.075);
    currentY = lerp(currentY, targetY, 0.075);
    let { width, height } = imageArr[imgIndex].getBoundingClientRect();
    canvas.style.transform = `translate3d(${currentX - (width / 2)}px, ${currentY - (height * 0.8)}px, 0)`;
    drawImage(imgIndex);
    window.requestAnimationFrame(animate);
}

animate();





