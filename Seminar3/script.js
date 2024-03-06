// Task 1. 
// 1.1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна вывести в консоль строку:
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."

function printHello(firstName, lastName, age) {
    console.log(`Привет, ${firstName} ${lastName}. Вы уже большой, вам ${age}.`);
}
printHello("Kalys", "Bakyt", 27);

// 1.2. Создайте функцию, которая принимает число, а возвращает квадрат переданного ей числа.

function square(number) {
    return number ** 2;
}
const result = square(+prompt("Введите число"));
console.log(result);

// 1.3. Создайте функцию, которая принимает число. Функция должна вывести в консоль '+++', если число положительное, либо '---', если число было отрицательное. В случае, если было передано не число, либо ноль, функция ничего не должна выводить.

function digit(number) {
    if (!Number.isFinite(number)) {
        return;
    }
    if (number < 0) {
        console.log("---");
    } else if (number > 0) {
        console.log("+++");
    }
}
digit("5");

// Task 2.
// 2.1. Создайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел. Создайте три переменные, со случайными значениями и продемонстрируйте работу данной функции.

const n1 = Math.floor(Math.random() * 100); // Math.random() не принимает переменных
console.log(n1);

const n2 = Math.floor(Math.random() * 100);
console.log(n2);

const n3 = Math.floor(Math.random() * 100);
console.log(n3);

sum(n1, n2, n3);

function sum(number1, number2, number3) {
    console.log(number1 + number2 + number3);
}

// 2.2. Расскажите, каким будет результат каждого из вызовов функции.

func(2); // = 4
func(3); // = 9
func(); // = 25, 5 - значение по умолчанию

function func(num = 5) {
  console.log(num * num);
}

// Task 3.
// 3.1. Создайте функцию, которая принимает число, а возвращает квадратный корень переданного числа. С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную сумму в консоль.

function sqrt(number) {
    return Math.sqrt(number);
}
console.log(sqrt(3) + sqrt(4));

// 3.2. Создайте функцию, которая находит минимальное число из 2х переданных аргументов функции и вернет найденное значение.

function findMin(ar1, ar2) {
  // return ar1 < ar2 ? ar1 : ar2;
    return Math.min(ar1, ar2);
}
console.log(findMin(8,-5));

// Task 4.
// 4.1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function getweekday(number) {
    switch(number) {
        case 1: return "Понедельник";
        case 2: return "Вторник";
        case 3: return "Среда";
        case 4: return "Четверг";
        case 5: return "Пятница";
        case 6: return "Суббота";
        case 7: return "Воскресенье";
        default:
    return "Некорректный день недели";
    }
}
console.log(getweekday(4));

function getDayOfWeek(dayNumber) { // Другой вариант
    switch (dayNumber) {
        case 1:
            return "Понедельник";
        case 2:
            return "Вторник";
        case 3:
            return "Среда";
        case 4:
            return "Четверг";
        case 5:
            return "Пятница";
        case 6:
            return "Суббота";
        case 7:
            return "Воскресенье";
        default:
            return "Некорректный день недели";
    }
}

// 4.2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в зависимости от времени суток (утро, день, вечер, ночь), например: "Добрый день, Иван." или "Доброй ночи, Иван.".

function sayHello(firstName) {
    const currentDate = new Date();
    const hours = currentDate.getHours();

    if (hours > 21 || hours < 5) {
        return `Доброй ночи, ${firstName}.`;
    } else if (hours < 12) {
        return `Доброе утро, ${firstName}`;
    } else if (hours < 18) {
        return `Добрый день, ${firstName}`;
    } else {
        return `Добрый вечер, ${firstName}`;
    }
}
sayHello("Elena");
