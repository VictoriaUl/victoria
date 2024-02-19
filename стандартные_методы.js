// Задание 184
// 1. Возведите 2 в 10 степень.
let a = 2;
console.log(Math.pow(2, 10));
// 2. Найдите квадратный корень из 245.
let a1 = 245;
console.log(Math.sqrt(245));
// 3. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
let cubes = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let i=0; i <= cubes.length-1; i++) {
    cubes[i] = Math.pow(cubes[i], 3);
    sum += cubes[i];
}
console.log(Math.sqrt(sum));

// Задание 185
// 1. Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
let a2 = 379;
let b2 = Math.sqrt(379);
console.log(Math.round(b2));
console.log(b2.toFixed(1));
console.log(b2.toFixed(2));
// 2. Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
let a3 = 587;
let b3 = Math.sqrt(587);
console.log(Math.floor(b3));
console.log(Math.ceil(b3));

// Задание 186
// 1. Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

// Задание 187
// 1. Выведите на экран случайное целое число от 1 до 100.
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100)); 
// 2. С помощью цикла заполните массив 10-ю случайными целыми числами.
let arr2 = [];
for(let i=0; i <=9; i++){
    arr2.push(Math.floor(Math.random() * 100) + 1);
}
console.log(arr2);


// Задание 188
// Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
Math.abs(2);
Math.abs(5);
console.log(Math.abs(2));
console.log(Math.abs(5));

// Задание 189
// 1. Дана строка 'js'. Сделайте из нее строку 'JS'.
let str = 'js';
console.log(str.toUpperCase());
// 2. Дана строка 'JS'. Сделайте из нее строку 'js'.
let str1 = 'JS';
console.log(str1.toLowerCase());

// Задание 190
// Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
let str2 = 'я учу javascript!';
let str3 = str2.substr(2, 14);
console.log(str3);
let str4 = str2.substring(2, 16);
console.log(str4);
let str5 = str2.slice(2, 16);
console.log(str5);

// Задание 191
// 1. Дана строка. Проверьте, начинается ли эта строка на 'http://'.
let str6 = 'http://yandex.ru/search/?text=С+помощью+цикла+заполните+массив+10-ю+случайными+целыми+числами.+js&lr=213&clid=2456108'
console.log(str6.includes('http://', [0]));
// 2. Дана строка. Проверьте, заканчивается ли эта строка на '.html'.
let str7 = 'http://yandex.ru/search/?text=С+помощью+цикла+заполните+массив+10-ю+случайными+целыми+числами.+js&lr=213&clid=2456108.html'
let res = str7.endsWith('.html');
console.log(res);

// Задание 192
// Дана строка '1-2-3-4-5'. Поменяйте все дефисы на точки.
let str8 = '1-2-3-4-5';
let elem = '-'
while (str8.includes(elem)) {
	str8 = str8.replace(elem, '.');
}
console.log(str8);

// Задание 193
// 1. Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.
let str9 = '1-2-3-4-5';
let arr3 = str9.split('-');
console.log(arr3);
// 2. Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
let str10 = '12345';
let arr4 = str10.split('');
console.log(arr4);
// 3. С помощью метода join слейте его в строку '1-2-3-4-5'.
let arr5 = [1, 2, 3, 4, 5];
let str11 = arr5.join('-');

console.log(str11);

// Задание 194
// 1. Выведите на экран первый элемент этого массива.
let arr6 = [1,2,3];
console.log(arr6[0]);
// 2. Выведите на экран последний элемент этого массива.
let arr7 = [1,2,3];
console.log(arr7[2]);
// 3. Добавьте ему в конец элементы 4, 5, 6.
let arr8 = [1,2,3];
arr8.push(4,5,6);
console.log(arr8);
// 4. Добавьте ему в начало элементы 4, 5, 6.
let arr9 = [1,2,3];
arr9.unshift(4,5,6);
console.log(arr9);

// Задание 195
// 1. Сделайте из этого массива следующий: [1, 2, 3]
let arr10 = [1,2,3,4,5];
arr10.pop();
arr10.pop();
console.log(arr10);
// 2. Используя этот массив, запишите в новую переменную следующий массив: [4, 5]
let arr11 = [1,2,3,4,5];
arr11.shift();
arr11.shift();
arr11.shift();
console.log(arr11);

// Задание 196
// 1. С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]
let arr12 = [1,2,3,4,5];
arr12.splice(1, 2,);
console.log(arr12);
// 2. С помощью метода splice сделайте из него массив: [1, 2, 3, 'a', 'b', 'c', 4, 5]
let arr13 = [1,2,3,4,5];
arr13.splice(3, 0, 'a', 'b', 'c');
console.log(arr13);
// 3. С помощью метода splice сделайте из него массив: [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
let arr14 = [1,2,3,4,5];
arr14.splice(1, 0, 'a', 'b');
arr14.splice(6,0,'c')
arr14.splice(8,0,'e')
console.log(arr14);

// Задание 197
// 1. Проверьте, есть ли в этом массиве число 3.
let arr15 = [1,2,3,4,5];
let res2 = arr15.includes(3);
console.log(res2);

// Задание 198
// 1. Получите массив его ключей.
let obj = {a: 1, b: 2, c: 3};
console.log(Object.keys(obj));

// Задание 199
// 1. Код должен найти сумму цифр числа:
let num = 12345;
let arr16 = num.toString().split('');

let sum2 = 0;
for (let digit of arr16) {
  sum2 += parseInt(digit); 
}
console.log(sum2);
// 2. Код должен найти сумму цифр числа:
let num2 = 12345;
let arr17 = num.toString().split('');
let sum3 = 0;
for (let digit of arr17) {
	sum3 += parseInt(digit);
}
console.log(sum3);
// 3. Код должен найти произведение цифр числа:
let num3 = 12345;
let arr18 = String(num3).split('');
let prod = 1;
for (let digit of arr18) {
  prod *= parseInt(digit); 
}
console.log(prod);