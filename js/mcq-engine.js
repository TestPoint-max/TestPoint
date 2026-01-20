let questions = [];
let currentIndex = 0;
let score = 0;

async function loadQuestions() {
    const response = await fetch("data/gk.json");
    questions = await response.json();
    showQuestion();
}

function showQuestion() {
    const q = questions[currentIndex];
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

    const correctAnswer = questions[currentIndex].answer;

    if (selected.value === correctAnswer) {
        score++;
        feedback.textContent = "✔ Correct!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `❌ Wrong. Correct answer: ${correctAnswer}`;
        feedback.style.color = "red";
    }

    setTimeout(nextQuestion, 1200);
}

function nextQuestion() {
    currentIndex++;

    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        document.getElementById("mcq-container").innerHTML = `
            <h2>Test Completed</h2>
            <p>Your Score: ${score} / ${questions.length}</p>
        `;
    }
}

document.addEventListener("DOMContentLoaded", loadQuestions);
