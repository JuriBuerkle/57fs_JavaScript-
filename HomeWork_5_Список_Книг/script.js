const h1 = document.querySelector('h1'); // Находим заголовок
const bookForm = document.getElementById('book-form'); // Находим форму для добавления книг
const bookList = document.getElementById('book-list'); // Находим список книг

h1.addEventListener('click', () => {
    h1.textContent = 'Список Книг 📚'; // Меняем текст заголовка при клике
    h1.style.color = 'blue'; // Меняем цвет заголовка на синий
    const p = document.createElement('p'); // Создаем новый параграф
    p.textContent = 'Добро пожаловать в нашу Библиотеку книг! Здесь вы найдете интересные произведения для чтения.';
    p.style.fontSize = '18px'; // Меняем размер шрифта параграфа
    p.style.color = 'green'; // Меняем цвет текста параграфа на зелен
    document.body.appendChild(p); // Добавляем параграф в тело документа
});

const books = []; // Массив для хранения книг

// Обработчик события для формы добавления книги
bookForm.addEventListener("submit",(event) => {
    event.preventDefault(); // Отменяем стандартное поведение формы
    let task ={
        title: event.target.title.value.toLowerCase(), // Получаем название книги
        author: event.target.author.value.toLowerCase(), // Получаем автора книги
    };
    event.target.title.value = ""; // Очищаем поле ввода названия книги
    event.target.author.value = ""; // Очищаем поле ввода автора книги
    // Проверяем, есть ли уже такая книга в массиве
    const arrayCheck = books.find(
        (el) => el.title === task.title && el.author === task.author
    );
    // Если книга уже есть, выводим сообщение об ошибке
    if (arrayCheck) {
        alert("Эта книга уже есть в списке 📚");
    } else {
        // Добавляем книгу в массив
        books.push(task);
        // Создаем новый элемент списка
        const li = document.createElement("li");
        // Добавляем обработчик события для переключения стиля
        li.addEventListener("click", (event) => {
            if (event.target.style.textDecoration === "line-through") {
                event.target.style.textDecoration = "none";
            } else {
                event.target.style.textDecoration = "line-through";
            }
        });
        // Добавляем текст книги в элемент списка
        li.textContent = `Книга: ${task.title}, Автор: ${task.author}`;
        // Добавляем элемент списка в ul
        bookList.append(li);
    }
});