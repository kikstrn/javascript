let read = require("readline-sync");
let joueur1 = true;
let joueur2 = false;
let tours = 0;
let victoire = true;

let tabMorpion = [
    ["_|","_|","_|"],
    ["_|","_|","_|"],
    ["_|","_|","_|"]
];

let coordonnee = (coordonneeX, coordonneeY) => {
    if (tabMorpion[coordonneeX][coordonneeY] != "X|" && tabMorpion[coordonneeX][coordonneeY] != "O|"  ) {
        if (joueur1) {
            tabMorpion[coordonneeX][coordonneeY] = "X|";
            joueur2 = true;
            joueur1 = false;
            console.log(joueur2);
        }else{
            tabMorpion[coordonneeX][coordonneeY] = "O|";
            joueur2 = false;
            joueur1 = true;
        }        
        tabMorpion.forEach(m => {
            console.log(m.join(""));
        })
    }else if(tabMorpion[coordonneeX][coordonneeY] == "X|" || tabMorpion[coordonneeX][coordonneeY] == "O|"){
        console.log("La case est deja prise, rejouez !");
        coordonnee(read.question("Choix de la coordonnee X : "), read.question("Choix de la coordonee Y : "));
    }
}

let victoireJoueur = () => {
    if (!joueur1) {
        console.log("Le joueur 1 a gagne !");
    }else{
        console.log("Le joueur 2 a gagne !");
    }
}

let conditionsVictoire = () => {
    if(tabMorpion[0][0] === tabMorpion[0][1] && tabMorpion[0][0] === tabMorpion[0][2] && tabMorpion[0][0] !="_|"){
        victoireJoueur();
        return false;
    }
    else if(tabMorpion[1][0] === tabMorpion[1][1] && tabMorpion[1][0] === tabMorpion[1][2] && tabMorpion[1][0] !="_|"){
        victoireJoueur();
        return false;
    }
    else if(tabMorpion[2][0] === tabMorpion[2][1] && tabMorpion[2][0] === tabMorpion[2][2] && tabMorpion[2][0] !="_|"){
        victoireJoueur();
        return false;
    }
    else if(tabMorpion[0][0] === tabMorpion[1][0] && tabMorpion[0][0] === tabMorpion[2][0] && tabMorpion[0][0] !="_|"){
        victoireJoueur();
        return false;
    }
    else if(tabMorpion[0][1] === tabMorpion[1][1] && tabMorpion[0][1] === tabMorpion[2][1] && tabMorpion[0][1] !="_|"){
        victoireJoueur();
        return false;
    }
    else if(tabMorpion[0][2] === tabMorpion[1][2] && tabMorpion[0][2] === tabMorpion[2][2] && tabMorpion[0][2] !="_|"){
        victoireJoueur();
        return false;
    }
    else if(tabMorpion[0][2] === tabMorpion[1][1] && tabMorpion[0][2] === tabMorpion[2][0]  && tabMorpion[0][2] !="_|"){
        victoireJoueur();
        return false;
    }
    else if(tabMorpion[2][2] === tabMorpion[1][1] && tabMorpion[2][2] === tabMorpion[0][0] && tabMorpion[2][2] !="_|"){
        victoireJoueur();
        return false;
    }
    else{
        return true;
    }
}

let morpion = () => {
    while (victoire) {
        if (joueur1) {
            console.log("Au tour du joueur 1 de jouer");
        }else{
            console.log("Au tour du joueur 2 de jouer");
        }
        coordonnee(read.question("Choix de la coordonnee X : "), read.question("Choix de la coordonee Y : "));
        tours++;
        if (tours === 9) {
            console.log("Egalite");
            break;        
        }else if (tours > 5) {
            victoire = conditionsVictoire();
        }
    }
}
morpion();