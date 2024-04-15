// Метод map для перебора массива в JavaScript:
// №1 Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.
let arr = [4, 9, 16, 25, 36, 49, 64];
let res = arr.map(function (elem) {
  return Math.sqrt(elem);
});
console.log(res);

// №2 Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
let arr = ["a", "b", "c"];
let res = arr.map(function (str) {
  return str + "!";
});
console.log(res);

// №3 Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.
let arr = ["Меня", "Зовут", "Влад"];
let res = arr.map(function (str) {
  return str.split("").reverse().join("");
});
console.log(res);

// №4 Дан следующий массив: Используя метод map преобразуйте этот массив в следующий:
let arr = ["123", "456", "789"];
let transformedArr = arr.map(function (str) {
  return str.split("").map(Number);
});
console.log(transformedArr);

// №5 Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.
let arr = [1, 2, 3, 4, 5];
let res = arr.map(function (elem, index) {
  return elem * index;
});
console.log(res);

// Метод forEach для перебора массива в JavaScript:
// Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.
let arr = [2, 3, 4, 5, 6];
let sum = 0;

arr.forEach(function (elem) {
  sum += elem ** 2;
});

console.log(sum);

// Метод filter для фильтрации массива в JavaScript:
// №1 Дан массив с числами. Оставьте в нем только положительные числа.
let arr = [72, -5, -1, 4, 67, 8, 12, -4, -87];
let res = arr.filter(function (elem) {
  return elem > 0;
});
console.log(res);

// №2 Дан массив с числами. Оставьте в нем только отрицательные числа.
let arr = [72, -5, -1, 4, 67, 8, 12, -4, -87];
let res = arr.filter(function (elem) {
  return elem < 0;
});
console.log(res);

// №3 Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.
let arr = [72, -5, -1, 4, 67, 8, 12, -4, -87, 9];
let res = arr.filter(function (elem) {
  return elem > 0 && elem < 10;
});
console.log(res);

// №4 Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
let arr = ["привет", "как", "дела", "изучаю", "JavaScript"];
let res = arr.filter(function (str) {
  return str.length > 5;
});
console.log(res);

// №5 Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];
let filteredArray = numbersArray.filter((number, index) => number * index < 30);
console.log(filteredArray);

// №6 Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.
let mixedArray = [1, 2, [3, 4], 5, [6, 7]];
let filteredArray = mixedArray.filter(function (element) {
  return !Array.isArray(element);
});
console.log(filteredArray);

// Метод every для проверки массива в JavaScript:
// №1 Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
let arr = [1, 2, 3, 4, 5];
let check = arr.every(function (elem) {
  return elem > 0;
});
console.log(check);

// №2 Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.
let arr = [1, 2, 3, 4, 5];
let check = arr.every((elem, index) => elem * index < 30);
console.log(check);

// Метод some для проверки массива в JavaScript:
// №1 Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.
let arr = [1, -1, -2, -3, -4];
let check = arr.some((elem) => elem > 0);
console.log(check);

// №2 Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.
let arr = [1, 2, 3, 4, 5, 6, 7];
let res = arr.some((elem, index) => elem * index > 30);
console.log(res);
