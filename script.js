const multipleChoice = [
  { q: "신고전주의가 가장 중요하게 여긴 가치의 조합은?", c: ["감성과 화려함", "이성과 질서", "우연성과 즉흥성", "꿈과 무의식"], a: 1, e: "신고전주의는 감성보다 이성, 화려함보다 절제와 질서를 중시했다." },
  { q: "신고전주의의 등장 배경으로 보기 어려운 것은?", c: ["로코코 문화에 대한 싫증", "계몽주의의 확산", "로마 시대 유적의 발견", "제1차 세계대전에 대한 반전 운동"], a: 3, e: "제1차 세계대전과 반전 운동은 다다이즘의 배경이다." },
  { q: "신고전주의 회화의 특징이 아닌 것은?", c: ["매끈한 화면", "직선과 완벽한 비율", "역사와 교훈적 주제", "거칠고 즉흥적인 붓질"], a: 3, e: "신고전주의는 붓자국이 거의 느껴지지 않는 차분하고 매끈한 화면을 선호했다." },
  { q: "프랑스 신고전주의의 주창자로 필기된 화가는?", c: ["자크 루이 다비드", "구스타브 쿠르베", "클로드 모네", "에드바르 뭉크"], a: 0, e: "자크 루이 다비드는 프랑스 신고전주의를 대표한다." },
  { q: "‘오달리스크’의 뜻으로 알맞은 것은?", c: ["농촌에서 일하는 여성", "오스만 제국 하렘의 여자 노예", "고대 로마의 여신", "발레 무용수"], a: 1, e: "오달리스크는 오스만 제국 황제의 후궁, 즉 하렘에 거주하던 여자 노예를 뜻한다." },
  { q: "앵그르의 「오달리스크」에서 두드러지는 표현은?", c: ["인체 비례를 길게 늘임", "농부를 숭엄하게 묘사함", "형태가 대기 속에 녹아듦", "식물의 덩굴무늬를 사용함"], a: 0, e: "신고전주의 화풍을 따르면서 인체의 비례를 의도적으로 길게 늘여 표현했다." },
  { q: "사실주의에 대한 설명으로 가장 알맞은 것은?", c: ["신화적 과거를 이상화한다", "지금 여기의 현실을 관찰해 표현한다", "무의식의 꿈을 그린다", "색채 자체의 자율성만 탐구한다"], a: 1, e: "사실주의는 신화나 이상화된 과거가 아니라 동시대 현실을 다룬다." },
  { q: "사실주의 화가들이 주로 선택한 대상이 아닌 것은?", c: ["농부", "도시 노동자", "서민의 일상", "이상화된 고대 영웅"], a: 3, e: "사실주의는 고대 영웅보다 평범한 사람의 삶을 주요 주제로 삼았다." },
  { q: "사실주의의 특징으로 보기 어려운 것은?", c: ["시각적 진실 추구", "동시대의 현실", "엄숙함과 절제", "과장된 환상과 영웅화"], a: 3, e: "사실주의는 화려하고 과장된 표현을 피했다." },
  { q: "「오르낭의 매장」을 그린 사실주의 화가는?", c: ["밀레", "쿠르베", "세잔", "다비드"], a: 1, e: "구스타브 쿠르베의 대표작이다." },
  { q: "다음 중 구스타브 쿠르베의 작품은?", c: ["내 화실의 내부", "기억의 고집", "생의 기쁨", "키스"], a: 0, e: "PDF에는 쿠르베의 「오르낭의 매장」과 「내 화실의 내부」가 정리되어 있다." },
  { q: "밀레가 농부를 묘사한 방식은?", c: ["우스꽝스럽고 희화적으로", "숭엄하고 강인하게", "기하학적 도형으로", "광고 이미지처럼"], a: 1, e: "밀레는 자연과 농촌의 현실 속 농부를 숭엄하고 강인하게 묘사했다." },
  { q: "바르비종 유파에 대한 설명으로 알맞은 것은?", c: ["로마 신화와 역사를 주로 그렸다", "자연과 농촌 현실을 사실적으로 그렸다", "빛과 색채의 순간을 포착했다", "식물무늬를 실내 장식에 사용했다"], a: 1, e: "바르비종 유파는 19세기 중반 자연과 농촌 현실을 사실적으로 그린 풍경화 중심의 화가들이다." },
  { q: "다음 중 밀레의 작품이 아닌 것은?", c: ["만종", "씨뿌리는 사람", "감자 먹는 사람들", "둘 다 농민을 다룬 작품"], a: 2, e: "「감자 먹는 사람들」은 고흐의 초기 작품이다." },
  { q: "인상주의 회화의 특징이 아닌 것은?", c: ["짧고 물결치는 듯한 붓질", "밝고 찬란한 색채", "순간의 빛 포착", "완벽히 매끈한 표면과 역사적 교훈"], a: 3, e: "매끈한 표면과 역사적 교훈은 신고전주의에 가깝다." },
  { q: "모네가 끝까지 유지한 인상주의의 핵심 원리는?", c: ["빛은 곧 색채이다", "형태는 원기둥과 구체이다", "예술은 아이디어뿐이다", "이성과 논리를 거부한다"], a: 0, e: "필기에서 모네는 ‘빛 = 색채’ 원리를 유지한 화가로 정리되었다." },
  { q: "모네의 화풍에 대한 설명으로 알맞은 것은?", c: ["형태가 대기 속에 녹아드는 듯하다", "인체가 길게 늘어난다", "흑백의 덩굴무늬가 중심이다", "대상을 여러 시점으로 분해한다"], a: 0, e: "모네의 대상은 빛과 대기의 변화 속에서 윤곽이 녹아드는 느낌을 준다." },
  { q: "같은 대상을 시간과 빛에 따라 반복해서 그린 모네의 연작은?", c: ["루앙 대성당 시리즈", "절규 시리즈", "샘 시리즈", "아비뇽 시리즈"], a: 0, e: "루앙 대성당 연작은 변화하는 빛과 색을 탐구한 대표 사례다." },
  { q: "모네가 후기까지 반복해 그린 대표 소재는?", c: ["수련", "농부", "로마 신화", "식물의 덩굴무늬"], a: 0, e: "모네의 후기 대표 연작은 수련이다." },
  { q: "후기 인상주의가 추구한 방향은?", c: ["순간 포착보다 견고하고 본질적인 화풍", "고대 로마의 완벽한 비례", "아무 의미도 없는 반이성", "대량소비 이미지의 반복"], a: 0, e: "후기 인상주의는 인상주의의 순간 포착을 넘어 각자의 방식으로 본질과 구조를 추구했다." },
  { q: "자연을 원기둥·구체·원추형 같은 기하학 구조로 본 화가는?", c: ["세잔", "밀레", "달리", "리히텐슈타인"], a: 0, e: "세잔은 자연의 본질적인 기하학 구조를 고찰했다." },
  { q: "‘입체주의의 선구자’로 정리된 화가는?", c: ["폴 세잔", "클로드 모네", "구스타프 클림트", "잭슨 폴록"], a: 0, e: "세잔의 구조적 탐구는 입체주의에 큰 영향을 주었다." },
  { q: "세잔의 대표작으로 PDF에 제시된 것은?", c: ["생 빅투아르 산", "오르낭의 매장", "우는 여자", "넘버 1A"], a: 0, e: "PDF의 세잔 항목에는 「생 빅투아르 산」이 제시되어 있다." },
  { q: "고흐의 초기 작품과 후기 작품의 변화로 알맞은 것은?", c: ["밝은 색조에서 어두운 색조로", "어두운 노동자 주제에서 밝고 강렬한 색채로", "강렬한 색채에서 매끈하고 절제된 화면으로", "농촌 현실에서 로마 신화 중심으로"], a: 1, e: "초기에는 노동자 계층을 어둡게 그렸고, 이후 밝고 강렬한 색채로 변했다." },
  { q: "고흐의 화풍 특징이 아닌 것은?", c: ["짧고 소용돌이치는 붓질", "밝은 보색", "강한 리듬감", "차갑고 기계적인 직선만 사용"], a: 3, e: "고흐는 열정적이고 생동감 있는 곡선과 붓질로 리듬감을 만들었다." },
  { q: "상징주의가 중시한 것은?", c: ["보이는 외관의 정확한 복제", "내면과 감정의 상징적 표현", "고대 영웅의 교훈", "기계 생산의 효율"], a: 1, e: "상징주의는 보이는 것보다 느끼는 것, 설명보다 암시를 중시했다." },
  { q: "초기 표현주의의 특징으로 알맞은 것은?", c: ["뒤틀린 형태와 강렬한 색채", "정확한 원근과 매끈한 표면", "장식 없는 최소 형태만 사용", "일상용품을 그대로 전시"], a: 0, e: "상징주의의 영향을 받아 내면을 왜곡된 형태와 강렬한 색채로 표현했다." },
  { q: "다음 중 뭉크의 작품이 아닌 것은?", c: ["절규", "사춘기", "마돈나", "키스"], a: 3, e: "「키스」는 구스타프 클림트의 대표작이다." },
  { q: "금빛 장식과 평면적 패턴이 두드러지는 「키스」의 작가는?", c: ["클림트", "뭉크", "마티스", "몬드리안"], a: 0, e: "구스타프 클림트의 대표작이다." },
  { q: "아르누보의 특징이 아닌 것은?", c: ["식물 무늬", "덩굴 같은 곡선", "실내 장식 활용", "검정 수직·수평선과 원색 사각형"], a: 3, e: "수직·수평선과 원색 사각형은 몬드리안의 조형 언어다." },
  { q: "오브리 비어즐리의 작품으로 필기된 것은?", c: ["혼란 속의 살로메", "녹색의 띠", "기억의 고집", "만종"], a: 0, e: "아르누보 항목에서 「혼란 속의 살로메」가 제시되었다." },
  { q: "야수주의의 특징으로 가장 알맞은 것은?", c: ["밝고 강렬하게 과장된 색채", "현실을 사진처럼 재현", "논리와 이성의 절대적 존중", "최소한의 형태와 색만 사용"], a: 0, e: "야수주의는 강렬한 색채, 거친 붓질, 왜곡된 형태와 원근이 특징이다." },
  { q: "다음 중 앙리 마티스의 작품이 아닌 것은?", c: ["녹색의 띠", "생의 기쁨", "춤", "아비뇽의 처녀들"], a: 3, e: "「아비뇽의 처녀들」은 피카소의 작품이다." },
  { q: "입체주의의 대표 화가는?", c: ["피카소", "모네", "밀레", "클림트"], a: 0, e: "피카소는 입체주의를 대표하는 화가이다." },
  { q: "피카소의 입체주의 대표작은?", c: ["아비뇽의 처녀들", "인상, 해돋이", "오르낭의 매장", "이것 봐 미키"], a: 0, e: "「아비뇽의 처녀들」은 피카소의 대표적인 입체주의 작품이다." },
  { q: "수직선·수평선과 원색의 사각형을 사용한 추상화가는?", c: ["몬드리안", "뒤샹", "밀레", "앵그르"], a: 0, e: "몬드리안은 수직·수평선과 원색 면을 사용한 기하학적 추상으로 유명하다." },
  { q: "다다이즘이 발생한 직접적 시대 배경은?", c: ["제1차 세계대전", "프랑스 혁명", "산업혁명 초기", "1960년대 소비사회"], a: 0, e: "다다이즘은 제1차 세계대전 중 스위스 취리히에서 발생했다." },
  { q: "‘Dada’라는 말의 의미와 태도로 알맞은 것은?", c: ["고대의 질서와 비례", "아무 의미 없는 말, 합리성과 논리의 거부", "빛과 색채의 일치", "최소한주의"], a: 1, e: "다다는 무의미한 말이며 반이성·반전통의 태도를 드러낸다." },
  { q: "다다이즘 화가와 작품의 연결로 옳은 것은?", c: ["뒤샹 - 샘", "달리 - 춤", "모네 - 절규", "마티스 - 만종"], a: 0, e: "PDF에는 다다이즘 작가 뒤샹의 작품으로 「샘」이 제시되어 있다." },
  { q: "초현실주의의 대표 화가는?", c: ["살바도르 달리", "클로드 모네", "구스타브 쿠르베", "앙리 마티스"], a: 0, e: "살바도르 달리는 초현실주의를 대표하는 화가이다." },
  { q: "녹아내리는 시계가 등장하는 달리의 작품은?", c: ["기억의 고집", "백조를 반영한 코끼리", "넘버 1A", "우는 여자"], a: 0, e: "「기억의 고집」은 녹아내리는 시계로 유명하다." },
  { q: "추상표현주의 화가와 작품의 연결로 옳은 것은?", c: ["잭슨 폴록 - 넘버 1A", "몬드리안 - 샘", "달리 - 춤", "리히텐슈타인 - 수련"], a: 0, e: "잭슨 폴록의 대표작은 「넘버 1A」이다." },
  { q: "「이것 봐 미키」와 「우는 여자」를 그린 팝아트 화가는?", c: ["로이 리히텐슈타인", "피에트 몬드리안", "오브리 비어즐리", "폴 세잔"], a: 0, e: "두 작품 모두 로이 리히텐슈타인의 작품이다." },
  { q: "리히텐슈타인의 작품으로 옳은 것은?", c: ["이것 봐 미키", "수련", "만종", "기억의 고집"], a: 0, e: "PDF에는 리히텐슈타인의 작품으로 「이것 봐 미키」와 「우는 여자」가 제시되어 있다." },
  { q: "미니멀리즘의 뜻으로 알맞은 것은?", c: ["최소한주의", "무의식주의", "고전부흥주의", "자연주의"], a: 0, e: "minimal에 ism을 붙인 말로 ‘최소한주의’라는 의미다." },
  { q: "개념미술이 미술의 핵심으로 삼는 것은?", c: ["작가의 아이디어와 개념", "비싼 재료", "정확한 인체 비례", "화려한 장식"], a: 0, e: "개념미술은 물질적 결과보다 아이디어 자체를 우선한다." },
  { q: "개념미술의 ‘미술의 비물질화’에 대한 설명은?", c: ["작품의 물질적 형태보다 개념을 중시한다", "모든 작품을 금속으로 만든다", "인물을 이상적으로 묘사한다", "오직 풍경화만 인정한다"], a: 0, e: "완성된 물체보다 생각과 아이디어가 예술의 중심이 된다." },
  { q: "개념미술의 표현 방식에 대한 설명으로 알맞은 것은?", c: ["설치·퍼포먼스·사진 등 다양한 매체가 가능하다", "반드시 유화여야 한다", "반드시 인물화여야 한다", "정해진 한 가지 형태만 허용된다"], a: 0, e: "표현 수단은 개념 전달의 도구이므로 정해진 형태가 없다." },
  { q: "개념미술의 특징으로 옳지 않은 것은?", c: ["아이디어를 중시한다", "정해진 형태가 없다", "다양한 매체를 사용할 수 있다", "완성된 물질적 형태가 아이디어보다 중요하다"], a: 3, e: "개념미술은 완성된 물질적 형태보다 아이디어를 중요하게 본다." }
];

