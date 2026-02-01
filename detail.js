const detailI18n = {
    en: {
        documentTitle: 'Ilju Detail',
        title: 'Ilju Detail',
        subtitle: '{color} {animal} · {element} energy',
        langLabel: 'Language',
        languageNames: {
            en: 'English',
            ja: 'Japanese',
            ko: 'Korean'
        },
        energyTitle: 'Energy',
        animalTitle: 'Animal Traits',
        blendTitle: 'Element × Animal',
        aboutIljuTitle: 'What is Ilju (Daily Pillar)?',
        aboutIljuText: 'Ilju is the day pillar in the four pillars system, based on the date of birth.',
        aboutSymbolsTitle: 'What do the animal and element mean?',
        aboutSymbolsText: 'The animal and element are traditional symbols used to describe qualities in a simple, symbolic way.',
        disclaimerTitle: 'Disclaimer',
        disclaimerText: 'This page does not store your input or personal data.',
        back: '← Back',
        invalid: 'Invalid page. Please return to the main page.',
        elementTraits: {
            Wood: 'growth, warmth, flexibility, and steady progress.',
            Fire: 'passion, expression, courage, and quick sparks of action.',
            Earth: 'stability, care, balance, and dependable strength.',
            Metal: 'clarity, structure, discipline, and refined focus.',
            Water: 'intuition, depth, adaptability, and calm flow.'
        },
        animalTraits: {
            Rat: 'quick-witted, resourceful, and curious.',
            Ox: 'patient, reliable, and grounded.',
            Tiger: 'bold, independent, and energetic.',
            Rabbit: 'gentle, thoughtful, and harmonious.',
            Dragon: 'confident, charismatic, and ambitious.',
            Snake: 'intuitive, strategic, and graceful.',
            Horse: 'free-spirited, driven, and lively.',
            Goat: 'warm, artistic, and empathetic.',
            Monkey: 'clever, playful, and adaptable.',
            Rooster: 'direct, organized, and proud.',
            Dog: 'loyal, fair, and protective.',
            Pig: 'kind, relaxed, and generous.'
        },
        blendTemplate: 'As a {element} {animal}, you combine {elementTrait} with the {animalTrait} nature of the {animal}.',
        stems: [
            { name: 'Jia', element: 'Wood' },
            { name: 'Yi', element: 'Wood' },
            { name: 'Bing', element: 'Fire' },
            { name: 'Ding', element: 'Fire' },
            { name: 'Wu', element: 'Earth' },
            { name: 'Ji', element: 'Earth' },
            { name: 'Geng', element: 'Metal' },
            { name: 'Xin', element: 'Metal' },
            { name: 'Ren', element: 'Water' },
            { name: 'Gui', element: 'Water' }
        ],
        colors: {
            Wood: 'Blue-Green',
            Fire: 'Red',
            Earth: 'Yellow',
            Metal: 'White',
            Water: 'Black'
        },
        animals: ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat']
    },
    ja: {
        documentTitle: '十二支の詳細',
        title: '十二支の詳細',
        subtitle: '{color}の{animal}・{element}の気',
        langLabel: '言語',
        languageNames: {
            en: '英語',
            ja: '日本語',
            ko: '韓国語'
        },
        energyTitle: '気の特徴',
        animalTitle: '動物の特徴',
        blendTitle: '気 × 動物',
        aboutIljuTitle: '日柱（イルジュ）とは？',
        aboutIljuText: '日柱は四柱推命で、生年月日の日に基づく柱です。',
        aboutSymbolsTitle: '動物と気の意味',
        aboutSymbolsText: '動物と気は、性質を簡潔に表すための伝統的な象徴です。',
        disclaimerTitle: '注意',
        disclaimerText: 'このページでは入力内容や個人データを保存しません。',
        back: '← 戻る',
        invalid: 'ページが見つかりません。トップに戻ってください。',
        elementTraits: {
            木: '成長、あたたかさ、柔軟さ、着実な前進。',
            火: '情熱、表現力、勇気、素早い行動力。',
            土: '安定、思いやり、バランス、頼れる強さ。',
            金: '明晰さ、秩序、鍛錬、洗練された集中力。',
            水: '直感、深さ、適応力、穏やかな流れ。'
        },
        animalTraits: {
            鼠: '機転が利き、好奇心が強い。',
            牛: '忍耐強く、信頼できる。',
            虎: '大胆で自立的、エネルギッシュ。',
            兎: '穏やかで、思慮深い。',
            龍: '自信があり、魅力的で野心的。',
            蛇: '直感的で、戦略的、優雅。',
            馬: '自由奔放で、行動的。',
            羊: 'あたたかく、芸術的で共感的。',
            猿: '賢く、遊び心がある。',
            鶏: 'はっきりしていて、几帳面。',
            犬: '忠実で、公正。',
            猪: '優しく、寛大。'
        },
        blendTemplate: '{element}の気の{animal}は、{elementTrait}と{animal}の{animalTrait}な性質をあわせ持ちます。',
        stems: [
            { name: '甲', element: '木' },
            { name: '乙', element: '木' },
            { name: '丙', element: '火' },
            { name: '丁', element: '火' },
            { name: '戊', element: '土' },
            { name: '己', element: '土' },
            { name: '庚', element: '金' },
            { name: '辛', element: '金' },
            { name: '壬', element: '水' },
            { name: '癸', element: '水' }
        ],
        colors: {
            木: '青',
            火: '赤',
            土: '黄',
            金: '白',
            水: '黒'
        },
        animals: ['猿', '鶏', '犬', '猪', '鼠', '牛', '虎', '兎', '龍', '蛇', '馬', '羊']
    },
    ko: {
        documentTitle: '일주 동물 자세히 보기',
        title: '일주 동물 자세히 보기',
        subtitle: '{color} {animal} · {element}의 기운',
        langLabel: '언어',
        languageNames: {
            en: '영어',
            ja: '일본어',
            ko: '한국어'
        },
        energyTitle: '기운 특징',
        animalTitle: '동물 성향',
        blendTitle: '기운 × 동물',
        aboutIljuTitle: '일주(일간)란?',
        aboutIljuText: '일주는 사주에서 생년월일 중 “일”을 기준으로 한 기둥입니다.',
        aboutSymbolsTitle: '동물과 기운의 의미',
        aboutSymbolsText: '동물과 오행은 전통적으로 성향을 간단히 표현하는 상징입니다.',
        disclaimerTitle: '안내',
        disclaimerText: '이 페이지는 입력값이나 개인정보를 저장하지 않습니다.',
        back: '← 돌아가기',
        invalid: '잘못된 페이지입니다. 메인으로 돌아가주세요.',
        elementTraits: {
            목: '성장, 따뜻함, 유연함, 꾸준한 전진.',
            화: '열정, 표현력, 용기, 빠른 행동력.',
            토: '안정, 배려, 균형, 든든한 힘.',
            금: '명확함, 질서, 절제, 정교한 집중.',
            수: '직관, 깊이, 적응력, 차분한 흐름.'
        },
        animalTraits: {
            쥐: '눈치가 빠르고, 재치가 있으며 호기심이 많아요.',
            소: '인내심이 강하고, 성실하며 든든해요.',
            호랑이: '대담하고 독립적이며 에너지가 넘쳐요.',
            토끼: '온화하고 배려심이 깊어요.',
            용: '자신감 있고 카리스마가 넘쳐요.',
            뱀: '직관이 뛰어나고 전략적이에요.',
            말: '자유분방하고 추진력이 좋아요.',
            양: '따뜻하고 예술적인 감각이 있어요.',
            원숭이: '영리하고 재치가 넘쳐요.',
            닭: '분명하고 정리정돈을 잘해요.',
            개: '충성심이 강하고 공정해요.',
            돼지: '다정하고 너그러워요.'
        },
        blendTemplate: '{element}의 기운을 지닌 {animal}은(는) {elementTrait} 그리고 {animal}의 {animalTrait} 기질을 함께 지녀요.',
        stems: [
            { name: '갑', element: '목' },
            { name: '을', element: '목' },
            { name: '병', element: '화' },
            { name: '정', element: '화' },
            { name: '무', element: '토' },
            { name: '기', element: '토' },
            { name: '경', element: '금' },
            { name: '신', element: '금' },
            { name: '임', element: '수' },
            { name: '계', element: '수' }
        ],
        colors: {
            목: '푸른',
            화: '붉은',
            토: '노란',
            금: '하얀',
            수: '검은'
        },
        animals: ['원숭이', '닭', '개', '돼지', '쥐', '소', '호랑이', '토끼', '용', '뱀', '말', '양']
    }
};

