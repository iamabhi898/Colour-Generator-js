// BASIC COLOURS => 
// White(#FFFFFF) Red(#FF0000) Yellow(#FFFF00)  Green(#00FF00) Blue(#0000FF) Orange(#FFA500) Purple(#800080) Black(#000000)


// Color Palette

const colorPicked = document.querySelectorAll(".color");
const colorName = document.querySelector("h1");
const hexCode = document.querySelector(".hexCode");
const body = document.querySelector("body");

for (const colorElement of colorPicked) {

    colorElement.addEventListener("click", function () {

        // light mode
        const btn = document.querySelector(".clickMe");
        btn.style.borderColor = "#1b262c";
        btn.style.color = "whitesmoke";

        if (colorElement.classList.contains("white")) {

            body.style.backgroundColor = "white";
            colorName.textContent = "White";
            colorName.style.color = "white";
            hexCode.textContent = "Colour : #FFFFFF";

        } else if (colorElement.classList.contains("red")) {

            body.style.backgroundColor = "red";
            colorName.textContent = "Red";
            colorName.style.color = "red";
            hexCode.textContent = "Colour : #FF0000";

        } else if (colorElement.classList.contains("yellow")) {

            body.style.backgroundColor = "yellow";
            colorName.textContent = "Yellow";
            colorName.style.color = "yellow";
            hexCode.textContent = "Colour : #FFFF00";

        } else if (colorElement.classList.contains("green")) {

            body.style.backgroundColor = "green";
            colorName.textContent = "Green";
            colorName.style.color = "green";
            hexCode.textContent = "Colour : #00FF00";

        } else if (colorElement.classList.contains("blue")) {

            body.style.backgroundColor = "blue";
            colorName.textContent = "Blue";
            colorName.style.color = "blue";
            hexCode.textContent = "Colour : #0000FF";

        } else if (colorElement.classList.contains("orange")) {

            body.style.backgroundColor = "orange";
            colorName.textContent = "Orange";
            colorName.style.color = "orange";
            hexCode.textContent = "Colour : #FFA500";

        } else if (colorElement.classList.contains("purple")) {

            body.style.backgroundColor = "purple";
            colorName.textContent = "Purple";
            colorName.style.color = "purple";
            hexCode.textContent = "Colour : #800080";

        } else if (colorElement.classList.contains("black")) {

            body.style.backgroundColor = "black";
            colorName.textContent = "Black";
            colorName.style.color = "black";
            hexCode.textContent = "Colour : #000000";

            // dark mode 
            const btn = document.querySelector(".clickMe");
            btn.style.borderColor = "whitesmoke";
            btn.style.color = "whitesmoke";

        }

    });

}

/************  Random Color  *************/

const hex = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"
]

const randColor = document.querySelector(".random");

randColor.addEventListener("click", function () {

    let hexColorCode = '#';
    for (let i = 0; i < 6; i++) {
        let j = Math.floor(Math.random() * 16);
        hexColorCode += hex[j];
    }

    body.style.backgroundColor = hexColorCode;
    colorName.textContent = "";
    hexCode.textContent = "Colour : " + hexColorCode;

});

/*****************  Click Me - Random  *****************/

const btn = document.querySelector(".clickMe");

btn.addEventListener("click", function () {

    let hexColorCode = '#';
    for (let i = 0; i < 6; i++) {
        let j = Math.floor(Math.random() * 16);
        hexColorCode += hex[j];
    }

    body.style.backgroundColor = hexColorCode;
    colorName.textContent = "";
    hexCode.textContent = "Colour : " + hexColorCode;

});