import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis';



//Preload animation
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


//Register GSAP ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// 1st Slider Scroll
//Get the gallery from the DOM
const gallery = document.querySelector(".gallery");

//Get the gallery total width
let galleryWidth = gallery.offsetWidth;
//console.log(galleryWidth);

//Get the amount to scroll horizontally by subtracting the window width from the full width of the gallery
let amountToScroll = (galleryWidth - window.innerWidth) + 50;
//console.log(amountToScroll);

let imagesGallery = document.querySelectorAll('.gallery img');

imagesGallery.forEach(image => {
    let tlGallery = gsap.timeline({
        scrollTrigger: {
            trigger: "#sliderOne",
            start: "top 30%",
            end: "top 10%",
            //pin: true,
            scrub: true,
            //markers: true,
        }
    });

    tlGallery.set(image, { yPercent: 100, opacity: 0 });
    tlGallery.to(image, {
        yPercent: 0,
        opacity: 1,
        duration: 3,
        ease: "power1.out",
    });
})


gsap.to(gallery, {
    x: -amountToScroll,
    ease: "none",
    scrollTrigger: {
        trigger: "#sliderOne",
        start: "top top",
        end: "+=" + amountToScroll,
        pin: true,
        scrub: true,
        //markers: true,

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
//console.log(galleryTwoWidth);

let amountToScrollTwo = (galleryTwoWidth - window.innerWidth) + 110;
//console.log(amountToScrollTwo);

gsap.set(galleryTwo, { xPercent: -65, yPercent: 20, scale: 0 }); //, yPercent: 20, scale: 0

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
    }
});

// 3rd Slider Scroll
const galleryThree = document.querySelector(".galleryThree");

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

//Initialize Lenis smooth scrolling
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


const canvas = document.querySelector('.canvas2');
const ctx = canvas.getContext('2d');
const links = [...document.querySelectorAll('.galleryThree h2')];

// console.log(canvas);
// console.log(links);

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
    canvas.style.transform = `translate3d(${currentX - (width / 2)}px, ${currentY - (height * 2)}px, 0)`;
    drawImage(imgIndex);
    window.requestAnimationFrame(animate);
}

animate();


// Text-Reveal 2nd Slider

document.querySelectorAll('.item3').forEach((item) => {
    item.addEventListener("mouseenter", function () {
        gsap.set(this.querySelectorAll(".shape span"), { opacity: 0 });
        gsap.to(this.querySelectorAll(".shape span"), {
            opacity: 1,
            duration: 0.075,
            stagger: {
                from: "random",
                each: 0.02
            },
            ease: "power2.out"
        });
    });

    item.addEventListener("mouseleave", function () {
        gsap.to(this.querySelectorAll(".shape span"), {
            opacity: 0,
            duration: 0.075,
            stagger: {
                from: "random",
                each: 0.02
            },
            ease: "power2.in"
        });
    });
});

