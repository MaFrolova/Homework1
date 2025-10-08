//Game1
function game1() {
    
    let randomNumber = Math.floor(Math.random() * 100) + 1;
        
    while (true) {
        let guessNumber = prompt("Угадай число от 1 до 100\n");

        if (guessNumber === null) {
            alert("Игра отменена");
            break;
        }

        guessNumber = Number(guessNumber);

            if (guessNumber === randomNumber) {
                alert("Поздравляю, ты угадал число!");
                break;

            } else if (guessNumber > randomNumber) {
                alert("Твое число больше загаданного, попробуй еще!");

            } else {
                alert("Твое число меньше загаданного, попробуй еще!");
            }
        }

console.log(randomNumber);
}

//Game2
function ariphmetic() {
    const operations = ["+", "-", "*", "/"];

    const operation = operations[Math.floor(Math.random() * operations.length)];
        
    let a, b, result;
    let userAnswer;
    
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;

    switch (operation) {
        case '+':
            userAnswer = prompt (`Сложите ${a} + ${b}`);
            result = a + b;
            break;

        case '-':
            if (a < b) {
                [a, b] = [b, a];
            }
            userAnswer = prompt (`Вычтите ${a} - ${b}`);
            result = a - b;
            break;

        case '*':
            userAnswer = prompt (`${a} умножить на ${b}`);
            result = a * b;
            break;

        case '/':
            if (a < b) {
                [a, b] = [b, a]; 
            }
            if (a % b !== 0) {
                return arithmetic();
            }
            userAnswer = prompt (`${a} разделить на ${b}`);
            result = a / b;
            break;
    }

    if (userAnswer === null) {
        alert('Игра отменена');
        return;
    }

    const userNumber = parseFloat(userAnswer);

    if (userNumber === result) {
            alert('Это верный ответ!');
        } else {
            alert(`Ошибка! Правильный ответ: ${result}`);
        }
    }
    

//Game3 
function turnText() {
    let userInput;
    do {
        userInput = prompt("Введите ваше слово или фразу");
        
        if (userInput === null) {
            alert("Игра отменена");
            return;
        }

        if (userInput === '') {
            alert("Вы ничего не ввели! Пожалуйста, введите текст.");
        } 
        
        else if (!isNaN(userInput)) {
            alert("Вы ввели число. Пожалуйста, введите слово или фразу.");
        } 
        else {
            const reversedText = userInput
                .split('')  
                .reverse()   
                .join('');   
            
            alert(`Исходный текст: "${userInput}"\nПеревернутый текст: "${reversedText}"`);
            break;
        }
    } while (true);
}

//Game4
function stone() {
    const options = ['камень', 'ножницы', 'бумага'];  
    
    let userChoice;
    do {
      userChoice = prompt('Введите вариант: Камень, ножницы, бумага!');
      if (userChoice === null) {
        alert("Игра отменена");
        return;
    }

    userChoice = userChoice.toLowerCase();

    if (!options.includes(userChoice)) {
        alert("Некорректный ввод! Пожалуйста, введите 'камень', 'ножницы' или 'бумага'.");
      }
    } while (!options.includes(userChoice));
    
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    
    let result;
    if (userChoice === computerChoice) {
      result = "Ничья!";
    } else if (
      (userChoice === "камень" && computerChoice === "ножницы") ||
      (userChoice === "ножницы" && computerChoice === "бумага") ||
      (userChoice === "бумага" && computerChoice === "камень")
    ) {
      result = "Вы выиграли!";
    } else {
      result = "Компьютер выиграл!";
    }
  
    alert(
      `Вы выбрали: ${userChoice}\nКомпьютер выбрал: ${computerChoice}\n${result}`
    );
  }

//Game5
function quizGame() {
    
    let userAnswer;
    let startMessage;
    let pointCounter = 0;
    let sum;

    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", " 2. Синий", " 3. Зеленый"],
            correctAnswer: 2 
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", " 2. Семь", " 3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", " 2. Пять", " 3. Шесть"],
            correctAnswer: 2
        }
    ];

    do {
    startMessage = confirm("Хотите поиграть в игру Викторина?");
    if (startMessage === true) {
            for (let i = 0; i < quiz.length; i++) {
                userAnswer = prompt(`
                    Ответьте на вопрос: ${quiz[i].question}
                    Варианты ответа: 
                    ${quiz[i].options.join('\n')}
                    (введите номер ответа или оставьте поле пустым для отмены)`);
                if (userAnswer === null || userAnswer === '') {
                    alert("Игра отменена");
                    return; 
                }
            
                userAnswer = Number(userAnswer);

                if (userAnswer === quiz[i].correctAnswer) {
                    alert("Правильно!");
                    pointCounter++;
                    sum = pointCounter;
                    alert(`Вы получили ${pointCounter} балл(а)`);
                    
                } else {
                    alert("Неправильный ответ!");
                }
            }
            alert(`Вы набрали всего: ${sum} балл(а). Поздравляем!`);
    } else {
        alert("Игра отменена. Всего хорошего!");
        break;
    }
   } while (true);    
}
   
//Game6
let clicksCounter = 0;

function getRandomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
}
function changeBlockColor() {
    const block = document.querySelector(".mini-game");
    block.style.backgroundColor = getRandomRgb();
    clicksCounter ++;
    console.log('Количество кликов:', clicksCounter); 
    if(clicksCounter >= 10) {
        endGame();
    }
}   
function endGame() {
    const block = document.querySelector(".mini-game");
    block.style.backgroundColor = "";
        alert("Игра завершена!");
    clicksCounter = 0;
 }

