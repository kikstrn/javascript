let read = require("readline-sync"); 

let nbr = read.questionFloat("entrez un nombre :");
console.log(nbr + "€");

//Liste des différentes monnaies
let monnaies = [500,200,100,20,10,5,2,1,0.50,0.02,0.01];

//Boucle pour chaques monnaies
monnaies.forEach(monnaie => {

    //Billet permet de connaitre à l'arrondi en dessous
    // le nombre de billet nécessaire
    billet = Math.floor(nbr / monnaie);

    //On retire le nombre de billet au nombre initial
    nbr = nbr - billet * monnaie;

    //On affiche le nombre de monnaie à utiliser
    console.log("Billet " + monnaie + "€: " + billet);
});
