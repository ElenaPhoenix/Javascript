"use strict";

/*
Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.
Обратите внимание, что в массиве должны быть изменены цены продуктов после 
выполнения метода forEach. Не нужно создавать новый массив.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

const products = [
    {
    id: 3,
    price: 200,
    },
    {
    id: 4,
    price: 900,
    },
    {
    id: 1,
    price: 1000,
    },
];

const netPrice = 0.85;

products.forEach((elm) => (elm.price = elm.price * netPrice));
console.log(products);