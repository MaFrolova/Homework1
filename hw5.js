//Задание 1

function number(a, b) {
  if (a < b) {
    return a;
  } 
  else {
    return b;
  }
}
console.log(number(8, 4));
console.log(number(6, 6));

//Задание 2

function isEven(number) {
    if (number % 2 === 0) {
        return "Число четное";
    } else {
        return "Число нечетное";
    }    
}
console.log(isEven(7));
console.log(isEven(2));


//Задание 3 

function printSquare(number) {
  console.log(number * number);
}

function getSquare(number) {
  return number * number;
}

//Задание 4

function age() {
    let age = +prompt('Сколько тебе лет?');

   if (age < 0) {
    alert("Вы ввели неправильное значение");
   } else if (age >= 0 && age <= 12) {
    alert("Привет, друг!");
   } else {
    alert('Добро пожаловать!');
   }
}

//Задание 5

function calc(a, b) {
    if (isNaN(parseFloat(a)) || isNaN(parseFloat(b))) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}
console.log(calc(5, 10));

//Задание 6

function num () {
  let number = prompt('Введите число')
  
  if (isNaN(number)) {
    return "Переданный параметр не является числом";

  } else {    
    return `${number} в кубе равняется ${number ** 3}`;
  }
}
console.log(num());

//Задание 7

const circle1 = {
  radius: 0,
  getArea: function () {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter: function () {
    return 2 * Math.PI * this.radius;
  },
};

const circle2 = {
  radius: 0,
  getArea: function () {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter: function () {
    return 2 * Math.PI * this.radius;
  },
}

