let read = require("readline-sync");

let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let messageCrypter = "";

/**
 * Permet de récupérer les index du mot saisi et de le modifier avec la clé renseignée
 * @param {string} mot 
 * @param {number} cle 
 */
 let cesar = (mot,cle) =>{
    let lettre = "";
    for (let index = 0; index < mot.length; index++) {
        lettre = mot[index];
        if(lettre ===" "){
            messageCrypter += " ";
        }
        else{
            let indexChiffrer = alphabet.indexOf(lettre) + cle;
            if(indexChiffrer > 25){
                indexChiffrer = indexChiffrer - 26;
            }
            
            messageCrypter += alphabet[indexChiffrer];
        }
       
    }
    console.log(messageCrypter);
}

cesar(read.question("Saisissez un message a crypter : "),read.questionFloat("Saisissez une cle : "))