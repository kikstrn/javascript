let read = require("readline-sync");    
 
let num1 = read.questionFloat("entrez un nombre :");
 
let affichage = "";

for(let index = 0; index < num1 ; index++){
 
    affichage +="*";
    console.log(affichage);
    
}

for(let index = 0; index < num1 ; index++){
 
        affichage = affichage.slice(0, affichage.length - 1); 
        console.log(affichage);    
}