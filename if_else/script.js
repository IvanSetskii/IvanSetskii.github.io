let minValue = parseInt(prompt('Минимальное знание числа для игры','1'));
if (isNaN(minValue)) {
    minValue = 1;
}
if (minValue < -999) {
    minValue = -999
}
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
if (isNaN(maxValue)) {
    maxValue = 100;
}
if (maxValue > 999) {
    maxValue = 999;
}
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;



const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

let maxNumber = maxValue;
let minNumber = minValue;

document.getElementById('btnRetry').addEventListener('click', function () {
    window.location.reload();
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue >= maxValue || answerNumber == minValue || answerNumber > maxValue){
            phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!` :
                `Я сдаюсь..`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            phraseRandom = Math.round( Math.random()*3);
            if (phraseRandom === 1) {answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }     else if (phraseRandom === 2) {answerField.innerText = `А может быть это ${answerNumber }?`;
            }   else {answerField.innerText = `Дайте подумать, это ${answerNumber }?`;
            }
        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue >= maxValue || answerNumber < minValue || answerNumber > maxValue){
            phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            phraseRandom = Math.round( Math.random()*3);
            if (phraseRandom === 1) {answerField.innerText = `Вы загадали число ${answerNumber }?`;
            }     else if (phraseRandom === 2) {answerField.innerText = `А может быть это ${answerNumber }?`;
            }   else {answerField.innerText = `Дайте подумать, это ${answerNumber }?`;
            }
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        phraseRandom = Math.round( Math.random()*3);
        if (phraseRandom === 1) {answerField.innerText = `Я не сомневался`;
        }     else if (phraseRandom === 2) {answerField.innerText = `Я невероятно догадливый`;
        }   else {answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
        }
        gameRun = false;
    }
})