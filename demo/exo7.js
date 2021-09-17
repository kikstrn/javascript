let read = require("readline-sync");

// EXO 7
let nbr1 = read.questionFloat("entrez un nombre: ");
let somme = 0;

for (let index = 1; index <= nbr1; index++) {
    somme = somme + index;
    
}

console.log(somme);