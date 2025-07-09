// let x = 12;
// console.log(x);

// x = 10;
// console.log(x);
// let myName;

// setTimeout(() => { // 
//   console.log("Hello 0 sec");
//   myName = "Alisher";// в
// }, 0);

// console.log(myName);

// // timers
// setTimeout(() => {
//   console.log("Hello 3 sec");
//   console.log("Name: " + myName);
// }, 3000);

// console.log("Hello, no timer");

// // Напишите функцию lateHappyBirthday
// // выводит фразу "Happy Birthday"
// // через 6 секунд
// // Сделайте вызов функции lateHappyBirthday
// function lateHappyBirthday() {
//   setTimeout(() => {
//     console.log("Happy Birthday");
//     thankYou();
//   }, 6000);
// }

// lateHappyBirthday();

// function thankYou() {
//   setTimeout(() => {
//     console.log("Thank you for your attention");
//   }, 6000);
// }


           //  2

// setInterval(() => {
//   console.log("Hello, I am still here");
// }, 3000);


           //  3

// Promise  // обещание - это объект, который представляет собой
// асинхронную операцию, которая может завершиться успешно или с ошибкой.

// fullfilled // заполнненный
// rejected  // отклоненный
// settled   // завершенный
// pending   // ожидающий

const burgerPromise = new Promise(function (res, rej) {
    setTimeout(() => {
      // res("Burger");
      rej(new Error("Error: No bread!"));
    }, 5000);
  });
  
  console.log(burgerPromise); // Promise { <pending> }
  
  // setTimeout(() => {
  //   console.log(burgerPromise);
  // }, 6000);
  
  // then - можем получить значение без таймера -> fullfilled
  // catch - обработать ошибку - в случае reject -> rejected
  
  // Раскрыть промис без сет таймаут
  burgerPromise
    .then((burger) => {
      console.log(burger);
    })
    .catch((err) => {
      console.log(err);
    });