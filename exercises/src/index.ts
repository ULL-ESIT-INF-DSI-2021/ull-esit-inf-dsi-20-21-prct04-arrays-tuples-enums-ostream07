// npm run doc --> documentación
// npm run test --> pruebas


/**
 * Variables globales
 */
 const arrayPoint1 = new Array();
 const arrayPoint2 = new Array();
 const operator: number = 7;
 point(arrayPoint1, arrayPoint2);
 
 /**
  * Función que suma las coordenadas de 2 puntos
  * @param arrayPoint1 contiene las coordenadas x, y del punto 1
  * @param arrayPoint2 contiene las coordenadas x, y del punto 2
  * @returns punto resultante de la suma de los dos anteriores
  */
 export function pointsAdd(arrayPoint1, arrayPoint2) {
   const arrayResult = new Array(1);
   for (let i: number = 0; i < 2; i++) {
     arrayResult[i] = arrayPoint1[i] + arrayPoint2[i];
   }
   return console.log(`\nResultado de la suma: ` + arrayResult);
 }
 
 /**
  * Función que resta las coordenadas de dos puntos
  * @param arrayPoint1 contiene las coordenadas x, y del punto 1
  * @param arrayPoint2 contiene las coordenadas x, y del punto 2
  * @returns punto resultante de la suma de los dos anteriores
  */
 export function pointsSubstract(arrayPoint1, arrayPoint2) {
   const arrayResult = new Array(1);
   for (let i: number = 0; i < 2; i++) {
     arrayResult[i] = arrayPoint1[i] - arrayPoint2[i];
   }
   return console.log(`Resultado de la resta: ` + arrayResult);
 }
 
 /**
  * Función que realiza el producto de un punto por una constante
  * @param arrayPoint1 contiene las coordenadas x, y del punto
  * @param operator constante por la que multiplicaremos el punto
  * @returns punto resultante del producto
  */
 export function pointsProduct(arrayPoint1, operator) {
   const arrayResult = new Array(1);
   for (let i: number = 0; i < 2; i++) {
     arrayResult[i] = arrayPoint1[i] * operator;
   }
   return console.log(`Resultado del producto: ` + arrayResult);
 }
 
 /**
  * Aplicando el teorema de Pitágoras, devuelve la distancia Euclídea
  * entre 2 puntos
  * @param arrayPoint1 contiene las coordenadas x, y del punto 1.
  * @param arrayPoint2 contiene las coordenadas x, y del punto 2.
  * @returns Devuelve con 2 decimales de precisión la distancia Euclídea
  */
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
 
 /**
  * FUNCIÓN PRINCIPAL
  * @param arrayPoint1 contiene las coordenadas x, y del punto 1
  * @param arrayPoint2 contiene las coordenadas x, y del punto 2
  */
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
 