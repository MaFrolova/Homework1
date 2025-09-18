function ariphmetic() {
    const operations = ["+", "-", "*", "/"];

    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    
    let result;
    let userAnswer;

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

    const userNumber = parseFloat(userAnswer);

    if (userNumber === result) {
            alert('Это верный ответ!');
        } else {
            alert(`Ошибка! Правильный ответ: ${result}`);
        }
    }

 