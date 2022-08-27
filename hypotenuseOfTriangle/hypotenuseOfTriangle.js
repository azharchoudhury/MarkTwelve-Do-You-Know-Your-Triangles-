const sideInput = document.querySelectorAll(".side-input");

const hypotenuseBtn = document.querySelector("#hypotenuse-btn");

const outputDiv = document.querySelector("#output-div");

hypotenuseBtn.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse() 
{
    const sumOfSides = calculateSumOfSides( Number(sideInput[0].value), Number(sideInput[1].value) );

    const hypotenuseOfTriangle = Math.sqrt(sumOfSides);
    outputDiv.innerText = "The hypotenuse of the triangle is: " + hypotenuseOfTriangle;
}


function calculateSumOfSides(a, b)
{
    const sumOfSides = a*a + b*b;
    return sumOfSides;
}