const shortAnswer = [
  { q: "감성보다 이성, 화려함보다 절제와 질서를 중시한 사조는?", a: ["신고전주의"], e: "신고전주의" },
  { q: "프랑스 신고전주의를 대표하는 화가는?", a: ["자크 루이 다비드", "다비드"], e: "자크 루이 다비드" },
  { q: "오스만 제국 하렘의 여자 노예를 뜻하는 말은?", a: ["오달리스크"], e: "오달리스크" },
  { q: "‘지금 여기’의 현실을 관찰해 표현한 사조는?", a: ["사실주의"], e: "사실주의" },
  { q: "사실주의의 대표 화가는?", a: ["구스타브 쿠르베", "쿠르베"], e: "구스타브 쿠르베" },
  { q: "빛과 색채의 순간적인 변화를 표현한 사조는?", a: ["인상주의"], e: "인상주의" },
  { q: "빛은 곧 색채라는 원리를 추구한 인상주의 화가는?", a: ["클로드 모네", "모네"], e: "클로드 모네" },
  { q: "자연의 본질을 원기둥·구체·원추형으로 본 화가는?", a: ["폴 세잔", "세잔"], e: "폴 세잔" },
  { q: "짧고 소용돌이치는 붓질과 밝은 보색이 특징인 화가는?", a: ["빈센트 반 고흐", "고흐", "반 고흐"], e: "빈센트 반 고흐" },
  { q: "외관 재현보다 내면과 감정을 암시적으로 표현하는 사조는?", a: ["상징주의"], e: "상징주의" },
  { q: "뒤틀린 형태와 강렬한 색채로 내면을 표현한 초기 표현주의 화가는?", a: ["에드바르 뭉크", "뭉크"], e: "에드바르 뭉크" },
  { q: "금빛 장식과 평면적 무늬가 특징인 화가는?", a: ["구스타프 클림트", "클림트"], e: "구스타프 클림트" },
  { q: "식물 무늬와 덩굴 같은 곡선을 특징으로 하는 양식은?", a: ["아르누보"], e: "아르누보" },
  { q: "밝고 강렬하게 과장된 색채를 사용한 야수주의 화가는?", a: ["앙리 마티스", "마티스"], e: "앙리 마티스" },
  { q: "입체주의의 대표 화가는?", a: ["파블로 피카소", "피카소"], e: "파블로 피카소" },
  { q: "수직·수평선과 원색 사각형으로 유명한 추상화가는?", a: ["피에트 몬드리안", "몬드리안"], e: "피에트 몬드리안" },
  { q: "제1차 세계대전 중 취리히에서 발생한 반이성·반전통 사조는?", a: ["다다이즘", "다다"], e: "다다이즘" },
  { q: "초현실주의를 대표하는 화가는?", a: ["살바도르 달리", "달리"], e: "살바도르 달리" },
  { q: "「이것 봐 미키」와 「우는 여자」를 그린 화가는?", a: ["로이 리히텐슈타인", "리히텐슈타인"], e: "로이 리히텐슈타인" },
  { q: "minimal + ism에서 나온 ‘최소한주의’는?", a: ["미니멀리즘"], e: "미니멀리즘" },
  { q: "물질적 작품보다 아이디어 자체를 핵심으로 삼는 미술은?", a: ["개념미술", "개념 미술"], e: "개념미술" }
];

