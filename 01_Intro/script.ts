console.log("Intro typescript");

// Syntax pour déclarer une variable
// <<nom de var : type>>

// Les différents type de données

// - Nombre (entier / réel)
const nb1: number = 42;
const nb2: number = 1_000_000_000;
const nb3: number = 3.14;
const nb4: number = 0x1A;

// - Chaine de caractere
const myString1: string = "Pierre";
const myString2: string = 'Pierre';
const myString3: string = "Hello " + "world!";
const myString4: string = `Hello ${myString1}`;
const myString5: string = "Hello".concat(' ', myString1);

// - Booleen
const myBoolean: boolean = true;

// - Tableau
const myArray1: string[] = ["Pierre", "Pol", "Jacques"];
const myArray2: Array<string> = ["Pierre", "Pol", "Jacques"];

// - Tout type
let myVar1: any = '42';
myVar1 = 42;

// Typage implicit
const myVar2 = 42;

console.log(typeof myVar2); // number

// Attention
let myVar3;
myVar3 = 42;
myVar3 = '42';

// Methode

function sayHello(): void {
    console.log('Hello');
}

function sayHello2(name: string): void {
    console.log(`Hello ${name}`);
}

sayHello2('Seb');

function addition(a: number, b: number): number {
    return a + b;
}

// Typage de retour implicite
// function addition(a: number, b: number) {
//     return a + b;
// }

let result: number = addition(4, 2);

enum Gender {
    Male,
    Female,
    X,
}

let gender: Gender = Gender.Male;

enum Permis {
    A = 1,
    B = 2,
    C = 4,
    D = 8
}

// A | B | C | D
// 1 | 0 | 0 | 1  (9)
// 0 | 1 | 1 | 0  (6)

function getPermisFromNumber(n: number): Permis[] {
    const permisList: Permis[] = [];

    if (n & Permis.A) permisList.push(Permis.A);
    if (n & Permis.B) permisList.push(Permis.B);
    if (n & Permis.C) permisList.push(Permis.C);
    if (n & Permis.D) permisList.push(Permis.D);

    return permisList;
}

let permis: Permis[] = getPermisFromNumber(9);

console.log(permis);

let person1: {
    firstname: string;
    lastname: string;
    birthdate: Date;
} = {
    firstname: 'Seb',
    lastname: 'Bya',
    birthdate: new Date(1991, 2, 27),
};

person1.firstname = "Truc";

let person2: {
    firstname: string;
    lastname: string;
    birthdate: Date;
} = {
    firstname: 'Melissa',
    lastname: 'Cennetoglu',
    birthdate: new Date(1991, 2, 27),
};

let person3 = { ...person1, surnom: 'Toto' };
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

type Book = {
    isbn: string;
    title: string;
    description?: string;
    author: string;
}

let book1: Book = {
    isbn: '123',
    title: 'test',
    author: 'Sun tzu',
}

// let book2 = {...book1, test: 'truc'} 

type Courses = [string, string, ...string[]];

const c1: Courses = ['1', '2', '5', '42'];

interface Movie {
    id: number;
    title: string;
    actors: {
        firstname: string;
        lastname: string;
    }[],
    similarMovies?: Movie[]
}

let movie: Movie = {
    id: 1,
    title: 'Le dernier samurai',
    actors: [
        { firstname: 'Tom', lastname: 'Cruise' }
    ]
};

class Music {
    private _title: string;
    private _artist: string;

    constructor(title: string, artist: string) {
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

let music: Music = new Music('1', '2');
console.log(music.title);

// Union

type StringOrNumber = string | number

let stringOrNumber: string | number;
let stringOrNumber2: StringOrNumber;
stringOrNumber = 42;
stringOrNumber = 'George';

let selectedBook: Book | undefined;

let country: 'BE' | 'FR';
country = 'BE';
let bb = 'BE'
// Impossible de faire string => "BE" | "FR"
// country = bb;

// Intersect
type Student = {
    firstname: string;
    lastname: string;
    yearResult: number;
}

type Professor = {
    firstname: string;
    lastname: string;
    course: string;
}

let assistant: Student & Professor = {
    firstname: 'Albert',
    lastname: '1er',
    course: 'Physique',
    yearResult: 20
};

type Assistant = Student & Professor;

let assistant2: Assistant;

function allwaysThrow(): never {
    throw new Error();
}

function getSomething(): unknown {
    return 42;
}

let truc = getSomething() as number;

type Animal = {
    id: string;
    name: string;
    race: string;
    birthdate?: Date;
}

type AnimalForm = Omit<Animal, 'id'>;

let myForm: AnimalForm = {
    name: 'Django',
    race: 'Bouvier',
    birthdate: new Date()
};

type AnimalDTO = Pick<Animal, 'name' | 'race'>

let myDTO: AnimalDTO = {
    name: 'Zara',
    race: 'Bouvier'
}

type PartialAnimal = Partial<Animal>

let partialAnimal: PartialAnimal = {
}

interface Utils {
    execute(a: any): string;
}

let util: Utils = {
    execute: (a) => {
        return 'Albert';
    }
}

util.execute('Toto');