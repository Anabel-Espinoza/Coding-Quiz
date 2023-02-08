//Variables

let startBtn = document.querySelector('#startEl')
let questionText = document.querySelector('.questionEl')
let answersText = document.querySelector('.answersText')
let instructionsText = document.querySelector('.instructionsEl')
let listAnswers = document.createElement('p')
let answerA = document.createElement ('button')
let answerB = document.createElement ('button')
let answerC = document.createElement ('button')
let answerD = document.createElement ('button')

const questions = [{
    question: 'Commonly used data types do NOT include:',
    answers: ['alerts', 'strings','booleans','numbers'],
    // correctAnswer: [questions.answers[0]]
}, {
    question: 'The condition in an if/else statement is enclosed with:',
    answers: ['quotes', 'curly brackets','parenthesis','square brackets'],
    // correctAnswer: [this.answers[2]]
}]

startBtn.addEventListener('click', startTest)

function startTest() {
    let questionIndex= Math.floor(Math.random()*questions.length)
    questionText.textContent = questions[questionIndex].question
    instructionsText.textContent=" "
    startBtn.style.display = 'none'
    questionText.appendChild(listAnswers)
    listAnswers.appendChild(answerA)
    listAnswers.appendChild(answerB)
    listAnswers.appendChild(answerC)
    listAnswers.appendChild(answerD)
    // answerA.textContent = questions[questionIndex].answers[0]
    // answerB.textContent = questions[questionIndex].answers[1]
    // answerC.textContent = questions[questionIndex].answers[2]
    // answerD.textContent = questions[questionIndex].answers[3]

    for (let i=0; i<4; i++) {
        listAnswers.children[i].textContent = questions[questionIndex].answers[i]
        listAnswers.children[i].setAttribute('style', 'margin:0.2rem; max-width:300px; padding: 0.5rem')
    }

    listAnswers.setAttribute('style','display:flex; flex-direction:column;; justify-content:center; margin-top: 30px')

    // for (let i=0; i<4; i++)
    //     let answerIndex= Math.floor(Math.random()*questions.length)
    //     questionText.textContent = questions[questionIndex].question
}