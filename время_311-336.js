// Работа с объектом Date в JavaScript:
// №1 Выведите на экран текущий день.
let date = new Date();
console.log(date.getDate());

// №2 Выведите на экран текущий месяц.
let date = new Date();
console.log(date.getMonth() + 1);

// №3 Выведите на экран текущий год.
let date = new Date();
console.log(date.getFullYear());

// Форматирование даты в JavaScript:
// Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Используйте для всех частей даты (кроме года) созданную нами функцию для добавления нуля при необходимости.
function addZero(num) {
  if (num >= 0 && num <= 9) {
    return "0" + num;
  } else {
    return num;
  }
}
let date = new Date();

let hours = addZero(date.getHours());
let minutes = addZero(date.getMinutes());
let seconds = addZero(date.getSeconds());

let day = addZero(date.getDate());
let month = addZero(date.getMonth() + 1);
let year = date.getFullYear();

let formattedDate = `${hours}:${minutes}:${seconds} ${day}.${month}.${year}`;

console.log(formattedDate);

// Смена формата даты в JavaScript:
// Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.
let str = "2025-10-21";
let res = str.split("-").reverse().join(".");
console.log(res);

// Получения дня недели на JavaScript:
// №1 Выведите на экран номер текущего дня недели.
let date = new Date();
console.log(date.getDay());

// №2 Определите, является ли текущий день недели выходным или рабочим днем.
let date = new Date();
if (date.getDay() === 0 || date.getDay() === 6) {
  console.log(date.getDay() + " -" + " выходной");
} else {
  console.log(date.getDay() + " -" + " рабочий");
}

// №3 Определите сколько дней осталось до ближайшего воскресенья.
let date = new Date();
let day = date.getDay();
let daysUntilSunday;

if (day === 0) {
  daysUntilSunday = 7;
} else {
  daysUntilSunday = 7 - day;
}
console.log(`До ближайшего воскресенья осталось ${daysUntilSunday} дней`);

// Вывод частей даты словом в JavaScript:
// Пусть дан следующий массив: Выведите с помощью этого массива название текущего месяца.
let months = [
  "янв",
  "фев",
  "мар",
  "апр",
  "май",
  "июн",
  "июл",
  "авг",
  "сен",
  "окт",
  "ноя",
  "дек",
];
let date = new Date();
let month = date.getMonth();
console.log(months[month]);

// Установка времени в объекте Date в JavaScript:
// Узнайте, какой день недели был в ваш день рождения.
let date = new Date(2005, 7, 24);
let day = date.getDay();
let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
console.log(days[day]);

// Получение времени в формате timestamp в JavaScript:
// Выведите на экран timestamp, соответствующий дате 1 января 2025 года.
let date = new Date(2025, 0, 1);
let timestamp = date.getTime();
console.log(timestamp);

// Разность между датами в формате timestamp в JavaScript:
// №1 Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.
let $1988 = new Date(1988, 2, 1);
let $2000 = new Date(2000, 0, 10);
let diff = $2000.getTime() - $1988.getTime();
console.log(diff / (1000 * 60 * 60 * 24));

// №2 Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени.
let birthDate = new Date(2005, 7, 24);
let now = new Date();
let monthsDifference =
  (now.getFullYear() - birthDate.getFullYear()) * 12 +
  now.getMonth() -
  birthDate.getMonth();

console.log(monthsDifference);

// Разница между объектами с датой в JavaScript:
// №1 Выведите на экран количество миллисекунд, прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.
let $2010 = new Date(2010, 1, 15);
let $2000 = new Date(2000, 8, 1);
console.log($2010 - $2000);

// №2 Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в днях.
let $2010 = new Date(2010, 1, 15);
let $2000 = new Date(2000, 8, 1);
let diff = $2010 - $2000;
console.log(Math.round(diff / (1000 * 60 * 60 * 24)));

// №3 Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в месяцах.
let $2010 = new Date(2010, 1, 15);
let $2000 = new Date(2000, 8, 1);
let yearsDifference = $2010.getFullYear() - $2000.getFullYear();
let monthsDifference =
  yearsDifference * 12 + ($2010.getMonth() - $2000.getMonth());
console.log("Разница в месяцах между датами: " + monthsDifference);

// №4 Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в годах.
let $2010 = new Date(2010, 1, 15);
let $2000 = new Date(2000, 8, 1);
let yearsDifference = $2010.getFullYear() - $2000.getFullYear();
console.log("Разница в годах между датами: " + yearsDifference);

// Автоматическая корректировка дат в JavaScript:
// №1 Определите, в какую дату JavaScript преобразует следующий момент времени:
let date = new Date(2018, 1, 35);
console.log(date); // какая дата будет? Ответ: 7 марта 2018.