const imageQuestions = [
  { q: "다음 작품의 올바른 제목을 고르시오.", img: "assets/page-01-image-01.png", c: ["오달리스크", "사춘기", "녹색의 띠", "유디트"], a: 0, e: "앵그르, 「오달리스크」" },
  { q: "다음 작품의 올바른 제목을 고르시오.", img: "assets/page-02-image-01.png", c: ["오르낭의 매장", "내 화실의 내부", "만종", "생의 기쁨"], a: 0, e: "쿠르베, 「오르낭의 매장」" },
  { q: "다음 작품의 올바른 제목을 고르시오.", img: "assets/page-03-image-02.png", c: ["씨뿌리는 사람", "만종", "감자 먹는 사람들", "정원에 있는 여인들"], a: 1, e: "밀레, 「만종」" },
  { q: "다음 작품의 올바른 제목을 고르시오.", img: "assets/page-04-image-01.png", c: ["씨뿌리는 사람", "만종", "오르낭의 매장", "감자 먹는 사람들"], a: 0, e: "밀레, 「씨뿌리는 사람」" },
  { q: "다음 작품의 올바른 제목을 고르시오.", img: "assets/page-05-image-01.png", c: ["수련", "인상, 해돋이", "생 빅투아르 산", "기억의 고집"], a: 1, e: "모네, 「인상, 해돋이」" },
  { q: "다음 작품 연작의 올바른 제목을 고르시오.", img: "assets/page-05-image-03.png", c: ["루앙 대성당", "수련", "정원에 있는 여인들", "생 빅투아르 산"], a: 0, e: "모네, 「루앙 대성당」 연작" },
  { q: "다음 작품의 올바른 제목을 고르시오.", img: "assets/page-05-image-04.png", c: ["인상, 해돋이", "수련", "춤", "별이 빛나는 밤"], a: 1, e: "모네, 「수련」" },
  { q: "다음 작품의 올바른 제목을 고르시오.", img: "assets/page-05-image-05.png", c: ["생 빅투아르 산", "루앙 대성당", "오르낭의 매장", "백조를 반영한 코끼리"], a: 0, e: "세잔, 「생 빅투아르 산」" },
  { q: "다음 작품의 올바른 제목을 고르시오.", img: "assets/page-06-image-01.png", c: ["감자 먹는 사람들", "만종", "내 화실의 내부", "생의 기쁨"], a: 0, e: "고흐, 「감자 먹는 사람들」" },
  { q: "다음 작품의 올바른 제목을 고르시오.", img: "assets/page-07-image-03.png", c: ["마돈나", "절규", "사춘기", "자화상"], a: 1, e: "뭉크, 「절규」" },
  { q: "다음 작품의 올바른 제목을 고르시오.", img: "assets/page-08-image-01.png", c: ["유디트", "키스", "아델레 블로흐 바우어의 초상", "마돈나"], a: 1, e: "클림트, 「키스」" },
  { q: "다음 작품의 올바른 제목을 고르시오.", img: "assets/page-08-image-04.png", c: ["혼란 속의 살로메", "우는 여자", "유디트", "춤"], a: 0, e: "오브리 비어즐리, 「혼란 속의 살로메」" },
  { q: "다음 작품의 올바른 제목을 고르시오.", img: "assets/page-09-image-01.png", c: ["녹색의 띠", "생의 기쁨", "춤", "후식"], a: 0, e: "마티스, 「녹색의 띠」" },
  { q: "다음 작품의 올바른 제목을 고르시오.", img: "assets/page-09-image-04.png", c: ["바다의 생물들", "생의 기쁨", "춤", "후식"], a: 2, e: "마티스, 「춤」" },
  { q: "다음 작품의 올바른 제목을 고르시오.", img: "assets/page-09-image-06.png", c: ["앙브루아즈 볼라르의 초상", "아비뇽의 처녀들", "생의 기쁨", "녹색의 띠"], a: 1, e: "피카소, 「아비뇽의 처녀들」" },
  { q: "다음 작품의 올바른 제목을 고르시오.", img: "assets/page-10-image-02.png", c: ["샘", "수련", "후식", "이것 봐 미키"], a: 0, e: "마르셀 뒤샹, 「샘」" },
  { q: "다음 작품의 올바른 제목을 고르시오.", img: "assets/page-11-image-01.png", c: ["백조를 반영한 코끼리", "기억의 고집", "넘버 1A", "절규"], a: 1, e: "살바도르 달리, 「기억의 고집」" },
  { q: "다음 작품의 올바른 제목을 고르시오.", img: "assets/page-11-image-03.png", c: ["넘버 1A", "기억의 고집", "아비뇽의 처녀들", "수련"], a: 0, e: "잭슨 폴록, 「넘버 1A」" },
  { q: "다음 작품의 올바른 제목을 고르시오.", img: "assets/page-12-image-02.png", c: ["이것 봐 미키", "우는 여자", "마돈나", "녹색의 띠"], a: 1, e: "로이 리히텐슈타인, 「우는 여자」" }
];

