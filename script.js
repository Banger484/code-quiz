var quiz = {
    question: "Why though?",
    answers: ["because", "none-ya", "dunno", "no you!"],
    correct: "because"
}
var displayAnswers;

var quizDisplay = document.createElement("div")
document.body.appendChild(quizDisplay)




function quizGame () {
    var displayQuestion = document.createElement("h1")
    displayQuestion.textContent = quiz.question
    quizDisplay.appendChild(displayQuestion)
    displayAnswers = document.createElement("ul")
    displayAnswers.setAttribute('id', 'choices')
    quizDisplay.appendChild(displayAnswers)

    displayMultipleChoice()
    
}

quizGame()


function displayMultipleChoice () {
    for(let i = 0; i < 4; i++) {
        var index = Math.floor(Math.random() * quiz.answers.length)
        var displayAnswer = document.createElement('li')
        displayAnswer.setAttribute('class', 'answers')
        displayAnswers.appendChild(displayAnswer)
        displayAnswer.textContent = quiz.answers[index]
        displayAnswer.setAttribute('id', quiz.answers[index])
        quiz.answers.splice(index, 1)
    }
}

function checkAnswer (e) {
    
    if (e.path[0].id === quiz.correct) {
        console.log("Correct!!!")
    } else {
        console.log("Hell naw!!!");
    }
}


  displayAnswers.addEventListener('click', checkAnswer);