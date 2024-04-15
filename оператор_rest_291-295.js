// Функция, находящая сумму чисел с помощью операторов rest и spread в JavaScript:
// Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое.
function func(...args) {
    let sum = 0;
    for (let num of args) {
      sum += num;
    }
  
    return sum / args.length;
  }
  
  console.log(func(1, 2, 3, 4, 5));
  