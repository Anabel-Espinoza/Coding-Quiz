// Variables
let correctCounter = 0
let startBtn = document.querySelector('#startEl')
let questionText = document.querySelector('.questionEl')
let instructionsText = document.querySelector('.instructionsEl')
let listAnswers = document.querySelector('.listAnswersEl')
let answerA = document.querySelector ('#answerAEl')
let answerB = document.querySelector ('#answerBEl')
let answerC = document.querySelector ('#answerCEl')
let answerD = document.querySelector ('#answerDEl')
let highScoresEl = document.querySelector('.HighScores')
let questionIndex = 0
let rightResult = document.querySelector('.correct-message')
let wrongResult = document.querySelector('.wrong-message')
let secondsLeft= 75;
let timerEl = document.querySelector('.timer-El')
let saveInfoEl = document.querySelector('.save-info')
let submitBtn = document.querySelector('#submit-btn')
let initialsEl = document.querySelector('#initials-el')
let highScoreList = document.querySelector('.highScoresList')
let allScores= []

// questions bank
const questions = [{
    question: 'Commonly used data types do NOT include:',
    answers: ['alerts', 'strings','booleans','numbers'],
    correctAnswer: 'alerts'
}, {
    question: 'The condition in an if/else statement is enclosed with:',
    answers: ['parenthesis', 'curly brackets','quotes','square brackets'],
    correctAnswer: 'parenthesis'
}, {
    question: 'Arrays in JavaScript can be used to store:',
    answers: ['numbers and strings', 'other arrays','booleans','all of the above'],
    correctAnswer: 'all of the above'
}, {
    question: 'String values must be enclosed within ______ when being assigned to variables.',
    answers: ['commas', 'curly brackets','quotes','parenthesis'],
    correctAnswer: 'quotes'
} , {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    answers: ['JavaScript', 'terminal/bash','for loops','console.log'],
    correctAnswer: 'console.log'
} , {
    question: 'Inside the HTML document, the JavaScript code must be placed in the ____ element',
    answers: ['<head>', '<footer>','<script>','<link>'],
    correctAnswer: '<script>'
}  , {
    question: 'For the following array ["a","b","c","d"], the index for letter "a" is:',
    answers: ['0', '1','2','3'],
    correctAnswer: '0'
}  , {
    question: "The method used to remove the last element of my array is:",
    answers: ['push()', 'unshift()','concat()','pop()'],
    correctAnswer: 'pop()'
} ]

// Start Game
startBtn.addEventListener('click', startGame)

highScoresEl.addEventListener('click', highScores)

function startGame() {
    instructionsText.textContent=" "
    startBtn.style.display = 'none'
    questionIndex=0
    startTimer()
    startQuestion()
}

function startTimer() {
    let timerInterval= setInterval(function () {
        timerEl.textContent = 'Time: ' + secondsLeft
        secondsLeft--
        if (secondsLeft <= 0 || questionIndex===questions.length) {
            clearInterval(timerInterval);
            timerEl.textContent = 'Time: ' + secondsLeft
            stopGame()
        }
    }, 1000);
}

// Start questions
function startQuestion() {
        // Setting up questions and options
        questionText.textContent = questions[questionIndex].question
        listAnswers.setAttribute('style','display:flex; flex-direction:column; justify-content:center; margin-top: 30px')
        for (let i=0; i<4; i++) {
            listAnswers.children[i].innerText = questions[questionIndex].answers[i]
            listAnswers.children[i].setAttribute('style', 'display:block; margin:0.2rem; max-width:300px; padding: 0.5rem')
            listAnswers.children[i].addEventListener('click', function() {
            console.log('selected', listAnswers.children[i].innerText)
            console.log('correct', questions[questionIndex].correctAnswer)
            // Check if the answer is correct
            if (listAnswers.children[i].innerText===questions[questionIndex].correctAnswer) {
                correctCounter++
                rightResult.style.display= 'block'
                wrongResult.style.display= 'none'
                console.log('correct')
                questionIndex++
            } else {
                secondsLeft-=10
                rightResult.style.display= 'none'
                wrongResult.style.display= 'block'
                console.log('wrong')
                questionIndex++
            }   
            //Next question until all questions have been answered
            if (questionIndex<questions.length) {
                questionText.textContent = questions[questionIndex].question
                console.log(questionIndex)
                for (let i=0; i<4; i++) {
                    listAnswers.children[i].innerText = questions[questionIndex].answers[i]
                    console.log(questions[questionIndex].answers)
                }
            } else {
                stopGame()
            }
            })  
        }
  }              

// all questions answered or time out function
function stopGame() {
    questionText.textContent = 'All done!'
    instructionsText.textContent='Your answered: ' + correctCounter + ' questions correctly. Your score is: ' + secondsLeft
    for (let k=0; k<4; k++) {
        listAnswers.children[k].setAttribute('style', 'display: none')
    }
    saveInfoEl.style.display= 'block'
    // console.log(submitBtn)
    submitBtn.addEventListener('click', highScores)

    saveInfoEl.addEventListener('click', saveScore)
}

// high scores display
function highScores() {
    highScoresEl.textContent= 'Coding Quiz Challenge'
    timerEl.textContent = ""
    questionText.textContent = 'High Scores'
    rightResult.style.display= 'none'
    wrongResult.style.display= 'none'
    instructionsText.textContent=""
    saveInfoEl.style.display= 'none'
    let buttons= document.querySelectorAll('button')
    for (i=0; i<buttons.length; i++){
        buttons[i].style.display= 'none'
    }
    //Go back button
    let goBackBtn = document.createElement('button')
    goBackBtn.textContent = 'Go Back'
    highScoreList.appendChild(goBackBtn)
    goBackBtn.addEventListener('click', function(){
        window.location.reload()
    })
    // Clear high scores button
    let ClearScoresBtn = document.createElement('button')
    ClearScoresBtn.textContent = 'Clear high scores'
    highScoreList.appendChild(ClearScoresBtn)
    ClearScoresBtn.addEventListener('click', function(){
        localStorage.clear()
    })
    // Render Scores
    renderScores()
}
// Save score button - local storage
function saveScore(event) {
    event.preventDefault();
    let userScore = {
        user: initialsEl.value,
        score: secondsLeft
    }
    if (userScore.user === '') {
        return
    }
    // allScores.push(userScore)
    localStorage.setItem("userScore", JSON.stringify(userScore));
    highScores();
}

function renderScores() {
    let scoreText = document.createElement('ol')
    let storedScores = JSON.parse(localStorage.getItem("userScore"));
    if (storedScores !== null) {
        console.log(storedScores) 
    // for (let i=0; i<storedScores.length; i++){
    // let userScore = storedScores[i]
    scoreText.textContent = storedScores.user + '  ' + storedScores.score;
    scoreText.setAttribute('style', 'background-color: lightblue')
    console.log(storedScores.user, storedScores.score)
    // li.setAttribute('data-index', i)
    highScoreList.appendChild(scoreText)
    // highScoresEl.style.display='block'
  } else {
    scoreText.style.display='none'

  }
}

