let read = require("readline-sync");

// EXO 6
let nbr1 = read.questionFloat("entrez un nombre: ");
let operateur = read.question("entrez un opérateur: ");

while(operateur !== "+" && operateur !== "-" && operateur !== "*" && operateur !== "/"){
    operateur = read.question("entrez un bon opérateur: ");
}

let nbr2 = read.questionFloat("entrez un nombre : ");
let calcul;

if(operateur === "+") {
    calcul = nbr1+nbr2
}else if(operateur === "-"){
    calcul = nbr1-nbr2;
}else if(operateur === "/"){
    calcul = nbr1/nbr2;
}else if(operateur === "*"){
    calcul = nbr1*nbr2
}else {
    console.log("Calcul impossible");
}


let resultat = '[' + nbr1 + ', "' + operateur + '",' + ' ' + nbr2 + ']' + '= ' + calcul;
console.log(resultat);