function stone() {

    const userAnswer = prompt('Введите вариант: Камень, ножницы, бумага!')
    const options = ['камень', 'ножницы', 'бумага']
    const compAnswer = options[Math.floor(Math.random() * options.length)];
        if (!userAnswer) {
        alert('Игра отменена!')
    
        return
        }

        
    if (userAnswer.toLowerCase() === compAnswer.toLowerCase()) {
        alert('Ничья');
    }
    else {
    if (userAnswer.toLowerCase() === options[0] && compAnswer.toLowerCase() === options[1]) {
        alert('Вы выиграли!');
    }

    else if (userAnswer.toLowerCase() === options[0] && compAnswer.toLowerCase() === options[2]) {
        alert('Вы проиграли!');
    }

    else if (userAnswer.toLowerCase() === options[1] && compAnswer.toLowerCase() === options[0]) {
        alert('Вы проиграли!');
    } 
    else if (userAnswer.toLowerCase() === options[1] && compAnswer.toLowerCase() === options[2]) {
        alert('Вы выиграли!');
    } 
    else if (userAnswer.toLowerCase() === options[2] && compAnswer.toLowerCase() === options[0]) {
        alert('Вы выиграли!');
    } 
    else if (userAnswer.toLowerCase() === options[2] && compAnswer.toLowerCase() === options[1]) {
        alert('Вы проиграли!');
    } 
    else {
        alert('Вы ввели что-то не то!')
        }
    }

  console.log(compAnswer);
}
