# Desarrollo de Sistemas Informáticos
## Informe Práctica 4: Arrays, tuplas y enumerados

### -> Introducción

En esta práctica, nos centraremos en trabajar con arrays, tuplas y enumerados de TypeScript. Además incluiremos documentación y test con `mocha` y `chai` en nuestros ejercicios.
* [Material de apoyo](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-arrays-tuples-enums.html) para el desarrollo de esta práctica.
* [ForEach](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).


### Ejercicio 1. Decodificador de ressitencias. El decodeResistor recibe como parámetros los nombres de los colores de una resistencia como entrada y devuelve un número de dos dígitos indicando el valor de la resistencia.

En nuestro caso, debemos pasarle una string con los colores de las resistencias almacenados en un enum `colors`, estos por efecto, sino se les indica, tienen un valor, empezando desde 0.
El objetivo es ir guardando los valores de las resistencias y finalmente devolver el resultado de la concatenación de estas. Por ejemplo, `negro = 0 y verde = 5 --> resultado: 05`. 

Ejemplo de ejecución: 
```
Código de colores erroneo.
```

Prueba de error en las resistencias:
```
> exercises@1.0.0 test
> mocha


  decodeResistor function test
Código de colores erroneo.
    ✓ decodeResistor(blanco, verde, violeta) returns Código de colores erroneo


  1 passing (9ms)
```


### Ejercicio 2. Dado un array que contiene exclusivamente cadenas de texto, comprobar que las palabras del array están encadenadas. Esto es, una o más letras del final de una cadena coinciden con el comienzo de la siguiente cadena del array.

Dentro de la función `meshArray`, que recibirá un array de strings con varias palabras, debemos realizar varios bucles for y situarnos en la última posición de la priemra palabra, si al compararlas no son iguales, ese array no cumple con las condiciones para ser aceptado y se enviará un error.
En caso contrario, tenemos que ir recorriendo la priemra palabra hacia atrás, y la segunda hacia delante en búsqueda de más coincidencias y así poco a poco durante todo el array. Si en ningún punto de este, se rompe esta cadena, la función devolverá la concatenación de los caracteres repetidos.

Ejemplo de ejecución:
```
Array 1: 
Resultado: lowringter

Array 2: 
Error al encadenar
```

Pruebas realizadas sobre este ejercicio, en caso de que si se cumplan las condiciones y en caso contrario:
```
> exercises@1.0.0 test
> mocha


  meshArray function tests
Resultado: lowringter
    ✓ Result of meshArray([ "allow", "lowering", "ringmaster", "terror" ]) es: lowringter
Error al encadenar
    ✓ Result of meshArray([ "kingdom", "dominator", "notorious", "usual", "allegory" ]) es: Error al encadenar


  2 passing (9ms)
```


### Ejercicio 3. El objetivo es, dada una cadena, separar los valores numéricos de esta y realizar una media y por otro lado, separar los caracteres y concatenarlos.

Implementando la función `meanAndConcatenate`, a la que le pasamos un vector de tipo `any`, nuestro procedimiento será recorrerlo mediante un bucle, comprobando todos los caracteres definidos en una expresión regular, `letrasRegx`, si hay una coincidencia, entonces las concatenamos, sino la hay, significa que es un valor numérico, así que los guardamos y sumamos un la variable `media` y hacemos que un contador aumente, al acabar la ejecución, solo tendremos que dividir la media entre el número que alcanzó el contador para obtener el resultado. 

Ejemplo de ejecución:
```
Cadena introducida: u,6,d,1,i,w,6,s,t,4,a,6,g,1,2,w,8,o,2,0
[ 3.6, 'udiwstagwo' ]

```

Visualización de pruebas, una cadena con números y letras y otra sin números para analizar el comportamiento:
```
> exercises@1.0.0 test
> mocha


  meanAndConcatenate function tests
    ✓ Result of meanAndConcatenate(["u", 6, "d", 1, "i", "w", 6, "s", "t", 4, "a", 6, "g", 1, 2, "w", 8, "o", 2, 0]) is: [ 3.6, 'udiwstagwo' ]
    ✓ Result of meanAndConcatenate([ "w", "i", "t", "h", "o", "u", "t", "n", "u", "m", "b", "e", "r" ]) is: [ 0, 'withoutnumber' ]


  2 passing (10ms)
```


