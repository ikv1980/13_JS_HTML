// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 1) Создайте переменную со значением 8. Создайте программу, что будет просить пользователя ввести 
// число из всплывающего окна и сверять это число с числом в переменной. До тех пор, пока пользователь 
// не введет число 8 – просите пользователя это сделать и выдавайте ему всплывающее окно. 

let btn_1 = document.querySelector("#task_11_div button");
btn_1.onclick = function() {
    let number = prompt("Ведите число, которое мы загадали");
    while (number != 8) {
        console.log("Вы не угадали! Попробуйте еще раз.");
        number = prompt("Вы не угадали! Попробуйте еще раз.");
    }
    let message = document.querySelector("#task_11_div p");
    console.log("Вы угадали число! Загаданное число: 8");
    message.innerHTML = "Вы угадали число! Загаданное число: 8";
    message.style.color = "green";
    message.style.fontWeight = "500";
    btn_1.innerHTML = "Задание выполнено"
    btn_1.style.backgroundColor = "#19877A"
}

let btn_2 = document.querySelector("#task_12_div button");
btn_2.onclick = function() {
    let a = Math.floor(Math.random() * 50)
    let number = prompt("Ведите число, которое мы загадали");
    while (number != a)
        if (number > a)
            number = prompt("Ваше число БОЛЬШЕ загаданного. Попробуйте еще раз");
        else
            number = prompt("Ваше число МЕНЬШЕ загаданного. Попробуйте еще раз");
    let message = document.querySelector("#task_12_div p");
    message.innerHTML = "Вы угадали число! Загаданное число: " + a;
    message.style.color = "green";
    message.style.fontWeight = "500";
    btn_2.innerHTML = "Задание выполнено"
    btn_2.style.backgroundColor = "#19877A"
}



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 2) Напишите программу на JavaScript, которая будет получать ширину и высоту окна. 
// Каждый раз, когда размер окна будет менятся в консоль или на страницу сайта должна 
// выводиться новая информация про размеры окна.

let message = document.querySelector("#task_2_div p");
let w = window.innerWidth;
let h = window.innerHeight;
message.innerHTML = "Ширина экрана: " + w + "; Высота экрана: " + h;
window.onresize = function() {
    let message = document.querySelector("#task_2_div p");
    let w = window.innerWidth;
    let h = window.innerHeight;
    message.innerHTML = "Ширина экрана: " + w + "; Высота экрана: " + h;
}



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 3) Напишите программу на JavaScript, которая найдет все жирные слова в абзаце, 
// что представлен ниже. Жирные слова должны становиться красного цвета при наведении на АБЗАЦ.

let boldALL = document.querySelector('#task_31_div p');
boldALL.onmouseover = function(){
    let textb = document.querySelectorAll('#task_31_div b');
    textb.forEach(function(item){
        item.style.color = "red"
    })
}
boldALL.onmouseout = function(){
    let textb = document.querySelectorAll('#task_31_div b');
    textb.forEach(function(item){
        item.style.color = "black";
    })
}

// Жирные слова должны становиться красного цвета при наведении на СЛОВО.
let colr = ['red', 'blue', 'green' ,'orange', 'yellow']
let boldOne =  document.querySelectorAll('#task_32_div b');
boldOne.forEach(function(el){
    el.onmouseover = function() {
        el.style.color = colr[Math.floor(Math.random() * 4)];
    }
    el.onmouseout = function() {
        el.style.color = "black"
    }
})



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 4) Ниже пример HTML-файла с кнопкой отправки. Напишите функцию JavaScript, 
// что получит значения атрибутов href, hreflang, rel, target и type указанной ссылки.

// Вывод атрибутов в консоль при загрузке (перезагрузке) страницы
let massiv = document.querySelector("#task_4_div p a");
console.log("Значение атрибута href: " + massiv.href);
console.log("Значение атрибута hreflang: " + massiv.hreflang);
console.log("Значение атрибута rel: " + massiv.rel);
console.log("Значение атрибута target: " + massiv.target);
console.log("Значение атрибута type: " + massiv.type);

// Вывод атрибутов в поле при нажатии кнопки
let btn_3 = document.querySelector("#task_4_div button");
btn_3.onclick = function () {
    let message = document.querySelector("#task_4_div div");
    message.style.color = "green";
    message.style.fontWeight = "500";
    btn_3.innerHTML = "Значения атрибутов получены"
    btn_3.style.backgroundColor = "#19877A"
    // Вывод атрибутов в поле div
    message.innerHTML = "Значение атрибута href:&nbsp;&nbsp;<b>" + massiv.href + "</b>";
    message.innerHTML = message.innerHTML + "<br>Значение атрибута hreflang:&nbsp;&nbsp;<b>" + massiv.hreflang + "</b>";
    message.innerHTML = message.innerHTML + "<br>Значение атрибута rel:&nbsp;&nbsp;<b>" + massiv.rel + "</b>";
    message.innerHTML = message.innerHTML + "<br>Значение атрибута target:&nbsp;&nbsp;<b>" + massiv.target + "</b>";
    message.innerHTML = message.innerHTML + "<br>Значение атрибута type:&nbsp;&nbsp;<b>" + massiv.type + "</b>";
}
