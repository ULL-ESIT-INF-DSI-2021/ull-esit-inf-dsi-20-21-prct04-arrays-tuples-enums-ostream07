const point1 = {
    x: 1,
    y: 4,
};
const point2 = {
    x: 2,
    y: 7,
};
let result = {
    x: 0,
    y: 0,
};
const operator = 5;
let final_result = 0;
/**
 * Función que realiza la suma de dos puntos
 * @param point1 Coordenadas del punto 1
 * @param point2 Coordenadas del punto 2
 * @returns Retorna en un nuevo punto el resultado de la suma
 */
function pointAdd(point1, point2) {
    result.x = point1.x + point2.x;
    result.y = point1.y + point2.y;
    return result;
}
/**
 * Función que realiza la resta de dos puntos
 * @param point1 Coordenadas del punto 1
 * @param point2 Coordenadas del punto 2
 * @returns Retorna en un nuevo punto el resultado de la resta
 */
function pointSubstract(point1, point2) {
    result.x = point1.x - point2.x;
    result.y = point1.y - point2.y;
    return result;
}
function pointProduct(point1, operator) {
    result.x = point1.x * operator;
    result.y = point1.y * operator;
    return result;
}
function euclideanDistance(point1, point2) {
    result.x = Math.pow(point2.x - point1.x, 2);
    result.y = Math.pow(point2.y - point1.y, 2);
    final_result = Math.sqrt(result.x + result.y);
    return final_result;
}
console.log(`Punto 1: ` + `${point1.x}, ${point1.y}`);
console.log(`Punto 2: ` + `${point2.x}, ${point2.y}\n`);
// Mostramos resultados de las operaciones
pointAdd(point1, point2);
console.log(`Resultado de la suma: ` + `${result.x}, ${result.y}`);
pointSubstract(point1, point2);
console.log(`Resultado de la resta: ` + `${result.x}, ${result.y}`);
pointProduct(point1, operator);
console.log(`Resultado del producto: ` + `${result.x}, ${result.y}`);
euclideanDistance(point1, point2);
console.log(`Distacia Euclídea entre ambos puntos: ` + final_result.toFixed(2));
