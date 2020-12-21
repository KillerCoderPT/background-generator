let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let btn = document.querySelector("button");


function randomColor() {
    //the addition of '000000' and the slice() at the end will ensure that you'll always get 6digits
    return ('000000' + Math.floor(Math.random() * 11091997).toString(16)).slice(-6);
}

function setGradient() {
    // console.log(color1.value);
    body.style.background = "linear-gradient(to right, "
                        + color1.value
                        + ", "
                        + color2.value
                        + ")";

    css.textContent = "background: " + body.style.background + ";";
}

function randomGradient() {
    //same as setGradient() but we are using the random hex generator -- randomColor()
    color1.value = "#" + randomColor();
    color2.value = "#" + randomColor();

    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", randomGradient);

// On Load
setGradient();