const artistImageQuestions = [
  { q: "다음 작품을 그린 작가를 고르시오.", img: "assets/page-01-image-01.png", c: ["앵그르", "다비드", "쿠르베", "밀레"], a: 0, e: "앵그르, 「오달리스크」" },
  { q: "다음 작품을 그린 작가를 고르시오.", img: "assets/page-02-image-01.png", c: ["밀레", "쿠르베", "모네", "세잔"], a: 1, e: "쿠르베, 「오르낭의 매장」" },
  { q: "다음 작품을 그린 작가를 고르시오.", img: "assets/page-03-image-02.png", c: ["쿠르베", "고흐", "밀레", "모네"], a: 2, e: "밀레, 「만종」" },
  { q: "다음 작품을 그린 작가를 고르시오.", img: "assets/page-04-image-01.png", c: ["밀레", "쿠르베", "세잔", "고흐"], a: 0, e: "밀레, 「씨뿌리는 사람」" },
  { q: "다음 작품을 그린 작가를 고르시오.", img: "assets/page-05-image-01.png", c: ["세잔", "고흐", "모네", "마티스"], a: 2, e: "모네, 「인상, 해돋이」" },
  { q: "다음 연작을 그린 작가를 고르시오.", img: "assets/page-05-image-03.png", c: ["모네", "세잔", "고흐", "피카소"], a: 0, e: "모네, 「루앙 대성당」 연작" },
  { q: "다음 작품을 그린 작가를 고르시오.", img: "assets/page-05-image-04.png", c: ["세잔", "모네", "고흐", "클림트"], a: 1, e: "모네, 「수련」" },
  { q: "다음 작품을 그린 작가를 고르시오.", img: "assets/page-05-image-05.png", c: ["모네", "고흐", "세잔", "밀레"], a: 2, e: "세잔, 「생 빅투아르 산」" },
  { q: "다음 작품을 그린 작가를 고르시오.", img: "assets/page-06-image-01.png", c: ["고흐", "밀레", "쿠르베", "세잔"], a: 0, e: "고흐, 「감자 먹는 사람들」" },
  { q: "다음 작품을 그린 작가를 고르시오.", img: "assets/page-07-image-03.png", c: ["클림트", "뭉크", "마티스", "비어즐리"], a: 1, e: "뭉크, 「절규」" },
  { q: "다음 작품을 그린 작가를 고르시오.", img: "assets/page-08-image-01.png", c: ["뭉크", "마티스", "클림트", "고흐"], a: 2, e: "클림트, 「키스」" },
  { q: "다음 작품을 그린 작가를 고르시오.", img: "assets/page-08-image-04.png", c: ["클림트", "오브리 비어즐리", "뭉크", "리히텐슈타인"], a: 1, e: "오브리 비어즐리, 「혼란 속의 살로메」" },
  { q: "다음 작품을 그린 작가를 고르시오.", img: "assets/page-09-image-01.png", c: ["피카소", "마티스", "몬드리안", "클림트"], a: 1, e: "마티스, 「녹색의 띠」" },
  { q: "다음 작품을 그린 작가를 고르시오.", img: "assets/page-09-image-04.png", c: ["마티스", "피카소", "달리", "몬드리안"], a: 0, e: "마티스, 「춤」" },
  { q: "다음 작품을 그린 작가를 고르시오.", img: "assets/page-09-image-06.png", c: ["마티스", "피카소", "세잔", "몬드리안"], a: 1, e: "피카소, 「아비뇽의 처녀들」" },
  { q: "다음 작품을 그린 작가를 고르시오.", img: "assets/page-10-image-01.png", c: ["피카소", "폴록", "몬드리안", "달리"], a: 2, e: "PDF의 몬드리안 작품" },
  { q: "다음 작품을 만든 작가를 고르시오.", img: "assets/page-10-image-02.png", c: ["몬드리안", "마르셀 뒤샹", "잭슨 폴록", "살바도르 달리"], a: 1, e: "마르셀 뒤샹, 「샘」" },
  { q: "다음 작품을 그린 작가를 고르시오.", img: "assets/page-11-image-01.png", c: ["살바도르 달리", "잭슨 폴록", "피카소", "뭉크"], a: 0, e: "살바도르 달리, 「기억의 고집」" },
  { q: "다음 작품을 그린 작가를 고르시오.", img: "assets/page-11-image-03.png", c: ["달리", "몬드리안", "잭슨 폴록", "리히텐슈타인"], a: 2, e: "잭슨 폴록, 「넘버 1A」" },
  { q: "다음 작품을 그린 작가를 고르시오.", img: "assets/page-12-image-02.png", c: ["앤디 워홀", "로이 리히텐슈타인", "마티스", "피카소"], a: 1, e: "로이 리히텐슈타인, 「우는 여자」" }
];

