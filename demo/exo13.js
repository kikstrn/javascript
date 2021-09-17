let read = require("readline-sync"); 

let listeNombre = [12,25,5,7,6,-5];
listeNombre.sort(function(a, b) {
    return a - b;
  });
  console.log(listeNombre);