let galleryImages = document.querySelectorAll(".galleryPopupOne img");
let getLatestOpenedImage;
let windowWidth = window.innerWidth;

if (galleryImages) {
    galleryImages.forEach(function (image, index) {
        image.onclick = function () {
            let getImageUrl = image.src;

            getLatestOpenedImage = index + 1;

            let container = document.body;
            let newImageWindow = document.createElement("div");
            container.appendChild(newImageWindow);
            newImageWindow.setAttribute("class", "img-window");
            newImageWindow.addEventListener('click', closeImage);

            //newImageWindow.setAttribute("onclick", closeImage()); => this 'onclick' doesn't work any more. Need to create an addEventListener


            let newImage = document.createElement("img");
            let imageTitle = document.createElement("p");
            newImageWindow.appendChild(newImage);
            newImageWindow.appendChild(imageTitle);
            newImage.setAttribute("src", getImageUrl);
            newImage.setAttribute("id", "current-img");
            newImage.setAttribute("alt", "Morning///00" + (index + 1));
            let alt = newImage.getAttribute('alt');
            imageTitle.textContent = alt;


            newImage.onload = function () {
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;


                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode(">");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.addEventListener('click', function changeImage() {
                    //console.log(setNewImgUrl);
                    document.querySelector("#current-img").remove();

                    let getImgWindow = document.querySelector(".img-window");
                    let newImg = document.createElement("img");
                    let imgTitle = document.createElement("p");
                    getImgWindow.appendChild(newImg);
                    getImgWindow.appendChild(imgTitle);
                    imgTitle.style.cssText = "z-index: 100;";
                    imgTitle.style.cssText = "background-color: black;";


                    let images = [...document.querySelectorAll(".galleryPopupOne img")];
                    let calcNewImg = getLatestOpenedImage + 1;

                    if (calcNewImg > galleryImages.length) {
                        calcNewImg = 1;
                    }

                    console.log(calcNewImg);

                    let getNewImgUrl = images[calcNewImg - 1].src;
                    let alT = calcNewImg;
                    imgTitle.textContent = `Morning///00${alT}`;

                    newImg.setAttribute("src", getNewImgUrl);
                    newImg.setAttribute("id", "current-img");


                    getLatestOpenedImage = calcNewImg;


                    newImg.onload = function () {
                        let imgWidth = this.width;
                        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

                        let nextBtn = document.querySelector(".img-btn-next");
                        nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";
                    }

                });
                newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";


                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("<");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.addEventListener('click', function changeImage() {
                    document.querySelector("#current-img").remove();

                    let getImgWindow = document.querySelector(".img-window");
                    let newImg = document.createElement("img");
                    let imgTitle = document.createElement("p");
                    getImgWindow.appendChild(newImg);
                    getImgWindow.appendChild(imgTitle);
                    imgTitle.style.cssText = "z-index: 100;";
                    imgTitle.style.cssText = "background-color: black;";

                    let images = [...document.querySelectorAll("img")];

                    let calcNewImg = getLatestOpenedImage - 1;
                    if (calcNewImg < 1) {
                        calcNewImg = galleryImages.length;
                    }

                    let getNewImgUrl = images[calcNewImg - 1].src;
                    let alT = calcNewImg;
                    imgTitle.textContent = `Morning///00${alT}`;

                    newImg.setAttribute("src", getNewImgUrl);
                    newImg.setAttribute("id", "current-img");

                    getLatestOpenedImage = calcNewImg;

                    newImg.onload = function () {
                        let imgWidth = this.width;
                        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

                        let prevBtn = document.querySelector(".img-btn-prev");
                        prevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
                    }

                });
                newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
            }
        }

    });
}

function closeImage() {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();
}

// Popup modal for 2nd slider
let modalTwo = document.querySelector('.modalTwo');
let titlesTwo = [...document.querySelectorAll('.galleryTwo h2')];
console.log(titlesTwo)
let imgsTwo = document.querySelectorAll('.galleryTwo img');
let imgOpenedTwo = document.querySelector('.full-img-two');
let captionTwo = document.querySelector('.captionTwo');




import image1 from '../images/konnichiwa/slider2/1.png';
import image2 from '../images/konnichiwa/slider2/2.png';
import image3 from '../images/konnichiwa/slider2/3.png';
import image4 from '../images/konnichiwa/slider2/4.png';


// Load images into an array for reference
const imagesTwo = [
    image1,
    image2,
    image3,
    image4,
];

imgsTwo.forEach((img, index) => {
    img.addEventListener('click', () => {
        modalTwo.classList.add('open');
        imgOpenedTwo.classList.add('open');

        const imgOpenedSrc = imagesTwo[index];
        imgOpenedTwo.src = imgOpenedSrc;

        let imgTitle = titlesTwo[index].innerHTML;
        captionTwo.textContent = imgTitle;
    });
});

modalTwo.addEventListener('click', (e) => {
    if (e.target.classList.contains('modalTwo')) {
        modalTwo.classList.remove('open');
        imgOpenedTwo.classList.remove('open');
    }
});

imgOpenedTwo.addEventListener('click', (e) => {
    if (e.target.classList.contains('full-img-two')) {
        modalTwo.classList.remove('open');
        imgOpenedTwo.classList.remove('open');
    }
});

import image3_1 from '../images/konnichiwa/slider3/1.png';
import image3_2 from '../images/konnichiwa/slider3/2.png';
import image3_3 from '../images/konnichiwa/slider3/3.png';
import image3_4 from '../images/konnichiwa/slider3/4.png';
import image3_5 from '../images/konnichiwa/slider3/5.png';
import image3_6 from '../images/konnichiwa/slider3/6.png';

// Popup modal for 3rd slider
let modal = document.querySelector('.modal');
let titles = document.querySelectorAll('.galleryThree h2');
let imgOpened = document.querySelector('.full-img');
let caption = document.querySelector('.caption');

// Load images into an array for reference
const images = [
    image3_1,
    image3_2,
    image3_3,
    image3_4,
    image3_5,
    image3_6,
];

titles.forEach((title, index) => {
    title.addEventListener('click', () => {
        modal.classList.add('open');
        imgOpened.classList.add('open');

        const imgOpenedSrc = images[index];
        imgOpened.src = imgOpenedSrc;

        let imgTitle = title.innerHTML;
        caption.textContent = imgTitle;
    });
});

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        imgOpened.classList.remove('open');
    }
});

imgOpened.addEventListener('click', (e) => {
    if (e.target.classList.contains('full-img')) {
        modal.classList.remove('open');
        imgOpened.classList.remove('open');
    }
});

