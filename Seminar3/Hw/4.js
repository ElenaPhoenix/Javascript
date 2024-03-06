"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

const n1 = +prompt("Введите первое число");
const n2 = +prompt("Введите второе число");

// Демонстрировать не обязательно, но мне нравится видеть результаты работы кода :)
summationOfNumbers(n1, n2); 
subtractionOfNumbers(n1, n2);
multiplicationOfNumbers(n1, n2);
divisionOfNumbers(n1, n2);


function summationOfNumbers(number1, number2) {
    return console.log(number1 + number2);
}

function subtractionOfNumbers(number1, number2) { // Сделала согласно условию задачи, вычитается из большего меньшее.
    if (number1 > number2) {
        return console.log(number1 - number2);
    } else {
        return console.log(number2 - number1);
    }
}

// function subtractionOfNumbers(number1, number2) { // Компактный вариант предыдущей функции
//     if (number1 > number2) {
//         return number1 - number2;
//     }
//     return number2 - number1;
// }

function multiplicationOfNumbers(number1, number2) {
    return console.log(number1 * number2);
}

function divisionOfNumbers(number1, number2) {
    if (number2 !== 0) {
        return console.log(number1 / number2);
    } else {
        return console.log("Делить на ноль нельзя!");
    }
}