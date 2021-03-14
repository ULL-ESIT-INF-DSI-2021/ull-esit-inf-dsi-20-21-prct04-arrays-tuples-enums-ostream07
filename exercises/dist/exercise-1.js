/* eslint-disable indent */
/* eslint-disable max-len */
var dicCodificaciones;
(function (dicCodificaciones) {
    dicCodificaciones[dicCodificaciones["negro"] = 0] = "negro";
    dicCodificaciones[dicCodificaciones["marron"] = 1] = "marron";
    dicCodificaciones[dicCodificaciones["rojo"] = 2] = "rojo";
    dicCodificaciones[dicCodificaciones["naranja"] = 3] = "naranja";
    dicCodificaciones[dicCodificaciones["amarillo"] = 4] = "amarillo";
    dicCodificaciones[dicCodificaciones["verde"] = 5] = "verde";
    dicCodificaciones[dicCodificaciones["azul"] = 6] = "azul";
    dicCodificaciones[dicCodificaciones["violeta"] = 7] = "violeta";
    dicCodificaciones[dicCodificaciones["gris"] = 8] = "gris";
    dicCodificaciones[dicCodificaciones["blanco"] = 9] = "blanco";
})(dicCodificaciones || (dicCodificaciones = {}));
;
export function decodeResistor(codigoColores) {
    const codificaciones_sz = 10;
    let codigoColoresFrac = codigoColores.split('-');
    let result = '';
    if (codigoColores && codigoColoresFrac.length >= 2) {
        codigoColoresFrac = codigoColoresFrac.slice(0, 2);
        for (let i = 1; i < codificaciones_sz; i++) {
            codigoColoresFrac.forEach(color => {
                result += dicCodificaciones[i] === removeAccents(color).toLocaleLowerCase() ? String(i) : '';
            });
        }
        console.log(result);
    }
    else {
        console.log(`Código de colores erroneo.`);
    }
}
function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
let band = 'negro, verde';
let badnOption2 = 'blanco, verde, violeta';
decodeResistor(badnOption2);
