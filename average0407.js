/*Antipodal Average
 

Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.
 

Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
*/
function antipodalAverage(numeros){
    let primeraMitad =[];
    let segundaMitad =[];
    let sumaFinal = [];
    let dividirIndice = 0;

    if (numeros.length % 2 == 0){
        dividirIndice = numeros.length / 2;
        for (let i = 0; i < dividirIndice; i++){
            primeraMitad.push(numeros[i]);
        }
        for(let i = dividirIndice; i < numeros.length; i++){
            segundaMitad.push(numeros[i]);
        }
    }
    else if(numeros.length % 2 ==1){
        dividirIndice = numeros.length / 2 ;
        Math.floor(dividirIndice);
        numeros.splice(dividirIndice, 1);
        let nuevoIndiceDividido = numeros.length / 2;
        for (let i = 0; i < nuevoIndiceDividido; i++){
            primeraMitad.push(numeros[i]);
        }
        for(let i = 0; i< nuevoIndiceDividido; i++){
            primeraMitad.push(numeros[i]);
        }
        for(let i = nuevoIndiceDividido; i < numeros.length; i++){
            segundaMitad.push(numeros[i]);
        }
    }
    segundaMitad.reverse();
    for(let i = 0; i < primeraMitad.length; i++){
        let sum= (primeraMitad[i] + segundaMitad[i]) / 2;
        sumaFinal.push(sum);
    }
    return sumaFinal;
}
console.log(antipodalAverage([0, 1, 2, 3]));
console.log(antipodalAverage([10, 20, 30, 40]));
console.log(antipodalAverage([0, 1, 2, 3, 4]));
//ya estoy harta de intentarlo como loca (eso de subir mis archivos a github y que no funcione)