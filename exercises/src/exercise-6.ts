type Point = {
  x: number,
  y: number,
};

const point1: Point = {
  x: 1,
  y: 4,
};

const point2: Point = {
  x: 2,
  y: 7,
};

let result: Point = {
  x: 0,
  y: 0,
};

const operator: number = 5;
let final_result: number = 0;

/**
 * Función que realiza la suma de dos puntos
 * @param point1 Coordenadas del punto 1
 * @param point2 Coordenadas del punto 2
 * @returns Retorna en un nuevo punto el resultado de la suma
 */
export function pointAdd(point1, point2): Point {
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
export function pointSubstract(point1, point2): Point {
  result.x = point1.x - point2.x;
  result.y = point1.y - point2.y;
  return result;
}

/**
 * Función que realiza el producto de un punto y una constante
 * @param point1 Coordenadas del punto 1
 * @param operator Constante
 * @returns Retorna en un nuevo punto el resultado de la multiplicación
 */
export function pointProduct(point1, operator) {
  result.x = point1.x * operator;
  result.y = point1.y * operator;
  return result;
}

/**
 * Función que realiza la distancia euclídea de dos puntos
 * @param point1 Coordenadas del punto 1
 * @param point2 Coordenadas del punto 2
 * @returns Retorna el valor de la distancia euclídea de ambos puntos
 */
export function euclideanDistance(point1, point2) {
  result.x = Math.pow(point2.x - point1.x, 2);
  result.y = Math.pow(point2.y - point1.y, 2);
  final_result = Math.sqrt(result.x + result.y);
  return final_result;
}

console.log(`Punto 1: ` + `${point1.x}, ${point1.y}`);
console.log(`Punto 2: ` + `${point2.x}, ${point2.y}\n`);

// Mostramos resultados de las operaciones
pointAdd(point1, point2);
console.log(`Resultado de la resta: ` + `${result.x}, ${result.y}`);
pointSubstract(point1, point2);
console.log(`Resultado de la resta: ` + `${result.x}, ${result.y}`);
pointProduct(point1, operator);
console.log(`Resultado del producto: ` + `${result.x}, ${result.y}`);
euclideanDistance(point1, point2);
console.log(`Distacia Euclídea entre ambos puntos: ` + final_result.toFixed(2));


/**
 * IMPLEMENTACIÓN SIN USAR EL TIPO DE DATOS
 * /**
 * Variables globales
 */
/*
 const arrayPoint1 = new Array();
 const arrayPoint2 = new Array();
 const operator: number = 7;
 point(arrayPoint1, arrayPoint2);
 

 export function pointsAdd(arrayPoint1, arrayPoint2) {
   const arrayResult = new Array(1);
   for (let i: number = 0; i < 2; i++) {
     arrayResult[i] = arrayPoint1[i] + arrayPoint2[i];
   }
   return console.log(`\nResultado de la suma: ` + arrayResult);
 }
 

 export function pointsSubstract(arrayPoint1, arrayPoint2) {
   const arrayResult = new Array(1);
   for (let i: number = 0; i < 2; i++) {
     arrayResult[i] = arrayPoint1[i] - arrayPoint2[i];
   }
   return console.log(`Resultado de la resta: ` + arrayResult);
 }
 

 export function pointsProduct(arrayPoint1, operator) {
   const arrayResult = new Array(1);
   for (let i: number = 0; i < 2; i++) {
     arrayResult[i] = arrayPoint1[i] * operator;
   }
   return console.log(`Resultado del producto: ` + arrayResult);
 }
 

 export function euclideanDistance(arrayPoint1, arrayPoint2) {
   let finalResult: number = 0;
   let result1: number = 0;
   let result2: number = 0;
   for (let i: number = 0; i < 1; i++) {
     result1 = Math.pow(arrayPoint2[i] - arrayPoint1[i], 2);
   }
   for (let i: number = 1; i < 2; i++) {
     result2 = Math.pow(arrayPoint2[i] - arrayPoint1[i], 2);
   }
   finalResult = Math.sqrt(result1+result2);
   return console.log(`Distancia Euclídea entre ambos puntos: ` +
                                               finalResult.toFixed(2));
 }
 
export function point(arrayPoint1, arrayPoint2) {
  const Xpoint1: number = 1;
   const Ypoint1: number = 7;
   const Xpoint2: number = 2;
   const Ypoint2: number = 4;
 
   arrayPoint1.push(Xpoint1, Ypoint1);
   console.log(`Punto 1: ` + arrayPoint1);
   arrayPoint2.push(Xpoint2, Ypoint2);
   console.log(`Punto 2: ` + arrayPoint2);
 
   // Llamadas a funciones
   pointsAdd(arrayPoint1, arrayPoint2);
   pointsSubstract(arrayPoint1, arrayPoint2);
   pointsProduct(arrayPoint1, operator);
   euclideanDistance(arrayPoint1, arrayPoint2);
 }
*/