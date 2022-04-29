let gameRun = true;
let orderNumber = 1;
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
orderNumberField.innerText = orderNumber;
let maxValue;
let minValue;

document.getElementById('btnPlay').addEventListener('click', function () {
    minValue = document.getElementById("minVal").value || 1;
    (minValue < -999)? minValue = -999 : console.log('Минимальное значение Ok');
    maxValue = document.getElementById("maxVal").value || 100;
    (maxValue > 999)? maxValue = 999 : console.log('Максимальное значение Ok');
    if (minValue < maxValue) {
        answerNumber = Math.floor(((minValue *1) + (maxValue*1)) / 2);
        answerField.innerText = `Вы загадали число ${answerNumber }?`;
    }
    if (minValue > maxValue) {
        alert('Загаданы некорретные значения');
        answerField.innerText = `Загадайте корректные числа`;
        let gameRun = false;
    }
})

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
            answerNumber = Math.floor(((minValue *1) + (maxValue*1)) / 2);
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
            answerNumber = Math.floor(((minValue *1) + (maxValue*1)) / 2);
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
    }
})