let read = require("readline-sync"); 

let fizzBuzz = (nombre) => {
    let resultat;
    for (let index = 1; index < nombre + 1; index++){
        if(index % 15 === 0){
            resultat = "FIZZBUZZ";
        }else if(index % 3 === 0){
            resultat = "FIZZ";
        }else if(index % 5 === 0){
            resultat = "BUZZ";
        }else{
            resultat = index;
        }
        console.log(resultat);
        return resultat;
    }
}

fizzBuzz(read.questionFloat("entrez un nombre : "));