var Compass;
(function (Compass) {
    Compass[Compass["NORTH"] = 1] = "NORTH";
    Compass[Compass["SOUTH"] = -1] = "SOUTH";
    Compass[Compass["WEST"] = -1] = "WEST";
    Compass[Compass["EAST"] = 1] = "EAST";
})(Compass || (Compass = {}));
;
const board = [10, 10];
const initialPoint = [1, 2];
const finalPoint = [2, 5];
export function agent(x, y, initialPoint, finalPoint) {
    const result = [];
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
        }
        else if (initialPoint[0] > finalPoint[0]) {
            initialPoint[0] += Compass.SOUTH;
            result.push(`South`);
        }
    }
    while (initialPoint[1] !== finalPoint[1]) {
        if (initialPoint[1] < finalPoint[1]) {
            initialPoint[1] += Compass.EAST;
            result.push(`East`);
        }
        else if (initialPoint[1] > finalPoint[1]) {
            initialPoint[1] += Compass.WEST;
            result.push(`West`);
        }
    }
    return result;
}
/*
console.log(`Dimensiones del tablero: ` + board);
console.log(`Punto de partida: ` + initialPoint);
console.log(`Destino: ` + finalPoint + `\n`);*/
console.log(agent(board[0], board[1], initialPoint, finalPoint));
