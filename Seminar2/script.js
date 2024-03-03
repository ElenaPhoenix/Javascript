// Task 1.
// 1.1. Создать две переменные и спросить у пользователя значения для данных переменных. Одна переменная будет хранить имя пользователя, другая его возраст.
// 1.2. Вывести на экран текст: “Добро пожаловать, `имя`. Ваше количество оборотов вокруг солнца - `возраст`.”

const userName1 = prompt("Введите имя");
const userAge1 = +prompt("Введите возраст"); // "+" превратит ВСЕ введеные данные в число. в противном случае будет NaN, не работает с BigINT
// Для проверки на NaN используется функция Number.isNaN(значение); используется в цикле if
alert(
  `Добро пожаловать, ${userName1}. Ваше количество оборотов вокруг солнца - ${userAge1}.`
);

const userAge2 = Number(prompt("Введите возраст"));
alert(
  `Добро пожаловать, ${userName1}. Ваше количество оборотов вокруг солнца - ${userAge2}.`
);

const userAge3 = Number.parseInt(prompt("Введите возраст")); // parseInt превратит в число и отбросит дробную часть, если она была, слева направо ищет числовую часть а буквенную отбрасывает
alert(
  `Добро пожаловать, ${userName1}. Ваше количество оборотов вокруг солнца - ${userAge3}.`
);

const userAge4 = Number.parseFloat(prompt("Введите возраст")); // будет сохранять дробную часть при преобразовании в число, слева направо ищет числовую часть а буквенную отбрасывает
alert(
  `Добро пожаловать, ${userName1}. Ваше количество оборотов вокруг солнца - ${userAge4}.`
);

// Task 2.
// 2.1. Найти остаток от деления переменных `a` на `b`, где a = 13, b = 5.
const number1 = 13;
const number2 = 5;
const result = number1 % number2;
console.log(result);

const number3 = 13; // определение четное или нечетное число
console.log(number3 % 2);

// 2.2. Что выведет на экран (Сначала проговорите, потом проверьте)

let number4;
console.log(number4); // = undefined

// 2.3. Что выведет на экран (Сначала проговорите, потом проверьте)

console.log("abc" * 3); // = NaN

// 2.4. Что выведет на экран (Сначала проговорите, потом проверьте)

console.log(1 / 0); // = Infinity
console.log(-1 / 0); // = Infinity
console.log(Infinity * 0); // = NaN

// 2.5. Что выведет на экран (Сначала проговорите, потом проверьте)

console.log("2" * "3"); // = 6

// Task 3.
// 3.1. Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется в консоли. Определите, в какой строке кода случилась ошибка.

// const number5; // нужно обязательно присвоить какое-то значение
// console.log(number5);

// 3.2. Необходимо вывести в консоль результат суммы переменных a = '2', b = '3'.

const a = "2";
const b = "3";
console.log(a + b); // = 23, работает только с операцией сложения для строк
console.log(+a + +b); // = 5

// 3.3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль вывести весь текст ниже, одной строкой с переносами строк:

const number6 = +prompt("Введите число 1: ");
const number7 = +prompt("Введите число 2: ");

console.log(`Сумма чисел равна ${number6 + number7}.
Разность чисел равна ${number6 - number7}.
Произведение чисел равно ${number6 * number7}.
Частное чисел равно ${number6 / number7}.
Остаток от деления чисел равен ${number6 % number7}.`);

// Task 4.
// 4.1. Не запуская код, определите, что выводится в консоль:

console.log(String(true)); // = true
console.log('a' + true); // = atrue, если есть при сложении строка = получим строку
console.log(Number(true)); // = 1
console.log(true + 1); // = 2, так как нет строки, все превращается в число
console.log(true + true); // = 2, так как нет строки, все превращается в число
console.log(true - true); // = 0
console.log(String(true) + Number(true)); // = true1

const yourName = prompt("Ваше имя", "");
if (yourName === null) {
    alert("Ввод отменен");  // Пользователь отменил ввод
} else {
    alert(`Добро пожаловать на сайт,  ${yourName}`);   // Пользователь ввел (корректные) данные
}

// Task 5.
// 5.1. Пользователь с клавиатуры вводит число. Необходимо создать условный оператор, который выведет одну из следующих строк в консоль: “Число больше 5”, “Число меньше 5”, либо “Число равно 5”.

const number8 = prompt("Введите число: ");

if (number8 > 5) { // Вариант1, упрощенный, проверяем только числа
    alert("Число больше 5");
} else if (number8 < 5) {
    alert("Число меньше 5");
} else {
    alert("Число равно 5");
}

const number9 = +prompt("Введите число", ""); // Вариант2, проверяем числа и строки
if (Number.isNaN(number9)) {
    alert("Нужно писать число!");
} else if (number9 > 5) {
    alert("Число больше 5");
} else if (number9 < 5) {
    alert("Число меньше 5");
} else {
    ("Число равно 5");
}

// 5.2. Создайте две переменные test1 и test2. Проверьте, равны ли их значения и выведите соответствующее сообщение.

const test1 = 5;
const test2 = 5;

if (test1 === test2) { // строгое равенство, в т.ч. проверяется тип данных
    console.log("Числа равны");
} else {
    console.log("Числа не равны");
}

console.log(test1 === test2 ? "Переменные равны" : "Переменные не равны"); // Тернарный оператор

// 5.3. Пользовать с клавиатуры вводит 2 числа, необходимо определить, какие из двух чисел минимальное и вывести в консоль строку “Минимальное число `число`”.

const number10 = +prompt("Введите число 1: ");
const number11 = +prompt("Введите число 2: ");

if (number10 > number11) {
    console.log(`Минимальное число ${number11}`);
} else {
    console.log(`Минимальное число ${number10}`);
}

console.log(Math.min(number10, number11)); // Вариант2

console.log(2 ** 6); // = 2^6

// 5.4. Попросить пользователя ввести число, которое будет больше нуля и меньше 15. Если пользователь ввел значение, о котором его попросили, необходимо вывести сообщение “Спасибо за число `число`.”, в противном случае, вывести сообщение: “А вы, я смотрю, хулиганите! `число` - неверное значение.”

const number12 = +prompt("Введите число от 1 до 15: ");

if (number12 > 0 && number12 < 15) { // && - логический оператор И, & - бинарный оператор И
    console.log(`Спасибо за число ${number12}`);
} else {
    console.log(`А вы, я смотрю, хулиганите! число ${number12}`);
}

// Task 6. Нужно получить разряд единиц у числа

const number13 = 2367;
console.log(number13 % 10);
console.log(Math.trunc(number13 / 10) % 10);
console.log(Math.trunc(number13 / 100) % 10);
