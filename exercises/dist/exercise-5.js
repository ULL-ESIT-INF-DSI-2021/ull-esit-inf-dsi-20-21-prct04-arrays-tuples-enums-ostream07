/* eslint-disable max-len */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const array5 = [2, 6, 8];
console.log(multiplyAll(array5)(3));
/**
 * Función que recibe un vector de enteros y debe devolver otra función que toma como argumento un único valor numérico
 * @param numeros Vector con números enteros
 * @returns Devuelve un nuevo vector con sus valores multiplicados por la constante
 */
function multiplyAll(numeros) {
    const multiplicador = numeros.length;
    return function (multiplicador) {
        let resultMultiplicaciones = [];
        console.log(`Multiplicador:` + multiplicador);
        numeros.forEach(numero => {
            resultMultiplicaciones.push(numero * multiplicador);
        });
        console.log(`Vector resultante: `);
        return resultMultiplicaciones;
    };
}
