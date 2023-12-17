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
        x: e.clientX + 9,
        y: e.clientY + 9,
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

const matchPc = window.matchMedia("(min-width: 993px)");
const matchTablet = window.matchMedia("(min-width: 768px) and (max-width: 992px)");

const matchMobile = window.matchMedia("(max-width: 767px)");

// Date and Time 
let todaydate = document.querySelector('#date');
let todaytime = document.querySelector('#time');

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timeZone: 'Asia/Tokyo'
}

const formatter = new Intl.DateTimeFormat('en-US', options);
const date = new Date();
//console.log(formatter.format(date));

function printTokyoDate() {
    if (matchPc.matches) {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timeZone: 'Asia/Tokyo'
        }

        const formatter = new Intl.DateTimeFormat('en-US', options);
        const date = new Date();
        const curDate = formatter.format(date);
        //console.log(formatter.format(date));

        todaydate.innerHTML = curDate;
    }
}

printTokyoDate();

function printTokyoTime() {
    if (matchPc.matches) {
        let curTime = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Tokyo',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hourCycle: 'h24',
        })
        todaytime.innerHTML = curTime;
    }
}

printTokyoTime();

// Media Query - Responsive for header
window.onscroll = function () {
    if (matchPc.matches) {
        scrollFunction();
    } else if (matchTablet.matches) {
        scrollTabletFunction();
    }
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('header').style.height = '70px';
        document.getElementById('headerTitle').style.fontSize = '34px';
        document.getElementById('headerTitle').style.height = '70px';
        document.getElementById('dateTime').style.fontSize = "17px";
        document.getElementById('dateTime').style.paddingBottom = "3%";
        document.getElementById('headerNav').style.fontSize = "17px";
        document.getElementById('headerNav').style.paddingBottom = "5%";

    } else {
        document.getElementById('header').style.height = '100px';
        document.getElementById('headerTitle').style.fontSize = '50px';
        document.getElementById('headerTitle').style.height = '100px';
        document.getElementById('dateTime').style.justifyContent = 'flex-end';
        document.getElementById('dateTime').style.alignItems = 'flex-start';
        document.getElementById('dateTime').style.fontSize = "21px";
        document.getElementById('dateTime').style.paddingBottom = "5%"; document.getElementById('headerNav').style.fontSize = "20px";
        document.getElementById('headerNav').style.paddingBottom = "7%";
    }
}

function scrollTabletFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('header').style.height = '70px';
        document.getElementById('headerTitle').style.fontSize = '30px';
        document.getElementById('headerTitle').style.height = '70px';
        document.getElementById('nav-toggle-btn').style.marginTop = '2%';
    } else {
        document.getElementById('header').style.height = '90px';
        document.getElementById('headerTitle').style.fontSize = '35px';
        document.getElementById('headerTitle').style.height = '90px';
        document.getElementById('nav-toggle-btn').style.marginTop = '5%';
    }
}

function styleDesktopFunction() {

    if (matchPc.matches) {
        document.getElementById('header').style.height = '100px';
        document.getElementById('headerTitle').style.fontSize = '50px';
        document.getElementById('headerTitle').style.height = '100px';
        document.getElementById('dateTime').style.justifyContent = 'flex-end';
        document.getElementById('dateTime').style.alignItems = 'flex-start';
        document.getElementById('dateTime').style.fontSize = "21px";
        document.getElementById('dateTime').style.paddingBottom = "5%"; document.getElementById('headerNav').style.fontSize = "20px";
        document.getElementById('headerNav').style.paddingBottom = "7%";
    }
}

styleDesktopFunction();

function styleTabletFunction() {

    if (matchTablet.matches) {
        document.getElementById('header').style.height = '90px';
        document.getElementById('headerTitle').style.fontSize = '35px';
        document.getElementById('headerTitle').style.height = '90px';
        document.getElementById('nav-toggle-btn').style.marginTop = '5%';
    }

}

styleTabletFunction();


function styleMobileFunction() {

    if (matchMobile.matches) {
        document.getElementById('header').style.height = '50px';
        document.getElementById('header').style.width = '100vw';
        document.getElementById('headerTitle').style.fontSize = '22px';
        document.getElementById('headerTitle').style.height = '50px';
    }

}

styleMobileFunction();





