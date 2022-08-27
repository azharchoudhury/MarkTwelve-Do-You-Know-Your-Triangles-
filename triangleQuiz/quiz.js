const quizForm = document.querySelector(".quiz-form");

const submitButton = document.querySelector("#submit-button");

const outputBox = document.querySelector("#output-box");

const correctAnswers = ["90°", "one right angle", "12, 16, 20", "Equilateral triangle", "45°"];

submitButton.addEventListener("click", calculateScore);

function calculateScore()
{
    let score = 0;
    let index = 0;

    const formResult = new FormData(quizForm);

    for(let values of formResult.values())
    {
        if(values === correctAnswers[index])
        {
            score++;
        }
        index++;
    }

    outputBox.innerText = "Your score is: " + score;
}

