const pattern = /\{\{(.*?)\}\}/g;
const pages = [...new Set(passages.map((passage) => passage.page))];
let activePage = "all";
let activeMode = "quiz";

const publicQuestions = [
  {
    prompt: "최규하 국무총리가 대통령에 당선된 일자(연도포함)와 대통령을 선출한 기구를 기록하시오.",
    rows: [
      { label: "일자", answers: ["1979년 12월 6일"] },
      { label: "기구", answers: ["통일주체국민회의"] }
    ]
  },
  {
    prompt: "전두환 세력이 12.12군사반란 성공이후 정부와 군대 인사에 어떻게 관여했는지 기록하시오.",
    rows: [
      { label: "정부", answers: ["12월 14일 내각 개편에 개입"] },
      { label: "군대", answers: ["자기 파벌 중심으로 군대 인사 단행"] }
    ]
  },
  {
    prompt: "1980년 5월 18일 발표된 '계엄포고 10호'의 주요 내용 3가지를 기록하시오.",
    rows: [
      { label: "주요 내용", answers: ["대학휴교", "언론 사전 검열", "집회 및 시위 금지"] }
    ]
  },
  {
    prompt: "국가보위비상대책위원회가 교육정상화를 명목으로 단행한 대표적인 정책 2가지를 모두 기록하시오.",
    rows: [
      { label: "정책", answers: ["과외 금지", "대입 본고사 폐지"] }
    ]
  },
  {
    prompt: "1983년 5월 18일 김영삼 선생이 단식을 시작하면서 요구한 핵심사항 2가지를 기록하시오.",
    rows: [
      { label: "핵심사항", answers: ["언론통제의 해제", "정치범 석방"] }
    ]
  },
  {
    prompt: "1985년 국회의원 선거과정에서 신한민주당이 쟁점으로 삼은 3가지 사안을 모두 기록하시오.",
    rows: [
      { label: "쟁점", answers: ["대통령 직선제 개헌", "광주항쟁 문제", "전두환 정권의 정통성"] }
    ]
  },
  {
    prompt: "1987년 대통령 선거에서 김영삼, 김대중 후보가 단일화 방식으로 각각 제안한 것을 기록하시오.",
    rows: [
      { label: "김영삼", answers: ["당내 경선을 통한 후보 단일화"] },
      { label: "김대중", answers: ["전국적 지지도를 통한 후보 단일화"] }
    ]
  },
  {
    prompt: "1990년 1월 22일 3당 합당에 참여한 정당과 합당 선언 제목을 모두 기록하시오.",
    rows: [
      { label: "정당", answers: ["민주정의당", "통일민주당", "신민주공화당"] },
      { label: "제목", answers: ["새로운 역사창조를 위한 공동선언"] }
    ]
  },
  {
    prompt: "제1회 전국동시지방선거가 실시된 일자(연도포함)와 지방 의결기관, 집행기관을 각각 기록하시오.",
    rows: [
      { label: "일자", answers: ["1995년 6월 27일"] },
      { label: "의결기관", answers: ["지방의회"] },
      { label: "집행기관", answers: ["지방자치단체의 장"] }
    ]
  },
  {
    prompt: "김대중 대통령 시기 공공부문개혁의 주요 목표를 3가지를 기록하시오.",
    rows: [
      { label: "주요 목표", answers: ["작지만 강한 정부", "경쟁과 성과원리 도입", "전자정부의 구현"] }
    ]
  }
];

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

function publicAnswerCount(question) {
  return question.rows.reduce((sum, row) => sum + row.answers.length, 0);
}

function renderPublic() {
  const html = publicQuestions.map((question, questionIndex) => {
    const rows = question.rows.map((row) => {
      const inputs = row.answers.map((answer, answerIndex) => (
        `<input class="blank-input public-input" type="text"
          style="--input-width:${Math.min(360, Math.max(170, answer.length * 14))}px"
          data-answer="${answer}"
          aria-label="${questionIndex + 1}번 ${row.label} ${answerIndex + 1}번째 정답"
          autocomplete="off">`
      )).join("");
      return `
        <div class="public-answer-row">
          <strong class="public-label">${row.label}</strong>
          <div class="public-inputs">${inputs}</div>
        </div>`;
    }).join("");

    return `
      <article class="paragraph-card public-card" data-index="public-${questionIndex}">
        <div class="card-header">
          <h3>${questionIndex + 1}. ${question.prompt}</h3>
          <span class="blank-badge">정답 ${publicAnswerCount(question)}개</span>
        </div>
        <div class="public-answer-list">${rows}</div>
        <div class="card-actions">
          <button class="check-button">정답 확인</button>
          <button class="reset-button">다시 풀기</button>
        </div>
        <div class="feedback" role="status"></div>
      </article>`;
  }).join("");

  document.querySelector("#quizList").innerHTML = html;
}

function renderContent() {
  document.querySelector("#pageTabs").hidden = activeMode === "public";
  if (activeMode === "public") {
    renderPublic();
    return;
  }
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
