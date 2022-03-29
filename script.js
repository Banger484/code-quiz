var startBtn = document.getElementById("start-btn");
var displayQuestion = document.getElementById("quiz-question");
var quizDisplay = document.getElementById("quiz-display");
var displayAnswers = document.getElementById("quiz-answers");
var timer = 60;

function quizGame() {
  if (startBtn.style.display === "none") {
    startBtn.style.display = "block";
  } else {
    startBtn.style.display = "none";
  }

  displayQuiz();
}

function displayQuiz() {
    if(quizPool.length === 0 || timer === 0) {
        removeQuiz(quizDisplay)
        gameOver()
        if (startBtn.style.display === "none") {
            startBtn.style.display = "block";
          } else {
            startBtn.style.display = "none";
          }
    }
  var index = Math.floor(Math.random() * quizPool.length);
  quiz = quizPool[index];
  quizPool.splice(index, 1);
  displayQuestion.textContent = quiz.question;
  removeQuiz(displayAnswers);
  for (let i = 0; i < 4; i++) {
    quizDisplay.appendChild(displayAnswers);
    var index = Math.floor(Math.random() * quiz.answers.length);
    var displayAnswer = document.createElement("li");
    displayAnswer.setAttribute("class", "answers");
    displayAnswers.appendChild(displayAnswer);
    displayAnswer.textContent = quiz.answers[index];
    displayAnswer.setAttribute("id", quiz.answers[index]);
    quiz.answers.splice(index, 1);
  }

}

function checkAnswer(e) {
  if (e.path[0].id === quiz.correct) {
    displayQuiz();
  } else {
    console.log("Hell naw!!!");
  }
}

function removeQuiz(p) {
  while (p.firstChild) {
    p.removeChild(p.firstChild);
  }
}
function gameOver () {
    console.log("GameOver");
}

startBtn.addEventListener("click", quizGame);
displayAnswers.addEventListener("click", checkAnswer);
