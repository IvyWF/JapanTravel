import gsap from "gsap";

//Cursor Effect
const firstBall = document.querySelector('.cursor__ball--first');
const secondBall = document.querySelector('.cursor__ball--second');
const hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < hoverables.length; i++) {
    hoverables[i].addEventListener('mouseenter', onMouseHover);
    hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
    gsap.to(firstBall, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.4
    })
    gsap.to(secondBall, {
        x: e.clientX - 5,
        y: e.clientY - 7,
        duration: 0.1
    })
}

// Hover an element
function onMouseHover() {
    gsap.to(firstBall, {
        scale: 4,
        duration: 0.3
    })

    // gsap.to(secondBall, {
    //     scale: 0,
    //     duration: 0.3
    // })
}
function onMouseHoverOut() {
    gsap.to(firstBall, {
        scale: 1,
        duration: 0.3
    })

    // gsap.to(secondBall, {
    //     scale: 1,
    //     duration: 0.3
    // })
}