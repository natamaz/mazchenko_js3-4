/**
 * Created by Нафтуся on 17.03.2016.
 */

console.log(document.body);

//Wrapoer

var elements = document.createElement('div');
elements.classList.add('wrapper');
document.body.appendChild(elements);

//HEADER
var elements = document.createElement('div');
elements.classList.add('header');
var parent = document.querySelector('.wrapper');
parent.appendChild(elements);



//p
var elements = document.createElement('p');
elements.classList.add('title');
elements.innerHTML  = 'Тест по программированию';
var parent = document.querySelector('.wrapper');
parent.appendChild(elements);




// question1
var elements = document.createElement('form');
elements.classList.add('question1');
var parent = document.querySelector('.wrapper');
parent.appendChild(elements);



var elements = document.createElement('p');
elements.classList.add('q1');
elements.innerHTML  = '1. Вопрос №1';
var parent = document.querySelector('.question1');
parent.appendChild(elements);



var elements = document.createElement('input');
elements.classList.add('input1_1');
elements.type = "checkbox";
elements.name = "name";
elements.value = "value";
elements.id = "id";
var parent = document.querySelector('.question1');
parent.appendChild(elements);

var elements = document.createElement('label');
elements.classList.add('label1_1');
elements.htmlFor = "id";
elements.innerHTML = '"Вариант ответа №1" <br>';


var parent = document.querySelector('.question1');
parent.appendChild(elements);

var elements = document.createElement('input');
elements.classList.add('input1_2');
elements.type = "checkbox";
elements.name = "name";
elements.value = "value";
elements.id = "id";
var parent = document.querySelector('.question1');
parent.appendChild(elements);


var elements = document.createElement('label');
elements.classList.add('label1_2');
elements.htmlFor = "id";
elements.innerHTML = '"Вариант ответа №2" <br>';
//elements.appendChild(document.createTextNode('Вариант ответа №2'));
var parent = document.querySelector('.question1');
parent.appendChild(elements);


var elements = document.createElement('input');
elements.classList.add('input1_3');
elements.type = "checkbox";
elements.name = "name";
elements.value = "value";
elements.id = "id";
var parent = document.querySelector('.question1');
parent.appendChild(elements);



var elements = document.createElement('label');
elements.classList.add('label1_3');
elements.htmlFor = "id";
elements.innerHTML = '"Вариант ответа №3" <br>';
//elements.appendChild(document.createTextNode('Вариант ответа №3'));
var parent = document.querySelector('.question1');
parent.appendChild(elements);









// question2

var elements = document.createElement('p');
elements.classList.add('q2');
elements.innerHTML  = '2. Вопрос №1';
var parent = document.querySelector('.question1');
parent.appendChild(elements);



var elements = document.createElement('input');
elements.classList.add('input2_1');
elements.type = "checkbox";
elements.name = "name";
elements.value = "value";
elements.id = "id";
var parent = document.querySelector('.question1');
parent.appendChild(elements);

var elements = document.createElement('label');
elements.classList.add('label2_1');
elements.htmlFor = "id";
elements.innerHTML = '"Вариант ответа №1" <br>';


var parent = document.querySelector('.question1');
parent.appendChild(elements);

var elements = document.createElement('input');
elements.classList.add('input2_2');
elements.type = "checkbox";
elements.name = "name";
elements.value = "value";
elements.id = "id";
var parent = document.querySelector('.question1');
parent.appendChild(elements);


var elements = document.createElement('label');
elements.classList.add('label2_2');
elements.htmlFor = "id";
elements.innerHTML = '"Вариант ответа №2" <br>';
//elements.appendChild(document.createTextNode('Вариант ответа №2'));
var parent = document.querySelector('.question1');
parent.appendChild(elements);


var elements = document.createElement('input');
elements.classList.add('input2_3');
elements.type = "checkbox";
elements.name = "name";
elements.value = "value";
elements.id = "id";
var parent = document.querySelector('.question1');
parent.appendChild(elements);



var elements = document.createElement('label');
elements.classList.add('label2_3');
elements.htmlFor = "id";
elements.innerHTML = '"Вариант ответа №3" <br>';
//elements.appendChild(document.createTextNode('Вариант ответа №3'));
var parent = document.querySelector('.question1');
parent.appendChild(elements);



// question3

var elements = document.createElement('p');
elements.classList.add('q3');
elements.innerHTML  = '3. Вопрос №1';
var parent = document.querySelector('.question1');
parent.appendChild(elements);



var elements = document.createElement('input');
elements.classList.add('input3_1');
elements.type = "checkbox";
elements.name = "name";
elements.value = "value";
elements.id = "id";
var parent = document.querySelector('.question1');
parent.appendChild(elements);

var elements = document.createElement('label');
elements.classList.add('label3_1');
elements.htmlFor = "id";
elements.innerHTML = '"Вариант ответа №1" <br>';


var parent = document.querySelector('.question1');
parent.appendChild(elements);

var elements = document.createElement('input');
elements.classList.add('input3_2');
elements.type = "checkbox";
elements.name = "name";
elements.value = "value";
elements.id = "id";
var parent = document.querySelector('.question1');
parent.appendChild(elements);


var elements = document.createElement('label');
elements.classList.add('label3_2');
elements.htmlFor = "id";
elements.innerHTML = '"Вариант ответа №2" <br>';
//elements.appendChild(document.createTextNode('Вариант ответа №2'));
var parent = document.querySelector('.question1');
parent.appendChild(elements);


var elements = document.createElement('input');
elements.classList.add('input3_3');
elements.type = "checkbox";
elements.name = "name";
elements.value = "value";
elements.id = "id";
var parent = document.querySelector('.question1');
parent.appendChild(elements);



var elements = document.createElement('label');
elements.classList.add('label3_3');
elements.htmlFor = "id";
elements.innerHTML = '"Вариант ответа №3" <br>';
//elements.appendChild(document.createTextNode('Вариант ответа №3'));
var parent = document.querySelector('.question1');
parent.appendChild(elements);


var elements = document.createElement('input');
elements.classList.add('button');
elements.type = "submit";
elements.name = "name";
elements.value = "Проверить мои резльтаты";
elements.id = "id";
var parent = document.querySelector('.wrapper');
parent.appendChild(elements);



