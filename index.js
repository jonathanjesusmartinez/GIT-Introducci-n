//Este es u n comentario
console.info("Hola Mundo");

/*Este es otro tipo
de comentario
*/

const PI= 3.14;
console.info(PI);


nombre = "Jonathan" + " " + "Martinez";
console.info("Mi nombre es " + nombre);

console.info("I`m " + nombre);
let nombre2 = 'Lorena';
console.info('She\'s ' + nombre2 + '');
console.info(`They're guys`);

let miNombre = "Jonathan";
let miApellido = "Martinez";
console.info(`Hola ${miNombre} ${miApellido}`);
console.info('Hola' + ' ' + miNombre + ' ' + miApellido);


function sumar(a, b) {
    return a + b;
    
}

function verMensaje(msj) {
    console.info(`[info] ${msj}`);
}

console.info("La suma de 13 + 5 =" + sumar(13,5));

verMensaje("Mi nombre es Jonathan");
