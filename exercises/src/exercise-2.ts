/* eslint-disable max-len */

const array1: String[] = ['allow', 'lowering', 'ringmaster', 'terror'];
const vector2: String[] = ['kingdom', 'dominator', 'notorious', 'usual', 'allegory'];

console.log(`Array 1: `);
meshArray(array1);
console.log(``);
console.log(`Array 2: `);
meshArray(vector2);

/**
 * Recibe un vector de string para comprobar si estas strings están encadenadas o no. Para que estén encadenadas
 * uno o más caracteres del final de la primera palabra, deben coincidir en orden con los de la siguiente y así
 * hasta acabar el vector. En caso contrario, debe mostrarse un error.
 * @param palabras Vector de strings con las palabras a revisar
 * @show Muestra por pantalla la concatenación de las letras repetidas en cada palabra si la string es
 * válida, indica error al encadenar en otro caso
 */

function meshArray(palabras: String[]) {
  let coincidenciaEncontrada: boolean;
  let posicionCoincidencia: number;
  let resultado = '';
  let contadorCoincidencias = 0;

  for (let j = 0; j < palabras.length - 1; j++) {
    coincidenciaEncontrada = false;
    posicionCoincidencia = 0;
    for (let i = palabras[j].length - 1; i >= 0; i--) {
      if (!coincidenciaEncontrada && palabras[j][i] === palabras[j + 1][0]) {
        posicionCoincidencia = palabras[j].slice(i, palabras[j].length).length;
        coincidenciaEncontrada = true;
      }
    }
    if (coincidenciaEncontrada && palabras[j].substr(-posicionCoincidencia, palabras[2].length) === palabras[j + 1].slice(0, posicionCoincidencia)) {
      resultado += palabras[j].substr(-posicionCoincidencia, palabras[2].length);
      contadorCoincidencias++;
    }
  }
  if (contadorCoincidencias === (palabras.length - 1)) {
    console.log('Resultado: ' + resultado);
  } else {
    console.log('Error al encadenar');
  }
}