imageQuestions.push(...artistImageQuestions);

const normalize = (value) => value.toLowerCase().replace(/[\s,·.「」『』\-]/g, "");
const isCorrectText = (value, answers) => answers.some((answer) => normalize(value) === normalize(answer));
const allQuestions = [...multipleChoice, ...shortAnswer, ...imageQuestions];

function heading(title, note) {
  return `<div class="section-heading"><h2>${title}</h2><p>${note}</p></div>`;
}

function renderMultiple() {
  const cards = multipleChoice.map((item, index) => `
    <article class="question-card" data-kind="multiple" data-index="${index}">
      <p class="question-title"><span class="question-number">${index + 1}.</span>${item.q}</p>
      <div class="choices">
        ${item.c.map((choice, choiceIndex) => `
          <label class="choice">
            <input type="radio" name="multiple-${index}" value="${choiceIndex}">
            <span>${["①", "②", "③", "④"][choiceIndex]} ${choice}</span>
          </label>`).join("")}
      </div>
      <p class="feedback"></p>
    </article>`).join("");
  document.querySelector("#multiple").innerHTML = heading("객관식", "사조의 특징과 작가·작품 연결") + cards;
}

function renderShort() {
  const cards = shortAnswer.map((item, index) => `
    <article class="question-card" data-kind="short" data-index="${index}">
      <p class="question-title"><span class="question-number">${index + 1}.</span>${item.q}</p>
      <input class="short-input" type="text" autocomplete="off" aria-label="${index + 1}번 답">
      <p class="feedback"></p>
    </article>`).join("");
  document.querySelector("#short").innerHTML = heading("단답형", "꼭 기억해야 할 핵심 사조와 대표 화가") + cards;
}

