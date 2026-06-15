const pattern = /\{\{(.*?)\}\}/g;
const pages = [...new Set(passages.map((passage) => passage.page))];
let activePage = "all";
let activeMode = "quiz";

const normalize = (value) => value
  .trim()
  .toLowerCase()
  .replace(/[‘’'"“”·,\s()]/g, "");

function answersFor(passage) {
  return [...passage.text.matchAll(pattern)].map((match) => match[1]);
}

function inputWidth(answer) {
  if (/^\d+$/.test(answer)) return Math.max(42, answer.length * 15);
  return Math.min(190, Math.max(68, answer.length * 16));
}

function renderText(passage, passageIndex) {
  let blankIndex = 0;
  return passage.text.replace(pattern, (_, answer) => {
    const index = blankIndex++;
    return `<input class="blank-input" type="text" inputmode="${/^\d+$/.test(answer) ? "numeric" : "text"}"
      style="--input-width:${inputWidth(answer)}px" data-answer="${answer}"
      aria-label="${passage.title} ${index + 1}번 빈칸" autocomplete="off">`;
  });
}

function renderStudyText(passage) {
  return passage.text.replace(pattern, (_, answer) => (
    `<strong class="study-answer">${answer}</strong>`
  ));
}

function getVisiblePassages() {
  return activePage === "all"
    ? passages
    : passages.filter((passage) => passage.page === activePage);
}

function renderTabs() {
  const tabs = [
    `<button class="page-tab ${activePage === "all" ? "active" : ""}" data-page="all">전체</button>`,
    ...pages.map((page) => `<button class="page-tab ${activePage === page ? "active" : ""}" data-page="${page}">P${page}</button>`)
  ];
  document.querySelector("#pageTabs").innerHTML = tabs.join("");
}

function renderQuiz() {
  const visible = getVisiblePassages();
  const grouped = new Map();
  visible.forEach((passage) => {
    if (!grouped.has(passage.page)) grouped.set(passage.page, []);
    grouped.get(passage.page).push(passage);
  });

  let globalIndex = 0;
  const html = [...grouped.entries()].map(([page, pagePassages]) => {
    const cards = pagePassages.map((passage) => {
      const originalIndex = passages.indexOf(passage);
      const count = answersFor(passage).length;
      globalIndex += 1;
      return `
        <article class="paragraph-card" data-index="${originalIndex}">
          <div class="card-header">
            <h3>${globalIndex}. ${passage.title}${passage.note ? ` <small>(${passage.note})</small>` : ""}</h3>
            <span class="blank-badge">빈칸 ${count}개</span>
          </div>
          <p class="passage">${renderText(passage, originalIndex)}</p>
          <div class="card-actions">
            <button class="check-button">정답 확인</button>
            <button class="reset-button">다시 풀기</button>
          </div>
          <div class="feedback" role="status"></div>
        </article>`;
    }).join("");
    return `<div class="page-heading"><h2>P${page}</h2><span>${pagePassages.length}개 문단</span></div>${cards}`;
  }).join("");

  document.querySelector("#quizList").innerHTML = html;
}

function renderStudy() {
  const grouped = new Map();
  getVisiblePassages().forEach((passage) => {
    if (!grouped.has(passage.page)) grouped.set(passage.page, []);
    grouped.get(passage.page).push(passage);
  });

  let globalIndex = 0;
  const html = [...grouped.entries()].map(([page, pagePassages]) => {
    const cards = pagePassages.map((passage) => {
      const count = answersFor(passage).length;
      globalIndex += 1;
      return `
        <article class="paragraph-card study-card">
          <div class="card-header">
            <h3>${globalIndex}. ${passage.title}</h3>
            <span class="blank-badge">출제어 ${count}개</span>
          </div>
          <p class="passage">${renderStudyText(passage)}</p>
        </article>`;
    }).join("");
    return `<div class="page-heading"><h2>P${page}</h2><span>${pagePassages.length}개 문단</span></div>${cards}`;
  }).join("");

  document.querySelector("#quizList").innerHTML = html;
}

function renderContent() {
  if (activeMode === "study") {
    renderStudy();
    return;
  }
  renderQuiz();
}

function gradeCard(card) {
  const inputs = [...card.querySelectorAll(".blank-input")];
  let correctCount = 0;
  const wrongAnswers = [];

  inputs.forEach((input, index) => {
    const correct = normalize(input.value) === normalize(input.dataset.answer);
    input.classList.toggle("answer-correct", correct);
    input.classList.toggle("answer-wrong", !correct);
    if (correct) {
      correctCount += 1;
    } else {
      wrongAnswers.push(`${index + 1}번: ${input.dataset.answer}`);
    }
  });

  const allCorrect = correctCount === inputs.length;
  card.classList.add("graded");
  card.classList.toggle("correct", allCorrect);
  card.classList.toggle("wrong", !allCorrect);

  const feedback = card.querySelector(".feedback");
  feedback.classList.toggle("correct-message", allCorrect);
  feedback.innerHTML = allCorrect
    ? `<strong>전부 정답입니다.</strong> ${correctCount}/${inputs.length}`
    : `<strong>${correctCount}/${inputs.length} 정답</strong><br>틀린 빈칸 정답: ${wrongAnswers.join(" · ")}`;

  updateSolved();
}

function resetCard(card) {
  card.classList.remove("graded", "correct", "wrong");
  card.querySelectorAll(".blank-input").forEach((input) => {
    input.value = "";
    input.classList.remove("answer-correct", "answer-wrong");
  });
  card.querySelector(".feedback").textContent = "";
  updateSolved();
}

function updateSolved() {
  document.querySelector("#solvedCount").textContent = document.querySelectorAll(".paragraph-card.graded").length;
}

document.querySelector("#paragraphCount").textContent = passages.length;
document.querySelector("#blankCount").textContent = passages.reduce((sum, passage) => sum + answersFor(passage).length, 0);

renderTabs();
renderContent();

document.querySelector(".mode-tabs").addEventListener("click", (event) => {
  const button = event.target.closest(".mode-tab");
  if (!button) return;
  activeMode = button.dataset.mode;
  document.querySelectorAll(".mode-tab").forEach((tab) => {
    tab.classList.toggle("active", tab === button);
  });
  renderContent();
  updateSolved();
});

document.querySelector("#pageTabs").addEventListener("click", (event) => {
  const button = event.target.closest(".page-tab");
  if (!button) return;
  activePage = button.dataset.page === "all" ? "all" : Number(button.dataset.page);
  renderTabs();
  renderContent();
  updateSolved();
});

document.querySelector("#quizList").addEventListener("click", (event) => {
  const card = event.target.closest(".paragraph-card");
  if (!card) return;
  if (event.target.closest(".check-button")) gradeCard(card);
  if (event.target.closest(".reset-button")) resetCard(card);
});

document.querySelector("#quizList").addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || !event.target.matches(".blank-input")) return;
  const card = event.target.closest(".paragraph-card");
  const inputs = [...card.querySelectorAll(".blank-input")];
  const current = inputs.indexOf(event.target);
  if (current < inputs.length - 1) inputs[current + 1].focus();
  else gradeCard(card);
});

document.querySelector("#printButton").addEventListener("click", () => window.print());
