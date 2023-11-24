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


                    let images = [...document.querySelectorAll("img")];
                    // galleryImages.forEach(image, index) {
                    //     let getUrl = image.src;
                    //     let getUrlPos = getUrl.split("http://localhost:1234/");
                    //     let setNewUrl = getUrlPos[1];
                    // }
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

let galleryTwoImages = document.querySelectorAll(".galleryPopupTwo img");
let getLatestOpenImage;

if (galleryTwoImages) {
    galleryTwoImages.forEach(function (image, index) {
        image.onclick = function () {
            let getImageUrl = image.src;

            getLatestOpenImage = index + 1;

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


                    let images = [...document.querySelectorAll("img")];
                    // galleryImages.forEach(image, index) {
                    //     let getUrl = image.src;
                    //     let getUrlPos = getUrl.split("http://localhost:1234/");
                    //     let setNewUrl = getUrlPos[1];
                    // }
                    let calcNewImg = getLatestOpenImage + 1;

                    if (calcNewImg > galleryTwoImages.length) {
                        calcNewImg = 1;
                    }

                    console.log(calcNewImg);

                    let getNewImgUrl = images[calcNewImg - 1].src;
                    let alT = calcNewImg;
                    imgTitle.textContent = `Morning///00${alT}`;

                    newImg.setAttribute("src", getNewImgUrl);
                    newImg.setAttribute("id", "current-img");


                    getLatestOpenImage = calcNewImg;


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

                    let calcNewImg = getLatestOpenImage - 1;
                    if (calcNewImg < 1) {
                        calcNewImg = galleryTwoImages.length;
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

// Popup modal for 3rd slider
let modal = document.querySelector('.modal');
let titles = document.querySelectorAll('.galleryThree h2');
let imgOpened = document.querySelector('.full-img');
let caption = document.querySelector('.caption');



import image1 from '../images/osaka/1.jpg';
import image2 from '../images/osaka/2.jpg';
import image3 from '../images/osaka/3.jpg';
import image4 from '../images/osaka/4.jpg';
import image5 from '../images/osaka/5.jpg';
import image6 from '../images/osaka/6.jpg';

// Load images into an array for reference
const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
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