// №2 Определите, в какую дату JavaScript преобразует следующий момент времени:
let date = new Date(2018, 15, 1);
console.log(date); // какая дата будет? Ответ: 1 апреля 2019.

// №3 Определите, в какую дату JavaScript преобразует следующий момент времени:
let date = new Date(2018, 3, 31);
console.log(date); // какая дата будет? Ответ: 1 мая 2018.

// №4 Определите, в какую дату JavaScript преобразует следующий момент времени:
let date = new Date(2018, 1, 31);
console.log(date); // какая дата будет? Ответ: 3 марта 2018.

// №5 Определите, в какую дату JavaScript преобразует следующий момент времени:
let date = new Date(2018, 12, 33);
console.log(date); // какая дата будет? Ответ: 2 февраля 2019.

// №6 Определите, в какую дату JavaScript преобразует следующий момент времени:
let date = new Date(2018, 33, 33);
console.log(date); // какая дата будет? Ответ: 2 ноября 2020.

// №7 Определите, в какую дату JavaScript преобразует следующий момент времени:
let date = new Date(2018, 5, 0);
console.log(date); // какая дата будет? Ответ: 30 мая 2018.

// №8 Определите, в какую дату JavaScript преобразует следующий момент времени:
let date = new Date(2018, 0, 0);
console.log(date); // какая дата будет? Ответ: 31 декабрая 2017.

// №9 Определите, в какую дату JavaScript преобразует следующий момент времени:
let date = new Date(2018, -12, -33);
console.log(date); // какая дата будет? Ответ: 28 ноября 2016.

// №10 Определите, в какую дату JavaScript преобразует следующий момент времени:
let date = new Date(2018, 0, 1, 23, 0, 60);
console.log(date); // какая дата будет? Ответ: 1 января 2018 23:01:00

// №11 Определите, в какую дату JavaScript преобразует следующий момент времени:
let date = new Date(2018, 0, 1, 23, 60, 0);
console.log(date); // какая дата будет? Ответ: 2 января 2018 00:00:00

// №12 Определите, в какую дату JavaScript преобразует следующий момент времени:
let date = new Date(2018, 0, 1, 100, 100, 100);
console.log(date); // какая дата будет? Ответ: 5 января 2018 05:41:40

// Нахождение последнего дня месяца в JavaScript:
// №1 Оформите этот способ решения проблемы в виде функции, которая параметрами будет принимать месяц и год и возвращать номер последнего дня этого месяца.
function lastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
let lastDayOfAugust = lastDayOfMonth(2005, 7);
console.log(lastDayOfAugust);

// №2 Определите, какой день недели будет в последнем дне пятого месяца 2025 года.
let lastDayOfMay2025 = new Date(2025, 4, 31);
let dayOfWeek = lastDayOfMay2025.getDay();
let daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
console.log(
  `Последний день месяца мая 2025 года будет ${daysOfWeek[dayOfWeek]}.`
);

