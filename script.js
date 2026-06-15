const passages = [
  {
    page: 194,
    title: "최규하 과도정부의 성격",
    text: `그러나 최규하 정부 내에는 민주화를 수행할 만한 {{개혁적}} 성향의 인물이 전무했다. {{권위}}주의체제에서 순종적인 실무능력을 갖춘 {{최규하}} 대통령을 비롯하여, {{기술관료}}들인 내각구성원, 일본식 {{군사문화}}에 익숙한 {{군부엘리트}}들이 과도정부에 포진하고 있었다. 이들에게는 민주화보다는 {{사회안정}}을 위한 통제력 배지가 최우선 관심사였다. 따라서 이들은 ‘박대통령={{유신체제}}’라는 등식을 의식하여 최소한의 ‘{{현상변경}}정책’을 통해 국민의 {{지지}}를 확보하려고 하였다.`
  },
  {
    page: 194,
    title: "민주공화당의 대응",
    text: `최규하 정부의 {{정치일정}}에 대해 정당 및 재야세력의 반응은 다양했다. 먼저, {{민주공화당}}은 197{{9}}년 {{11}}월 13일 전당대회에서 {{김종필}}을 총재로 선출하여 당의 활성화를 꾀하였다. 그러나 당 내부의 {{분열}}과 더불어 내각과 {{군부엘리트}}의 지지를 받지 못함에 따라 ‘{{집권당}}’이 아닌 단순 ‘{{여당}}’의 지위로 하락하였다. 존립의 위기에 처한 민주공화당은 {{생존전략}} 차원에서 정부 및 야당과의 협력적 자세를 취하였다.`
  },
  {
    page: 194,
    title: "신민당의 민주화 전략",
    text: `{{10·26}} 직후 곧바로 {{김영삼}} 체제로 복귀한 {{신민당}}은 {{3개월}} 내에 유신헌법을 폐지하는 헌법 개정과 그 후 {{2개월}} 내에 신헌법하에 대통령{{직선제}}를 통한 {{민간정부}}의 수립을 촉구하였다. 그러나 신민당의 전략은 최규하 권한대행과의 회담 이후, ‘{{긴급조치}}의 해제’와 ‘국회의 {{개헌주체화}}’의 주장을 버리고 ‘대통령{{보궐선거}}방침’을 양해함으로써 {{단계적}} 방식의 민주화이행 전략을 채택하였다.`
  },
  {
    page: 194,
    title: "김대중·국민연합의 민주화 전략",
    text: `한편 {{김대중}}을 비롯한 재야의 ‘{{국민연합}}’ 세력들은 대통령{{보궐선거}} 반대, 공화당과 {{유정회}} 그리고 통일주체{{국민회의}}의 해체, 거국{{민주내각}}의 구성을 요구했다. 이들은 신민당의 {{소극적}}인 대응을 보면서 군부와 {{유신잔당}}의 민주화 지연작전에 신민당도 동조하고 있지는 않나 하는 깊은 의구심을 가지고 있었다. 따라서 김대중과 ‘국민연합’ 세력들은, 신민당의 {{단계론적}} 민주화이행 전략과는 달리, 다소 {{급진적}}이고 단절적인 민주화이행 전략 ― 유신체제의 {{총사퇴}}, {{개헌}}, {{총선거}}, 민주정부{{수립}}의 정치일정 ― 을 제시하였다.`
  },
  {
    page: 197,
    title: "12·12 사건과 이중적 권력구조",
    text: `{{12·12사건}}은 정치체제의 위기상황에서 군부 내 {{강경파}}가 온건파를 배제하고 실질적인 {{정치권력}}을 장악한 일종의 {{군사반란}}이며 {{하극상}}에 의한 군부쿠데타였다. 이를 계기로 {{신군부}}는 가장 강력한 정치행위자로 등장하였고, 최규하 정부의 {{무력화}}가 가속적으로 진행되었다. 그 결과, “최 대통령을 수반으로 하는 형식적 {{정부}}와 전두환 장군을 정점으로 하는 실제적 {{권력}}”이 공존하는 일종의 {{이중적}} 권력구조 상황이 연출되었다. 이로써 정국은 유신체제의 조속한 철폐와 민주주의의 실현을 요구하는 {{민중}}, 이를 부정하는 신군부세력, 그리고 제도권 {{정치세력}} 간의 {{3파전}}으로 압축되었다. 이제 민주화세력에게는 신군부세력에 대한 강경투쟁이냐 아니면 정치적 타협이냐의 선택만이 남아 있었다.`
  },
  {
    page: 197,
    title: "신군부의 집권 모색",
    text: `하지만 12·12 {{군사반란}}을 주도한 {{신군부}}는 집권의 길을 암암리에 모색하고 있었다. 이들은 {{비상계엄}}을 유지하고 합동{{수사본부}}의 권한을 강화하는 한편, 헌법{{개정작업}}을 지연시켰다. 제{{10}}대 대통령으로 {{최규하}}가 취임하여 비상계엄이 지속되어야 할 하등의 이유가 없는 상황에서도 신군부는 비상계엄의 {{해제}}를 반대하였다. 심지어는 각 {{정치세력}}의 활동을 감시하고 통제하기 위해서 합동수사본부의 {{권한}}과 활동영역을 계속 강화시켜 나갔다.`
  },
  {
    page: 225,
    title: "최규하 대통령의 하야",
    text: `{{신군부세력}}은 {{김정열}}을 앞세워 최규하 대통령 {{하야}} 설득작업에 들어갔으며, 198{{0}}년 {{8}}월 16일 최규하는 대통령을 사임하였다. 형식상으로는 합법적 {{정권이양}}의 절차를 밟아 이루어졌다. 그렇지만 최대통령이 {{대권}}을 넘기는 방식이 하야 외에 다른 방법이 없었느냐에 대해서는 의문이 있다. 이를테면 단순한 하야 이외에 신속히 {{헌법}}을 개정한 뒤 물러나는 등 몇 가지 방안이 있었는데 {{8·16}} 하야는 가장 {{무기력}}한 선택이었기 때문이다.`
  },
  {
    page: 225,
    title: "전두환의 제11대 대통령 선출",
    text: `최규하 대통령을 하야시킨 {{신군부세력}}은 198{{0}}년 {{8}}월 21일 전군주요{{지휘관회의}}에서 {{전두환}}을 국가원수로 추대하기로 결의하고서, 8월 22일에 전두환 대장의 {{전역식}}을 치렀다. 그 후 신군부세력은 8월 27일 통일주체{{국민회의}}에서 제{{11}}대 대통령으로 전두환 {{국보위}} 위원장을 선출하였다. {{단독 출마}}한 그는 총투표자 {{2,525명}} 가운데 기권 {{1명}}을 제외한 {{만장일치}}로 선출되었다.`
  },
  {
    page: 225,
    title: "제5공화국 헌법",
    text: `{{전두환}}을 대통령으로 선출한 {{신군부세력}}은 비록 형식적인 요건에 불과하더라도 {{헌법}}을 개정하여 새 공화국을 출범시키고 {{유신체제}}와의 차별성을 부각시킬 필요성 때문에 서둘러 헌법개정작업을 추진하였다. 그들은 그간 헌법개정작업을 준비해 온 개헌{{심의위원회}}의 헌법시안을 198{{0}}년 {{10}}월 9일 최종 확정하여 10월 23일 {{국민투표}}에서 전문과 본문 {{131조}}, 부칙 {{10조}}의 제{{5}}공화국의 헌법을 {{95.5%}}의 투표율과 {{91.6%}}의 찬성으로 통과시켰다. 새 헌법이 10월 27일에 {{공포·시행}}됨에 따라 기존 정당들은 자동 {{해산}}되고 통일주체국민회의도 {{폐지}}되었다. 그리고 부칙규정에 의하여 제10대 국회는 6년의 임기 중 채 2년을 채우지 못하고 임기를 종료하며 해산되었다.`
  },
  {
    page: 225,
    title: "국가보위입법회의",
    text: `{{전두환}} 대통령은 {{10대 국회}}가 해산됨에 따라, 제{{11}}대 국회의 최초 개원일 전까지 국회의 기능을 담당하는 ‘국가보위{{입법회의}}’(입법회의)를 {{10}}월 28일 발족시켰다. 입법의원으로 총 {{81명}}이 임명되었는데, 이들은 {{신군부}}의 원활한 {{집권}} 및 출범을 위한 {{법적 조치}}들을 마련하는 {{거수기}}에 불과하였다.`
  },
  {
    page: 242,
    title: "개헌서명운동의 전개",
    text: `{{14개}} 대학의 학생 {{1천여 명}}이 모여 ‘파쇼헌법{{철폐투쟁}}대회 및 개헌서명운동추진본부 결성식’을 개최하였고, {{2}}월 12일에는 {{신민당}}과 {{민추협}}이 공동으로 {{1천만}} 개헌서명운동을 전격적으로 개시하였다. 또한 {{3}}월 5일에는 {{민통련}}이 산하 {{23개}} 단체와 각계 민주인사 {{303인}}의 이름으로 ‘군사독재퇴진촉구와 민주헌법쟁취를 위한 범국민{{서명운동}}선언’을 발표하였다.`
  },
  {
    page: 242,
    title: "국회 헌법개정특별위원회",
    text: `{{개헌서명운동}}이 급속히 확산되자, {{전두환}} 대통령은 ‘임기내 개헌 {{불가}}’라는 당초 입장에서 물러나, {{4}}월 30일 {{청와대}}에서 열린 {{3당대표}} 회담에서 국회가 합의한다면 임기 내 개헌에 반대하지 않겠다고 밝혔다. 이에 {{민정당}}과 {{신민당}}은 {{5}}월 27일 ‘국회헌법개정 {{특별위원회}}’ 구성에 합의하였고, {{6}}월 24일 국회는 ‘헌법개정 특별위원회 {{구성결의안}}’을 통과시켰다.`
  },
  {
    page: 242,
    title: "이민우 구상과 통일민주당",
    text: `그러나 개헌을 둘러싼 {{신민당}}과 {{민정당}}의 입장이 상이했던 까닭에, 개헌특위는 {{공전}}을 거듭하였다. 신민당은 대통령{{직선제}} 합의를 촉구하였고, 민정당은 의원{{내각제}}를 주장하였다. 양자의 입장이 {{평행선}}을 그으면서 개헌특위는 거듭된 파행으로 {{유명무실}}한 기구로 전락하는 양상을 보였다. 이 과정에서 {{7개항}}의 민주화 조치가 선행된다면 내각제를 긍정적으로 검토하겠다는 이른바 ‘{{이민우}} 구상’이 {{12}}월 24일 발표되었다. 이에 따라, 신민당은 대통령직선제를 주장하는 세력과 이민우 구상을 받아들이자는 세력으로 {{분열}}되어 한동안 혼란을 경험하였다. 신민당 내부의 혼란은 결국 198{{7}}년 {{4}}월 {{김대중}}·{{김영삼}}이 {{74명}}의 국회의원과 더불어 신민당을 탈당하여 신당({{통일민주당}})을 창당함으로써 마감되었고, 이에 따라 ‘이민우 구상’은 {{좌절}}되었다. 양김의 탈당과 통일민주당의 창당은 직선제 개헌을 제외한 어떠한 {{타협}}도 거부한다는 입장을 명확하게 표명한 것으로, 협상의 폭과 집권세력의 선택의 여지를 제한하였다. 더불어, 양김의 통일민주당 창당은 집권세력 내의 {{협상파}}의 입지를 약화시키고 {{강경파}}의 득세를 가져왔다.`
  },
  {
    page: 271,
    title: "김영삼의 합당 판단",
    text: `당시 {{김영삼}}은 차기대권 경쟁에서 {{제3당}}의 위치에서 도전해야 하는 불리한 입장에 있었다. 불리한 정치적 상황을 돌파하기 위한 전략으로 김영삼은 {{민정당}}과의 {{합당}}을 긍정적으로 평가하였다. 즉 민정당 내에 차기 대권에 도전할 {{전국적 명성}}을 가진 인물이 부재한 까닭에, 김영삼은 민정당과 합당할 경우 보다 유리한 {{정치구도}}하에서 {{차기대권}}에 도전할 수 있다고 판단하였다.`
  },
  {
    page: 271,
    title: "3당합당에 대한 총평",
    text: `결국 {{3당합당}}으로 이어진 {{정계개편}}은 {{민자당}}이라는 {{거대여당}}의 출현으로 잠재적으로 정국의 {{안정}}을 도모할 수 있는 정치적 구조를 창출했다는 점에서 긍정적으로 평가할 수 있을지 모르나, 다음의 몇 가지 측면에서 향후 한국정치 발전에 {{부정적}} 영향을 미칠 수 있는 요소들을 담고 있었다.`
  },
  {
    page: 271,
    title: "3당합당과 정당정치",
    text: `첫째, {{3당합당}}은 기본적으로 민주적 {{정당정치}}의 확립과 발전에 역행하는 {{퇴행적}} 현상이었다. 3당통합은 {{여소야대}} 상황을 일거에 역전시킨 사건으로, {{유권자}}의 의사와는 무관하게 소수의 정치{{엘리트}} 간의 {{비밀협약}}에 의한 정치적 {{담합}}의 성격이 강하였다. 비록 3당통합의 명분을 “정치안정과 지속적 {{경제발전}}을 위한 구국의 대결단”이라고 내걸었으나, 실제로는 국민의 의사를 배반하고 정당정치의 {{책임성}}(accountability)을 저버린 소수엘리트의 정치적 {{야합}}이었다.`
  },
  {
    page: 271,
    title: "3당합당과 보수화",
    text: `둘째, {{3당합당}}은 의회 구도의 {{보수화}}를 촉진하여, 민주주의 이행 이후 {{시민사회}}의 고조된 개혁 열기를 의회에서 차단시키고, 동시에 보수적 {{헤게모니}}를 구축하고 강화시키려는 집권세력의 전략적 실천이었다. 198{{8}}년 {{총선}}부터 198{{9}}년 {{공안정국}}에 이르기까지 시민사회는 {{진보적 개혁}}의 열기로 가득하였다. 그리고 정치사회를 대표하는 의회 내에는 {{여소야대}} 정국을 통하여 권위주의 국가와 정치과정을 개혁하려는 엄청난 압력이 분출되었다. 이에 대한 {{지배세력}}의 움직임은 공안정국과 {{3당합당}}으로 나타났다. 즉 공안정국의 전략이 국가의 {{헤게모니}}를 동원하여 시민사회의 민주화 열기와 의회에서의 개혁의지를 급격히 냉각시키는 것이었다면, 3당합당의 전략은 보수주의적 {{권위주의}}와 보수주의적 {{자유주의}}의 결합을 실현하여 정책·이념적 정향 및 엘리트구조에서 고도의 {{연속성}}을 갖는 제한된 민주화 이행을 위한 조치였다.`
  },
  {
    page: 285,
    title: "부정부패 사정",
    text: `재산공개에 뒤이어 ‘{{슬롯머신}}’ 사건으로 {{박철언}} 의원, 이건개 대전고검장, 엄삼탁 병무청장 등 구정권의 핵심 인사들이 {{사법처리}}되었다. 또한 군의 {{인사 비리}}가 발각되어 이종구·이상훈 전 국방장관, 김종호·김철우 전 해군참모총장, 한주석·정용후 전 공군참모총장 등이 구속되었고, 부정부패 혐의로 민자당 내 {{민정계}}의 대부였던 {{박태준}} 전 포철회장과 김종휘 전 외교안보수석이 수배되었다. 또한 대통령 취임 {{1년}} 기간 동안, {{1,363명}}의 비위공무원이 파면·해임·면직되었고, 민간부문에서 불법 호화별장으로 인해 31명이, 부동산투기로 {{64명}}이, 법조비리로 {{602명}}이 구속되었다.`
  },
  {
    page: 285,
    title: "금융·부동산 실명제와 정치개혁",
    text: `이와 함께 ‘{{깨끗한 정치}}’의 실천을 제도적 차원에서 공고히 하기 위해 일련의 개혁조치가 취해졌다. 첫째, 김영삼 대통령은 199{{3}}년 {{8}}월 12일 ‘금융실명거래 및 비밀보장에 관한 긴급{{재정경제명령}}’을 통해 ‘{{금융실명제}}’를 전격적으로 도입하였다. 금융실명제의 실시는 자금 흐름의 {{투명성}}을 제고하고 음성소득과 불건전 자금거래를 차단하는 효과를 지니는 까닭에, 한국사회의 뿌리 깊은 {{정경유착}}, {{부정부패}}, {{지하경제}}의 근절이 기대되었다. 둘째, 금융실명제의 후속 조처로서, 부동산에 대한 등기는 반드시 {{실소유자}}의 명의로만 하게 하는 ‘{{부동산실명제}}’가 199{{5}}년 {{7}}월 1일을 기해 실시되었다. 즉 부동산투기와 {{조세포탈}} 그리고 {{재산은닉}} 등의 수단으로 악용되어 온 {{명의신탁}} 제도를 금지함으로써 {{경제정의}}를 실현코자 하였다. 셋째, 199{{4}}년 {{3}}월 ‘공직선거 및 선거부정방지법’과 ‘{{정치자금법}}’이 제·개정되었다. 통합선거법은 기존의 각종 선거법들을 {{단일 법률}}로 체계화하여 각종 공직선거의 효율적인 관리를 시도하였다.`
  },
  {
    page: 319,
    title: "노동시장 유연화",
    text: `{{노동개혁}}의 목표는 노동시장의 {{유연성}}을 제고하는 것이었다. 노동시장의 유연화는 노동시장의 {{환경변화}} 및 {{수요변화}}에 대응하여 신속하게 {{고용}}·{{임금}}·{{노동시간}}을 탄력적으로 조정할 수 있는 노동시장의 {{능력}}을 의미한다. 따라서 노동시장 유연성의 제고는 기업들에게 시장 상황에 쉽게 {{적응}}할 수 있게 함으로써 기업의 {{경쟁력}}을 향상시킬 수 있는 장점을 지니고 있으나, 동시에 {{실업자}} 및 {{비정규직}}의 양산 등 고용{{불안정}}을 증대시킬 가능성도 함께 안고 있었다.`
  },
  {
    page: 319,
    title: "노사정위원회의 발족",
    text: `사회{{복지체계}}가 부재한 상황에서, 노동시장의 {{유연성}} 제고정책은 엄청난 노동의 {{저항}}이 예상되는 사항이었다. 즉 노동의 동의 없는 {{정리해고제}}의 실시는 위기에 처한 {{한국경제}}를 돌이킬 수 없는 상황으로 몰아갈 가능성이 높았다. 노동의 저항을 피하기 위해, 정부는 {{한국노총}}과 {{민주노총}}에 ‘IMF(위기) 극복을 위한 노사정{{협의회}}’ 구성을 제안하였다. 그리고 199{{8}}년 {{1}}월 15일 대통령 {{자문기구}} 형태로 {{노사정위원회}}가 발족되었다.`
  },
  {
    page: 319,
    title: "노사정 공동선언과 합의",
    text: `몇 차례의 {{난항}}이 있었지만, 정부의 노력은 상당한 성과를 거두었다. {{1}}월 20일, {{노·사·정}}이 “IMF 체제하의 경제위기 극복을 위해 불가피하게 요구되는 고통을 공정하게 {{분담}}”한다는 ‘제1차 노사정 {{공동선언문}}’이 작성되었다. 그리고 {{2}}월 9일에는 ‘제2차 공동선언문’으로 알려진 ‘경제위기 극복과 {{재도약}}을 위한 노사정 공동선언문’이 발표되었다. 합의 내용에 의하면, 노동은 {{정리해고제}}의 조기실시 및 {{파견근로제}}의 법제화를 허용하는 대신, 국가는 노조의 {{정치활동}}을 보장하고, 공무원·교원의 {{단결권}}을 허용하며, 실업자에 대해 초기업 단위노조 {{가입자격}}을 인정하고, 동시에 {{고용안정}} 및 실업대책과 {{사회보장제도}}를 확충하며, 기업은 기업{{재무구조}}를 개선하여 기업의 경영{{투명성}}을 확보하며, {{구조조정}}의 실행을 통해 기업의 {{경쟁력}}을 강화한다는 것이었다.`
  }
];

const pattern = /\{\{(.*?)\}\}/g;
const pages = [...new Set(passages.map((passage) => passage.page))];
let activePage = "all";

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

function renderTabs() {
  const tabs = [
    `<button class="page-tab ${activePage === "all" ? "active" : ""}" data-page="all">전체</button>`,
    ...pages.map((page) => `<button class="page-tab ${activePage === page ? "active" : ""}" data-page="${page}">P${page}</button>`)
  ];
  document.querySelector("#pageTabs").innerHTML = tabs.join("");
}

function renderQuiz() {
  const visible = activePage === "all" ? passages : passages.filter((passage) => passage.page === activePage);
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
renderQuiz();

document.querySelector("#pageTabs").addEventListener("click", (event) => {
  const button = event.target.closest(".page-tab");
  if (!button) return;
  activePage = button.dataset.page === "all" ? "all" : Number(button.dataset.page);
  renderTabs();
  renderQuiz();
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
