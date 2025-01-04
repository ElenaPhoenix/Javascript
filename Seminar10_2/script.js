/* Task 1.
Дан макет
https://www.figma.com/file/mZwLT9fKktsWuVyfQRoST1/sh
op-(Copy)-(Copy)?node-id=73%3A140 в котором
представлены товары на странице корзины
Необходимо создать файл data.js в котором создать
переменную dataProducts в которую присвоить JSON
данные по товарам.
Вам нужно самостоятельно создать JSON данные (не
забыть про кавычки для ключей и значений
Добавить все данные из макета, чтобы в дальнейшим по
ним мы смогли создать вёрстку
*/
const data = JSON.parse(DataJS);
const cartConteiner = document.querySelector("div.conteinerCarts");

data.forEach((element) => {
    const tempEl = document.getElementById("cartTemplate");
    const clone = tempEl.content.cloneNode(true);

    clone.querySelector("img.cart__img").src = element.imgUrl;
    clone.querySelector("span.cart__name").innerHTML = element.name;
    clone.querySelector("span.cart__category").innerHTML = element.category;
    clone.querySelector("span.cart__priceSelect").innerHTML = element.price;
    clone.querySelector("span.cart__colorSelect").innerHTML = element.color;
    clone.querySelector("span.cart__sizeSelect").innerHTML = element.size;
    clone.querySelector("span.cart__quantitySelect").innerHTML = element.quantity;

    cartConteiner.appendChild(clone);
});