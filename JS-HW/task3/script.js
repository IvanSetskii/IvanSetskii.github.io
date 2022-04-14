const trafficLightEl = document.querySelector('#trafficLight');
const trafficLightElTwo = document.querySelector('#trafficLightTwo');
const trafficLightElThree = document.querySelector('#trafficLightThree');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightElTwo.style.background = ('black');
    trafficLightElThree.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
    trafficLightElTwo.addEventListener('click', makeGreenTwo);
    trafficLightElThree.addEventListener('click', makeGreenThree);
}
function makeGreenTwo() {
    trafficLightEl.style.background = ('black');
    trafficLightElTwo.style.background = ('green');
    trafficLightElThree.style.background = ('black');
    trafficLightElTwo.removeEventListener('click', makeGreenTwo);
    trafficLightElTwo.addEventListener('click', makeYellowTwo);
    trafficLightEl.addEventListener('click', makeGreen);
    trafficLightElThree.addEventListener('click', makeGreenThree);
}
function makeGreenThree() {
    trafficLightEl.style.background = ('black');
    trafficLightElTwo.style.background = ('black');
    trafficLightElThree.style.background = ('green');
    trafficLightElThree.removeEventListener('click', makeGreenThree);
    trafficLightElThree.addEventListener('click', makeYellowThree);
    trafficLightEl.addEventListener('click', makeGreen);
    trafficLightElTwo.addEventListener('click', makeGreenTwo);
}
function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}
function makeYellowTwo() {
    trafficLightElTwo.style.background = ('yellow');
    trafficLightElTwo.removeEventListener('click', makeYellowTwo);
    trafficLightElTwo.addEventListener('click', makeRedTwo);
}
function makeYellowThree() {
    trafficLightElThree.style.background = ('yellow');
    trafficLightElThree.removeEventListener('click', makeYellowThree);
    trafficLightElThree.addEventListener('click', makeRedThree);
}
function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}
function makeRedTwo() {
    trafficLightElTwo.style.background = ('red');
    trafficLightElTwo.removeEventListener('click', makeRedTwo);
    trafficLightElTwo.addEventListener('click', makeGreenTwo);
}
function makeRedThree() {
    trafficLightElThree.style.background = ('red');
    trafficLightElThree.removeEventListener('click', makeRedThree);
    trafficLightElThree.addEventListener('click', makeGreenThree);
}
trafficLightEl.addEventListener('click', makeGreen);
trafficLightElTwo.addEventListener('click', makeGreenTwo);
trafficLightElThree.addEventListener('click', makeGreenThree);