const languageSelect = document.getElementById('languageSelect');
const langSwitcher = document.querySelector('.lang-switcher');
let currentLang = 'en';

const params = new URLSearchParams(window.location.search);
const idParam = params.get('id');
const langParam = params.get('lang');

const savedLang = sessionStorage.getItem('lang');
if (savedLang && detailI18n[savedLang]) {
    currentLang = savedLang;
}
if (langParam && detailI18n[langParam]) {
    currentLang = langParam;
}
languageSelect.value = currentLang;

languageSelect.addEventListener('change', (event) => {
    currentLang = event.target.value;
    sessionStorage.setItem('lang', currentLang);
    applyDetail(currentLang);
});

function getCycleIndexFromId(idString) {
    const id = parseInt(idString, 10);
    if (Number.isNaN(id) || id < 1 || id > 60) return null;
    return id - 1;
}

function applyDetail(lang) {
    const copy = detailI18n[lang];
    document.documentElement.lang = lang;
    document.title = copy.documentTitle;
    document.getElementById('title').innerText = copy.title;
    document.getElementById('langLabel').innerText = copy.langLabel;
    languageSelect.setAttribute('aria-label', copy.langLabel);
    languageSelect.options[0].text = copy.languageNames.en;
    languageSelect.options[1].text = copy.languageNames.ja;
    languageSelect.options[2].text = copy.languageNames.ko;
    document.getElementById('energyTitle').innerText = copy.energyTitle;
    document.getElementById('animalTitle').innerText = copy.animalTitle;
    document.getElementById('blendTitle').innerText = copy.blendTitle;
    document.getElementById('aboutIljuTitle').innerText = copy.aboutIljuTitle;
    document.getElementById('aboutIljuText').innerText = copy.aboutIljuText;
    document.getElementById('aboutSymbolsTitle').innerText = copy.aboutSymbolsTitle;
    document.getElementById('aboutSymbolsText').innerText = copy.aboutSymbolsText;
    document.getElementById('disclaimerTitle').innerText = copy.disclaimerTitle;
    document.getElementById('disclaimerText').innerText = copy.disclaimerText;
    document.getElementById('backLink').innerText = copy.back;
    document.getElementById('backLink').href = `index.html?lang=${lang}`;
    langSwitcher.setAttribute('data-lang', lang);

    const cycleIndex = getCycleIndexFromId(idParam);
    if (cycleIndex === null) {
        document.getElementById('subtitle').innerText = copy.invalid;
        document.getElementById('energyText').innerText = '';
        document.getElementById('animalText').innerText = '';
        document.getElementById('blendText').innerText = '';
        return;
    }

    const stem = copy.stems[cycleIndex % 10];
    const animal = copy.animals[cycleIndex % 12];
    const element = stem.element;
    const color = copy.colors[element];

    document.getElementById('subtitle').innerText = copy.subtitle
        .replace('{color}', color)
        .replace('{animal}', animal)
        .replace('{element}', element);

    const elementTrait = copy.elementTraits[element];
    const animalTrait = copy.animalTraits[animal];
    document.getElementById('energyText').innerText = elementTrait;
    document.getElementById('animalText').innerText = animalTrait;
    document.getElementById('blendText').innerText = copy.blendTemplate
        .replace('{element}', element)
        .replace('{animal}', animal)
        .replace('{elementTrait}', elementTrait)
        .replace('{animalTrait}', animalTrait);
}

applyDetail(currentLang);
