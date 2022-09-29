//Questions declaration - array objects
let questionBank = [
  {
    question: "Which position did Rishi Sunak resign from in July?",
    option: ["Doctor", "Teacher", "Chancellor", "Pilot"],
    answer: "Chancellor",
  },
  {
    question: "Who became Prime Minister of the UK in September 2022?",
    option: ["Priti Patel", "Rishi Sunak", "Boris Johnson", "Liz Truss"],
    answer: "Liz Truss",
  },
  {
    question: "When are the two bank holidays given for the Queen’s jubilee?",
    option: [
      "2nd and 3rd of July",
      "2nd and 3rd of June",
      "3rd of June",
      "2nd of June",
    ],
    answer: "2nd and 3rd of June",
  },
  {
    question:
      "Which British singer cancelled her Vegas residency at the beginning of 2022?",
    option: ["Elton John", "Rita Ora", "Adele", "Sting"],
    answer: "Adele",
  },
  {
    question: "Where were the Winter Olympics held in 2020?",
    option: [
      "Tokyo, Japan",
      "Beijing, China",
      "Pyeongchang, South Korea",
      "Rio de Janeiro, Brasil",
    ],
    answer: "Beijing, China",
  },
  {
    question: "In music what does the term Allegro mean?",
    option: ["Fast", "Quick", "Slow", "Slowly"],
    answer: "Quick",
  },
];

let question = document.getElementById("question");
let startButton = document.getElementById("startButton");
let quizContainer = document.getElementById("quiz-container");
let scorecard = document.getElementById("scorecard");
let option0 = document.getElementById("option0");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let next = document.querySelector(".next");
let points = document.getElementById("score");
let span = document.querySelectorAll("span");
let i = 0;
let score = 0;

function onLoadQuiz() {
  quizContainer.style.display = "none";
}

function start() {
  quizContainer.style.display = "block";
  startButton.style.display = "none";
}

//function to display questions
function displayQuestion() {
  for (let a = 0; a < span.length; a++) {
    span[a].style.background = "none";
  }
  question.innerHTML = questionBank[i].question;
  option0.innerHTML = questionBank[i].option[0];
  option1.innerHTML = questionBank[i].option[1];
  option2.innerHTML = questionBank[i].option[2];
  option3.innerHTML = questionBank[i].option[3];
  stat.innerHTML =
    "Question" + " " + (i + 1) + " " + "of" + " " + questionBank.length;
}

//function to calculate scores
function calcScore(e) {
  if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
    score = score + 1;
    document.getElementById(e.id).style.background = "#5bccf6";
  } else {
    document.getElementById(e.id).style.background = "#030e12";
  }
  setTimeout(nextQuestion, 350);
}

//function display next question
function nextQuestion() {
  if (i < questionBank.length - 1) {
    i = i + 1;
    displayQuestion();
  } else {
    points.innerHTML = score + "/" + questionBank.length;
    quizContainer.style.display = "none";
    scoreboard.style.display = "block";
  }
}

//Back to Quiz button event
function backToQuiz() {
  location.reload();
}

//function to check Answers
function checkAnswer() {
  let answerBank = document.getElementById("answerBank");
  let answers = document.getElementById("answers");
  answerBank.style.display = "block";
  scoreboard.style.display = "none";
  for (let a = 0; a < questionBank.length; a++) {
    let list = document.createElement("li");
    list.innerHTML = questionBank[a].answer;
    answers.appendChild(list);
  }
}

displayQuestion();
