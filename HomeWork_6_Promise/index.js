// Промис с рандомной ошибкой
// Создайте Promise, который с одинаковой вероятностью (50/50):
// либо возвращает строку "Best day of my life"
// либо выбрасывает ошибку с сообщением "Something is off"
// Затем обработайте результат с помощью .then() и .catch().


const randomPromise = new Promise((resolve, reject) => {  // Создаем новый промис
    // Имитация асинхронной операции с 50% шансом на успех
  const isSuccess = Math.random() > 0.5; // 50% шанс на успех
  setTimeout(() => {  // Имитация асинхронной операции
    if (isSuccess) {  // Если успех
      resolve("Best day of my life");  // Возвращаем строку
    } else { // Если неудача
      reject(new Error("Something is off"));  // Выбрасываем ошибку
    }
  }, 2000);
});

randomPromise
  .then((message) => {  // Обрабатываем успешный результат
    console.log(message); 
  })
  .catch((error) => { // Обрабатываем ошибку
    console.error(error);  
  });