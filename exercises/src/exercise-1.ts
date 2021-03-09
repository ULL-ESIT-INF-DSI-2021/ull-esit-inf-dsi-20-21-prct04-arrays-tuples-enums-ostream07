/* eslint-disable indent */
/* eslint-disable max-len */
/*
console.log('Indique el código de color de la resistencia');
const text = process.openStdin();

decodeResistor(text);

function decodeResistor(codigoColores: String) {
  const dicCodificaciones: string[] = ['negro', 'marron', 'rojo', 'naranja',
                      'amarillo', 'verde', 'azul', 'violeta', 'gris', 'blanco'];
  let codigoColoresFrac = codigoColores.split('-');
  let result: String = '';

  if (codigoColores && codigoColoresFrac.length >= 2) {
    codigoColoresFrac = codigoColoresFrac.slice(0, 2);
    for (let i = 1, y = dicCodificaciones.length; i < y; i++) {
      codigoColoresFrac.forEach(color => { result += dicCodificaciones[i] === removeAccents(color).toLocaleLowerCase() ? String(i) : '';
    });
  }
  console.log(result);
  } else {
    console.log('%cCódigo de colores erroneo.');
  }
}

function removeAccents(str:String): String {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
*/
