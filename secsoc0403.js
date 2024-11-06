/*Secret Society
 
Find the name of a secret society based on the first letter of each member's name.

Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
*/

function nombreSecreto(nombre) {
    let sociedadSecreta = [];
    let nombreSecreto = "";
    nombre.forEach((element) => sociedadSecreta.push(element[0]));
    sociedadSecreta.sort();

    sociedadSecreta.forEach((el)=>nombreSecreto += el);
    return nombreSecreto;
}

console.log(nombreSecreto(["Esperanza", "Franco", "Nia"]));
console.log(nombreSecreto(["Phoebe", "Ross", "Chandler","Joey", "Monica", "Rachel"]));
console.log(nombreSecreto(["Harry", "Ron", "Hermione"]));
//ya estoy harta de intentarlo como loca (eso de subir mis archivos a github y que no funcione)