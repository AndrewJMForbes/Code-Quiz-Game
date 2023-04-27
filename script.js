let questionIndex = 0;
const resultArray = [];
const timerContainerEl = document.getElementById("timer-container");
timerContainerEl.style.display = "none";
const restartBtn = document.getElementById("restart");
restartBtn.style.display = "none";
const timeH = document.getElementById("timer");
const leaderboard = document.getElementById('leaderboard');
leaderboard.style.display = 'none';

let timeSecond = 301;

timeH.innerHTML = `00:${timeSecond}`;

const countDown = setInterval(() => {
	timeSecond--;
	displayTime(timeSecond);
	if (timeSecond < 0 || timeSecond < 1) {
    endTime();
		clearInterval(countDown);
	}
}, 1000);

function displayTime(second) {
	const min = Math.floor(second / 60);
	const sec = Math.floor(second % 60);
	timeH.innerHTML = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
}
function endTime() {
  timeH.innerHTML = 'TIMES UP!!';
  const questionContainer = document.getElementById("question-container");
	questionContainer.style.display = "none";
  const restartBtn = document.getElementById("restart");
  restartBtn.style.display = "block";
  const startbtn = document.getElementById("start");
  startbtn.style.display = "none";
}

/**
 * onStart is a function that begins the quiz by hiding the welcome div and displaying the question-container div
 * that will display a multiple choice question
 */
function onStart() {
	console.log("clicked on start");

	const welcome = document.getElementById("welcome");
	welcome.style.display = "none";
	const questionContainer = document.getElementById("question-container");
	questionContainer.style.display = "block";
 
	// eventually make its own function

	loadQuestion();
}

/**
 * getResponse function
 */
function getResponse() {
	const optionAEl = document.getElementById("answerA");
	const optionBEl = document.getElementById("answerB");
	const optionCEl = document.getElementById("answerC");
	const optionDEl = document.getElementById("answerD");
	let response = "";
	if (optionAEl.checked === true) {
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
	// store whether they answered correctly
	resultArray.push(result);
	// move onto the next question
	questionIndex++;
	loadQuestion();
}

function checkAnswer() {
	const response = getResponse();
	console.log("user chose ", response);
	// what is the right answer
	const correctAnswer = quizQuestions[questionIndex].correctAnswer;
	console.log("right", correctAnswer);

	// compare whether their answer was correct or not
	return response === correctAnswer;
}
function loadQuestion() {
	const timerContainerEl = document.getElementById("timer-container");
	timerContainerEl.style.display = "block";
  const startbtn = document.getElementById("start");
  startbtn.style.display = "none";
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

function showResults() {
	// hide questions
	const correctAns = document.getElementById("correct");
	const incorrectAns = document.getElementById("incorrect");
	const questionContainerEl = document.getElementById("question-container");
	questionContainerEl.style.display = "none";
	//display results
	const numberOfCorrectAnswers = calcScore();
	console.log(numberOfCorrectAnswers);
	const resultsEl = document.getElementById("results");
	resultsEl.innerText = `You got ${numberOfCorrectAnswers} /10 correct`;
	const resultsContainerEl = document.getElementById("results-container");
	resultsContainerEl.style.display = "block";
  const restartBtn = document.getElementById("restart");
  restartBtn.style.display = "block";
  const startbtn = document.getElementById("start");
  startbtn.style.display = "none";
  const timerEl = document.getElementById('timer-container');
  timerEl.style.display = "none";
  const name = document.getElementById('leaderboard');
  name.style.display = 'block';
 
}
function calcScore() {
	let score = 0;
	for (let i = 0; i < resultArray.length; i++) {
		if (resultArray[i] === true) {
			score++;
		}
	}

	return score;
}


const quizQuestions = [
	{
		question: "What does == mean in JavaScript?",
		answers: ["greater than", "less than", "equal to", "not equal to"],
		correctAnswer: "C",
	},
	{
		question: "What is the operator for strict equality?",
		answers: ['!==', '=<', '+=', '==='],
		correctAnswer: "D",
	},
	{
		question: "Which declares a variable in JavaScript?",
		answers: ["let", "const", "var", "all the above"],
		correctAnswer: "D",
	},
  {
		question: "Javascript is an _______ language?",
		answers: ["object-oriented", "object-based", "procedural", "none of the above"],
		correctAnswer: "A",
	},
  {
		question: "Which of the following methods is used to access HTML elements using Javascript?",
		answers: ["getElementById", "getElementByName", "a and b", "none the above"],
		correctAnswer: "C",
	},
  {
		question: "Where are Global variables presented in JavaScript?",
		answers: ["bottom", "inside a function", "top", "a, b, and c"],
		correctAnswer: "C",
	},
  {
		question: "Which function use to serialize and object into a JSON string?",
		answers: ["stringify()", "parse()", "convert()", "none of the above"],
		correctAnswer: "A",
	},
  {
		question: "How do you write a single line comment in JavaScript?",
		answers: ["/**", "/*", "//", "*||"],
		correctAnswer: "C",
	},
  {
		question: "What number do arrays start at?",
		answers: ["1", "-1", "0", "none of the above"],
		correctAnswer: "C",
	},
  {
		question: "Which of the following is not a JavaScript framework?",
		answers: ["Node", "Vue", "React", "cassandra"],
		correctAnswer: "D",
	},//https://www.interviewbit.com/javascript-mcq/ used for question suggestions
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
