/* eslint-disable max-len */
type Dimensions = [number, number];
enum Compass { NORTH = 1, SOUTH = -1, WEST = -1, EAST = 1};
const board : Dimensions = [10, 10];
const initialPoint: Dimensions = [1, 2];
const finalPoint: Dimensions = [2, 5];

/**
 * Función que reañiza el cálculo del viaje del agente
 * @param x filas del tablero
 * @param y columnas del tablero
 * @param initialPoint posición inicial
 * @param finalPoint posición final
 * @returns Devuelve los pasos a seguir para dar con la salida
 */
export function agent(x: number, y: number, initialPoint: Dimensions, finalPoint: Dimensions): string[] {
  const result: string[] = [];
  if (initialPoint[0] < 0 || initialPoint[0] > x || finalPoint[0] < 0 || finalPoint[0] > x) {
    return ['Error en el rango'];
  }
  if (initialPoint[1] < 0 || initialPoint[1] > y || finalPoint[1] < 0 || finalPoint[1] > y) {
    return ['Error en el rango'];
  }

  while (initialPoint[0] !== finalPoint[0]) {
    if (initialPoint[0] < finalPoint[0]) {
      initialPoint[0] += Compass.NORTH;
      result.push(`North`);
    } else if (initialPoint[0] > finalPoint[0]) {
      initialPoint[0] += Compass.SOUTH;
      result.push(`South`);
    }
  }

  while (initialPoint[1] !== finalPoint[1]) {
    if (initialPoint[1] < finalPoint[1]) {
      initialPoint[1] += Compass.EAST;
      result.push(`East`);
    } else if (initialPoint[1] > finalPoint[1]) {
      initialPoint[1] += Compass.WEST;
      result.push(`West`);
    }
  }
  return result;
}

console.log(`Dimensiones del tablero: ` + board);
console.log(`Punto de partida: ` + initialPoint);
console.log(`Destino: ` + finalPoint + `\n`);
console.log(agent(board[0], board[1], initialPoint, finalPoint));
