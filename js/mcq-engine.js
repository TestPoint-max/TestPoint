let questions = [];
let quizQuestions = [];
let currentIndex = 0;
let score = 0;
const QUESTIONS_PER_TEST = 5;

async function loadQuestions() {
    const response = await fetch("data/gk.json");
    questions = await response.json();
    console.log("Loaded questions:", questions);

    shuffleArray(questions);
    quizQuestions = questions.slice(0, QUESTIONS_PER_TEST);

    showQuestion();
}

function showQuestion() {
    const q = quizQuestions[currentIndex];
    const container = document.getElementById("mcq-container");

    container.innerHTML = `
        <div class="mcq-card">
            <p><strong>Q${currentIndex + 1}.</strong> ${q.question}</p>

            ${q.options.map(option => `
                <label class="option">
                    <input type="radio" name="option" value="${option}">
                    ${option}
                </label>
            `).join("")}

            <button onclick="checkAnswer()">Submit</button>
            <p id="feedback"></p>
        </div>
    `;
}

function checkAnswer() {
    const selected = document.querySelector('input[name="option"]:checked');
    const feedback = document.getElementById("feedback");

    if (!selected) {
        feedback.textContent = "⚠️ Please select an option.";
        feedback.style.color = "orange";
        return;
    }

    const correctAnswer = quizQuestions[currentIndex].answer;

    if (selected.value === correctAnswer) {
        score++;
        feedback.textContent = "✔ Correct!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `❌ Wrong. Correct answer: ${correctAnswer}`;
        feedback.style.color = "red";
    }

    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
    currentIndex++;

    if (currentIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("mcq-container").innerHTML = `
        <div class="mcq-card">
            <h2>Test Completed</h2>
            <p>Your Score: <strong>${score} / ${quizQuestions.length}</strong></p>
            <button onclick="location.reload()">🔄 Try Another Set</button>
        </div>
    `;
}

/* Utility: shuffle array */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.addEventListener("DOMContentLoaded", loadQuestions);
