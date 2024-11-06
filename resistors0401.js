/*
Sum of Resistors in Series
 

Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.
 
*/

function sumResitance(circuits){
    let sumR = 0
    circuits.forEach((resistance)=> sumR += Math.abs(resistance));
    return sumR + " ohms";
}

console.log(sumResitance([-1,5,6,3]));
console.log(sumResitance([14,3.5,6]));
console.log(sumResitance([8,15,100]));

console.log("fanita, todo va a estar bien")
//ya estoy harta de intentarlo como loca (eso de subir mis archivos a github y que no funcione)