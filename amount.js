const amount = {
    name: 0,
    surname: 0,
    drink: 0,
};

const btn = document.querySelector(".btn");
const inputName = document.querySelector("#name");
const inputSurname = document.querySelector("#surname");
const inputDrink = document.querySelector("#drink");
resultElement = document.querySelector(".result");
let sum = 0

btn.addEventListener("click", function(){
    user.name = inputName.value;
    user.surname = inputSurname.value;
    user.drink = inputDrink.value;
    sum = parseInt(user.name) + parseInt(user.surname) + parseInt(user.drink);
    resultElement.textContent = `${sum} руб.`
    
})