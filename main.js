const i18n = {
    en: {
        documentTitle: 'Find Your Ilju (Daily Pillar) Animal',
        title: 'Find Your Ilju (Daily Pillar) Animal',
        description: 'Enter your birth date to see your Ilju animal and its elemental energy.',
        labelYear: 'Year',
        labelMonth: 'Month',
        labelDay: 'Day',
        placeholderYear: 'e.g., 1990',
        placeholderMonth: 'e.g., 7',
        placeholderDay: 'e.g., 14',
        checkButton: 'Check',
        resultTitle: 'Your Ilju animal is...',
        invalidDate: 'Please enter a valid date.',
        animalSentence: 'Your Ilju animal is {animal}.',
        elementSentence: '{color} {animal}, with {element} energy.',
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
        labelYear: '年',
        labelMonth: '月',
        labelDay: '日',
        placeholderYear: '例: 1990',
        placeholderMonth: '例: 7',
        placeholderDay: '例: 14',
        checkButton: '確認する',
        resultTitle: 'あなたの十二支は...',
        invalidDate: '正しい日付を入力してください。',
        animalSentence: 'あなたの十二支は{animal}です。',
        elementSentence: '{color}の{animal}、{element}の気を持つ動物です。',
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
        labelYear: '생년',
        labelMonth: '월',
        labelDay: '일',
        placeholderYear: '예: 1990',
        placeholderMonth: '예: 7',
        placeholderDay: '예: 14',
        checkButton: '확인하기',
        resultTitle: '당신의 일주 동물은...',
        invalidDate: '올바른 날짜를 입력해주세요.',
        animalSentence: '십이지신 중 {animal}입니다.',
        elementSentence: '{color} {animal}, {element}의 기운을 지닌 동물이에요.',
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
let currentLang = 'en';
let lastYear = null;

languageSelect.addEventListener('change', (event) => {
    currentLang = event.target.value;
    applyLanguage(currentLang);
});

document.getElementById('checkButton').addEventListener('click', () => {
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);

    if (isNaN(year) || isNaN(month) || isNaN(day)) {
        alert(i18n[currentLang].invalidDate);
        return;
    }

    lastYear = year;
    const zodiac = getZodiac(year, currentLang);
    document.getElementById('animal').innerText = i18n[currentLang].animalSentence.replace('{animal}', zodiac.animal);
    document.getElementById('element').innerText = i18n[currentLang].elementSentence
        .replace('{color}', zodiac.color)
        .replace('{animal}', zodiac.animal)
        .replace('{element}', zodiac.element);
    document.getElementById('result').classList.remove('hidden');
});

function applyLanguage(lang) {
    const copy = i18n[lang];
    document.documentElement.lang = lang;
    document.title = copy.documentTitle;
    document.getElementById('title').innerText = copy.title;
    document.getElementById('description').innerText = copy.description;
    document.getElementById('labelYear').innerText = copy.labelYear;
    document.getElementById('labelMonth').innerText = copy.labelMonth;
    document.getElementById('labelDay').innerText = copy.labelDay;
    document.getElementById('year').setAttribute('placeholder', copy.placeholderYear);
    document.getElementById('month').setAttribute('placeholder', copy.placeholderMonth);
    document.getElementById('day').setAttribute('placeholder', copy.placeholderDay);
    document.getElementById('checkButton').innerText = copy.checkButton;
    document.getElementById('resultTitle').innerText = copy.resultTitle;
    document.getElementById('langLabel').innerText = lang === 'ko' ? '언어' : lang === 'ja' ? '言語' : 'Language';

    if (lastYear !== null && !document.getElementById('result').classList.contains('hidden')) {
        const zodiac = getZodiac(lastYear, lang);
        document.getElementById('animal').innerText = copy.animalSentence.replace('{animal}', zodiac.animal);
        document.getElementById('element').innerText = copy.elementSentence
            .replace('{color}', zodiac.color)
            .replace('{animal}', zodiac.animal)
            .replace('{element}', zodiac.element);
    }
}

function getZodiac(year, lang) {
    const data = i18n[lang];
    const index = year % 12;
    const animal = data.animals[index];
    const element = data.elements[index];
    const color = data.colors[element];
    return { animal, element, color };
}

applyLanguage(currentLang);
