/*
Инициация без кнопки по загрузке
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('secondNameOutput').innerText = initPerson.secondName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthDateOutput').innerText = initPerson.dateOfBirthday;
    document.getElementById('birthMonthOutput').innerText = initPerson.monthOfBirthday;
    document.getElementById('birthYearOutput').innerText = initPerson.yearOfBirthday;
    document.getElementById('rabotaOutput').innerText = initPerson.professia;
};*/

document.getElementById('btnRetry').addEventListener('click', function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('secondNameOutput').innerText = initPerson.secondName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthDateOutput').innerText = initPerson.dateOfBirthday;
    document.getElementById('birthMonthOutput').innerText = initPerson.monthOfBirthday;
    document.getElementById('birthYearOutput').innerText = initPerson.yearOfBirthday;
    document.getElementById('rabotaOutput').innerText = initPerson.professia;
    document.getElementById('zapyataya').innerText = ', ';
    document.getElementById('zapyataya2').innerText = ', ';
    document.getElementById('btnRetry').innerText = 'Обновить';
})

document.getElementById('btnDel').addEventListener('click', function () {
    document.getElementById('firstNameOutput').innerText = 'Имя';
    document.getElementById('secondNameOutput').innerText = 'Отчество';
    document.getElementById('surnameOutput').innerText = 'Фамилия';
    document.getElementById('genderOutput').innerText = 'пол';
    document.getElementById('birthDateOutput').innerText = 'дата';
    document.getElementById('birthMonthOutput').innerText = 'месяц';
    document.getElementById('birthYearOutput').innerText = 'год рождения';
    document.getElementById('rabotaOutput').innerText = 'профессия';
    document.getElementById('zapyataya').innerText = ', ';
    document.getElementById('zapyataya2').innerText = ', ';
    document.getElementById('btnRetry').innerText = 'Начать';

})

document.getElementById('btnClear').addEventListener('click', function () {
    document.getElementById('firstNameOutput').innerText = ' ';
    document.getElementById('secondNameOutput').innerText = ' ';
    document.getElementById('surnameOutput').innerText = ' ';
    document.getElementById('genderOutput').innerText = ' ';
    document.getElementById('birthDateOutput').innerText = ' ';
    document.getElementById('birthMonthOutput').innerText = ' ';
    document.getElementById('birthYearOutput').innerText = ' ';
    document.getElementById('rabotaOutput').innerText = ' ';
    document.getElementById('zapyataya').innerText = ' ';
    document.getElementById('zapyataya2').innerText = ' ';
    document.getElementById('btnRetry').innerText = 'Начать';

})