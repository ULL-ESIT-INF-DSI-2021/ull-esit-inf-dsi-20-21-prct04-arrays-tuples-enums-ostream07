/**
 * Cree un tipo de datos Complex que permita representar un número complejo.
 * A continuación, implemente funciones que lleven a cabo las operaciones de
 * suma, resta, producto escalar, multiplicación y división de complejos
 * haciendo uso de dicho tipo de datos. Podría encontrar interesante la
 * descripción del objeto Math de JavaScript.
 *
 */
const arrayComplex1 = new Array();
const arrayComplex2 = new Array();
const imaginary = `i`;
const operator = 7;
complexNumber(arrayComplex1, arrayComplex2);
/**
 * Función que realiza la suma de complejos
 * @param arrayComplex1 primer complejo
 * @param arrayComplex2 segundo complejo
 * @return Devuelve el valor de la suma de ambos complejos
 */
export function complexAdd(arrayComplex1, arrayComplex2) {
    const arrayResult = new Array(1);
    for (let i = 0; i < 2; i++) {
        arrayResult[i] = arrayComplex1[i] + arrayComplex2[i];
    }
    return console.log(`\nResultado de la suma: ` + arrayResult + imaginary);
}
/**
 * Función que realiza la resta de complejos
 * @param arrayComplex1 primer complejo
 * @param arrayComplex2 segundo complejo
 * @return Devuelve el valor de la rseta de ambos complejos
 */
function complexSubstract(arrayComplex1, arrayComplex2) {
    const arrayResult = new Array(1);
    for (let i = 0; i < 2; i++) {
        arrayResult[i] = arrayComplex1[i] - arrayComplex2[i];
    }
    return console.log(`Resultado de la resta: ` + arrayResult + imaginary);
}
/**
 * Función que realiza el producto escalar de un complejo
 * @param arrayComplex1 primer complejo
 * @param operator constante fija por la que multiplicamos el complejo
 * @return Devuelve el valor del producto escalar de un complejo
 */
function scalarProduct(arrayComplex1, operator) {
    const arrayResult = new Array(1);
    for (let i = 0; i < 2; i++) {
        arrayResult[i] = arrayComplex1[i] * operator;
    }
    return console.log(`Resultado del producto escalar del punto 1: ` + arrayResult + imaginary);
}
/**
 * Función que realiza la multiplicación de complejos
 * @param arrayComplex1 primer complejo
 * @param arrayComplex2 segundo complejo
 * @return Devuelve el valor de la multiplicación de ambos complejos
 */
function complexProduct(arrayComplex1, arrayComplex2) {
    const arrayResult = new Array(1);
    const arrayProduct = new Array(1);
    let scarlarResult = 0;
    for (let i = 0; i < 2; i++) {
        arrayResult[i] = arrayComplex1[i] * arrayComplex2[i];
        if (i === 1) {
            arrayResult[i] = -arrayResult[i];
            for (let j = 0; j < arrayResult.length; j++) {
                scarlarResult = scarlarResult + arrayResult[j];
            }
        }
    }
    arrayProduct[0] = scarlarResult;
    arrayProduct[1] = arrayComplex1[0] * arrayComplex2[1] + arrayComplex1[1] * arrayComplex2[0];
    return console.log(`Resultado de la multiplicación: ` + arrayProduct + imaginary);
}
/**
 * Función que realiza la división de complejos
 * @param arrayComplex1 primer complejo
 * @param arrayComplex2 segundo complejo
 * @return Devuelve el valor de la división de ambos complejos
 */
function complexDivision(arrayComplex1, arrayComplex2) {
    const arrayResult = new Array(1);
    let auxiliar = 0;
    let numerador = new Array(1);
    let denominador = 0;
    for (let i = 0; i < 2; i++) {
        arrayResult[i] = arrayComplex1[i] * arrayComplex2[i];
        if (i === 1) {
            arrayResult[i] = -arrayResult[i];
            for (let j = 0; j < arrayResult.length; j++) {
                auxiliar = auxiliar + arrayResult[j];
            }
        }
    }
    numerador[0] = auxiliar;
    numerador[1] = arrayComplex1[1] * arrayComplex2[0] - arrayComplex1[0] * arrayComplex2[1];
    denominador = Math.pow(arrayComplex2[0], 2);
    denominador = denominador - Math.pow(arrayComplex2[1], 2);
    const finalResult = new Array(1);
    for (let i = 0; i < 2; i++) {
        finalResult[i] = numerador[i] / denominador;
    }
    return console.log(`Resultado de la división compleja: ` + finalResult + imaginary);
}
/**
 * FUNCIÓN PRINCIPAL. Llama a las funciones para obtener resultados de distintas
 * operaciones entre complejos
 * @param arrayComplex1 primer complejo
 * @param arrayComplex2 segundo complejo
 */
function complexNumber(arrayComplex1, arrayComplex2) {
    const realValue1 = 1;
    const imaginaryValue1 = 7;
    const realValue2 = 2;
    const imaginaryValue2 = 4;
    arrayComplex1.push(realValue1, imaginaryValue1);
    console.log(`Punto 1: ` + arrayComplex1 + imaginary);
    arrayComplex2.push(realValue2, imaginaryValue2);
    console.log(`Punto 2: ` + arrayComplex2 + imaginary);
    // Llamadas a funciones
    complexAdd(arrayComplex1, arrayComplex2);
    complexSubstract(arrayComplex1, arrayComplex2);
    scalarProduct(arrayComplex1, operator);
    complexProduct(arrayComplex1, arrayComplex2);
    complexDivision(arrayComplex1, arrayComplex2);
}
