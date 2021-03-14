const nPoint1 = [1, 2, 3, 4];
const nPoint2 = [10, 8, 9, 7];
const constante = 3;
export function nPointsAdd(nPoint1, nPoint2) {
    const result = [0, 0, 0];
    if (nPoint1.length !== nPoint2.length) {
        console.log(`Error!! Para operar con ellos deben tener las mismas dimensiones`);
        return result;
    }
    for (let i = 0; i < nPoint1.length; i++) {
        result[i] = nPoint1[i] + nPoint2[i];
    }
    return result;
}
export function nPointsSubstract(nPoint1, nPoint2) {
    const result = [0, 0, 0];
    if (nPoint1.length !== nPoint2.length) {
        console.log(`Error!! Para operar con ellos deben tener las mismas dimensiones`);
        return result;
    }
    for (let i = 0; i < nPoint1.length; i++) {
        result[i] = nPoint1[i] - nPoint2[i];
    }
    return result;
}
export function nPointsProduct(nPoint1, constante) {
    const result = [0, 0, 0];
    for (let i = 0; i < nPoint1.length; i++) {
        result[i] = nPoint1[i] * constante;
    }
    return result;
}
export function nPointsEuclideanDistance(nPoint1, nPoint2) {
    let result = 0;
    if (nPoint1.length !== nPoint2.length) {
        console.log(`Error!! Para operar con ellos deben tener las mismas dimensiones`);
        return -1;
    }
    for (let i = 0; i < nPoint1.length; i++) {
        result += Math.pow(nPoint2[i] - nPoint1[i], 2);
    }
    return Math.sqrt(result);
}
console.log(`Punto 1: ` + `${nPoint1}`);
console.log(`Punto 2: ` + `${nPoint2}`);
console.log(`Constante a usar en el producto: ` + constante + `\n`);
// Mostramos resultados de las operaciones
console.log(`Resultado de la suma: ` + `${nPointsAdd(nPoint1, nPoint2)}`);
console.log(`Resultado de la resta: ` + `${nPointsSubstract(nPoint1, nPoint2)}`);
console.log(`Resultado del producto: ` + `${nPointsProduct(nPoint1, constante)}`);
console.log(`Distacia Euclídea entre ambos puntos: ` + `${nPointsEuclideanDistance(nPoint1, nPoint2).toFixed(2)}`);
