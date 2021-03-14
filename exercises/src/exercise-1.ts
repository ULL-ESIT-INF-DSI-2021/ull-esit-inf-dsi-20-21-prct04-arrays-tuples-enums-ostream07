/* eslint-disable indent */
/* eslint-disable max-len */
enum dicCodificaciones {'negro', 'marron', 'rojo', 'naranja',
                      'amarillo', 'verde', 'azul', 'violeta', 'gris', 'blanco'};

/**
 * Función que realiza la concatenación de los valores de las ressitencias
 * @param codigoColores string con los colores de las resistencias
 * @return Devuelve la concatenación de los valores de las bandas.
 */
export function decodeResistor(codigoColores: String) {
  const codificaciones_sz: number = 10;
  let codigoColoresFrac = codigoColores.split('-');
  let result: String = '';

  if (codigoColores && codigoColoresFrac.length >= 2) {
    codigoColoresFrac = codigoColoresFrac.slice(0, 2);
    for (let i: number = 1; i < codificaciones_sz; i++) {
      codigoColoresFrac.forEach(color => { result += dicCodificaciones[i] === removeAccents(color).toLocaleLowerCase() ? String(i) : '';
    });
  }
  console.log(result);
  } else {
    console.log(`Código de colores erroneo.`);
  }
}

function removeAccents(str:String): String {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

let bandOption1: string = 'negro, verde';
let badnOption2: string = 'blanco, verde, violeta';
decodeResistor(badnOption2);