/* eslint-disable max-len */
type nPoints = [number, number, number, ...number[]];
const nPoint1: nPoints = [1, 2, 3, 4];
const nPoint2: nPoints = [10, 8, 9, 7];
const constante: number = 3;

/**
 * Función que realiza la suma de dos puntos n-dimensionales
 * @param nPoint1 Coordenadas del punto 1 n-dimensional
 * @param nPoint2 Coordenadas del punto 2 n-dimensional
 * @returns Retorna en un nuevo punto el resultado de la suma
 */
export function nPointsAdd(nPoint1, nPoint2): nPoints {
  const result: nPoints = [0, 0, 0];
  if (nPoint1.length !== nPoint2.length) {
    console.log(`Error!! Para operar con ellos deben tener las mismas dimensiones`);
    return result;
  }
  for (let i: number = 0; i < nPoint1.length; i++) {
    result[i] = nPoint1[i] + nPoint2[i];
  }
  return result;
}

/**
 * Función que realiza la resta de dos puntos n-dimensionales
 * @param nPoint1 Coordenadas del punto 1 n-dimensional
 * @param nPoint2 Coordenadas del punto 2 n-dimensional
 * @returns Retorna en un nuevo punto el resultado de la resta
 */
export function nPointsSubstract(nPoint1, nPoint2): nPoints {
  const result: nPoints = [0, 0, 0];
  if (nPoint1.length !== nPoint2.length) {
    console.log(`Error!! Para operar con ellos deben tener las mismas dimensiones`);
    return result;
  }
  for (let i: number = 0; i < nPoint1.length; i++) {
    result[i] = nPoint1[i] - nPoint2[i];
  }
  return result;
}

/**
 * Función que realiza el producto de un punto n-dimensional por una constante
 * @param nPoint1 Coordenadas del punto 1 n-dimensional
 * @param constante valor de la constante
 * @returns Retorna en un nuevo punto el resultado del producto
 */
export function nPointsProduct(nPoint1, constante): nPoints {
  const result: nPoints = [0, 0, 0];
  for (let i: number = 0; i < nPoint1.length; i++) {
    result[i] = nPoint1[i] * constante;
  }
  return result;
}

/**
 * Función que realiza la distancia euclídea de dos puntos n-dimensionales
 * @param nPoint1 Coordenadas del punto 1 n-dimensional
 * @param nPoint2 Coordenadas del punto 2 n-dimensional
 * @returns Retorna el valor de la distancia euclídea entre ambos puntos
 */
export function nPointsEuclideanDistance(nPoint1, nPoint2) {
  let result: number = 0;
  if (nPoint1.length !== nPoint2.length) {
    console.log(`Error!! Para operar con ellos deben tener las mismas dimensiones`);
    return -1;
  }
  for (let i: number = 0; i < nPoint1.length; i++) {
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
