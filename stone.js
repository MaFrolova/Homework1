function stone() {
    const options = ['камень', 'ножницы', 'бумага'];       
    const compIndex = Math.floor(Math.random() * options.length);
    const compAnswer = options[compIndex];
    
    let userChoice = prompt('Введите вариант: Камень, ножницы, бумага!').toLowerCase();
    
    const results = (user, computer) => {
        if (!options.includes(user)) {
            return 'Вы ввели что-то не то!';
        }
        
        if (user === computer) {
            return `Компьютер выбрал "${compAnswer}". Вы выбрали "${userChoice}".
            Ничья!`;
        }
        
        const winAnswer = {
            камень: 'ножницы',
            ножницы: 'бумага',
            бумага: 'камень'
        };
        
        if (winAnswer[user] === computer) {
            return `Компьютер выбрал "${compAnswer}". Вы выбрали "${userChoice}".
        Вы выиграли!`;
        }
        
        return `Компьютер выбрал "${compAnswer}". Вы выбрали "${userChoice}".
        Вы проиграли! `;
    };

    const result = results(userChoice, compAnswer);
    console.log(result);
    alert(result);
}
   