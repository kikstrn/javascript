let read = require("readline-sync");
 
let chargeur = [null,null,null,null,null,null,null,null];
let joueur1 = {
    enVie : true,
    tour  : true
};
let joueur2 = {
   enVie : true,
   tour : false
};
 
/**
 * retourne un chargeur charger avec le nombre de balles données
 * @param {number} balle 
 * @returns {array}
 */
let chargerLeChargeur = (balle) => {
    for(let i =0; i < balle; i++){
        chargeur[i] = "Balle";
    }
    return chargeur;
}

chargeur = chargerLeChargeur(read.questionFloat("Choisir le nombre de balles à inserer dans le pistolet :"));

/**
 * mélange le chargeur de facon aléatoire
 * @param {array} tab 
 * @returns {array}
 */
let randomizeChargeur = (tab) => {
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    return tab;
}

/**
 * Savoir si le joueur a été tué (false :mort , true : vivant)
 * @returns bool
 */
let tourJoueur = () => {
    tab = randomizeChargeur(chargeur);
    let tir = Math.floor(Math.random()*7);
    if(tab[tir] === "Balle"){
        return false
    }
    else {
        return true
    }
}

/**
 * Permet de tirer tour par tour
 */
let rouletteRusse = () => {
    while(joueur1.enVie && joueur2.enVie){
        if(joueur1.tour){
            joueur1.enVie = tourJoueur();
            if(joueur1.enVie === true){
                console.log("Le joueur 1 vient de tirer , il est toujours en vie !" );
            }
            else{
                console.log("Le joueur 1 vient de tirer , il est mort !" );
            }           
            joueur1.tour = false;
            joueur2.tour = true;
        }
        else{
            joueur2.enVie = tourJoueur();
            if(joueur2.enVie === true){
                console.log("Le joueur 2 vient de tirer , il est toujours en vie !" );
            }
            else{
                console.log("Le joueur 2 vient de tirer , il est mort !" );
            }
            joueur2.tour = false;
            joueur1.tour = true;
        }
    }
}
 
rouletteRusse();