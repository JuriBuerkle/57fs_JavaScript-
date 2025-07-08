const h1 = document.querySelector("h1"); // Находим заголовок
const bookForm = document.getElementById("book-form"); // Находим форму для добавления книг
const ulList = document.getElementById("book-list"); // Находим список книг
// Находим кнопку для очистки списка
const clearButton = document.getElementById("clear-list");

h1.addEventListener("click", () => {
  h1.textContent = "Список Книг 📚"; // Меняем текст заголовка при клике
  h1.style.color = "blue"; // Меняем цвет заголовка на синий
  const p = document.createElement("p"); // Создаем новый параграф
  p.textContent =
    "Добро пожаловать в нашу Библиотеку книг! Здесь вы найдете интересные произведения для чтения.";
  p.style.fontSize = "18px"; // Меняем размер шрифта параграфа
  p.style.color = "green"; // Меняем цвет текста параграфа на зелен
  document.body.insertBefore(p, h1.nextSibling); // Добавляем параграф под заголовок
});

// Массив для хранения книг
const arrayBooks = [
  { title: "муму", author: "тургенев" },
  { title: "война и мир", author: "л.н.толстой" },
  { title: "преступление и наказание", author: "ф.достоевский" },
];

// Обработчик события для формы добавления книги
bookForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Отменяем стандартное поведение формы
  // Создаем объект книги из введенных данных
  let task = {
    title: event.target.title.value.toLowerCase(), // Получаем название книги
    author: event.target.author.value.toLowerCase(), // Получаем автора книги
  };
  // Очищаем поля ввода после добавления книги
  event.target.title.value = ""; // Очищаем поле ввода названия книги
  event.target.author.value = ""; // Очищаем поле ввода автора книги
  // Проверяем, есть ли уже такая книга в массиве
  const arrayCheck = arrayBooks.find(
    (el) => el.title === task.title && el.author === task.author);
  
    // Если книга уже есть, выводим сообщение об ошибке
    if (arrayCheck) {
        alert("Эта книга уже есть в списке !");
    } else {
        // Добавляем книгу в массив
    }
    arrayBooks.push(task);
// Создаем новый элемент списка
  const li = document.createElement("li");
// Добавляем обработчик события для переключения стиля
    li.addEventListener("click", (event) => {
        if (event.target.style.textDecoration === "line-through") {
        // Проверяем, если текст перечеркнут
        // Если да, убираем перечеркивание
          event.target.style.textDecoration = "none";
        } else {
        // Если нет, добавляем перечеркивание
        event.target.style.textDecoration = "line-through";
    }
 });
// Добавляем текст книги в элемент списка
    li.textContent = `📖  " ${task.title}" от  ${task.author} `;
    ulList.append(li); // Добавляем элемент списка в список книг

// Очищаем список книг при нажатии на кнопку "Очистить список"
clearButton.addEventListener("click", () => {
    ulList.innerHTML = ""; // Очищаем содержимое списка книг
    books.length = 0; // Очищаем массив книг
    alert("Список книг очищен! 📚"); // Выводим сообщение об успешном удален
   });
   console.log(arrayBooks);
});