function renderImages() {
  const cards = imageQuestions.map((item, index) => `
    <article class="question-card image-card" data-kind="image" data-index="${index}">
      <img class="art-image" src="${item.img}" alt="작품 문제 ${index + 1}">
      <div>
        <p class="question-title"><span class="question-number">${index + 1}.</span>${item.q}</p>
        <div class="choices">
          ${item.c.map((choice, choiceIndex) => `
            <label class="choice">
              <input type="radio" name="image-${index}" value="${choiceIndex}">
              <span>${["①", "②", "③", "④"][choiceIndex]} ${choice}</span>
            </label>`).join("")}
        </div>
        <p class="feedback"></p>
      </div>
    </article>`).join("");
  document.querySelector("#image").innerHTML = heading("작품·작가 객관식", "그림을 보고 올바른 작품 제목 또는 작가 고르기") + cards;
}

function renderAnswers() {
  const multiple = multipleChoice.map((item) => `<li><strong>${["①", "②", "③", "④"][item.a]} ${item.c[item.a]}</strong><br><span class="answer-explanation">${item.e}</span></li>`).join("");
  const short = shortAnswer.map((item) => `<li><strong>${item.e}</strong></li>`).join("");
  const images = imageQuestions.map((item) => `<li><strong>${["①", "②", "③", "④"][item.a]} ${item.c[item.a]}</strong><br><span class="answer-explanation">${item.e}</span></li>`).join("");
  document.querySelector("#answers").innerHTML = heading("정답·해설", "채점 후 틀린 문제를 사조별로 다시 확인") + `
    <div class="answer-group"><h3>객관식</h3><ol class="answer-list">${multiple}</ol></div>
    <div class="answer-group"><h3>단답형</h3><ol class="answer-list">${short}</ol></div>
    <div class="answer-group"><h3>작품·작가 객관식</h3><ol class="answer-list">${images}</ol></div>`;
}

