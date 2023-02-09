//Variables
let correctCounter = 0
let wrongCounter = 0
let startBtn = document.querySelector('#startEl')
let questionText = document.querySelector('.questionEl')
let answersText = document.querySelector('.answersText')
let instructionsText = document.querySelector('.instructionsEl')
let listAnswers = document.createElement('p')
let answerA = document.createElement ('button')
let answerB = document.createElement ('button')
let answerC = document.createElement ('button')
let answerD = document.createElement ('button')
// let answerMessage = document.createElement('p')
let questionIndex = 0
let rightResult = document.querySelector('.correct-message')
let wrongResult = document.querySelector('.wrong-message')




const questions = [{
    question: 'Commonly used data types do NOT include:',
    answers: ['alerts', 'strings','booleans','numbers'],
    correctAnswer: 'alerts'
}, {
    question: 'The condition in an if/else statement is enclosed with:',
    answers: ['parenthesis', 'curly brackets','quotes','square brackets'],
    correctAnswer: 'parenthesis'
}, {
    question: 'Arrays in JavaScript can be used to store:_____________',
    answers: ['numbers and strings', 'other arrays','booleans','all of the above'],
    correctAnswer: 'all of the above'
}, {
    question: 'String values must be enclosed within __________ when being assigned to variables.',
    answers: ['commas', 'curly brackets','quotes','parenthesis'],
    correctAnswer: 'quotes'
} , {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    answers: ['JavaScript', 'terminal/bash','for loops','console.log'],
    correctAnswer: 'console.log'
} , {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    answers: ['JavaScript', 'terminal/bash','for loops','console.log'],
    correctAnswer: 'console.log'
} , {
    question: 'Inside the HTML document, the JavaScript code must be placed in the _________ element',
    answers: ['<head>', '<footer>','<script>','<link>'],
    correctAnswer: 'console.log'
}  , {
    question: "For the following array ['a','b','c','d'], the index for letter 'a' is:",
    answers: ['0', '1','2','3'],
    correctAnswer: '0'
}  , {
    question: "The method used to remove the last element of my array is:",
    answers: ['push()', 'unshift()','concat()','pop()'],
    correctAnswer: 'pop()'
}  
]

startBtn.addEventListener('click', startGame)

function startGame() {
    instructionsText.textContent=" "
    startBtn.style.display = 'none'
    startQuestion()
}

function startQuestion() {
    let wrongResult = ""
    let rightResult = ""
        console.log(questionIndex)
        questionText.textContent = questions[questionIndex].question
        
        questionText.appendChild(listAnswers)
        listAnswers.appendChild(answerA)
        listAnswers.appendChild(answerB)
        listAnswers.appendChild(answerC)
        listAnswers.appendChild(answerD)
        
        listAnswers.setAttribute('style','display:flex; flex-direction:column;; justify-content:center; margin-top: 30px')
        // answerMessage.textContent= ''

        for (let i=0; i<4; i++) {
            listAnswers.children[i].innerText = questions[questionIndex].answers[i]
            listAnswers.children[i].setAttribute('style', 'margin:0.2rem; max-width:300px; padding: 0.5rem')
        }

        for(let i=0; i<4; i++) {
            listAnswers.children[i].addEventListener('click', function() {

            console.log(questions[questionIndex].correctAnswer)
            console.log(listAnswers.children[i].innerText)
            if (listAnswers.children[i].innerText===questions[questionIndex].correctAnswer) {
                correctCounter++
                // answerMessage.textContent= 'Correct!'
                // questionText.appendChild(answerMessage)
                // answerMessage.setAttribute('style', 'text-align: left; font-size: 1.5rem; color: navy; font-style: italic')
                rightResult.style.display= 'block'
                questionIndex++
                startQuestion()
            } else {
                wrongCounter++
                // answerMessage.textContent= 'Wrong!'
                // questionText.appendChild(answerMessage)
                // answerMessage.setAttribute('style', 'text-align: left; font-size: 1.5rem; color: navy; font-style: italic')
                wrongResult.style.display= 'block'
                questionIndex++
                startQuestion()
            }})
            }
        }
    
