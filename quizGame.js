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
                userAnswer = Number(prompt(`Ответьте на вопрос: ${quiz[i].question}, \nВарианты ответа: \n${quiz[i].options} \n(введите номер ответа)`));
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
        alert("Всего хорошего!");
        break;
    }
   } while (true);    
}
   