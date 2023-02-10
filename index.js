//Variables
let correctCounter = 0
let wrongCounter = 0
let startBtn = document.querySelector('#startEl')
let questionText = document.querySelector('.questionEl')
let answersText = document.querySelector('.answersText')
let instructionsText = document.querySelector('.instructionsEl')
let listAnswers = document.querySelector('.listAnswersEl')
let answerA = document.querySelector ('#answerAEl')
let answerB = document.querySelector ('#answerBEl')
let answerC = document.querySelector ('#answerCEl')
let answerD = document.querySelector ('#answerDEl')

let answerMessage = document.createElement('p')

let questionIndex = 0
let rightResult = document.querySelector('.correct-message')
let wrongResult = document.querySelector('.wrong-message')
let secondsLeft= 15;
let timerEl = document.querySelector('.timer-El')


const questions = [{
    question: '1. Commonly used data types do NOT include:',
    answers: ['alerts', 'strings','booleans','numbers'],
    correctAnswer: 'alerts'
}, {
    question: '2. The condition in an if/else statement is enclosed with:',
    answers: ['parenthesis', 'curly brackets','quotes','square brackets'],
    correctAnswer: 'parenthesis'
}, {
    question: '3. Arrays in JavaScript can be used to store:',
    answers: ['numbers and strings', 'other arrays','booleans','all of the above'],
    correctAnswer: 'all of the above'
}, {
    question: '4. String values must be enclosed within __________ when being assigned to variables.',
    answers: ['commas', 'curly brackets','quotes','parenthesis'],
    correctAnswer: 'quotes'
} , {
    question: '5. A very useful tool used during development and debugging for printing content to the debugger is:',
    answers: ['JavaScript', 'terminal/bash','for loops','console.log'],
    correctAnswer: 'console.log'
} , {
    question: '6. Inside the HTML document, the JavaScript code must be placed in the _________ element',
    answers: ['<head>', '<footer>','<script>','<link>'],
    correctAnswer: '<script>'
}  , {
    question: '7. For the following array ["a","b","c","d"], the index for letter "a" is:',
    answers: ['0', '1','2','3'],
    correctAnswer: '0'
}  , {
    question: "8. The method used to remove the last element of my array is:",
    answers: ['push()', 'unshift()','concat()','pop()'],
    correctAnswer: 'pop()'
} ]

startBtn.addEventListener('click', startGame)
// console.log(questions)

function startGame() {
    instructionsText.textContent=" "
    startBtn.style.display = 'none'
    questionIndex=0
    startQuestion()

    // let timer = setInterval(function() {
    //     secondsLeft--
    //     timerEl.textContent = 'Time: ' + secondsLeft

    //     startQuestion()}, 1000)  
}

function stopGame() {
    questionText.textContent = 'All done!'
    instructionsText.textContent='Your final score is' + correctCounter
}

function startQuestion() {
    
        //set question, answer options and add format 
        // console.log(questionIndex)
        questionText.textContent = questions[questionIndex].question
        // debugger
        listAnswers.setAttribute('style','display:flex; flex-direction:column; justify-content:center; margin-top: 30px')
        // console.log(listAnswers)
        for (let i=0; i<4; i++) {
            // debugger
            listAnswers.children[i].innerText = questions[questionIndex].answers[i]
            listAnswers.children[i].setAttribute('style', 'display:block; margin:0.2rem; max-width:300px; padding: 0.5rem')

            listAnswers.children[i].addEventListener('click', function(event) {
            event.preventDefault()
            // console.log(questions[questionIndex].question)

            console.log('correct', questions[questionIndex].correctAnswer)
            console.log('selected', listAnswers.children[i].innerText)
            if (listAnswers.children[i].innerText===questions[questionIndex].correctAnswer) {
                // debugger
                correctCounter++
                rightResult.style.display= 'block'
                wrongResult.style.display= 'none'
                console.log('correct')
                questionIndex++

            } else {
                // debugger
                wrongCounter++
                rightResult.style.display= 'none'
                wrongResult.style.display= 'block'
                console.log('wrong')
                questionIndex++

            }   
            questionText.textContent = questions[questionIndex].question
            console.log(questionIndex)
            for (let k=0; k<4; k++)
            listAnswers.children[k].innerText = questions[questionIndex].answers[k]
            console.log(questions[questionIndex].answers)
            })

}  }              