### Ejercicio 4. MoveZeros. El objetivo es, dado un vector, debemos recorrerlo, y en el caso de encontrar ceros, estos deben ser rodados hasta el final.

La solución propuesta para este ejercicio es sencilla, nuestra función `moveZeros`, recibe un vector de números, en caso de encontrar un 0 en este, debemos realizar un `slice()` que va a extraer una sección de una cadena devolviéndonos una nueva. Con esto podremos quitar los ceros y luego con un `push()`, podemos añadirlos nuevamente al final de esta.

Ejemplo de ejecución:

```
Array introducido: 1,0,1,2,0,1,3
[
  1, 1, 2, 1,
  3, 0, 0
]

```

Realizamos pruebas, pasando un vector con ceros y otro sin ceros para analizar su comportamiento:

```
> exercises@1.0.0 test
> mocha


  moveZeros function tests
    ✓ Result of moveZeros([1, 0, 1, 2, 0, 1, 3]) is: [1, 1, 2, 1, 3, 0, 0]
    ✓ Result of moveZeros([1, 4, 3, 2, 5]) is: [1, 4, 3, 2, 5]


  2 passing (10ms)
```


### Ejercicio 5. Implementar una función `multiplyAll` que tome como parámetro un array de números, además, debe retornar como resultado un nuevo array resultante de multiplicar el que se le pasa a dicha función por el único valor numérico.
 
La labor de la función `multiplyAll` es simple, recibe un número y multiplica cada elemento del array que se le ha pasado por dicho número, estas operaciones se realizan en un `forEach`.

```
Multiplicador:3
Vector resultante: 
[ 6, 18, 24 ]
```

Pruebas realizadas:
```
> exercises@1.0.0 test
> mocha
  multiplyAll function tests
Multiplicador:3
Vector resultante: 
    ✓ Result of multiplyAll([2, 6, 8])(3) is: [6, 18, 24]


  1 passing (9ms)
```

### Ejercicio 6. Puntos bi-dimensionales. En esta práctica se pide desarrollar un tipo de dato que permita describir puntos y realizar implementaciones con ellos.

Al realizar este ejercicio, mediante dos formas, quedó clara que la implementación con un tipo de dato es más limpia y sencilla que sin ella. 
Creamos un dato tipo `Point`:
```
type Point = {
  x: number,
  y: number,
};
```
Y desde aquí podremos manipular los valores x e y de los puntos que vamos a utilizar. La idea es muy simple, dependiendo de la operación, iremos jugando con cada uno de los atributos del tipo de dato `Point` para obtener el resultado mediante llamadas a las distintas funciones:

* pointAdd(point1, point2) Se encarga de sumar dos puntos
* pointSubstract(point1, point2) Se encarga de restar dos puntos
* pointProduct(point1, operator) Se encarga de multiplicar un punto por una constante
* euclideanDistance(point1, point2) Se encarga de obtener la distancia euclídea entre dos puntos

Ejemplo de ejecución
```
Punto 1: 1, 4
Punto 2: 2, 7

Resultado de la resta: 3, 11
Resultado de la resta: -1, -3
Resultado del producto: 5, 20
Distacia Euclídea entre ambos puntos: 3.16
```

Ahora veamos los resultados de las pruebas realizadas:
```
Type point functions test
    ✓ pointAdd(point1, point2) returns value [3, 11]
    ✓ pointSubstract(point1, point2) returns value [-1, -3]
    ✓ pointProduct(point1, operator) returns value [5, 20]
    ✓ euclideanDistance(point1, point2) returns value 3.16


  4 passing (11ms)
```


### Ejercicio 7. Puntos n-dimensionales. Aprovechándonos del tipo de dato creado anteriormente, ahora debemos mejorarlo para que pueda tener un mayor número de atributos según se quiera.

