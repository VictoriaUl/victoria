// Деструктуризация массивов в JavaScript:
// В следующем коде части массива записываются в соответствующие переменные: Переделайте этот код через деструктуризацию согласно изученной теории.
let arr = ["John", "Smit", "development", "programmer", 2000];
let [name, surname, department, position, salary] = arr;
console.log(name);
console.log(surname);
console.log(department);
console.log(position);
console.log(salary);

// Деструктуризация массива из функции в JavaScript:
// В следующем коде части массива записываются в соответствующие переменные: Переделайте этот код через деструктуризацию согласно изученной теории.
function func() {
  return ["John", "Smit", "development", "programmer", 2000];
}
let [name, surname, department, position, salary] = func();
console.log(name);
console.log(surname);
console.log(department);
console.log(position);
console.log(salary);

// Пропуск элементов массива при деструктуризации в JavaScript:
// В следующем коде части массива записываются в соответствующие переменные: Переделайте этот код через деструктуризацию согласно изученной теории.
let arr = ["John", "Smit", "development", "programmer", 2000];
let [, , department, position] = arr;
console.log(department);
console.log(position);

// Остаток массива при деструктуризации в JavaScript:
// В следующем коде части массива записываются в соответствующие переменные: Переделайте этот код через деструктуризацию согласно изученной теории.
let arr = ["John", "Smit", "development", "programmer", 2000];
let [name, surname, ...info] = arr;
console.log(name);
console.log(surname);
console.log(info);

// Значения по умолчанию при деструктуризации массива в JavaScript:
// В следующем коде части массива записываются в соответствующие переменные: Переделайте этот код через деструктуризацию согласно изученной теории.
let arr = ["John", "Smit", "development", "programmer"];
let [name, surname, department, position = "trainee"] = arr;
console.log(name);
console.log(surname);
console.log(department);
console.log(position);

// Функции по умолчанию при деструктуризации массива в JavaScript:
// Модифицируйте полученный выше код так, чтобы при отсутствии в массиве значения для месяца по умолчанию брался текущий месяц, а при отсутствии значения для года - соответственно текущий год.
function func() {
  return new Date().getDate();
}
let arr = [];
let [
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1,
  day = func(),
] = arr;
console.log(year);
console.log(month);
console.log(day);

// Деструктуризация объектов в JavaScript:
// В следующем коде части объекта записываются в соответствующие переменные: Переделайте этот код через деструктуризацию согласно изученной теории.
let options = {
  color: "red",
  width: 400,
  height: 500,
};

let { color, width, height } = options;
console.log(color);
console.log(width);
console.log(height);

// Имена переменных при деструктуризации объектов в JavaScript:
// В следующем коде части объекта записываются в соответствующие переменные: Переделайте этот код через деструктуризацию согласно изученной теории.
let options = {
  color: "red",
  width: 400,
  height: 500,
};
let { color: c, width: w, height: h } = options;
console.log(c);
console.log(w);
console.log(h);

// Значения по умолчанию при деструктуризации объектов в JavaScript:
// В следующем коде части объекта записываются в соответствующие переменные: Переделайте этот код через деструктуризацию согласно изученной теории.
let options = {
  width: 400,
  height: 500,
};

let { width, color = "black", height } = options;
console.log(color);
console.log(width);
console.log(height);

// Переменные и значения по умолчанию в JavaScript:
// В следующем коде части объекта записываются в соответствующие переменные: Переделайте этот код через деструктуризацию согласно изученной теории.
let options = {
  width: 400,
  height: 500,
};
let { color: c = "black", width: w, height: h } = options;
console.log(w);
console.log(c);
console.log(h);

// Деструктуризация параметров функций в JavaScript:
// №1 Переделайте следующий код через деструктуризацию согласно изученной теории:
func(["John", "Smit", "development", "programmer", 2000]);
function func([name, surname, department, position, salary]) {
  console.log(name);
  console.log(surname);
  console.log(department);
  console.log(position);
  console.log(salary);
}

// №2 Переделайте следующий код через деструктуризацию согласно изученной теории:
func(["John", "Smit", "development", "programmer", 2000]);
function func([name, surname, ...info]) {
  console.log(name);
  console.log(surname);
  console.log(info);
}

// №3 Переделайте следующий код через деструктуризацию согласно изученной теории:
func(["John", "Smit", "development"]);
function func([name, surname, department, position = "джуниор"]) {
  console.log(name);
  console.log(surname);
  console.log(department);
  console.log(position);
}

// №4 Переделайте следующий код через деструктуризацию согласно изученной теории:
func("development", ["John", "Smit"], [2018, 12, 31]);
function func(department, [name, surname], [year, month, day]) {
  console.log(department);
  console.log(name);
  console.log(surname);
  console.log(year);
  console.log(month);
  console.log(day);
}

// Деструктуризация oбъектов параметров функций в JavaScript:
// №1 Переделайте следующий код через деструктуризацию согласно изученной теории:
func({ color: "red", width: 400, height: 500 });
function func({ color, width, height }) {
  console.log(color);
  console.log(width);
  console.log(height);
}

// №2 Переделайте следующий код через деструктуризацию согласно изученной теории:
func({ color: "red", width: 400, height: 500 });
function func({ color = "black", width, height }) {
  console.log(color);
  console.log(width);
  console.log(height);
}
