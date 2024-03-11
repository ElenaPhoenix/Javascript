// Task 1.
// 1.1. Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов.

const elements1 = [1, 2, 3];

console.log(elements1[0]);
console.log(elements1[1]);
console.log(elements1[2]);

// 1.2. Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.

const elements2 = [1, 4, "text", true];
console.log(elements2.length);

// 1.3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.

const elm1 = ['a', 'b', 'c'];
console.log(elm1);

elm1[0] = 1;
elm1[1] = 2;
elm1[2] = 3;

console.log(elm1);

// Task 2.
// 2.1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.

const elm2 = [1, 2, 3];
console.log(elm2);

elm2[0]++;
elm2[1]++;
elm2[2]++;

console.log(elm2);

// 2.2. Узнайте длину следующего массива и объясните почему такое значение:

const arr1 = [];
arr1[3] = 'a';
arr1[8] = 'b';

console.log(arr1); // будет 9 элементов в массиве


// 2.3. Пусть дан такой массив: `[1, 2, 3]`. Добавьте ему в конец элементы 4 и 5.

const arr2 = [1, 2, 3];

arr2.push(4);
arr2.push(5);
arr2.push(5, 6, 7, 8,);

console.log(arr2);

// 2.4. Создайте произвольный массив из 5 элементов, удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.

const arr3 =[];

for (let index = 0; index < 5; index++) {
    arr3.push(Math.floor(Math.random() * 100));
}
console.log(arr3);
console.log(arr3.length);
arr3.pop();
arr3.pop();
console.log(arr3);
console.log(arr3.length);

// Task 3.
// 3.1. С помощью цикла for выведите в консоль числа от 11 до 33.

for (let index = 11; index < 33; index++) {
    console.log(index);
}

// 3.2. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 100 включительно.

for (let index = 1; index < 101; index++) {
    if (index % 2 !== 0) {
        console.log(index);
    }
}

for (let index = 1; index < 101; index += 2) { // 2 вариант
    console.log(index);
}

// 3.3. С помощью цикла for выведите в консоль числа от 100 до 0.

for (let index = 100; index > 0; index--) {
    console.log(index);
}

// 3.4. Создать переменную с заданным числом. Умножайте число на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится?
// Посчитайте количество итераций, необходимых для этого.

const num = 105;
let count = 0;

for (let index = num; index <= 1000; index *= 3) {
    // console.log(index);
    count++;
}
console.log(count);

// Task 4.
// 4.1. Создать массив `[2, 5, 9, 15, 1, 4]`. Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

const arr4 = [2, 5, 9, 15, 1, 4];

for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] > 3 && arr4[i] < 10) {
    console.log(arr4[i]);
    }
}

// 4.2. Найдите сумму четных чисел от 2 до 100.

let res = 0;

for (let i = 2; i < 100; i += 2) {
    res = res + i;
    console.log(res);
}
console.log(res);

// 4.3. Создать массив `[2, 5, 9, 3, 1, 4]`. Найдите сумму элементов этого массива.

let array = [2, 5, 9, 3, 1, 4];
let res2 = 0;


// array.forEach((element, i) =>  // В foreach невозможно прервать, break не работает, перебираем только весь массив. можем получать индексы
array.forEach(element => {
    res2 = res2 + element;
});
console.log(res2);


// for (const elm of array) { // 2й cпособ. FORof - получаем ЗНАЧЕНИЯ; elm - константа для итерации; break можно использовать; перебирет все значения массива.
//     res2 = res2 + elm;
// }
// console.log(res2);


// for (const i in array) { // 3й способ. FORin - получаем i индекс
//     res2 = res2 + array[i];
// }
// console.log(res2);

// 4.4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

let line = '-';

for (let i = 1; i < 10; i++) {
    line = line + i + '-';
}
console.log(line);

// 4.5. Создать массив `[2, 5, 9, 0, 3, 1, 4]`. Запустите цикл, который будет по очереди выводить элементы этого массива в
// консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.

let array2 = [2, 5, 9, 0, 3, 1, 4];

for (let i = 0; i < array2.length; i++) {
    if (array2[i] === 0) {
        break;
    }
    console.log(array2[i]);
}

// Task 5.
// 5.1. Создать массив из 10 случайных чисел от 0 до 100 включительно. Необходимо вывести в консоль все числа, которые делятся и на 2, и на 3.

const arr5 =[];

for (let i = 0; i < 10; i++) {
    arr5.push(Math.floor(Math.random() * 100));
}

for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] % 6 === 0) {
        console.log(arr5[i]);
    }
}

// 5.2. Дан массив: `[1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]`. Подсчитайте количество цифр 3 в этом массиве.

let arr6 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count2 = 0;

arr6.forEach(element => {
    if (element === 3) {
        count2++;
    }
});
console.log(count2);

// 5.3. Дан массив: `[1, 2, 3, 4, 5]`. С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]
// Метод splice изменяет текущий массив

const arr7 = [1, 2, 3, 4, 5]; //  в константе нет массива, есть только ссылка где он лежит в памяти, ссылка остается не изменной, нельзя присвоить arr другой массив

let res3 = arr7.splice(1, 2);
console.log(arr7);

// Task 6.* filter()

const arr8 = [15, 95, 63, 58, 25];

const array3 = arr8.filter((element) => { // filter - вернет новый массив
    if (element > 25) {
        return true;
    }
    return false;
});

// const array3 = arr8.filter((element) => { // Другой вариант написания
//     return element > 25;
// });


// const array3 = arr8.filter((element) => element > 25); // Другой вариант написания
// console.log(array3);

// метод filter
// (method) Array<number>.filter(predicate: 
// (value: number, index: number, array: number[]) => unknown, thisArg?: any): number[] (+1 overload)