Para este caso, debemos crear un tipo de dato que permita tener más coordenadas, la implementación es la siguiente: `type nPoints = [number, number, number, ...number[]];`. De esta forma, podemos conseguir tantas coordenadas como queramos.

Los pasos son muy parecidosal caso anterior, solo que en esta ocasión nos aseguraremos de que las dimensiones de ambos puntos deben ser iguales para poder operar con ellos coordenada a coordenada, y si no es el caso, se nos mostrará un error. 
Contaremos nuevamente con 4 funciones:

* nPointsAdd(nPoint1, nPoint2) Se encarga de sumar dos puntos
* nPointsSubstract(point1, point2) Se encarga de restar dos puntos
* nPointsProduct(point1, operator) Se encarga de multiplicar un punto por una constante
* nPointsEuclideanDistance(point1, point2) Se encarga de obtener la distancia euclídea entre dos puntos.

Ejemplo de ejecución:
```
Punto 1: 1,2,3,4
Punto 2: 10,8,9,7
Constante a usar en el producto: 3

Resultado de la suma: 11,10,12,11
Resultado de la resta: -9,-6,-6,-3
Resultado del producto: 3,6,9,12
Distacia Euclídea entre ambos puntos: 12.73
```

Resultados obtenidos en las pruebas: 
```
nPoints functions test
Error!! Para operar con ellos deben tener las mismas dimensiones
    1) nPointsAdd(nPoint1, nPoint2) returns [11, 10, 12, 11]
Error!! Para operar con ellos deben tener las mismas dimensiones
    2) nPointsSubstract(nPoint1, nPoint2) returns value [-9, -6, -6, -3]
    3) nPointsProduct(nPoint1, constante) returns value [3, 6, 9, 12]
Error!! Para operar con ellos deben tener las mismas dimensiones
    4) nPointsEuclideanDistance(nPoint1, nPoint2) returns value 12.73
```
Aquí me he encontrado con dificultades, ya que aparentemente, las que deben salir mal, salen ma. Pero las pruebas que les pasan un resultado y esperan el mismo parecen fallar por alguna razón.


### Ejercicio 8. El agente. Tenemos un mapa, una posición inicial, y una posición final y debemos describir el camino que nos hará llegar al final.

Para el desarrollo de este ejercicio, me he inspirado en el tipo de datos `Point` del ejercicio 6, aunque en esta ocasión se llamará `type Dimensions` que tendrá dos atributos **tipo number**.

Tenemos definido en un enum los desplazamientos, que se realizarán en el eje de abscisas (`Este y Oeste`) y el eje de ordenadas (`Norte y Sur`). 
La mecánica será muy sencilla, si nuestro valor de la posición inicial en el eje de ordenadas es menor que la posición final, sumaremos 1 y viajaremos al **Norte**, y al **Sur** en caso contrario, lo mismo ocurrirá para el desplazamiento de nuestro agente en el eje de abscisas.
Ejemplo de ejecución:

```
Dimensiones del tablero: 10,10
Punto de partida: 1,2
Destino: 2,5

[ 'North', 'East', 'East', 'East' ]
```

Comprobemos además las pruebas realizadas sobre este ejercicio, cada una con distintos datos:
```
import 'mocha';
import {expect} from 'chai';
import {agent} from '../src/exercise-8';

describe('agent function tests', () => {
  it('Resultado de agent(board[0], board[1], initialPoint, finalPoint) es: North, East, East, East]', () => {
    expect(agent(10, 10, [1, 2], [2, 5])).to.be.eql(["North", "East", "East", "East"]);
  });
  it('Resultado de agent(board[0], board[1], initialPoint, finalPoint) es: Error en el rango', () => {
    expect(agent(10, 10, [-2, 7], [11, 6])).to.be.eql(['Error en el rango']);
  });
});
```

Y obtenemos por consola lo siguiente:
```
> exercises@1.0.0 test
> mocha

[ 'North', 'East', 'East', 'East' ]


  agent function tests
    ✓ Resultado de agent(board[0], board[1], initialPoint, finalPoint) es: North, East, East, East]
    ✓ Resultado de agent(board[0], board[1], initialPoint, finalPoint) es: Error en el rango


  2 passing (18ms)
```