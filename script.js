let currentQuestionIndex = 0;
let score = 0;

const questionNumberEl = document.getElementById("question-number");
const questionTextEl = document.getElementById("question-text");
const choicesEl = document.getElementById("choices");
const resultAreaEl = document.getElementById("result-area");
const judgementEl = document.getElementById("judgement");
const explanationEl = document.getElementById("explanation");
const quizContainerEl = document.getElementById("quiz-container");
const scoreContainerEl = document.getElementById("score-container");
const scoreTextEl = document.getElementById("score-text");

// クイズの初期化
function initQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainerEl.classList.add("hidden");
    quizContainerEl.classList.remove("hidden");
    
    // ランダムに出題したい場合は以下のコメントアウトを外してください
    // questions.sort(() => Math.random() - 0.5);

    showQuestion();
}

// 問題の表示
function showQuestion() {
    resultAreaEl.classList.add("hidden");
    choicesEl.classList.remove("hidden");
    
    const q = questions[currentQuestionIndex];
    questionNumberEl.textContent = `第 ${currentQuestionIndex + 1} 問 / 全 ${questions.length} 問`;
    questionTextEl.textContent = q.question;
}

// 回答のチェック（〇か×か）
function checkAnswer(userAnswer) {
    const q = questions[currentQuestionIndex];
    const isCorrect = (userAnswer === q.answer);

    choicesEl.classList.add("hidden");
    resultAreaEl.classList.remove("hidden");
    resultAreaEl.className = ""; // クラスをリセット

    if (isCorrect) {
        score++;
        judgementEl.textContent = "⭕ 正解！";
        resultAreaEl.classList.add("correct-bg");
    } else {
        judgementEl.textContent = "❌ 不正解...";
        resultAreaEl.classList.add("incorrect-bg");
    }

    explanationEl.innerHTML = q.explanation;
}

// 次の問題へ
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 最終結果の表示
function showResult() {
    quizContainerEl.classList.add("hidden");
    scoreContainerEl.classList.remove("hidden");
    scoreTextEl.innerHTML = `<span style="font-size:1.5rem; font-weight:bold;">${questions.length} 問中 ${score} 問正解でした！</span>`;
}

// 最初からやり直す
function restartQuiz() {
    initQuiz();
}

// ページ読み込み時に初期化処理を実行
initQuiz();