function answeredCount() {
  const radios = new Set([...document.querySelectorAll('input[type="radio"]:checked')].map((input) => input.name)).size;
  const texts = [...document.querySelectorAll(".short-input")].filter((input) => input.value.trim()).length;
  document.querySelector("#answeredCount").textContent = radios + texts;
}

function grade() {
  let score = 0;
  document.querySelectorAll(".question-card").forEach((card) => {
    const kind = card.dataset.kind;
    const index = Number(card.dataset.index);
    const feedback = card.querySelector(".feedback");
    let correct = false;
    let explanation = "";

    if (kind === "multiple" || kind === "image") {
      const item = kind === "multiple" ? multipleChoice[index] : imageQuestions[index];
      const selected = card.querySelector('input[type="radio"]:checked');
      correct = Boolean(selected) && Number(selected.value) === item.a;
      explanation = `정답 ${["①", "②", "③", "④"][item.a]}. ${item.e}`;
    } else {
      const item = shortAnswer[index];
      correct = isCorrectText(card.querySelector(".short-input").value, item.a);
      explanation = `정답: ${item.e}`;
    }

    card.classList.toggle("correct", correct);
    card.classList.toggle("wrong", !correct);
    feedback.textContent = `${correct ? "정답" : "오답"} · ${explanation}`;
    if (correct) score += 1;
  });

  document.body.classList.add("graded");
  document.querySelector("#scoreCount").textContent = `${score}/${allQuestions.length}`;
  const toast = document.querySelector("#resultToast");
  toast.textContent = `채점 결과 ${score} / ${allQuestions.length}점`;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3200);
}

renderMultiple();
renderShort();
renderImages();
renderAnswers();

document.querySelector("#totalCount").textContent = allQuestions.length;
document.querySelector("#multipleCount").textContent = multipleChoice.length;
document.querySelector("#shortCount").textContent = shortAnswer.length;
document.querySelector("#imageCount").textContent = imageQuestions.length;

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab, .question-section").forEach((element) => element.classList.remove("active"));
    tab.classList.add("active");
    document.querySelector(`#${tab.dataset.section}`).classList.add("active");
  });
});

document.addEventListener("input", answeredCount);
document.querySelector("#gradeButton").addEventListener("click", grade);
document.querySelector("#printButton").addEventListener("click", () => window.print());
