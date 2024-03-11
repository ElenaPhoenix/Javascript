// Task 1.
// 1.1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран “Вторник”.

const daysOfWeek = { // У объектов ключи всегда являются строками или символами
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
};

console.log(daysOfWeek[2]);

// 1.2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль фамилию, имя и возраст одной строкой.

const user1 = {
    name: "Павел", 
    surname: "Тарасов", 
    age: 33,
};

console.log(`${user1.name} ${user1.surname} ${user1.age}`);
console.log(user1);

// 1.3. Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры.

const user2 = {
    name: "Павел", 
    secondName: prompt('Введите отчество: '),
    surname: "Тарасов", 
    age: 33,
};

console.log(`${user2.name} ${user2.secondName} ${user2.surname} ${user2.age}`);

// 1.4. Удалите свойство surname.

const user3 = {
    name: "Павел", 
    secondName: prompt('Введите отчество: '),
    surname: "Тарасов", 
    age: 33,
};

delete user3.surname; // никогда с помощью delete не удалять свойства из массива, т.к. полного удаления не произойдет, останутся пустые ячейки
console.log(`${user3.name} ${user3.secondName} ${user3.surname} ${user3.age}`);


// Task 2.
// 2.1. Создайте два массива: первый с названиями дней недели, а второй - с их порядковыми номерами. С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.

const arrDay = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arrNum = [1, 2, 3, 4, 5, 6, 7];

const daysOfWeek2 = {};
for (let i = 0; i < arrDay.length; i++) {
    daysOfWeek2[arrNum[i]] = arrDay[i];
}

console.log(daysOfWeek2);

// 2.2. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

const obj1 = {
    x: 1, 
    y: 2, 
    z: 3,
};

for (const key in obj1) {
    obj1[key] = obj1[key] ** 2;
}
console.log(obj1);

// Task 3.

const obj2 = {
    iodsuf: {
      asd: 1,
      zxc: {
        khvxc: {
          ncxvm: 10,
        }
      },
      qwd: 3,
    },
    gerg: {
      joij: {
        shdjk: 99
      },
      kjn: 5,
      iyu: 6,
    },
    xcnkv: {
      oirje: 7,
      iuhdv: 8,
      nmbb: 9,
    },
    jgjgj: 34,
  }

// Найдите сумму всех чисел, приведенного объекта.

function summFuncRecurs(obj2) {
    let summ = 0;

    // перебрать в объкте все свойства
    for (const key in obj2) {
        if (typeof obj2[key] === "number") {
            summ = summ + obj2[key];
        } else {
            summ += summFuncRecurs(obj2[key]);
        }
    }
    return summ;
}

console.log(summFuncRecurs(obj2));


// Task 4.
// 4.1. Создайте объект riddle.
// 4.2. Добавьте свойства question со значениями(текст загадки) и 
// answer (ответ на загадку).
// 4.3. Создайте метод askQuestion который спрашивает у пользователя вопрос 
// question и сравнивает ответ с answer.
// В случае верного ответа, необходимо поздравить пользователя.
// В случае, если пользователь ответил неверно, необходимо подсказать, 
// подсказок может быть несколько.
// Если пользователь ответил неверно после всех подсказок, то в консоль 
// выводится текст: “вы проиграли”.

const riddle = {
    question: 'Зимой и летом одним цветом',
    answer: 'ёлка',
    help: ['Это зеленая', 'Это колючая'],
    userWin() { // повторяющийся метод if
        const userAnsver = prompt(`Введите ответ на загадку: ${this.question}`);
        if (userAnsver.toLowerCase() === this.answer) {
            console.log('Поздравляем, вы ответили верно!');
            return true; // уходим из цикла
        } 
    },
    askQuestion() { // создаем метод 
        if (this.userWin()) {
            return   
        }
        console.log('Вы ответили неверно :(');
      
        for (let i = 0; i < this.help.length; i++) {
            console.log(this.help[i]);
            if (this.userWin()) {
                return   
            }
        }  
        console.log('Да ладно? :(');
    }
};
riddle.askQuestion();

/*
Задание требует дорешать, не дает 3 попытку, выдает сразу что проиграли на второй попытке

const riddle = {
        question: 'Зимой и летом одним цветом',
        answer: 'ёлка',
        help: ['Это зеленая', 'Это колючая'],
}

riddle.askQuestion = function() {
    let userAnswer;
    let i = 0;
    do {
        userAnswer = prompt(`${this.question}`);
        if (userAnswer.toLowerCase() === this.answer) {
            console.log('Вы выиграли');
            return
        } else {
            console.log(`Подумайте еще. Вот подсказка: ${this.help[i]}`);
            i++;
        }
    } while (userAnswer.toLowerCase() !== this.answer  && i < this.help.length + 1);
    console.log('Вы самое слабое звено!');
}
riddle.askQuestion();
*/

// 3 вариант Преподавателя

/*
const riddle = {
    question: 'Зимой и летом одним цветом',
    answer: 'ёлка',
    help: ['Это зеленая', 'Это колючая'],
}

riddle.askQuestion = function () {
    let userAnswer;
    let i = 0;
    do {
      userAnswer = prompt(`${this.question}`);
      if (userAnswer.toLowerCase() === this.answer) {
        console.log('Вы выиграли');
        return
      } if (i < this.help.length) {
        console.log(`Подумайте еще. Вот подсказка: ${this.help[i]}`);
        i++;
      } else {
        break;
      }
    } while (userAnswer.toLowerCase() !== this.answer);
    console.log('Вы самое слабое звено!');
  }
  riddle.askQuestion();
  */