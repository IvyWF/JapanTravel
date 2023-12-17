import gsap from "gsap";


const matchPc = window.matchMedia("(min-width: 993px)");
const matchTablet = window.matchMedia("(min-width: 768px) and (max-width: 992px)");
const matchMobile = window.matchMedia("(max-width: 767px)");

function removePC() {
    let parentOne = document.getElementById('header-container');
    let childOne = document.getElementById('nav-toggle-btn');

    let parentTwo = document.getElementById('container');
    let childTwo = document.getElementById('navContainer');

    if (matchPc.matches) {
        parentOne.removeChild(childOne);
        parentTwo.removeChild(childTwo);
    }
}

removePC();

function removeTabletMobile() {
    let parentThree = document.getElementById('header-container');
    let childThree = document.getElementById('headerNav');
    let childFour = document.getElementById('dateTime');
    let childFive = document.getElementById('japanese');

    let parentFour = document.getElementById('removeSmallParent');
    let childSix = document.getElementById('removeSmallOne');
    let childSeven = document.getElementById('removeSmallTwo');

    if (matchTablet.matches || matchMobile.matches) {
        parentThree.removeChild(childThree);
        parentThree.removeChild(childFour);
        parentThree.removeChild(childFive);

        parentFour.removeChild(childSix);
        parentFour.removeChild(childSeven);
    }
}

removeTabletMobile();

// Full Screen Menu 
let navToggle = document.getElementById('nav-toggle-btn');
let bar = gsap.timeline();

bar.to('.bar-1', {
    duration: 0.5,
    attr: {
        d: "M8,2 L2,8"
    },
    x: 1,
    ease: "power2.inOut"
}, "start");

bar.to('.bar-2', {
    duration: 0.5,
    autoAlpha: 0
}, "start");

bar.to('.bar-3', {
    duration: 0.5,
    attr: {
        d: "M8,8 L2,2"
    },
    x: 1,
    ease: "power2.inOut"
}, "start");

bar.reverse();

let tl = gsap.timeline({ paused: true });

tl.to("#navContainer", {
    duration: 0,
    display: "block",
    ease: "expo.inOut"
});

tl.from(".nav-bg span", {
    duration: 1,
    x: "100%",
    stagger: 0.1,
    ease: "expo.inOut"
});

tl.from(".nav-container li a", {
    duration: 0.5,
    y: "100%",
    stagger: 0.2,
    ease: "expo.inOut"
}, "-=0.5");

tl.from(".contactInfos li", {
    duration: 0.5,
    y: "-100%",
    opacity: 0,
    stagger: 0.1,
    ease: "expo.inOut"
}, "-=0.5");

tl.reverse();

navToggle.addEventListener('click', function () {
    bar.reversed(!bar.reversed());
    tl.reversed(!tl.reversed());
});