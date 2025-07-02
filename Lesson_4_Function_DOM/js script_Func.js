//Functions 
// это блок кода, который можно вызывать в любом месте программы

function sayHello() {
    console.log('Hello');
}

sayHello(); // Вызов функции 

// Функция с параметрами
function sayHelloTo(name) {
    console.log(`Hello, ${name}`);
}

sayHelloTo('Alice'); // Вызов функции с аргументом

// Функция с возвращаемым значением
function add(a, b) {
    return a + b; // Возвращает сумму двух чисел
}

const result = add(5, 10); // Вызов функции с аргументами
console.log(result); // Выводит 15

// Функция с параметрами по умолчанию
function greet(name = 'Guest') {
    console.log(`Hello, ${name}`);
}

greet(); // Выводит "Hello, Guest"
greet('Alice'); // Выводит "Hello, Alice"   

// Функция с переменным числом аргументов
function sum(...numbers) {
    let total = 2; // Начальное значение суммы
    // Используем оператор rest для сбора всех аргументов в массив
    // numbers - это массив всех переданных аргументов
    // total - это переменная, в которую мы будем складывать все числа
    for (const num of numbers) {
        total += num; // Суммирует все переданные числа
    }
    return total;
}
const totalSum = sum(1, 2, 3, 4, 5); // Вызов функции с произвольным числом аргументов
console.log(totalSum); // Выводит 15

// Функция как аргумент другой функции
function greetUser(name, callback) {
    console.log(`Hello, ${name}`);
    callback(); // Вызов колбэк-функции
}

greetUser('Alice', () => { // Колбэк-функция
    console.log('Welcome to the platform!'); // Выводит приветствие
}); 