/*
radic — квадратный корень (√);
degree — квадрат/вторая степень (x²);
pct — процент (%);
div — деление (/);
mul — умножение (*);
sub — минус (—);
sum — плюс (+);
calc — равно (=);
*/

let lastOperand = 0;
let operation = null;

const inputWindow = document.querySelector('#inputWindow');

/* 
==============
Кнопка очистки
==============
*/

document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

/* 
====================
Кнопки нумерации 0-9
====================
*/

document.querySelector('#btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
})

document.querySelector('#btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})

document.querySelector('#btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
})

document.querySelector('#btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
})

document.querySelector('#btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
})

document.querySelector('#btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
})

document.querySelector('#btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
})

document.querySelector('#btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
})

document.querySelector('#btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
})

document.querySelector('#btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
})

/* 
====================
Операторы вычисления
====================
*/

document.querySelector('#btn_radic').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'radic';
    inputWindow.value = '';
})

document.querySelector('#btn_degree').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'degree';
    inputWindow.value = '';
})

document.querySelector('#btn_pct').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'pct';
    inputWindow.value = '';
})

document.querySelector('#btn_div').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'div';
    inputWindow.value = '';
})

document.querySelector('#btn_mul').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'mul';
    inputWindow.value = '';
})

document.querySelector('#btn_sub').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sub';
    inputWindow.value = '';
})

document.querySelector('#btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})


/* 
================================
Кнопка вывода итогового значения
================================
*/

document.querySelector('#btn_calc').addEventListener('click', function () {
    if (operation === 'sum') {
        const result = lastOperand + parseInt(inputWindow.value);
        lastOperand = 0;
        operation = null;
        inputWindow.value = result;
    }

    if (operation === 'sub') {
        const result = lastOperand - parseInt(inputWindow.value);
        lastOperand = 0;
        operation = null;
        inputWindow.value = result;
    }
    
    if (operation === 'mul') {
        const result = lastOperand * parseInt(inputWindow.value);
        lastOperand = 0;
        operation = null;
        inputWindow.value = result;
    }

    if (operation === 'div') {
        const result = lastOperand / parseInt(inputWindow.value);
        lastOperand = 0;
        operation = null;
        inputWindow.value = result;
    }
    
    if (operation === 'pct') {
        const x = parseInt(inputWindow.value);
        const result = lastOperand * (x / 100);
        inputWindow.value = result;
    }

    if (operation === 'degree') {
        const x = parseInt(inputWindow.value);
        const y = 2;
        const result = Math.pow(x, y);
        inputWindow.value = result;
    }
    
    if (operation === 'radic') {
        const x = parseFloat(inputWindow.value);
        const result = Math.sqrt(x);
        inputWindow.value = result;
    }
})