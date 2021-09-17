let read = require("readline-sync");

// EXO 3
let prixFabrication = read.questionFloat("Quel est le prix de fabrication ? : ");
let prixVente = read.questionFloat("Quel est le prix de vente ? : ");
let difference = prixVente - prixFabrication;
let perte = "Perte de " + difference + "€";
let profit = "Profit de " + difference + "€";
if(difference>0){
    console.log(profit);
}else{
    console.log(perte);
}
