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
const weightMinInput = document.querySelector('.minweight__input'); // поле с мин весом
const weightMaxInput = document.querySelector('.maxweight__input'); // поле с макс весом

// список фруктов в JSON формате (добавил сразу много, у нас очень успешный фермер)
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 14},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 16},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Дуриан", "color": "зеленый", "weight": 30},
  {"kind": "Дуриан", "color": "зеленый", "weight": 25},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Личи", "color": "розово-красный", "weight": 21},
  {"kind": "Личи", "color": "розово-красный", "weight": 15},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Карамбола", "color": "желтый", "weight": 24},
  {"kind": "Карамбола", "color": "желтый", "weight": 20},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 18},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 29},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;

// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);

/*** ОТОБРАЖЕНИЕ ***/
// отрисовка карточек
const display = () => {
  // очищаем fruitsList от вложенных элементов // А есть способ лучше?
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
    // формирование контента в дочерних элементах из JSON
    div2.innerHTML = 'index: ' + i;
    div3.innerHTML = 'kind: ' + fruits[i]['kind'];
    div4.innerHTML = 'color: ' + fruits[i]['color'];
    div5.innerHTML = 'weight: ' + fruits[i]['weight'];

    //цвета для рамки
    if (fruits[i]['color'] == "фиолетовый") {
      li.className += " fruit_violet";
    } else if (fruits[i]['color'] == "зеленый"){
      li.className += " fruit_green";
    } else if (fruits[i]['color'] == "розово-красный"){
      li.className += " fruit_carmazin";
    } else if (fruits[i]['color'] == "желтый"){
      li.className += " fruit_yellow";
    } else if (fruits[i]['color'] == "светло-коричневый"){
      li.className += " fruit_lightbrown";
    } else {
      li.className += " fruit_black"; // сделал black для всех остальных новых
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
// я так понимаю, можно было не запариваться и сделать через sort?
// в защиту кода ниже скажу, что не поймал ни одного алерта из-за повторений
const shuffleFruits = () => {
 let result = [];
 while (fruits.length > 0) {
   const fromIndex = getRandomInt(fruits.length); // индекс элемента, который надо перенести в конец
   const item = fruits.splice(fromIndex, 1)[0]; // получаем элемент, который надо перенести и удаляем его из массива
   result.splice(result.length, 1, item); // добавляем элемент в конец
  }
  if (fruits == result) {
    alert("Случайности не случайны, но изменений не произошло");
  } else {
    fruits = result;
  }
};
// шафлим фрукты по кнопке
shuffleButton.addEventListener('click', () => {
  shuffleFruits();
    display();
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массив
const filterFruits = () =>  {
    let weightMinIn = weightMinInput.value; // задаем значения мин из поля
    let weightMaxIn = weightMaxInput.value; // задаем значение макс из поля
    if (weightMinIn === '' || weightMaxIn === '') { // сравниваем с null
    alert("Необходимо ввести все данные");
  } else if (weightMinIn < 0 || weightMaxIn < 0) {
      alert("Вес не может быть отрицательным");
    } else if (weightMinIn - weightMaxIn > 0) { // сравниваем друг с другом
      console.log(weightMinIn > weightMaxIn);
      console.log(weightMinIn, weightMaxIn);
      alert("Попробуйте ввести корректные данные минимального и максимального веса");
  } else {
    const filterMinFruits = fruits.filter(fruits => fruits.weight >= weightMinIn); // фильтруем по минимум
    const filterMaxFruits = filterMinFruits.filter(filterMinFruits => filterMinFruits.weight <= weightMaxIn); // добавляем фильтр по максимум
    fruits = filterMaxFruits; // возвращаем в JSON
  }
}
// фильтруем фрукты по кнопке
filterButton.addEventListener('click', () => {
  filterFruits();
  display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  return  a['color'] == b ? true : false;
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    const n = arr.length;
    //новый массив со всеми уникальными цветами
    let newArr = [];
    for (let p = 0; p < n; p++) {
      newArr[p] = arr[p]['color'];
    }
    var colorArr = [...new Set(newArr)];
    let l = colorArr.length;
    // теперь проходимся через массив с цветами и сравниваем с основным массивом
    for (let k = 0; k < l; k++) {
      // внешняя итерация по элементам
      for (let i = 0; i < n - 1; i++) {
        // внутренняя итерация для перестановки элемента в конец массива
        for (let j = 0; j < n - 1; j++) {
          // сравниваем элементы
          if (comparation(arr[j], colorArr[k])) {
/***            console.log(arr[j], colorArr[k]);   // разблокировать слева, чтобы нагрузить консоль
            console.log(arr[j], colorArr[k]);
            console.log(arr[j], colorArr[k]);
            console.log(arr[j], colorArr[k]);
            console.log(arr[j], colorArr[k]);
            console.log(arr[j], colorArr[k]);
            console.log(arr[j], colorArr[k]);
            console.log(arr[j], colorArr[k]);
            /***            внимание, консольлог выше нагружает по времени сортировку пузырьками          ***/
            // делаем обмен элементов
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
          }
        }
      }
    }
  },
// quicksort :
  quickSort(arr, comparation) {
// везде примеры только с цифрами (больше/меньше) как переложить на цвета? С чем сравнивать?
/***
    // функция обмена элементов
    function swap(fruits, firstIndex, secondIndex){
      const temp = fruits[firstIndex];
      fruits[firstIndex] = fruits[secondIndex];
      fruits[secondIndex] = temp;
    }

// функция разделитель
    function partition(fruits, left, right) {
      var pivot = fruits[Math.floor((right + left) / 2)],
          i = left,
          j = right;
      while (i <= j) {
        while (fruits[i][color] != pivot['color']) {
          console.log(fruits[i][color], pivot['color']);
          i++;
        }
        while (fruits[j] == pivot) {
          j--;
        }
        if (i <= j) {
          swap(fruits, i, j);
          i++;
          j--;
        }
      }
      return i;
    }

// алгоритм быстрой сортировки
    function quickSort(fruits, left, right) {
      var index;
      if (fruits.length > 1) {
   //     left = typeof left != "number" ? 0 : left;
   //     right = typeof right != "number" ? fruits.length - 1 : right;
        index = partition(fruits, left, right);
        console.log(index);
        if (left < index - 1) {
          quickSort(fruits, left, index - 1);
        }
        if (index < right) {
          quickSort(fruits, index, right);
        }
      }
      return fruits;
      display();
    }
 ***/
  },

  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sortTime = 'sorting...';
    sortTimeLabel.textContent = sortTime;
    console.log(sortTime); // на экране не успевает отобразиться?
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
    sortTimeLabel.textContent = sortTime;
    console.log(sortTime); // очень быстро без нагрузки
  },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
   if (sortKind == 'bubbleSort') {
     sortKind = 'quickSort';
   } else {
     sortKind = 'bubbleSort';
   }
  sortKindLabel.textContent = sortKind;
});

sortActionButton.addEventListener('click', () => {
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  let kindIn = kindInput.value;
  let colorIn = colorInput.value;
  let weightIn = weightInput.value;
if (kindIn==='' || colorIn==='' || weightIn==='') {
  alert("Необходимо ввести все данные");
} else if ( weightIn <= 0) {
  alert("Вес не может быть отрицательным");
  } else {
  fruits.push({"kind": kindIn, "color": colorIn, "weight": weightIn});
  // чистим поле ввода
  kindInput.value = '';
  colorInput.value = '';
  weightInput.value = '';
}
  display();
});
