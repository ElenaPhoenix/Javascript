/* Task 1.
В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
Добавить кнопку отправить
При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”
*/
// const divEl = document.querySelector('div.form');
// const btnEl = divEl.querySelector('button.btn');
// const checkEl = divEl.querySelector('input.check');
// btnEl.addEventListener('click', function(e){
// console.log('123');
// if (!checkEl.checked) {
// const spanEl = document.createElement('span');
// spanEl.innerHTML = "Необходимо согласиться с условиями";
// divEl.appendChild(spanEl);
// }
// });

/* Task 2.
В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
Кнопка отправить
Если выбран чай, необходимо вывести сообщение “Чай закончился”
Если выбран кофе, необходимо вывести соообщение “кофе закончился”
*/
// const divEl = document.querySelector('div.container');
// const btnTeaEl = divEl.querySelector('input.teaBtn');
// const btnCoffeeEl = divEl.querySelector('input.coffeeBtn');
// const btnSubEl = divEl.querySelector('button.btn');
// btnSubEl.addEventListener('click', function(e){
//     if (btnCoffeeEl.checked){
//         console.log('Кофе закончился');
//     }
//     else if (btnTeaEl.checked) {
//         console.log('Чай закончился');
//     }
//     else {
//         console.log('Все в наличии');
//     }
// })

/* Task 3.
Создать поле ввода (пароль)
Кнопка отправить
Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”
*/
// const password = '123456';
// const divEl = document.querySelector('div.container');
// const inputEl = divEl.querySelector('input.password');
// const btnEl = divEl.querySelector('button.btn');
// btnEl.addEventListener('click', function (e) {
//     if (inputEl.value === password) {
//         inputEl.classList.remove('bord-red');
//         inputEl.classList.add('bord-green');
//     } else {
//         inputEl.classList.remove('bord-green');
//         inputEl.classList.add('bord-red');
//     }
// });

/* Task 4.
Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода
*/
const divEl = document.querySelector('div.container');
const inputEl = divEl.querySelector('input.input');
const h2El = divEl.querySelector('h2.h2class');
const h3El = divEl.querySelector('h3.h3class');
inputEl.addEventListener('input', function (e) {
    h2El.innerHTML = e.target.value;
});
inputEl.addEventListener('change', function (e) {
    h3El.innerHTML = e.target.value;
});


