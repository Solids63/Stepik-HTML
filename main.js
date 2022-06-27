const userSurname = document.querySelector('[name="surname"]'); //получите элемент input с фамилией(*)
const userName = document.querySelector('[name="name"]'); //получите элемент input с именем(*)

const goodsElements = document.querySelectorAll('[name="goods"]');//получите элементы checkbox с товарами goods(*)
const countElements = document.querySelectorAll('[type="number"]'); //получите элементы input с кол-вом(*)

const btn = document.querySelector(".btn");//получите элемент button(*)
const resultElem = document.querySelector(".total")//получите элемент span для итоговой суммы


//этот объект нужен для хранения количества каждого товара

const countGoods = { 
    "expresso": 0,
    "americano": 0,
    "latte": 0,
    "capuchino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
}

//этот объект нужен для хранения цены каждого товара
//т.е. если товар выбран, записываем его цену, если не выбран - записываем 0

const choicePriceGoods = { 
    "expresso": 0,
    "americano": 0,
    "latte": 0,
    "capuchino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
}

// прописываем в countGoods 1 при нажатии на checkbox
// оставляем введенное значение, если нажимаем checkbox
function Counting1 () {
countElements.forEach(element =>{
    if (element.id === key){
        if(element.value > 1){
            countGoods[key]=element.value;
        }
        else{
            element.value = 1;
            countGoods[key]=element.value;
        }
        }
    })
}

// прописываем в countGoods 0 при повторном нажатии на checkbox
function Counting0 () {
    countElements.forEach(element =>{
        if (element.id === key){
            element.value = 0;
            countGoods[key]=element.value
        }
    })
}
    
//считаем общую стоимость исходя из значений в объектах    
function priceTotal(){
goodsElements.forEach(elem =>{
    if(elem.checked){
    for (key in choicePriceGoods){
        if (key === elem.dataset.goods){
            choicePriceGoods[key] = parseInt(elem.value) * parseInt(countGoods[key]);
            }
        }
    }
    else{
        for (key in choicePriceGoods){
            if (key === elem.dataset.goods){
                countGoods[key] = 0;
                choicePriceGoods[key] = parseInt(elem.value) * parseInt(countGoods[key]);
    }
    }
    }
})
//считаем итоговую сумму по условиям ввода
summa = 0;
for (var i in choicePriceGoods){
        summa +=choicePriceGoods[i]
        }
resultElem.textContent = `${summa} руб.`
}

// считываем данные из input и заносим в объект countGoods
function ValueChange(){
countElements.forEach(element =>{
    element.addEventListener("change", function(){
        key = element.id
        countGoods[key] = element.value;
        priceTotal();
    })
    })
}
    
// окончательный подсчет
goodsElements.forEach(element => { 
    element.addEventListener("change", function(){ 
        if(element.checked) {
            key = element.dataset.goods;
            Counting1();
            ValueChange();
        }
        else {
            key = element.dataset.goods;
            countGoods[key] = 0;
            Counting0();
            }
        priceTotal();
        
    })
})


//по клику на кнопку должен появиться alert с текстом
function myFunction() {
    alert(`Заказчик: ${userSurname.value} ${userName.value}\r\nИтого: ${summa} руб.`)
}
