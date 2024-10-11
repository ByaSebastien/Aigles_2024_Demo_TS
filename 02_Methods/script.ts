// Definir un nombre indéterminé de param avec ...
function multiplication(nb: number, ...nbList: number[]): number {
    let result = nb;

    for (let n of nbList) {
        result *= n;
    }

    return result;
}

multiplication(42, 5, 6, 7, 8, 1, 4, 4);

let numbers: (number | null)[] = [5, 7, null, 3];

// Fonction avec callback

function filterString(list: string[], filterCallBack: (elem: string) => boolean): string[] {

    const result: string[] = [];

    for (let s of list) {
        if (filterCallBack(s)) {
            result.push(s);
        }
    }

    return result;
}

let myStringList: string[] = ["Pierre", "Pol", "Jacques"];

let result: string[] = filterString(myStringList, (s) => s.includes('P'));

console.log(result);

// Fonctions générique
function filterGenerique<T>(list: T[], filterCallBack: (elem: T) => boolean): T[] {

    const result: T[] = [];

    for (let elem of list) {
        if (filterCallBack(elem)) {
            result.push(elem);
        }
    }

    return result;
}

let result2: string[] = filterGenerique<string>(myStringList, (s) => s.includes('P'));
let result3: number[] = filterGenerique([1, 2, 3, 4, 5, 6], (nb) => nb % 2 === 0);

// Demo DOM
const title = document.getElementById('title') as HTMLElement;
title.innerHTML = "Hello world!!!";

let test: HTMLInputElement;


export interface MyInterface {
    truc: string;
}