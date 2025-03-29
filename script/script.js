const subjects = ["english", "physics", "chemistry", "biology"];
let currentSubject = "english";
let currentQuestion = 0;
let answers = {};
let timeLeft = 120 * 60; // 30 minutes in seconds
let timer;

document.addEventListener("DOMContentLoaded", () => {
    startTimer();
    loadQuestion();
    setupTabs();
    setupGrid();

    // Ensure buttons have event listeners
    document.getElementById("prev").addEventListener("click", prevQuestion);
    document.getElementById("next").addEventListener("click", nextQuestion);
    document.getElementById("submit").addEventListener("click", confirmSubmit);
});

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById("timer").textContent = `Time Left: ${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
        if (timeLeft <= 0) endQuiz();
    }, 1000);
}


function loadQuestion() {
    const q = questions[currentSubject][currentQuestion];
    const questionDiv = document.getElementById("question");
    
    // Clear previous image
    const imageContainer = document.getElementById("question-image");
    imageContainer.innerHTML = "";

    // Add question text
    questionDiv.textContent = `${currentQuestion + 1}. ${q.q}`;

    // Add image if it exists
    if (q.image) {
        const img = document.createElement("img");
        img.src = q.image;
        img.alt = "Diagram";
        img.style.maxWidth = "100%";
        imageContainer.appendChild(img);
    }

    // Add options
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    q.options.forEach((opt, i) => {
        const div = document.createElement("div");
        div.classList.add("option");
        div.textContent = `${String.fromCharCode(65 + i)}. ${opt}`;
        div.addEventListener("click", () => selectOption(i));
        if (answers[`${currentSubject}-${currentQuestion}`] === i) div.classList.add("selected");
        optionsDiv.appendChild(div);
    });

    updateNavigation();
    setupGrid();
}

function selectOption(index) {
    answers[`${currentSubject}-${currentQuestion}`] = index;
    loadQuestion(); // Reload question to reflect selection
}

function setupTabs() {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelector(".tab.active").classList.remove("active");
            tab.classList.add("active");
            currentSubject = tab.dataset.subject;
            currentQuestion = 0; // Reset to first question of new subject
            loadQuestion();
            setupGrid(); // Update grid for new subject
        });
    });
}

function setupGrid() {
    const grid = document.getElementById("question-grid");
    grid.innerHTML = ""; // Clear previous grid
    questions[currentSubject].forEach((_, i) => {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.textContent = i + 1;
        if (answers[`${currentSubject}-${i}`] !== undefined) div.classList.add("answered");
        div.addEventListener("click", () => {
            currentQuestion = i;
            loadQuestion();
        });
        grid.appendChild(div);
    });
}

function updateNavigation() {
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = currentQuestion === questions[currentSubject].length - 1;
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion < questions[currentSubject].length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function confirmSubmit() {
    if (confirm("Are you sure you want to submit your quiz?")) {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);
    calculateScore();
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("question-grid").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("result").style.display = "block";
}

function calculateScore() {
    let score = 0;
    const missed = [];
    subjects.forEach(subject => {
        questions[subject].forEach((q, i) => {
            const userAnswer = answers[`${subject}-${i}`];
            if (userAnswer !== undefined && q.options[userAnswer] === q.answer) score++;
            else if (userAnswer !== undefined) missed.push({ subject, q: q.q, correct: q.answer, chosen: q.options[userAnswer] });
        });
    });

    const total = subjects.reduce((sum, s) => sum + questions[s].length, 0);
    const percentage = Math.round((score / total) * 100);
    const scaledScore = percentage * 4; // Multiply by 400 and divide by 100

    let remark;
    if (percentage >= 80) remark = "Excellent";
    else if (percentage >= 60) remark = "Very Good";
    else if (percentage >= 40) remark = "Good";
    else if (percentage >= 20) remark = "Poor";
    else remark = "Bad";

    document.getElementById("score").textContent = `Score: ${score}/${total} (${percentage.toFixed(2)}%) - Scaled: ${scaledScore}/400`;
    document.getElementById("remark").textContent = `Remark: ${remark}`;

    const missedDiv = document.getElementById("missed-questions");
    missedDiv.innerHTML = missed.map(m => `<p>${m.subject.toUpperCase()}: ${m.q}<br>Correct: ${m.correct}<br>Chosen: ${m.chosen}</p>`).join("");
}


document.getElementById("reloadBtn").addEventListener("click", function() {
    location.reload(); // Reloads the current page
});