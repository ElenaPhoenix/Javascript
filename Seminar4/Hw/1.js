"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
        console.log(`${array[i]} - это ноль`);
        continue;
    }
    if (array[i]%2 === 0) {
        console.log(`${array[i]} - четное число`);
        continue;
    }
    console.log(`${array[i]} - нечетное число`);
}