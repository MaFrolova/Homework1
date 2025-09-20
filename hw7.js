// Задание 1
const str = 'js';
const upperStr = str.toUpperCase(); 

console.log(upperStr); 


//Задание 2
const filterString = (arr, str) => {
    const lowerStr = str.toLowerCase();
    
    return arr.filter(item => 
        item.toLowerCase().startsWith(lowerStr)
    );
};

console.log(filterString(
    ['Томаты', 'Яблочное пюре', 'яблоко Зеленое', 'Яблочный пирог'], 'яблоко'));


//Задание 3
const num = 32.58884;
    console.log(`До меньшего целого ${Math.floor(num)}`);
    console.log(`До большего целого ${Math.ceil(num)}`);
    console.log(`До ближайшего целого ${Math.round(num)}`);


//Задание 4
const numbers = [52, 53, 49, 77, 21, 32];

const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log(`Минимальное значение: ${min}`);
console.log(`Максимальное значение: ${max}`);


//Задание 5
function getRandomNumber() {
    console.log(Math.floor(Math.random() * 10) + 1);
}

getRandomNumber();


//Задание 6
function randomArray(n) {
    const newArray = [];
    let randomNum; 
    const newArrayLenth = n / 2;
    for (let i = 0; i < newArrayLenth; i++) {
        randomNum = Math.floor(Math.random() * n);
        newArray.push(randomNum);
        
    }
    return newArray;
}
console.log(randomArray(6));


//Задание 7
function randomNun(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
console.log(randomNun(2, 7));


//Задание 8
let todayDate = new Date();
console.log(todayDate);


//Задание 9
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);


//Задание 10
function formatDate(date) {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = days[date.getDay()];
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}. Время: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));


