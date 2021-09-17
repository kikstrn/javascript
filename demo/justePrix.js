let read = require("readline-sync"); 

let randomNumber = () => {
    return Math.floor(Math.random() * 100);
} 

let justePrix = (tentative,nombre) => {
    let random = randomNumber(nombre);
    tentative--;
    while(tentative > 0){
        if(nombre != random){
            if(nombre < random){
                console.log("C'est plus !");
            }else{
                console.log("C'est moins !");
            }
            nombre = read.questionFloat("Mauvais prix ! Tentatives restante : " + tentative + " Entrez un nouveau prix : ");
            tentative--;
        }else{
            console.log("VOUS AVEZ TROUVE LE BON PRIX !!!");
            break;
        }
    }
        return tentative,nombre;
}

randomNumber();
justePrix(read.questionFloat("entrez un nombre de tentatives : "),read.questionFloat("entrez un prix : "))
