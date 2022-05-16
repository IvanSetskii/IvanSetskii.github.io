// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления
const fruitInfo = document.querySelectorAll('.fruit__info'); // список в карточке

// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;

// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);

// console.log для самоконтроля
const samCntrl = () => {
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
};
/*** ОТОБРАЖЕНИЕ ***/
// отрисовка карточек
const display = () => {
  // очищаем fruitsList от вложенных элементов
  fruitsList.textContent = '';
  //задаем цикл родительства и дочерних элементов
  for (let i = 0; i < fruits.length; i++) {
    let parent = document.querySelector('.fruits__list'); // родитель ul
    parent.className = "fruits__list";
    let li = document.createElement('li'); // ребенок li
    li.className = "fruit__item";
    parent.appendChild(li);
    let div = document.createElement('div'); // ребенок div
    div.className = "fruit__info";
    li.appendChild(div);
    let div2 = document.createElement('div'); // div2 ребенок div'a
    let div3 = document.createElement('div'); // div3 ребенок div'a
    let div4 = document.createElement('div'); // div4 ребенок div'a
    let div5 = document.createElement('div'); // div5 ребенок div'a
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4);
    div.appendChild(div5);
    // формирование контента в дочерних элементах
    div2.innerHTML = 'index: ' + i;
    div3.innerHTML = 'kind: ' + fruits[i]['kind'];
    div4.innerHTML = 'color: ' + fruits[i]['color'];
    div5.innerHTML = 'weight: ' + fruits[i]['weight'];

    //цвета для рамки
    if (fruits[i]['color'] == "фиолетовый") {
      li.className += " fruit_violet";
    } else if (fruits[i]['color'] == "зеленый"){
      li.className = " fruit_green";
    } else if (fruits[i]['color'] == "розово-красный"){
      li.className = " fruit_carmazin";
    } else if (fruits[i]['color'] == "желтый"){
      li.className = " fruit_yellow";
    } else if (fruits[i]['color'] == "светло-коричневый"){
      li.className = " fruit_lightbrown";
    } else {
      li.className = " fruit_black";
    }
  }
};

// первая отрисовка карточек
display();

/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

// перемешивание массива
const shuffleFruits = () => {
 let result = [];
  // ATTENTION: сейчас при клике вы запустите бесконечный цикл и браузер зависнет
 while (fruits.length > 0) {
   const fromIndex = getRandomInt(fruits.length); // индекс элемента, который надо перенести в конец
   const item = fruits.splice(fromIndex, 1)[0]; // получаем элемент, который надо перенести и удаляем его из массива
   result.splice(result.length, 1, item); // добавляем элемент в конец
  }
  if (fruits == result) {
    alert("Случайности не случайны, но изменений не произошло");
  } else {
    fruits = result;
    samCntrl();
  }
};
// Можно и так
// document.getElementById('.shuffle__btn').addEventListener('click', function () {
shuffleButton.addEventListener('click', () => {
  shuffleFruits();
    display();
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const filterFruits = () => {
  fruits.filter((item) => {
    // TODO: допишите функцию
  });
};

filterButton.addEventListener('click', () => {
  filterFruits();
  display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  // TODO: допишите функцию сравнения двух элементов по цвету
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    // TODO: допишите функцию сортировки пузырьком
  },

  quickSort(arr, comparation) {
    // TODO: допишите функцию быстрой сортировки
  },

  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
  },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
});

sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  // TODO: создание и добавление нового фрукта в массив fruits через метод push и, вероятно, преобразование строки в JSON
  // необходимые значения берем из kindInput, colorInput, weightInput
  // должно получиться что-то вроде fruits.push("kind": "kindInput", "color": "colorInput", "weight": "weightInput")
  display();
});
