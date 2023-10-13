//paquete importdo
require ("colors");

const functions = require('./proy_modules/functions.js');

const contador = 10;

const main = async() =>{
    console.clear();

    const numero = 10;
    functions.interfazSigno(numero);

    const caracter = "A";
    functions.interfazencontroCaracter (caracter);
    
    const bebida = "gaseosa";
    functions.interfazbuscarBebida (bebida);

    const transporte = "avion"
    functions.medioDeTransporte (transporte); 
}

main();

