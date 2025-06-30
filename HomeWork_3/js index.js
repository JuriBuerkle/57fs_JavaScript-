//### Задание 1


//У вас есть массив объектов:

//1.1 Создайте массив объектов, представляющих героев из "Звездных войн" (Star Wars).
const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

// вывести имя только второго джедая из массива
const secondJediName = starWarsHeroes.filter(hero => hero.name)[1];
console.log(secondJediName.name); 

//Используйте методы массивов.

//1.2 Создайте новый массив с джедаями младше 40 лет
const youngStarWarsHeroes = starWarsHeroes.filter((hero) => hero.age < 40);
console.log(youngStarWarsHeroes);

//1.3 Посчитайте возраст всех джедаев
const totalAge = starWarsHeroes.reduce((acc, hero) => acc + hero.age, 0);
console.log(totalAge);

//1.4 Повысьте возраст героев на 10 лет
const plusTenAge = starWarsHeroes.map(hero => ({ ...hero, age: hero.age + 10 }));
console.log(plusTenAge);

plusTenAge.forEach ((hero) =>hero.age += 100);
console.log(plusTenAge);


//1.5 Создайте новый массив, где "Anakin Skywalker" заменен на:
//`[{ name: "Darth Vader", isJedi: false, age: 50 }]`
const newStarWarsHeroes = starWarsHeroes.map(hero =>
    hero.name === "Anakin Skywalker"
        ? { name: "Darth Vader", isJedi: false, age: 50 }
        : hero);

console.log(newStarWarsHeroes);

//1.6 Создайте на основе старого массива новый массив объектов по образу:
//[{ name: "Luke Skywalker", isJedi: true }, { name: "Han Solo", isJedi: false }, ]`
const restStarWarsHeroes = starWarsHeroes.map(({age, ...rest}) => rest);
console.log(restStarWarsHeroes);