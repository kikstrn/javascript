let read = require("readline-sync");

let motChoisi = read.question("Choisir un mot à deviner : ");
let vies = read.questionFloat("Choisir le nombre de vie :");
let trouver = false;

let motCacherFunction = (motAtrouver) => {
    let mot = "";
    for(let index = 0; index < motAtrouver.length; index++){
        mot += "-";
    }
    return mot;
}

let motCacher = motCacherFunction(motChoisi);
let motCacherList = [];
 
let traitementLettreFucntion = (lettre) => {
    for(let index = 0; index < motChoisi.length; index++){
        if(lettre === motChoisi[index]){
            motCacherList = motCacher.split("");
            motCacherList[index] = lettre;
            motCacher = motCacherList.join("");
            trouver = true;            
        }
    }
    if(!trouver){
        vies--;
    }
    trouver = false;
    return motCacher;
}
 
let pendu = () => {
    while(vies > 0){
        let motResultat = traitementLettreFucntion(read.question("Choisir une lettre : "));
        console.log("Il vous reste : " + vies + " vies");
        console.log(motResultat);
        if(motResultat === motChoisi){
            console.log("Bien joué vous avez trouvé le mot !");
            break;
        }
    }
}

pendu();