// Определение високосного года в JavaScript:
// Сделайте функцию isLeap, которая параметром будет принимать год и возвращать true, если этого год високосный, и false - если нет.
function getYearType(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
let yearToCheck = 2024;
console.log(`Год ${yearToCheck} високосный? ${getYearType(yearToCheck)}`);

// Проверка корректности даты в JavaScript:
// Сделайте функцию checkDate, которая будет выполнять описанную проверку. Пусть функция возвращает true, если дата корректна и false, если нет. Пример работы этой функции для 31 января и 32 января:
function checkDate() {
  let year = 2025;
  let month = 0;
  let day = 31;

  let date = new Date(year, month, day);

  if (
    date.getFullYear() == year &&
    date.getMonth() == month &&
    date.getDate() == day
  ) {
    console.log(true);
  } else {
    console.log(false);
  }
}
checkDate();

// Получение дня текущего года в JavaScript:
// Определите, какой день недели будет 31 декабря текущего года.
let date = new Date();
let lastDayOfYear = new Date(date.getFullYear(), 11, 31);
let dayOfWeek = lastDayOfYear.getDay();
let daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
console.log(`31 декабря текущего года будет ${daysOfWeek[dayOfWeek]}.`);

// День следующего или предыдущего месяца:
// №1 Вопрос: не будет ли проблемы, если текущий месяц январь? Ведь он имеет номер 0, и при вычитании из него единицы мы получим минус первый месяц. Ответ: будет проблема.

// №2 Определите, какой день недели был месяц назад в такой же день месяца, как сегодня.
let now = new Date();
let previousMonth = new Date(
  now.getFullYear(),
  now.getMonth() - 1,
  now.getDate()
);
console.log(previousMonth.toLocaleDateString("rus", { weekday: "long" }));

// День следующего или предыдущего года:
// №1 Определите, какой день недели будет 31 декабря следующего года.
let date = new Date();
let nextYear = date.getFullYear() + 1;
let nextYearLastDay = new Date(nextYear, 11, 31);
let dayOfWeek = nextYearLastDay.getDay();
let daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
console.log(`31 декабря ${nextYear} года будет ${daysOfWeek[dayOfWeek]}.`);

// №2 Определите, какой день недели будет через год в такую же дату, как сегодня.
let date = new Date();
let nextYear = date.getFullYear() + 1;
let nextYearSameDay = new Date(nextYear, date.getMonth(), date.getDate());
let dayOfWeek = nextYearSameDay.getDay();
let daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
console.log(
  `Через год, в такую же дату, как сегодня, будет ${daysOfWeek[dayOfWeek]}.`
);

// №3 Определите, какой день недели был год назад в такую же дату, как сегодня.
let date = new Date();
let lastYear = date.getFullYear() - 1;
let lastYearSameDay = new Date(lastYear, date.getMonth(), date.getDate());
let dayOfWeek = lastYearSameDay.getDay();
let daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
console.log(
  `Год назад, в такую же дату, как сегодня, был ${daysOfWeek[dayOfWeek]}.`
);

// Разность моментов:
// №1 Определите, сколько дней между 1 января и 10 сентября текущего года.
let date = new Date();
let january1st = new Date(date.getFullYear(), 0, 1);
let september10th = new Date(date.getFullYear(), 8, 10);
let timeDifference = september10th - january1st;
let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
console.log(
  `Между 1 января и 10 сентября текущего года прошло ${daysDifference} дней.`
);

// №2 Определите, сколько дней между 20 числом текущего месяца и 10 числом следующего.
let date = new Date();
let currentMonth20th = new Date(date.getFullYear(), date.getMonth(), 20);
let nextMonth10th = new Date(date.getFullYear(), date.getMonth() + 1, 10);
let timeDifference = nextMonth10th - currentMonth20th;
let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
console.log(
  `Между 20 числом текущего месяца и 10 числом следующего ${daysDifference} дней.`
);

// Момент времени дня:
// Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.
let date = new Date();
let yesterdayNoon = new Date(date);
yesterdayNoon.setDate(date.getDate() - 1);
yesterdayNoon.setHours(12, 0, 0, 0);
let timeDifference = date - yesterdayNoon;
let hoursDifference = (timeDifference / (1000 * 60 * 60)).toFixed(1);
console.log(
  `Между вчерашним полднем и текущим моментом времени прошло ${hoursDifference} часов.`
);

// Начало дня в JavaScript:
// Определите, сколько часов прошло между началом дня и текущим моментом времени.
let date = new Date();
let startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
let timeDifference = date - startOfDay;
let hoursDifference = (timeDifference / (1000 * 60 * 60)).toFixed(1);
console.log(
  `Между началом текущего дня и текущим моментом времени прошло ${hoursDifference} часов.`
);

// Конец дня в JavaScript:
// Определите, сколько часов осталось до конца дня.
let date = new Date();
let endOfDay = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  23,
  59,
  59
);
let timeDifference = endOfDay - date;
let hoursDifference = (timeDifference / (1000 * 60 * 60)).toFixed(1);
console.log(`До конца текущего дня осталось ${hoursDifference} часов.`);

// Циклическая проверка моментов времени в JavaScript:
// Рассмотрите промежуток от 2000 года до текущего года. Определите, сколько раз 1 января в этом промежутке попадало на выходной день, то есть на субботу или на воскресенье.
function countWeekendNewYears(startYear, endYear) {
  let count = 0;
  for (let year = startYear; year <= endYear; year++) {
    let newYearDate = new Date(year, 0, 1);
    if (newYearDate.getDay() === 0 || newYearDate.getDay() === 6) {
      count++;
    }
  }
  return count;
}
let startYear = 2000;
let endYear = new Date().getFullYear();
let weekendNewYearsCount = countWeekendNewYears(startYear, endYear);
console.log(
  `С 1 января ${startYear} года по ${endYear} год включительно, 1 января выпадало на выходные ${weekendNewYearsCount} раз.`
);

// Практика на получение моментов времени в JavaScript:
// №1 Определите, сколько секунд прошло с начала дня до настоящего момента времени.
let date = new Date();
let startOfDay = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  0,
  0,
  0,
  0
);
let timeDifference = date - startOfDay;
let secondsDifference = Math.floor(timeDifference / 1000);
console.log(`С начала текущего дня прошло ${secondsDifference} секунд.`);

// №2 Определите, сколько секунд осталось до конца дня.
let date = new Date();
let endOfDay = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  23,
  59,
  59,
  999
);
let timeDifference = endOfDay - date;
let secondsDifference = Math.floor(timeDifference / 1000);
console.log(`До конца текущего дня осталось ${secondsDifference} секунд.`);

