const sideInput = document.querySelectorAll(".side-input");

const hypotenuseBtn = document.querySelector("#hypotenuse-btn");

const outputDiv = document.querySelector("#output-div");

hypotenuseBtn.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse() 
{
    const input1 = Number(sideInput[0].value);
    const input2 = Number(sideInput[1].value);

    // const sumOfSides = calculateSumOfSides( Number(sideInput[0].value), Number(sideInput[1].value) );

    if(input1 < 0 || input2 < 0){
        outputDiv.style.color = "#ea580c";
        outputDiv.innerText = "Please enter valid inputs. Values should be positive!!";
    }
    else{
        outputDiv.style.color = "white";
        if(input1 && input2)
        {
            const sumOfSides = calculateSumOfSides( input1, input2 );
            
            const hypotenuseOfTriangle = Math.sqrt(sumOfSides);
            outputDiv.innerText = "The hypotenuse of the triangle is: " + hypotenuseOfTriangle.toFixed(2);
        }
        else{
            outputDiv.style.color =  "#ea580c";
            outputDiv.innerText = "Please enter all the fields😐";
        }
    }
}


function calculateSumOfSides(a, b)
{
    const sumOfSides = a*a + b*b;
    return sumOfSides;
}