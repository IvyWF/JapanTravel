import gsap from "gsap";

const bigBall = document.querySelector('.cursor__ball--big');
const smallBall = document.querySelector('.cursor__ball--small');
const hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < hoverables.length; i++) {
    hoverables[i].addEventListener('mouseenter', onMouseHover);
    hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
    gsap.to(bigBall, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: .4
    })
    gsap.to(smallBall, {
        x: e.clientX - 5,
        y: e.clientY - 9,
        duration: .1
    })
}

// Hover an element
function onMouseHover() {
    gsap.to(bigBall, {
        scale: 2.5,
        duration: .3
    })

    gsap.to(smallBall, {
        scale: 0,
        duration: .1
    })
}
function onMouseHoverOut() {
    gsap.to(bigBall, {
        scale: 1,
        duration: .3
    })

    gsap.to(smallBall, {
        scale: 1,
        duration: .3
    })
}