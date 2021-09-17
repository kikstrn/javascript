let places = 5;
let tours = 3;
let fileList = [1,1,1,1];
let prix = 0;
 
let profit = () => {
    for(let index = 0; index < tours; index++){
        let placeRestante = places;    
        for(j = 0; j < fileList.length; j++){
            if(placeRestante - fileList[0] >=0){
                placeRestante -= fileList[0]
                prix += fileList[0];
                let groupe = fileList.splice(0,1)
                fileList.push(groupe[0]);         
              }else{
                break;
            }
        } 
    }
    console.log("Profit => " + prix + "€");
}

profit();