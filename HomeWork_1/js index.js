/*### Задание 1

1. Создайте переменную myNumber и присвойте ей результат выражения: деление числа 100 на остаток от деления 25 на 3. Выведите значение myNumber в консоль.*/
let remaiderOf = 25 % 3;
let myNumber = 100 / remaiderOf;
console.log(myNumber);

/*2. Создайте переменную myString и присвойте ей значение, которое является результатом конкатенации следующих строк: "Hello, ", "world", "!", и числа 2024. Выведите значение myString в консоль.*/
let myString = "Hello," + "world" + "!" + 2024;
console.log(myString);

/*3. Создайте переменную isHuman и присвойте ей результат сравнения числа 42 со строкой 42. Результатом должно стать true. Подумайте какой оператор сравнения вы будете использовать.*/
let isHuman = 42 == "42";
console.log(isHuman);

/*4. Создайте переменную myNumber и присвойте ей результат преобразования строки "123smth" в число. Выведите значение myNumber в консоль.*/
let strNum = "123smth";
let myNum = Number(strNum);
console.log(myNum);

/* Дополнительные упражнения

 **Задание 1**

1. **Создайте переменные `age` и `hasPassport`.**
   Присвойте `age` значение 18, а `hasPassport` — `true`.*/
let age = 18;
let hasPassport = true;

/*2. **С помощью тернарного оператора создайте переменную `canTravel`.**
   В ней должно храниться строковое сообщение:*/
let canTravel =
  age >= 18 && (hasPassport = true)
    ? "Вы можете путешествовать ✈️"
    : "Путешествие невозможно ❌";

/* * если `age` больше или равно 18 и `hasPassport` равно `true`, то:
     `"Вы можете путешествовать ✈️"`
   * иначе:
     `"Путешествие невозможно ❌"`*/

// 3. **Выведите значение `canTravel` в консоль.**
console.log(canTravel);

/* **Задание 2**

1. **Создайте переменную `inputString` и присвойте ей значение `"500€"`.*/
let inputString = "500$";
/*2. **С помощью функции `parseInt()` преобразуйте строку в число и сохраните результат в переменную `price`.*/
let prise = parseInt(inputString);
/*3. **Выведите значение `price` в консоль.**/
console.log(prise);

/**Задание 3**

1. **Создайте переменную `randomNumber`, в которой будет случайное целое число от 1 до 50.**/
let raandomNumber = Math.floor(Math.random()*50);
/*2. **Выведите `randomNumber` в консоль.***/
console.log(raandomNumber);
/*3. **Проверьте, является ли число чётным (делится на 2 без остатка). Создайте переменную `isEven`, в которой будет результат сравнения.**/
let isEven = raandomNumber % 2 === 0;
/*4. **Выведите `isEven` в консоль.**/
console.log(isEven);
