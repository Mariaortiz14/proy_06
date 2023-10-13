const functions = {};
const signo = (numero) => {
    if (numero <= 0) {
        return "positivo"
    } else {
        return "negativo"
    }
};

const interfazSigno = (numero) => {
    //console.clear();
    console.log("************************************".blue);
    console.log("*          FUNCION SIGNO           *".blue);
    console.log("************************************".blue);
    console.log('*'.blue + `   el numero ${numero} es ` +
                functions.signo(numero) +'       *'.blue);
                     
    console.log('************************************\n'.blue);
};

const interfazEncontroCaracter = (caracter) => {
    //console.clear();
    console.log('*******************************************'.blue);
    console.log('*'.blue + '      FUNCION ENCONTRO CARACTER          *'.blue);
    console.log('*******************************************'.blue);
    console.log('*'.blue +`     el caracter ${caracter} ` +
                functions.EncontroCaracter(caracter) +'          *'.blue);

    console.log('*******************************************\n'.blue);
};

const EncontroCaracter = (caracter) => {
    const datos = ["A", "B", "C", "D", "E"];
    if (datos.includes(caracter)) {
        return "se encontro ";
    } else {
        return "no se encuentra el caracter";
    }
};


const buscarBebida  = (bebida) => {
    const datos = ["vino", "cerveza", "gaseosa", "agua"];
    if (bebida === 'vino'   || bebida === 'cervaza'  || bebida === 'gaseosa' || bebida ==='agua') {
        return 've a la barra'
    } else {
        return 've a la tienda.';
    }
};

const interfazbuscarBebida = (bebida) => {
    //console.clear();
    console.log('**********************************************'.blue);
    console.log('*       FUNCION ENCONTRAR BEBIDA             *'.blue);
    console.log('**********************************************'.blue);
    console.log('*'.blue+ `  la bebida ${bebida} se encontro `  +     
                functions.buscarBebida (bebida)  +             '*'.blue);
    console.log('**********************************************'.blue);

};

const medioDeTransporte = (transporte) => {
    const datos =["avion", "flota", "carro", "bicicleta"];
   if (transporte === "avion" || transporte === "flota") {
        return "recuerda tener dinero para el pasaje";
   } else if (transporte === "carro" || transporte === "bicicleta") {
    return " recuerda llevar ropa apropiada";
   } else {
        return "medio de transporte no valido";
   }
        
 };
    
const interfazmedioDeTransporte = (transporte) => {
    //console.clear();
    console.log('**********************************************'.blue);
    console.log('*      FUNCION MEDIO DE TRANSPORTE           *'.blue);
    console.log('***************************************** ****'.blue);
    console.log('*'.blue+ `      el transporte ${transporte} es     ` +     
                functions.medioDeTransporte (transporte) +       '*'.blue);
    console.log('**************************************************'.blue);
};

const calcularPrecioVenta = (cantidad, precio, descuento) => {
    if (typeof precio !== `number` ||
        typeof descuento !== `number` ||
        typeof cantidad !== `number` ||
        precio < 0 ||
        descuento < 0 ||
        cantidad < 0 )
    {
        return "error, datos falsos, verifique la informacion";
    } else {
        const precionormal = (precio - (precio * descuento / 100));
        const preciototal = (precionormal * cantidad);
        const precios = [precionormal, preciototal];
        return precios;
        
    }
};
const interfazcalcularPrecioVenta = (cantidad, precio, descuento) => {
    //console.clear();
    console.log(calcularPrecioVenta(cantidad, precio, descuento));
}



functions.signo = signo;
functions.interfazSigno = interfazSigno;
functions.EncontroCaracter = EncontroCaracter;
functions.interfazencontroCaracter = interfazEncontroCaracter;
functions.buscarBebida = buscarBebida;
functions.interfazbuscarBebida = interfazbuscarBebida;
functions.medioDeTransporte = medioDeTransporte;
functions.interfazmedioDeTransporte = interfazmedioDeTransporte;
functions.calcularPrecioVenta = calcularPrecioVenta;
functions.interfazcalcularPrecioVenta = interfazcalcularPrecioVenta;

module.exports = functions;
