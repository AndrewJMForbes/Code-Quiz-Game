let questionIndex = 0;
let answersIndex = 0;
const answerArray = [];



function onStart() {
  console.log("clicked on start");

  const welcome = document.getElementById("welcome");
  welcome.style.display = "none";
  const questionContainer = document.getElementById("question-container");
  questionContainer.style.display = "block";
  // eventually make its own function
  loadQuestion();
}
function getResponse() {
  const optionAEl = document.getElementById('answerA');
  const optionBEl = document.getElementById('answerB');
  const optionCEl = document.getElementById('answerC');
  const optionDEl = document.getElementById('answerD');
  let response = '';
  if(optionAEl.checked === true) {
    response = optionAEl.value;
  } else if (optionBEl.checked === true) {
    response = optionBEl.value;
  } else if (optionCEl.checked === true) {
    response = optionCEl.value;
  } else if (optionDEl.checked === true) {
    response = optionDEl.value;
  }
  return response;
}
function onSubmit() {
  
  // figure out what what was selected
  const result = checkAnswer();
  console.log('was the answer correct? ', result)
  // store whether they answered correctly
  // move onto the next question
  questionIndex++;
  loadQuestion();
}
function checkAnswer() {
  const response = getResponse();
  console.log('user chose ', response);
  // what is the right answer
  const correctAnswer = quizQuestions[questionIndex].correctAnswer;
  console.log('right', correctAnswer);

  // compare whether their answer was correct or not
  return (response === correctAnswer) 
    
}

function loadQuestion() {
  if (questionIndex < quizQuestions.length) {
    const questionEl = document.getElementById("quiz-question");
    const questionObj = quizQuestions[questionIndex];
    questionEl.innerText = questionObj.question;
    let answerLbl = document.getElementById("answerAlbl");
    answerLbl.innerText = questionObj.answers[0];
    answerLbl = document.getElementById("answerBlbl");
    answerLbl.innerText = questionObj.answers[1];
    answerLbl = document.getElementById("answerClbl");
    answerLbl.innerText = questionObj.answers[2];
    answerLbl = document.getElementById("answerDlbl");
    answerLbl.innerText = questionObj.answers[3];
  } else {
    showResults();
  }

}

function showResults(){
  // hide questions
  const questionContainerEl = document.getElementById('question-container');
  questionContainerEl.style.display = 'none';
  //display results
  const resultsContainerEl = document.getElementById('results-container');
  resultsContainerEl.style.display = 'block';

  questionIndex = 0;
}
const quizQuestions = [
  {
    question: "What color is the sky?",
    answers: ["Blue", "Yellow", "Purple", "Green"],
    correctAnswer: 'A',
  },
  {
    question: "How many letters are in the word Friday",
    answers: [32, 12, 3, 6],
    correctAnswer: 'D',
  },
  {
    question: "What does the H in HTML stand for?",
    answers: ["hardhat", "happy", "hyperbeam", "hyper"],
    correctAnswer: 'D',
  },
];
// console.log(quizQuestions);

// answerA.addEventListener("click", function (event) {
//   event.preventDefault;
//   console.log("#answerA");
// });
// answerB.addEventListener("click", function (event) {
//   event.preventDefault;
//   console.log("#answerB");
// });
// answerC.addEventListener("click", function (event) {
//   event.preventDefault;
//   console.log("#answerC");
// });
// answerD.addEventListener("click", function (event) {
//   event.preventDefault;
//   console.log("#answerD");
// });
// startGame.addEventListener("click", function (event) {
//   event.preventDefault;

//   console.log(start);
// });
