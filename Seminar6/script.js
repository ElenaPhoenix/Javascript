/* Task 1. <div id="block">
	<p>1</p>
	<p>2</p>
</div>
1.1. Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
*/
// const getEl= document.querySelector("div#block");
// console.log(getEl);

/* 1.2. Получите ссылку на первый абзац с классом www. и вывести его в консоль
<p class="www">text 1</p>
<p class="www">text 2</p>
*/
// console.log(document.querySelectorAll("div#block p.www")[0].innerHTML);
// console.log(divEl.querySelectorAll("p.www")[0].innerHTML); // второй способ

/* Task 2. 
2.1. Дан тег <a class="link" href="#">link text html</a>
Вам необходимо поменять текст внутри ссылки на “link text js”
Заменить href, на значение https://developer.mozilla.org/ru/ 
*/
// const linkEl = document.querySelector("a.link"); // класс вызываем через точку, id через #
// linkEl.innerHTML = "link text js";
// linkEl.href = "https://developer.mozilla.org/ru/"

/*2.2. Дан тег <img class="photo" src="" alt=""> 
Вам необходимо с помощью js поменять значение src на любое изображение из интернета
*/
// const imgEl= document.querySelector("img.photo");
// imgEl.src= "https://oir.mobi/uploads/posts/2019-12/1576848118_3-3.jpg"

/* Task 3.
Дан тег <div class="content"></div> 
Создайте новый элемент p
Добавьте в него текст “Новый текстовый элемент”
Добавьте созданный элемент внутри <div class="content"></div>
Удалите добавленный узел 
*/
// const divEl = document.querySelector("div.content");
// const pEl = document.createElement("p");
// pEl.innerHTML = "Новый текстовый элемент";
// divEl.appendChild(pEl);
// pEl.remove();

/* Task 4.
Создать элемент button, добавить в блок <div class="content"></div>
При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку
*/
// const divEl = document.querySelector("div.content");
// const btnEl = document.createElement("button");
// let count = 0;
// divEl.appendChild(btnEl);
// btnEl.innerHTML = "Нажми на меня";
// btnEl.onclick = function(e) {
//     count++; //
//     console.log(count);
// };

/* Task 5.
Дан тег <div class="content"></div> 
Создайте с помощью javascript новый элемент button
Добавьте текст для кнопки “Отправить”
При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
*/
const divEl = document.querySelector("div.content");
const btnEl = document.createElement("button");
divEl.appendChild(btnEl);
btnEl.innerHTML = "Нажми на меня";
btnEl.classList.add("btn");
btnEl.style.color = "blue"; // - здесь тоже можно стили создавать, но не приветствуется, стили прописываются в .css

// btnEl.onclick = function(e) { // - не имея доступа к самому элементу, функции присваиваем элемент, который является нашей кнопкой
//     console.log(e.target); // - .target -свойство, которое хранит тот элемент, на который кликнули
//     e.target.innerHTML = "Текст отправлен";
// }

divEl.appendChild(btnEl);
btnEl.onclick = function (e) {
    btnEl.innerHTML = "Текст отправлен";
}