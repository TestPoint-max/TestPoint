// Question Bank - organized by subject
const questionBank = {
    mathematics: [
        {
            question: "What is the value of π (pi) approximately?",
            options: ["3.14159", "2.71828", "1.41421", "1.61803"],
            correct: 0
        },
        {
            question: "What is the square root of 144?",
            options: ["10", "11", "12", "13"],
            correct: 2
        },
        {
            question: "What is 15% of 200?",
            options: ["20", "25", "30", "35"],
            correct: 2
        },
        {
            question: "If x + 5 = 12, what is x?",
            options: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            question: "What is the area of a circle with radius 5? (Use π ≈ 3.14)",
            options: ["78.5", "31.4", "15.7", "62.8"],
            correct: 0
        },
        {
            question: "What is 7 × 8?",
            options: ["54", "56", "63", "64"],
            correct: 1
        },
        {
            question: "What is the value of 2³?",
            options: ["6", "8", "9", "12"],
            correct: 1
        },
        {
            question: "If a triangle has angles 60°, 60°, and x°, what is x?",
            options: ["30°", "45°", "60°", "90°"],
            correct: 2
        },
        {
            question: "What is the next prime number after 7?",
            options: ["9", "10", "11", "13"],
            correct: 2
        },
        {
            question: "What is 3/4 as a decimal?",
            options: ["0.34", "0.5", "0.75", "0.8"],
            correct: 2
        }
    ],
    physics: [
        {
            question: "What is the SI unit of force?",
            options: ["Joule", "Newton", "Watt", "Pascal"],
            correct: 1
        },
        {
            question: "What is the speed of light in vacuum?",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁹ m/s"],
            correct: 0
        },
        {
            question: "What is the acceleration due to gravity on Earth?",
            options: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "11.8 m/s²"],
            correct: 1
        },
        {
            question: "Which law states 'For every action, there is an equal and opposite reaction'?",
            options: ["First Law", "Second Law", "Third Law", "Law of Gravitation"],
            correct: 2
        },
        {
            question: "What is the formula for kinetic energy?",
            options: ["mgh", "1/2 mv²", "mv", "F × d"],
            correct: 1
        },
        {
            question: "What is the unit of electric current?",
            options: ["Volt", "Ohm", "Ampere", "Coulomb"],
            correct: 2
        },
        {
            question: "What is Ohm's Law?",
            options: ["V = IR", "F = ma", "E = mc²", "P = VI"],
            correct: 0
        },
        {
            question: "Which of these is a scalar quantity?",
            options: ["Velocity", "Force", "Temperature", "Acceleration"],
            correct: 2
        },
        {
            question: "What type of energy is stored in a stretched spring?",
            options: ["Kinetic", "Potential", "Thermal", "Chemical"],
            correct: 1
        },
        {
            question: "What is the frequency of AC supply in India?",
            options: ["40 Hz", "50 Hz", "60 Hz", "70 Hz"],
            correct: 1
        }
    ],
    chemistry: [
        {
            question: "What is the chemical symbol for Gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            correct: 2
        },
        {
            question: "What is the atomic number of Carbon?",
            options: ["4", "6", "8", "12"],
            correct: 1
        },
        {
            question: "What is the pH of pure water?",
            options: ["6", "7", "8", "9"],
            correct: 1
        },
        {
            question: "Which gas is most abundant in Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
            correct: 2
        },
        {
            question: "What is the formula for sulfuric acid?",
            options: ["H₂SO₃", "H₂SO₄", "HSO₄", "H₃SO₄"],
            correct: 1
        },
        {
            question: "What is the valency of oxygen?",
            options: ["1", "2", "3", "4"],
            correct: 1
        },
        {
            question: "Which element has the highest electronegativity?",
            options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],
            correct: 1
        },
        {
            question: "What is the molecular formula of glucose?",
            options: ["C₆H₁₂O₆", "C₅H₁₀O₅", "C₆H₁₀O₆", "C₆H₁₂O₅"],
            correct: 0
        },
        {
            question: "What type of bond is present in NaCl?",
            options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
            correct: 1
        },
        {
            question: "Which gas is known as laughing gas?",
            options: ["N₂", "NO", "N₂O", "NO₂"],
            correct: 2
        }
    ],
    biology: [
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"],
            correct: 2
        },
        {
            question: "How many chambers does a human heart have?",
            options: ["2", "3", "4", "5"],
            correct: 2
        },
        {
            question: "What is the basic unit of life?",
            options: ["Tissue", "Organ", "Cell", "Atom"],
            correct: 2
        },
        {
            question: "Which blood group is known as the universal donor?",
            options: ["A", "B", "AB", "O"],
            correct: 3
        },
        {
            question: "What is the main function of red blood cells?",
            options: ["Fight infection", "Carry oxygen", "Clot blood", "Produce antibodies"],
            correct: 1
        },
        {
            question: "What is photosynthesis?",
            options: ["Breaking down food", "Converting light to chemical energy", "Cellular respiration", "Protein synthesis"],
            correct: 1
        },
        {
            question: "How many chromosomes do humans have?",
            options: ["23", "42", "46", "48"],
            correct: 2
        },
        {
            question: "What is DNA's full form?",
            options: ["Deoxyribonucleic Acid", "Diribonucleic Acid", "Deoxy Acid", "Double Nucleic Acid"],
            correct: 0
        },
        {
            question: "Which organ produces insulin?",
            options: ["Liver", "Kidney", "Pancreas", "Heart"],
            correct: 2
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Liver", "Brain", "Skin", "Heart"],
            correct: 2
        }
    ]
};

