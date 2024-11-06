/*Online status
 

Display online status for a list of users.
 

Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
*/

function onlineStatus(usuarios){
    if(usuarios.length == 1){
        return `${usuarios[0]} está en línea`;}
        else if (usuarios.length == 2){
            return `${usuarios[0]} y ${usuarios[1]} están en línea`;}
        else if (usuarios.length > 2){
            return `${usuarios[0]}, ${usuarios[1]} y ${usuarios.length - 2} más están en línea`;
        }  
}
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
//ya estoy harta de intentarlo como loca (eso de subir mis archivos a github y que no funcione)