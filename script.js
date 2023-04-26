let questionIndex = 0;
const answerArray = [];
var startGame = document.querySelector('#start');
const answerA = document.querySelector('#answerA');
const answerB = document.querySelector('#answerB');
const answerC = document.querySelector('#answerC');
const answerD = document.querySelector('#answerD');

function onStart() {
  console.log('clicked on start')

const welcome = document.getElementById('welcome');
  welcome.style.display= 'none';
  const questionContainer = document.getElementById('question-container');
  questionContainer.style.display= 'block';
  const questionEl = document.getElementById('quiz-question');
  // eventually make its own function
  const questionObj = quizQuestion[questionIndex];
  questionEl.innerText = questionObj.question;
  let answerlbl = document.getElementById('answerAlbl');
  answerlbl.innerText = questionObj.answers[0];
  answerlbl = document.getElementById('answerBlbl');
  answerlbl.innerText = questionObj.answers[1];
  answerlbl = document.getElementById('answerClbl');
  answerlbl.innerText = questionObj.answers[2];
  answerlbl = document.getElementById('answerDlbl');
  answerlbl.innerText = questionObj.answers[3];
}

function onSubmit() {
  // figure out what what was selected
    var rightAnswer = ['0', '3', '3']
  for (var i = 0; i < quizQuestion.length; i++) {
    if (rightAnswer == ['0']) {
      continue;
    }

  
  // what is the right answer
  // compare whether their answer was correct or not
  // store whether they answered correctly
  // move onto the next question

  function loadQuestion() {;

  }
  questionIndex++;
  loadQuestion();
  onSubmit();
}
}

var quizQuestion = [{
  question:'What color is the sky?',
  answers : ['Blue', 'Yellow', 'Purple', 'Green'],
  correctAnswer: 0
  
},
{
  question: 'How many letters are in the word Friday',
  answers : [32, 12 , 3, 6],
  correctAnswer : 3
},
{
  question: 'What does the H in HTML stand for?',
  answers : ['hardhat', 'happy', 'hyperbeam', 'hyper'],
  correctAnswer: 3
  
}
];
// console.log(quizQuestions);
  

answerA.addEventListener('click', function(event){
  event.preventDefault;
  console.log('#answerA')
})
answerB.addEventListener('click', function(event){
  event.preventDefault;
  console.log('#answerB')
})
answerC.addEventListener('click', function(event){
  event.preventDefault;
  console.log('#answerC')
})
answerD.addEventListener('click', function(event){
  event.preventDefault;
  console.log('#answerD')
})
startGame.addEventListener('click', function(event) {
  event.preventDefault;

  console.log(start)
})