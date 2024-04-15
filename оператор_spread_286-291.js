// Оператор spread в JavaScript:
// Дан массив: Дана также функция: Найдите с помощью приведенной функции сумму элементов массива.
let arr = [1, 2, 3, 4, 5];
function func(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr));

// Экстремальные значения массива через spread в JavaScript:
// Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.
let arr2 = [23, 56, 13, 78, 92];
console.log(Math.min(...arr2));

// 