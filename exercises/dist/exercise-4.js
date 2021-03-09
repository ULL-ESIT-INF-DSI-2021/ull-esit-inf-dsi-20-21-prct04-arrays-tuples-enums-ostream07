const array4 = [1, 0, 1, 2, 0, 1, 3];
console.log(moveZeros(array4));
/**
 * Función que se encarga de en un vector dado, ordenar sus números de tal
 * forma que los ceros queden desplazados a las posiciones más a la derecha
 * de este.
 * @param numeros Vector de numeros donde tendremos que desplazar los ceros
 * @returns vector ordenado
 */
function moveZeros(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === 0) {
            numeros.splice(i, 1);
            numeros.push(0);
        }
    }
    return numeros;
}
