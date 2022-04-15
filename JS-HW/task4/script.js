const a = document.querySelector('#defaultContent');
a.addEventListener("click", preventDefault);
function preventDefault () {
    const userContent = prompt('Введите текст');
    const defaultContent = document.querySelector('#defaultContent');
    defaultContent.textContent = userContent;
}