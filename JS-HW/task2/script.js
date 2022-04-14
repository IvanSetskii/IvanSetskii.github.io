const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const alerte = document.querySelector('#alerte');

alerte.addEventListener('click', () => {
    alert('Служит для вывода информации на экран в виде предупреждения');
})

const prompt = document.querySelector('#prompt');

prompt.addEventListener('click', () => {
    alert('Служит для ввода информации через всплывающее окно для ввода');
})