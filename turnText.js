function turnText() {
    let userInput;
    do {
        userInput = prompt("Введите ваше слово или фразу:");
        
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
