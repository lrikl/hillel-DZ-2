'use strict';

const userNameInput = prompt('Привіт, як тебе звуть?');
const userAgeInput = prompt('Скільки тобі років?');
const userCityInput = prompt('З якого ти міста?');

if (
    userNameInput === null || userAgeInput === null || userCityInput === null 
    || !userNameInput.trim() || !userAgeInput.trim() || !userCityInput.trim()
) {
    alert("Шкода :( але поля все ж таки усі заповнити треба...")
}
else if (isNaN(userAgeInput)) {
    alert('Вік невірний (пиши тільки цифри)')
}
else if (!isNaN(userNameInput.trim()) || !isNaN(userCityInput.trim())) {
    alert('Ім\'я та назва міста не може бути числом!')
}
else if (userAgeInput < 1 || userAgeInput > 200) {
    alert('Вибач, але є обмеження по віку (1-200)')
}
else if (
    userNameInput.trim().length < 2 || userNameInput.trim().length > 30 
    || userCityInput.trim().length < 2 || userCityInput.trim().length > 30) {
    alert('Ім\'я та назва міста повинні бути від 2 до 30 символів!')
}
else {
    const userName = userNameInput.trim();
    const userAge = parseInt(userAgeInput.trim());
    const userCity = userCityInput.trim();

    alert(`Дякую! Ось що я про тебе зберіг:\n тебе звати: ${userName},\n тобі повних років: ${userAge},\n а живеш ти у місті: ${userCity}`)
}