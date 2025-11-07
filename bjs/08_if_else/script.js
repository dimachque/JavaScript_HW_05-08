let minValue = -999;
let maxValue = 999;
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

orderNumberField.innerText = orderNumber;
answerField.innerHTML = `Вы загадали число <strong class="text-danger">${answerNumber }</strong>?`;

const updMinValue = document.querySelector("#minValue");
const updMaxValue = document.querySelector("#maxValue");


function updateRange() {
    minValue = parseInt(updMinValue.value);
    maxValue = parseInt(updMaxValue.value);
    
    if (minValue == maxValue) {
        alert("Указан неправильный диапазон, минимальное значение равно максимальному");
        return;
    } 
    
    if (minValue > maxValue) {
        alert("Минимальное значение не должно быть больше максимального");
        return;
    }
    
    answerNumber = Math.floor((minValue + maxValue) / 2);
    answerField.innerHTML = `Вы загадали число <strong class="text-danger">${answerNumber }</strong>?`;
}

updMinValue.onchange = updateRange;
updMaxValue.onchange = updateRange;


document.querySelector('#btnRetry').addEventListener('click', function () {
    minValue = parseInt(updMinValue.value);
    maxValue = parseInt(updMaxValue.value);
    updMinValue.value = "-999";
    updMaxValue.value = "999";
    minValue = -999;
    maxValue = 999;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerHTML = `Вы загадали число <strong class="text-danger">${answerNumber }</strong>?`;
})


document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ? `Вы загадали неправильное число!\n\u{1F914}` : `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            if (minValue > maxValue) {
                const phraseRandom = Math.round(Math.random());
                const answerPhrase = (phraseRandom === 1) ? `Вы загадали неправильное число!\n\u{1F914}` : `Я сдаюсь..\n\u{1F92F}`;
                answerField.innerText = answerPhrase;
                gameRun = false;
            } else {
                answerNumber = Math.floor((minValue + maxValue) / 2);
                const numString = answerNumString(answerNumber);
                const numText = numString.length <= 19 ? numString : answerNumber;
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                answerField.innerHTML = answer_over_less(numText);
            }
        }
    }
});


document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ? `Вы загадали неправильное число!\n\u{1F914}` : `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            if (maxValue < minValue) {
                const phraseRandom = Math.round(Math.random());
                const answerPhrase = (phraseRandom === 1) ? `Вы загадали неправильное число!\n\u{1F914}` : `Я сдаюсь..\n\u{1F92F}`;
                answerField.innerText = answerPhrase;
                gameRun = false;
            } else {
                answerNumber = Math.floor((minValue + maxValue) / 2);
                const numString = answerNumString(answerNumber);
                const numText = numString.length <= 19 ? numString : answerNumber;
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                answerField.innerHTML = answer_over_less(numText);
            }
        }
    }
});

const inputElementMin = document.querySelector('#minValue');
const inputElementMax = document.querySelector('#maxValue');


inputElementMin.oninput = () => {
    let value = parseInt(inputElementMin.value);
    
    if (isNaN(value)) {
        inputElementMin.value = '';
        return;
    }
    inputElementMin.value = (value > 999) ? 999 : (value < -999) ? -999 : value;
};


inputElementMax.oninput = () => {
    let value = parseInt(inputElementMax.value);
    
    if (isNaN(value)) {
        inputElementMax.value = '';
        return;
    }
    inputElementMax.value = (value < -999) ? 999 : (value > 999) ? 999 : value;
};


document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
    const winPhrase = Math.round(Math.random() * 4);
    switch (winPhrase) {
        case 1:
            answerField.innerText = `Я красавчик\n\u{1F60F}`;
            break;
        case 2:
            answerField.innerText = `И.. ИТАЛИЯ\n\n (╯°□°）╯︵ ┻━┻`;
            break;
        case 3:
            answerField.innerText = `Не расстраивайся, это всего лишь игра\n\u{1F427}`;
            break;
        case 4:
            answerField.innerText = `Это было сложно, но я справился\n\u{1F6AC}\u{1F5FF}`;
            break;
    }
    gameRun = false;
})


function answerNumString(number) {
    const numbers = {
    0: 'ноль', 1: 'один', 2: 'два', 3: 'три', 4: 'четыре', 5: 'пять',
    6: 'шесть', 7: 'семь', 8: 'восемь', 9: 'девять', 10: 'десять',
    11: 'одиннадцать', 12: 'двенадцать', 13: 'тринадцать', 14: 'четырнадцать',
    15: 'пятнадцать', 16: 'шестнадцать', 17: 'семнадцать', 18: 'восемнадцать',
    19: 'девятнадцать', 20: 'двадцать', 30: 'тридцать', 40: 'сорок',
    50: 'пятьдесят', 60: 'шестьдесят', 70: 'семьдесят', 80: 'восемьдесят',
    90: 'девяносто', 100: 'сто', 200: 'двести', 300: 'триста', 400: 'четыреста',
    500: 'пятьсот', 600: 'шестьсот', 700: 'семьсот', 800: 'восемьсот',
    900: 'девятьсот'
    };

    if (numbers[number]) {
        return number < 0 ? 'минус ' + numbers[-number] : numbers[number];
    }

    let result = [];
    let absNumber = Math.abs(number);

    if (absNumber >= 100) {
        result.push(numbers[Math.floor(absNumber / 100) * 100]);
        absNumber %= 100;
    }

    if (absNumber >= 20) {
        result.push(numbers[Math.floor(absNumber / 10) * 10]);
        absNumber %= 10;
    }

    if (absNumber > 0) {
        result.push(numbers[absNumber]);
    }

    return number < 0 ? 'минус ' + result.join(' ') : result.join(' ');
}


function answer_over_less(answerNumberText) {
const phrases = [
    `Число <br><strong class="text-danger">${answerNumberText}</strong><br>стало вашим тайным выбором ?`,
    `Наверое, это число - <br><strong class="text-danger">${answerNumberText}</strong>?`,
    `Вы, похоже, задумали цифру <br><strong class="text-danger">${answerNumberText}</strong>?`,
    `Ваше число - <br><strong class="text-danger">${answerNumberText}</strong>?`,
];

return phrases[Math.floor(Math.random() * phrases.length)];
}