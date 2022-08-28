const triangleSideInput = document.querySelectorAll(".triangle-side");

const checkAreaBtn = document.querySelector("#check-btn");

const outputDiv = document.querySelector("#output-div");

checkAreaBtn.addEventListener("click", calculateAreaOfTriangle);

function calculateAreaOfTriangle() {
    let triangleSideInputZero = Number(triangleSideInput[0].value);
    let triangleSideInputOne = Number(triangleSideInput[1].value);
    const area = calculateArea(triangleSideInputZero, triangleSideInputOne);


    /*
    MY MISTAKE IN ERROR HANDLING---
    if (triangleSideInputZero === 0 || triangleSideInputOne === 0) {
        outputDiv.innerText = "Please enter valid inputs"
    } else {
        if (triangleSideInputZero && triangleSideInputOne) {
            if (triangleSideInputZero > 0 && triangleSideInputOne > 0) {
                outputDiv.innerText = "The area of the triangle is: " + area;
            } else if (triangleSideInputZero < 0 && triangleSideInputOne < 0) {
                outputDiv.innerText = "The value of both the base and the height should be positive"
            } else if (triangleSideInputZero < 0) {
                outputDiv.innerText = "The value of base should be positive";
            } else if (triangleSideInputOne < 0) {
                outputDiv.innerText = "The value of height should be positive";
            } else {
                outputDiv.innerText = "Please enter all the fields 😐"
            }
        }
    }
    */

    // RECTIFIED IT ---


    if(triangleSideInput[0].value === "" || triangleSideInput[1].value === "")
    {
        outputDiv.innerText = "Please enter all the fields"
    }
    else
    {
        if(triangleSideInputZero === 0 || triangleSideInputOne === 0)
        {
            outputDiv.innerText = "Please enter valid input";
        }
        else if(triangleSideInputZero && triangleSideInputOne)
        {
            if(triangleSideInputZero<0 && triangleSideInputOne<0)
            {
                outputDiv.innerText = "The values of both the Base and the Height should be positive";
            }
            else if(triangleSideInputZero<0)
            {
                outputDiv.innerText = "The value of Base should be positive";
            }
            else if(triangleSideInputOne<0)
            {
                outputDiv.innerText = "The value of Height should be positive";
            }
            else
            {
                outputDiv.innerText = "The Area of the triangle is : " + area +("cm2");
            }
        }
    }
}

function calculateArea(base, height) {
    let area = 0.5 * (base * height);
    return area;
}