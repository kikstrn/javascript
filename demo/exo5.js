let read = require("readline-sync");

// EXO 5
let note = read.questionFloat("entrez une note : ");
if(note > 0 && note <= 4){
    console.log("Catastrophique, il faut tout revoir");
}else if(note <=10){
    console.log("Insuffisant");
}else if(note <=14){
    console.log("Peut mieux faire");
}else if(note <=17){
    console.log("Bien");
}else if(note <=20){
    console.log("Excellent, travail");
}else {
    console.log("Note invalide");
}