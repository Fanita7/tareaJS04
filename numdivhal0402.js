/*
Number divided into halves
 

Given a number, return the number divided into its halves in an array.
 

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
 
*/

function numDivision (number){
    let mitad = number /2;
    let mitadArray = [];
    mitadArray.push(mitad);
    mitadArray.push(mitad);

    return mitadArray;
}

console.log(numDivision(4));
console.log(numDivision(10));
