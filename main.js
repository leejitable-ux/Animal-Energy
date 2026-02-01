const i18n = {
    en: {
        documentTitle: 'Find Your Ilju (Daily Pillar) Animal',
        title: 'Find Your Ilju (Daily Pillar) Animal',
        description: 'Enter your birth date to see your Ilju animal and its elemental energy.',
        langLabel: 'Language',
        languageNames: {
            en: 'English',
            ja: 'Japanese',
            ko: 'Korean'
        },
        labelYear: 'Year',
        labelMonth: 'Month',
        labelDay: 'Day',
        labelTime: 'Time (optional)',
        placeholderYear: 'e.g., 1990',
        placeholderMonth: 'e.g., 7',
        placeholderDay: 'e.g., 14',
        placeholderTime: 'HH:MM',
        checkButton: 'Check',
        detailButton: 'Learn more',
        resultTitle: 'Your Ilju animal',
        resultAnimalLabel: 'Animal',
        resultElementLabel: 'Element',
        resultKeywordsLabel: 'Keywords',
        resetButton: 'Try another date',
        invalidDate: 'Please enter a valid date.',
        invalidYear: 'Year must be between 1900 and {maxYear}.',
        invalidMonth: 'Month must be between 1 and 12.',
        invalidDay: 'Please enter a valid day for the selected month and year.',
        animalSentence: 'Your Ilju animal is {animal}.',
        elementSentence: '{color} {animal}, with {element} energy.',
        elementKeywords: {
            Wood: 'growth · kindness · steady',
            Fire: 'passion · confidence · spark',
            Earth: 'balance · reliability · care',
            Metal: 'clarity · focus · discipline',
            Water: 'intuition · depth · flow'
        },
        elements: ['Metal', 'Metal', 'Earth', 'Water', 'Water', 'Earth', 'Wood', 'Wood', 'Earth', 'Fire', 'Fire', 'Earth'],
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
        documentTitle: '十二支を確認',
        title: 'あなたの十二支を確認しましょう',
        description: '生年月日を入力すると、あなたの十二支と気の属性がわかります。',
        langLabel: '言語',
        languageNames: {
            en: '英語',
            ja: '日本語',
            ko: '韓国語'
        },
        labelYear: '年',
        labelMonth: '月',
        labelDay: '日',
        labelTime: '出生時間（任意）',
        placeholderYear: '例: 1990',
        placeholderMonth: '例: 7',
        placeholderDay: '例: 14',
        placeholderTime: '時:分',
        checkButton: '確認する',
        detailButton: 'もっと詳しく',
        resultTitle: 'あなたの十二支',
        resultAnimalLabel: '動物',
        resultElementLabel: '気',
        resultKeywordsLabel: 'キーワード',
        resetButton: '別の日付を試す',
        invalidDate: '正しい日付を入力してください。',
        invalidYear: '年は1900〜{maxYear}の範囲で入力してください。',
        invalidMonth: '月は1〜12の範囲で入力してください。',
        invalidDay: '選択した年月に合う日付を入力してください。',
        animalSentence: 'あなたの十二支は{animal}です。',
        elementSentence: '{color}の{animal}、{element}の気を持つ動物です。',
        elementKeywords: {
            木: '成長・柔軟・温かさ',
            火: '情熱・表現・勢い',
            土: '安定・安心・包容',
            金: '明晰・規律・芯の強さ',
            水: '直感・深み・適応'
        },
        elements: ['金', '金', '土', '水', '水', '土', '木', '木', '土', '火', '火', '土'],
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
        documentTitle: '일주 동물 확인',
        title: '당신의 일주 동물을 확인해보세요!',
        description: '생년월일을 입력하면 일주 동물과 오행의 기운을 알려드립니다.',
        langLabel: '언어',
        languageNames: {
            en: '영어',
            ja: '일본어',
            ko: '한국어'
        },
        labelYear: '생년',
        labelMonth: '월',
        labelDay: '일',
        labelTime: '태어난 시간(선택)',
        placeholderYear: '예: 1990',
        placeholderMonth: '예: 7',
        placeholderDay: '예: 14',
        placeholderTime: '예: 08:30',
        checkButton: '확인하기',
        detailButton: '더 알아보기',
        resultTitle: '당신의 일주 동물',
        resultAnimalLabel: '동물',
        resultElementLabel: '기운',
        resultKeywordsLabel: '키워드',
        resetButton: '다른 날짜로 다시하기',
        invalidDate: '올바른 날짜를 입력해주세요.',
        invalidYear: '연도는 1900년부터 {maxYear}년까지 입력해주세요.',
        invalidMonth: '월은 1~12 사이로 입력해주세요.',
        invalidDay: '선택한 연/월에 맞는 일자를 입력해주세요.',
        animalSentence: '십이지신 중 {animal}입니다.',
        elementSentence: '{color} {animal}, {element}의 기운을 지닌 동물이에요.',
        elementKeywords: {
            목: '성장 · 유연 · 따뜻',
            화: '열정 · 표현 · 에너지',
            토: '안정 · 균형 · 배려',
            금: '명확 · 절제 · 집중',
            수: '직관 · 깊이 · 흐름'
        },
        elements: ['금', '금', '토', '수', '수', '토', '목', '목', '토', '화', '화', '토'],
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
const yearInput = document.getElementById('year');
const monthInput = document.getElementById('month');
const dayInput = document.getElementById('day');
const timeInput = document.getElementById('birthTime');
const errorMessage = document.getElementById('errorMessage');
const checkButton = document.getElementById('checkButton');
const resetButton = document.getElementById('resetButton');
let currentLang = 'en';
let lastYear = null;

const urlLang = new URLSearchParams(window.location.search).get('lang');
const savedLang = sessionStorage.getItem('lang');
if (savedLang && i18n[savedLang]) {
    currentLang = savedLang;
}
if (urlLang && i18n[urlLang]) {
    currentLang = urlLang;
}
languageSelect.value = currentLang;

languageSelect.addEventListener('change', (event) => {
    currentLang = event.target.value;
    sessionStorage.setItem('lang', currentLang);
    applyLanguage(currentLang);
});

checkButton.addEventListener('click', () => {
    const validation = validateInputs();
    if (!validation.isValid) {
        renderValidation(validation);
        return;
    }

    lastYear = validation.year;
    const zodiac = getZodiac(validation.year, currentLang);
    updateResultContent(zodiac, currentLang);
    updateDetailLink(validation.year, currentLang);
    document.getElementById('result').classList.remove('hidden');
});

resetButton.addEventListener('click', () => {
    yearInput.value = '';
    monthInput.value = '';
    dayInput.value = '';
    lastYear = null;
    document.getElementById('result').classList.add('hidden');
    clearValidation();
    updateCheckButtonState();
});

function getCurrentYear() {
    return new Date().getFullYear();
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

function validateInputs() {
    const year = parseInt(yearInput.value, 10);
    const month = parseInt(monthInput.value, 10);
    const day = parseInt(dayInput.value, 10);
    const maxYear = getCurrentYear();

    if (Number.isNaN(year) || Number.isNaN(month) || Number.isNaN(day)) {
        return { isValid: false, errorKey: 'invalidDate' };
    }

    if (year < 1900 || year > maxYear) {
        return { isValid: false, errorKey: 'invalidYear', meta: { maxYear } };
    }

    if (month < 1 || month > 12) {
        return { isValid: false, errorKey: 'invalidMonth' };
    }

    const maxDay = getDaysInMonth(year, month);
    if (day < 1 || day > maxDay) {
        return { isValid: false, errorKey: 'invalidDay' };
    }

    return { isValid: true, year, month, day };
}

function renderValidation(validation) {
    const copy = i18n[currentLang];
    const messageTemplate = copy[validation.errorKey] || copy.invalidDate;
    const message = messageTemplate.replace('{maxYear}', validation.meta?.maxYear ?? getCurrentYear());
    errorMessage.innerText = message;

    yearInput.classList.toggle('input-error', validation.errorKey === 'invalidYear' || validation.errorKey === 'invalidDate');
    monthInput.classList.toggle('input-error', validation.errorKey === 'invalidMonth' || validation.errorKey === 'invalidDate');
    dayInput.classList.toggle('input-error', validation.errorKey === 'invalidDay' || validation.errorKey === 'invalidDate');
}

function clearValidation() {
    errorMessage.innerText = '';
    yearInput.classList.remove('input-error');
    monthInput.classList.remove('input-error');
    dayInput.classList.remove('input-error');
}

function updateCheckButtonState() {
    const validation = validateInputs();
    checkButton.disabled = !validation.isValid;
    if (validation.isValid) {
        clearValidation();
    }
}

['input', 'blur'].forEach((eventName) => {
    yearInput.addEventListener(eventName, updateCheckButtonState);
    monthInput.addEventListener(eventName, updateCheckButtonState);
    dayInput.addEventListener(eventName, updateCheckButtonState);
});

function applyLanguage(lang) {
    const copy = i18n[lang];
    document.documentElement.lang = lang;
    document.title = copy.documentTitle;
    document.getElementById('title').innerText = copy.title;
    document.getElementById('description').innerText = copy.description;
    document.getElementById('langLabel').innerText = copy.langLabel;
    languageSelect.setAttribute('aria-label', copy.langLabel);
    languageSelect.options[0].text = copy.languageNames.en;
    languageSelect.options[1].text = copy.languageNames.ja;
    languageSelect.options[2].text = copy.languageNames.ko;
    document.getElementById('labelYear').innerText = copy.labelYear;
    document.getElementById('labelMonth').innerText = copy.labelMonth;
    document.getElementById('labelDay').innerText = copy.labelDay;
    document.getElementById('labelTime').innerText = copy.labelTime;
    document.getElementById('year').setAttribute('placeholder', copy.placeholderYear);
    document.getElementById('month').setAttribute('placeholder', copy.placeholderMonth);
    document.getElementById('day').setAttribute('placeholder', copy.placeholderDay);
    document.getElementById('birthTime').setAttribute('placeholder', copy.placeholderTime);
    document.getElementById('checkButton').innerText = copy.checkButton;
    document.getElementById('detailButton').innerText = copy.detailButton;
    document.getElementById('resultTitle').innerText = copy.resultTitle;
    document.getElementById('resultAnimalLabel').innerText = copy.resultAnimalLabel;
    document.getElementById('resultElementLabel').innerText = copy.resultElementLabel;
    document.getElementById('resultKeywordsLabel').innerText = copy.resultKeywordsLabel;
    document.getElementById('resetButton').innerText = copy.resetButton;
    langSwitcher.setAttribute('data-lang', lang);

    if (lastYear !== null && !document.getElementById('result').classList.contains('hidden')) {
        const zodiac = getZodiac(lastYear, lang);
        updateResultContent(zodiac, lang);
        updateDetailLink(lastYear, lang);
    }

    updateCheckButtonState();
}

function getZodiac(year, lang) {
    const data = i18n[lang];
    const index = year % 12;
    const animal = data.animals[index];
    const element = data.elements[index];
    const color = data.colors[element];
    return { animal, element, color };
}

function updateResultContent(zodiac, lang) {
    const copy = i18n[lang];
    document.getElementById('animal').innerText = zodiac.animal;
    document.getElementById('element').innerText = zodiac.element;
    document.getElementById('keywords').innerText = copy.elementKeywords[zodiac.element] || '';
}

function updateDetailLink(year, lang) {
    const detailButton = document.getElementById('detailButton');
    const cycleIndex = ((year % 60) + 60) % 60;
    const pageId = String(cycleIndex + 1).padStart(2, '0');
    detailButton.href = `details/${pageId}.html?lang=${lang}`;
}

applyLanguage(currentLang);
