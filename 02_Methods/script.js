"use strict";
// Definir un nombre indéterminé de param avec ...
function multiplication(nb, ...nbList) {
    let result = nb;
    for (let n of nbList) {
        result *= n;
    }
    return result;
}
multiplication(42, 5, 6, 7, 8, 1, 4, 4);
let numbers = [5, 7, null, 3];
// Fonction avec callback
function filterString(list, filterCallBack) {
    const result = [];
    for (let s of list) {
        if (filterCallBack(s)) {
            result.push(s);
        }
    }
    return result;
}
let myStringList = ["Pierre", "Pol", "Jacques"];
let result = filterString(myStringList, (s) => s.includes('P'));
console.log(result);
// Fonctions générique
function filterGenerique(list, filterCallBack) {
    const result = [];
    for (let elem of list) {
        if (filterCallBack(elem)) {
            result.push(elem);
        }
    }
    return result;
}
let result2 = filterGenerique(myStringList, (s) => s.includes('P'));
let result3 = filterGenerique([1, 2, 3, 4, 5, 6], (nb) => nb % 2 === 0);
// Demo DOM
const title = document.getElementById('title');
title.innerHTML = "Hello world!!!";
