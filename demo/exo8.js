let read = require("readline-sync");

// EXO 8
let nbr1 = read.questionFloat("entrez un nombre: ");
escalier = "";

for (let index = 0; index < nbr1; index++) {
    escalier +="*";
    console.log(escalier);
    
}