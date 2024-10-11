"use strict";
console.log("Intro typescript");
// Syntax pour déclarer une variable
// <<nom de var : type>>
// Les différents type de données
// - Nombre (entier / réel)
const nb1 = 42;
const nb2 = 1000000000;
const nb3 = 3.14;
const nb4 = 0x1A;
// - Chaine de caractere
const myString1 = "Pierre";
const myString2 = 'Pierre';
const myString3 = "Hello " + "world!";
const myString4 = `Hello ${myString1}`;
const myString5 = "Hello".concat(' ', myString1);
// - Booleen
const myBoolean = true;
// - Tableau
const myArray1 = ["Pierre", "Pol", "Jacques"];
const myArray2 = ["Pierre", "Pol", "Jacques"];
// - Tout type
let myVar1 = '42';
myVar1 = 42;
// Typage implicit
const myVar2 = 42;
console.log(typeof myVar2); // number
// Attention
let myVar3;
myVar3 = 42;
myVar3 = '42';
// Methode
function sayHello() {
    console.log('Hello');
}
function sayHello2(name) {
    console.log(`Hello ${name}`);
}
sayHello2('Seb');
function addition(a, b) {
    return a + b;
}
// Typage de retour implicite
// function addition(a: number, b: number) {
//     return a + b;
// }
let result = addition(4, 2);
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["X"] = 2] = "X";
})(Gender || (Gender = {}));
let gender = Gender.Male;
var Permis;
(function (Permis) {
    Permis[Permis["A"] = 1] = "A";
    Permis[Permis["B"] = 2] = "B";
    Permis[Permis["C"] = 4] = "C";
    Permis[Permis["D"] = 8] = "D";
})(Permis || (Permis = {}));
// A | B | C | D
// 1 | 0 | 0 | 1  (9)
// 0 | 1 | 1 | 0  (6)
function getPermisFromNumber(n) {
    const permisList = [];
    if (n & Permis.A)
        permisList.push(Permis.A);
    if (n & Permis.B)
        permisList.push(Permis.B);
    if (n & Permis.C)
        permisList.push(Permis.C);
    if (n & Permis.D)
        permisList.push(Permis.D);
    return permisList;
}
let permis = getPermisFromNumber(9);
console.log(permis);
let person1 = {
    firstname: 'Seb',
    lastname: 'Bya',
    birthdate: new Date(1991, 2, 27),
};
person1.firstname = "Truc";
let person2 = {
    firstname: 'Melissa',
    lastname: 'Cennetoglu',
    birthdate: new Date(1991, 2, 27),
};
let person3 = Object.assign(Object.assign({}, person1), { surnom: 'Toto' });
person3.firstname = 'Toto';
let person4 = {
    firstname: 'Gile',
    lastname: 'De rais',
    birthdate: new Date(),
    surnom: "L'acolyte"
};
console.log("P1 : " + person1.firstname);
console.log("P2 : " + person2.firstname);
console.log("P3 : " + person3.firstname);
let book1 = {
    isbn: '123',
    title: 'test',
    author: 'Sun tzu',
};
const c1 = ['1', '2', '5', '42'];
let movie = {
    id: 1,
    title: 'Le dernier samurai',
    actors: [
        { firstname: 'Tom', lastname: 'Cruise' }
    ]
};
class Music {
    constructor(title, artist) {
        this._title = title;
        this._artist = artist;
    }
    get title() {
        return this._title;
    }
    get artist() {
        return this._artist;
    }
}
let music = new Music('1', '2');
console.log(music.title);
let stringOrNumber;
let stringOrNumber2;
stringOrNumber = 42;
stringOrNumber = 'George';
let selectedBook;
let country;
country = 'BE';
let bb = 'BE';
let assistant = {
    firstname: 'Albert',
    lastname: '1er',
    course: 'Physique',
    yearResult: 20
};
let assistant2;
function allwaysThrow() {
    throw new Error();
}
function getSomething() {
    return 42;
}
let truc = getSomething();
let myForm = {
    name: 'Django',
    race: 'Bouvier',
    birthdate: new Date()
};
let myDTO = {
    name: 'Zara',
    race: 'Bouvier'
};
let partialAnimal = {};