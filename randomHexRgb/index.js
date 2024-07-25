let hexContainer = document.querySelector("#hex-container")
let hexButton = document.querySelector("button");
let hexShow = document.getElementById("hex-number");

hexButton.addEventListener("click", hexColorGenerator)
function hexColorGenerator() {
    let hexGenerator = "0123456789abcdef";
    let setEmpltyHHex = "";
    let borders = ""
    length = hexGenerator.length;

    for (let i = 0; i < 6; ++i) {
        setEmpltyHHex += hexGenerator.charAt(Math.floor(Math.random() * length))
    }
    for (let j = 0; j < 6; j++) {
        borders += hexGenerator.charAt(Math.floor(Math.random() * length))
    }
    let showColor = `#${setEmpltyHHex}`
    hexShow.textContent = showColor;
    hexShow.style.background = showColor;
    hexContainer.style.background = showColor;
    hexShow.style.border = `10px dashed #${borders}`;
    hexShow.style.color = `#${borders}`
    copyHexColor(showColor)
}


// rgb copy colour
let redColor = document.getElementById("red");
let greenColor = document.getElementById("green");
let blueColor = document.getElementById("blue");
let showBlue = document.getElementById("showBlue");
let showRed = document.getElementById("showRed");
let showGreen = document.getElementById("showGreen");
let rgbColorContainer = document.getElementById("rgbColorContainer");
let rgb_container = document.getElementById("rgb-container");
let rgbCopy = document.getElementById("rgbCopy");

let redComplete = false;
let greenComplete = false;
let blueComplete = false;

function checkAndLogRGBColor() {
    if (redComplete && greenComplete && blueComplete) {
        getRGBColor();
    }
}

redColor.addEventListener('input', () => {
    showRed.textContent = redColor.value;
    redComplete = true;
    checkAndLogRGBColor();
});

greenColor.addEventListener('input', () => {
    showGreen.textContent = greenColor.value;
    greenComplete = true;
    checkAndLogRGBColor();
});

blueColor.addEventListener('input', () => {
    showBlue.textContent = blueColor.value;
    blueComplete = true;
    checkAndLogRGBColor();
});

function getRGBColor() {
    let backColor=rgbColorContainer.innerText
    rgb_container.style.background=backColor;
    copyHexColor(backColor)
}

function copyHexColor(color) {
    if(color === undefined) return
    navigator.clipboard.writeText(color)
}


