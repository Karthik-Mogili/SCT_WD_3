const quizData = [
    {
        question: "Which language is used for web development?",
        options: ["Python", "HTML", "C++", "Java"],
        answer: "HTML"
    },
    {
        question: "Which is used for styling web pages?",
        options: ["HTML", "JavaScript", "CSS", "SQL"],
        answer: "CSS"
    },
    {
        question: "Which language makes web pages interactive?",
        options: ["Java", "C", "JavaScript", "PHP"],
        answer: "JavaScript"
    },
    {
        question: "Which of the following is a backend language?",
        options: ["Ruby", "HTML", "CSS", "JavaScript"],
        answer: "Ruby"
    },
    {
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Strong Question Language", "Structured Question Language", "Simple Query Language"],
        answer: "Structured Query Language"
    },
    {
        question: "Which of these is a JavaScript framework?",
        options: ["Django", "Flask", "React", "Laravel"],
        answer: "React"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].answer) {
        score++;
    }
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
        nextBtn.style.display = "none";
    } else {
        showResult();
    }
});

function showResult() {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    resultEl.textContent = `Your Score: ${score} / ${quizData.length}`;
}

loadQuestion();
nextBtn.style.display = "none";
