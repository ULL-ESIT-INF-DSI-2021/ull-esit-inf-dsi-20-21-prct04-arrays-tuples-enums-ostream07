/* eslint-disable indent */
/* eslint-disable max-len */
/*
console.log('Indique el código de color de la resistencia');
const text = process.openStdin();

decodeResistor(text);

function decodeResistor(codigoColores: String) {
  enum dicCodificaciones {'negro', 'marron', 'rojo', 'naranja',
                      'amarillo', 'verde', 'azul', 'violeta', 'gris', 'blanco'};
  const codificaciones_sz: number = dicCodificaciones.length;
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
*/
