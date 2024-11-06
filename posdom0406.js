/*Positive dominance in Array
 

Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 

Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
*/

function positiveDom(numeros){
    let numeroPositivo = 0;
    let numeroNegativo = 0;

    numeros.forEach((element) => {
        if(element < 0) numeroNegativo++;
        else numeroPositivo++;
    })
    if (numeroPositivo > numeroNegativo) return true;
    else return false;
}

console.log(positiveDom([1, -3, -5, 4, 6767]));
console.log(positiveDom([1, 2, -4, 32]));
//ya estoy harta de intentarlo como loca (eso de subir mis archivos a github y que no funcione)