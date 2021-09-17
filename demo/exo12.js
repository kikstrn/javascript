let read = require("readline-sync"); 

let temperatures = [12,25,5,7,6,-5];
let temperatureProche = temperatures[0];

console.log(temperatures);

temperatures.forEach(temperature => {
    if(Math.abs(temperature) <= Math.abs(temperatureProche)){
        if(temperature < 0){
            temperatureProche = temperature;
        }else {
            temperatureProche = temperature;
        }
    }

})

console.log(temperatureProche);