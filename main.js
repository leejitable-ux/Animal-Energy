document.getElementById('checkButton').addEventListener('click', () => {
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);

    if (isNaN(year) || isNaN(month) || isNaN(day)) {
        alert('올바른 날짜를 입력해주세요.');
        return;
    }

    const animal = getZodiac(year);
    document.getElementById('animal').innerText = `십이지신 중 ${animal}입니다.`;
    document.getElementById('result').classList.remove('hidden');
});

function getZodiac(year) {
    const zodiacs = ['원숭이', '닭', '개', '돼지', '쥐', '소', '호랑이', '토끼', '용', '뱀', '말', '양'];
    return zodiacs[year % 12];
}
