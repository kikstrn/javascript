let read = require("readline-sync");

// EXO 4
let nbr1 = read.questionFloat("Entrez un nombre : ");
let nbr2 = read.questionFloat("Entrez un nombre : ");
let nbr3 = read.questionFloat("Entrez un nombre : ");

let affichage = "[" + nbr1 + ", " + nbr2 + ", " + nbr3 + "] --> ";

console.log(affichage + Math.max(nbr1,nbr2,nbr3));