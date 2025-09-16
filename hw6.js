//Задание 1
const arr1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < array.length; i++) {
    console.log(arr1[i]);
    
    if (arr1[i] === 10) {
        break;
    }
}

//Задание 2
const arr2 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < array.length; i++) {
    if (arr2[i] === 4) {
        console.log(i);
        break;
    }
}

//Задание 3
const arr3 = [1, 3, 5, 10, 20];
console.log(arr3.join(' '));

//Задание 4
const arr4 = [];
for (let i = 0; i < 3; i++)  {

    const insertArr4 = [];
    for (let i = 0; i < 3; i++)  {
        insertArr4.push(1);
        }
        
  arr.push(insertArr4);      
}

console.log(arr4);

// Задание 5
const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

// Задание 6
const arr6 = [9, 8, 7, 'a', 6, 5];
const numerArr = arr6.filter(item => typeof item === 'number');
numerArr.sort((a, b) => a - b);
console.log(numerArr);

// Задание 7
const arr7 = [9, 8, 7, 6, 5];
let userAnswer = Number(prompt("Введите число!"));
if arr7.includes(userAnswer)) {
    console.log("Угадал");
} else {
    console.log("Не угадал");
}

// Задание 8
const str = 'abcdef';
str = str.split('');
console.log(str);
str.reverse();
str = str.join('');
console.log(str);

// Задание 9
const arr8 = [[1, 2, 3], [4, 5, 6]];
const simpleArr = arr8.flat();
console.log(simpleArr);

// Задание 10
const arr9 = [3, 7, 2, 9, 5];

for (let i = 0; i < arr9.length - 1; i++) {
    const sum = arr9[i] + arr9[i + 1];
    
console.log(`Сумма элементов ${arr9[i]} и ${arr9[i + 1]}: ${sum}`);
}

// Задание 11
function getSquaredArray(arr) {
  return arr.map(num => num * num);
}
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = getSquaredArray(numbers);

console.log(squaredNumbers);

// Задание 12
function getWordLengths(arr) {
  return arr.map((word) => word.length);
}
const words = ["apple", "banana", "oranges"];
const lengths = getWordLengths(words);

console.log(lengths);

// Задание 13
function getNegativeNumbers(arr) {
  return arr.filter(num => num < 0);
}
const numbers1 = [3, -1, -4, 2, 0, -7, 10];
const negativeNumbers = getNegativeNumbers(numbers1);

console.log(negativeNumbers);  

// Задание 14
function generateRandomArray(length, min, max) {
  const array = [];
  for (let i = 0; i < length; i++) {
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(randomValue);
  }
  return array;
}
const randomArray = generateRandomArray(10, 0, 10);
const evenNumbers = randomArray.filter((num) => num % 2 === 0);

console.log("Исходный массив:", randomArray);
console.log("Массив с четными числами:", evenNumbers);


// Задание 15
function generateRandomArray(length, min, max) {
  const array = [];
  for (let i = 0; i < length; i++) {

    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(randomValue);
  }
  return array;
}

const randomArray1 = generateRandomArray(6, 1, 10);

const sum = randomArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

const average = sum / randomArray.length;

console.log("Исходный массив:", randomArray);
console.log("Среднее арифметическое:", average);