// №3 Определите, сколько дней осталось до нового года.
let date = new Date();
let endOfYear = new Date(date.getFullYear(), 11, 31, 23, 59, 59, 999);
let timeDifference = endOfYear - date;
let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
console.log(`До нового года осталось ${daysDifference} дней.`);

// №4 Определите, сколько пятниц 13-е в текущем году.
function countFriday13ths(currentYear) {
  let count = 0;
  for (let month = 0; month < 12; month++) {
    let date = new Date(currentYear, month, 13);
    if (date.getDay() === 5) {
      count++;
    }
  }

  return count;
}
let currentYear = new Date().getFullYear();
let friday13thsCount = countFriday13ths(currentYear);
console.log(`В текущем году будет ${friday13thsCount} пятниц 13-е.`);

// №5 Определите, какой год был 3 месяца назад.
let date = new Date();
let currentYear = date.getFullYear();
let yearThreeMonthsAgo = currentYear - Math.floor(3 / 12);
console.log(`Год, который был 3 месяца назад: ${yearThreeMonthsAgo}`);

// №6 Определите, какой день недели будет в последнем дне текущего месяца.
let date = new Date();
let lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
let dayOfWeek = lastDayOfMonth.getDay();
let daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
console.log(`Последний день текущего месяца будет ${daysOfWeek[dayOfWeek]}.`);

// №7 Напишите код, который будет определять, високосный ли текущий год.
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
let currentYear = new Date().getFullYear();
if (isLeapYear(currentYear)) {
  console.log(`${currentYear} год високосный.`);
} else {
  console.log(`${currentYear} год не високосный.`);
}

// №8 Напишите код, который будет находить предыдущий високосный год.
function findPreviousLeapYear() {
  let currentYear = new Date().getFullYear();
  let previousLeapYear = currentYear - 1;
  while (
    previousLeapYear % 4 !== 0 ||
    (previousLeapYear % 100 === 0 && previousLeapYear % 400 !== 0)
  ) {
    previousLeapYear--;
  }
  return previousLeapYear;
}
let previousLeapYear = findPreviousLeapYear();
console.log(previousLeapYear);

// №9 Напишите код, который будет находить следующий високосный год.
function findNextLeapYear(year) {
  while (!isLeapYear(++year)) {}
  return year;
}
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
let currentYear = new Date().getFullYear();
let nextLeapYear = findNextLeapYear(currentYear);
console.log(`Следующий високосный год: ${nextLeapYear}.`);

// Строковое сравнение дат на JavaScript:
// Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:
let date1 = "2020-11-31";
let date2 = "2020-12-01";
if (date1 > date2) {
  console.log("Первая дата больше второй.");
} else if (date1 < date2) {
  console.log("Первая дата меньше второй.");
} else {
  console.log("Даты равны.");
}

// Сравнение даты без года в JavaScript:
// Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:
let date1 = "09-21";
let date2 = "09-23";
if (date1 > date2) {
  console.log("Первая дата больше второй.");
} else if (date1 < date2) {
  console.log("Первая дата меньше второй.");
} else {
  console.log("Даты равны.");
}

// Попадание даты в промежуток:
// Дана дата, содержащая месяц и день. Определите знак Зодиака, на которую приходится эта дата.
function zodiacSign(month, day) {
  month = parseInt(month, 10);
  day = parseInt(day, 10);
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return "Овен";
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return "Телец";
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return "Близнецы";
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return "Рак";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return "Лев";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return "Дева";
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return "Весы";
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return "Скорпион";
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return "Стрелец";
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return "Козерог";
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return "Водолей";
  } else {
    return "Рыбы";
  }
}
let month = "03";
let day = "25";
let sign = zodiacSign(month, day);
console.log(`Знак Зодиака для даты ${month}-${day}: ${sign}.`);

// Сравнение объектов с датами в JavaScript:
// №1 Получите объект с датой, содержащий текущий момент времени. Получите объект с датой, содержащий полдень текущего дня. Сравните два этих объекта и определите, был ли уже полдень или нет.
let date = new Date();
let noonDate = new Date(date);
noonDate.setHours(12, 0, 0, 0);
if (date >= noonDate) {
  console.log("Уже полдень.");
} else {
  console.log("Еще не полдень.");
}

// №2 Получите объект с датой, содержащий текущий момент времени. Получите объект с датой, содержащий 15 число текущего месяца. Сравните два этих объекта и определите, прошла ли уже половина месяца или нет.
let date = new Date();
let halfwayDate = new Date(date.getFullYear(), date.getMonth(), 15, 0, 0, 0, 0);
if (date >= halfwayDate) {
  console.log("Прошла уже половина месяца.");
} else {
  console.log("Еще не прошла половина месяца.");
}