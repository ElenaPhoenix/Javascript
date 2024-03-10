"use strict";

/*
1. Необходимо вывести в консоль массив продуктов, в котором есть хоть одна
фотография, используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене,
начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести
отсортированный массив в консоль.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

// const products = [
//   {
//     id: 3,
//     price: 127,
//     photos: ["1.jpg", "2.jpg"],
//   },
//   {
//     id: 5,
//     price: 499,
//     photos: [],
//   },
//   {
//     id: 10,
//     price: 26,
//     photos: ["3.jpg"],
//   },
//   {
//     id: 8,
//     price: 78,
//   },
// ];

// const productsFiltered = products.filter((el) => {
//   if (el.photos && el.photos.length > 0) {
//     console.log(el.id);
//   }
// });

// const arrayOfKeys = Object.keys(products);

// const keysSortedByPrice = arrayOfKeys.sort((a,b) => { // ['2', '3', '0', '1']
//   return products[a].price - products[b].price;
// });

// // не получается почему-то сортировка((
// const productsSortedByPrice = [];
// keysSortedByPrice.forEach(key => productsSortedByPrice[key] = products[key]);
// console.log(productsSortedByPrice);