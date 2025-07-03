const btn = document.querySelector("#magic-btn");
const clonedBtn = btn.cloneNode(true);
clonedBtn.id = "magic-btn-2";
clonedBtn.className = "second-btn";
clonedBtn.textContent = "Я изменю тебя";
clonedBtn.style.backgroundColor = "#a78b71";
clonedBtn.style.color = "white";

btn.addEventListener("click", () => {
  document.body.appendChild(clonedBtn);
});

// здесь можете создать EventListener для второй кнопки

clonedBtn.addEventListener("click", () => {
    btn.style.backgroundColor = "#9c4a1a";
    btn.style.color = "black";
  });

// По клику на кнопку Нажми на меня, добавьте новую кнопку с id="magic-btn-2" и с текстом "Я изменю тебя" со стилями:

// background-color:  #a78b71; ( * в js будет backgroundСolor * )
// color: white;
// Поменяйте стили кнопки magic-btn по клику на кнопку "Я изменю тебя" на:
// цвет фона на #9c4a1a;
// цвет текста на черный; То есть, другими словами, нужно поменять стили исходной кнопки при нажатии на появившуюся кнопку.
// В файле index.js:

// Кнопку получить можно через const btn = document.querySelector('#magic-btn')
// Добавить новую кнопку в body можно через document.body.appendChild(elem);
// Поменять стили можно через объект style. Н-р: elem.style.color = "black"
// Для клика можно использовать btn.addEventListener('click', () => {}).
// Кнопка "Я изменю тебя" должна добавляться ТОЛЬКО после клика на кнопку "Нажми на меня!"