// Quiz State
let currentSubject = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;

// Start Quiz
function startQuiz(subject) {
    currentSubject = subject;
    currentQuestions = questionBank[subject];
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    score = 0;

    // Hide subject selection, show quiz
    document.getElementById('subject-selection').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('results-container').classList.add('hidden');

    // Update subject name
    document.getElementById('subject-name').textContent = subject.charAt(0).toUpperCase() + subject.slice(1);
    document.getElementById('total-questions').textContent = currentQuestions.length;

    // Load first question
    loadQuestion();
}

// Load Question
function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    // Update question number
    document.getElementById('question-number').textContent = currentQuestionIndex + 1;
    
    // Update question text
    document.getElementById('question-text').textContent = question.question;
    
    // Load options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(index);
        
        // If user has already selected an answer, mark it
        if (userAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Update button states
    updateButtons();
}

// Select Option
function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Update UI
    const options = document.querySelectorAll('.option');
    options.forEach((opt, idx) => {
        opt.classList.remove('selected');
        if (idx === optionIndex) {
            opt.classList.add('selected');
        }
    });
    
    updateButtons();
}

// Next Question
function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

// Previous Question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Update Buttons
function updateButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    // Previous button
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Next/Submit button
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

// Submit Quiz
function submitQuiz() {
    // Calculate score
    score = 0;
    currentQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            score++;
        }
    });
    
    // Show results
    showResults();
}

// Show Results
function showResults() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('results-container').classList.remove('hidden');
    
    const totalQuestions = currentQuestions.length;
    const wrongAnswers = totalQuestions - score;
    const percentage = ((score / totalQuestions) * 100).toFixed(1);
    
    // Update results
    document.getElementById('score').textContent = `${score} / ${totalQuestions}`;
    document.getElementById('correct-count').textContent = score;
    document.getElementById('wrong-count').textContent = wrongAnswers;
    document.getElementById('percentage').textContent = percentage;
    
    // Score message
    let message = '';
    if (percentage >= 80) {
        message = '🎉 Excellent! Keep it up!';
    } else if (percentage >= 60) {
        message = '👍 Good job! Room for improvement.';
    } else if (percentage >= 40) {
        message = '📚 Keep practicing!';
    } else {
        message = '💪 Don\'t give up! Practice more.';
    }
    document.getElementById('score-message').textContent = message;
}

// Restart Quiz
function restartQuiz() {
    document.getElementById('results-container').classList.add('hidden');
    document.getElementById('subject-selection').classList.remove('hidden');
}
