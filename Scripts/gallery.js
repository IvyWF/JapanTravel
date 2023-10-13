let galleryImages = document.querySelectorAll("img");
//console.log(galleryImages);
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
            newImageWindow.appendChild(newImage);
            newImage.setAttribute("src", getImageUrl);
            newImage.setAttribute("id", "current-img");

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
                    getImgWindow.appendChild(newImg);

                    let images = [...document.querySelectorAll("img")];
                    // galleryImages.forEach(image, index) {
                    //     let getUrl = image.src;
                    //     let getUrlPos = getUrl.split("http://localhost:1234/");
                    //     let setNewUrl = getUrlPos[1];
                    // }
                    let calcNewImg = getLatestOpenedImage + 1;
                    console.log(calcNewImg);
                    if (calcNewImg > galleryImages.length) {
                        calcNewImg = 1;
                    }

                    let getNewImgUrl = images[calcNewImg - 1].src;
                    console.log(getNewImgUrl);

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
                    getImgWindow.appendChild(newImg);

                    let images = [...document.querySelectorAll("img")];

                    let calcNewImg = getLatestOpenedImage - 1;
                    console.log(calcNewImg);
                    if (calcNewImg < 1) {
                        calcNewImg = galleryImages.length;
                    }

                    let getNewImgUrl = images[calcNewImg - 1].src;
                    console.log(getNewImgUrl);

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