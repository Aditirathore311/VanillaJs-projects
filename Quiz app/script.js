const quizData = [
  {
    question: "Every variable should separated by _ separator",
    a: "Dot",
    b: "Comma",
    c: "Semicolon",
    d: "Colon",
    correct: "b",
  },
  {
    question: "What is the most used programming language in 2023?",
    a: "Javascript",
    b: "Python",
    c: "Java",
    d: "C",
    correct: "a",
  },
  {
    question: "Auto, static, extern and register are called as_",
    a: "Static",
    b: "Register",
    c: "Auto",
    d: "Storage specifier",
    correct: "d",
  },
  {
    question: "The && and || operators compare two",
    a: "boolean values",
    b: "boolean value",
    c: "numeric values",
    d: "numeric value",
    correct: "b",
  },
  {
    question: "Who invented Javascript?",
    a: "Guido van Rossum",
    b: "Rasmus Lerdorf",
    c: "Dennis Ritchie",
    d: "Brendan Eich",
    correct: "d",
  },
];
const quiz = document.getElementById("quiz");
const answerE1s = document.querySelectorAll(".answer");

const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionE1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  

  let answer = undefined;

  answerE1s.forEach((answerE1) => {
    if (answerE1.checked) {
      answer = answerE1.id;
    }
  });

  return answer;
}

function deselectAnswers(){
  answerE1s.forEach((answerE1) => {
    answerE1.checked = false;
  });
  }

submitBtn.addEventListener("click", () => {
  //check to see the answer
  const answer = getSelected();

console.log(answer);

  if (answer){
    if (answer === quizData[currentQuiz].correct){
      score++;
    }
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length}question.</h2>
    
    <button onClick="location.reload()">Reload</button>`;
  }
}
});
