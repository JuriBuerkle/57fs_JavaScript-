/*### Задание 1
Создайте массив из следующих элементов: "Семен", "Иван", "Петр", "Татьяна".
Создайте еще один массив с возрастами: 18, 27, 74, 34; Создайте и заполните
при помощи цикла этот новый массив новыми элементами по образу: "Семен 18 лет/годов"*/

const names = ["Семен", "Иван", "Петр", "Татьяна"];
const age = [18, 27, 74, 34];
const combiArray = [];

for (let i = 0; i < names.length; i++) {
  combiArray.push(names[i] + " " + age[i] + " " + "лет");
}

console.log(combiArray);

/*### Задание 2
Используя пройденные на занятии методы массива получите из этого массива новый массив,
в котором элементы идут в обратной последовательности.
Используйте цикл, а не метод reversed()!*/
const reversArray = [];

for (let i = combiArray.length - 1; i >= 0; i--) {
reversArray.push(combiArray[i]);
}
console.log(reversArray);

/*### Задание 3
Создайте пустой массив fruits.
добавьте в массив следующие фрукты: "яблоко", "банан", "апельсин".
Удалите последний элемент из массива и сохраните значение в переменной.
Добавьте его в начало массива.
Выведите fruits в консоль*/

const fruits = ["яблоко", "банан", "апельсин"];
console.log(fruits);

const lastOfArray = fruits.pop();
console.log(fruits);
console.log(lastOfArray);

fruits.unshift(lastOfArray);
console.log(fruits);

/*### Задание 4
Объедините fruits с массивом veggies (в него добавьте строки овощи) через spread в массив fruitsAndVeggies
Используя деструктуризацию заведите переменную под каждый элемент нового массива
Выведите fruitsAndVeggies в консоль*/

const veggies = ["gabbage", "eggplant", "potatoes"];
const fruitsAndVeggies = [...fruits, ...veggies];

console.log(fruitsAndVeggies);

const [fruits1, Big, fruits3, veggies1, veggies2, veggies3] = fruitsAndVeggies;

 console.log(fruitsAndVeggies);
 console.log(Big);
 console.log(veggies3);
 
 