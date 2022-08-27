const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputText = document.querySelector("#output-text");

isTriangleBtn.addEventListener("click", isTriangle);

function isTriangle() {
    var sumOfAngles = checkIfTriangle(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));

    if (inputs[0].value && inputs[1].value && inputs[2].value) {
        if (sumOfAngles === 180) {
            outputText.innerText = "Yayy!! The angles entered by you form a triangle"
        } else {
            outputText.innerText = "Oh oh!! The angles entered by you don't form a triangle"
        }
    } else {
        outputText.innerText = ("Please enter all the fields 😐");
    }
}

function checkIfTriangle(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}