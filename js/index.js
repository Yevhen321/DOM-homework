//1.Сделать два инпута: в один вводить параметр(число), во втором показывать его квадрат.
let inputNumber = document.getElementById('enterNumber');
let resultNumber = document.getElementById('resultNumber');

inputNumber.addEventListener('keydown', (event)=>{
    let value = event.target.value;
    resultNumber.value = value * value;
})

// 2.Дан элемент div с id=elem
//     - Добавьте ему класс www.
// - Удалите у него класс www.
// - Проверьте наличие у него класса www.
// - Добавьте содержимое в элемент (текст)
// 3.Реализуйте событие: по нажатию на элемент (см задание 2) пользователь получит сообщение о нажатии

let elem = document.getElementById('elem');
elem.classList.add('www');
elem.classList.remove('www')
console.log(elem)

const h4 = document.createElement('p');
h4.innerHTML = 'Hello world';
elem.append(h4)

h4.addEventListener('click',()=>{
    alert('Hello Hello!)')
})

//4Реализуйте форму валидации (username, password) которая проверяет корректность ввода данных
// условие проверки: username должен содержать от 6 до 20 символов и не содержать спецсимволов и пробелы,
// password от 8 до 20 символов и содержать обязательно 1 заглавную букву и 1 цифру
// условие вывода: если ввод корректный подсветить рамку ввода зелёным, при невалидном вводе -красным
// см прикрепленую ссылку на проект

let userName = document.getElementById('userName');
let password = document.getElementById('pass');

userName.addEventListener('keydown', (event)=> {
    let value = event.target.value;
    let strCheckUser = /\w{6,20}[^\s|\d|\W]/gi;
    let valid = strCheckUser.test(value);
    if (valid){
        userName.style.borderColor = 'green';
    }else {
        userName.style.borderColor = 'red';
    }
})

password.addEventListener('keydown', (event)=>{
    let value = event.target.value;
    let strCheckPassword = /(?=.*[0-9])(?=.*[A-Z])(?=\w{8,20})/gi;
    let valid = strCheckPassword.test(value);
    if (valid){
        password.style.borderColor = 'green';
    }else {
        password.style.borderColor = 'red';
    }
})




