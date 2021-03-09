/* eslint-disable max-len */

const array3: any[] = ['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0];

console.log(meanAndConcatenate(array3));

/**
 * Esta función tiene dos cometidos, el priemro es identificar todos los números
 * que contiene el array dado, y hacer una media con ellos. Y la segunda es
 * concatenar todas las letras que encuentre y devolverlas juntas:
 * ```typescript
 * ['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0]
 * [3.6, "udiwstagwo"]
 * ```
 * @param datos Vector con números y letras mezclados
 * @returns Devuelve un vector con la media entre sus cifras numéricas y la concatenación
 * de todas sus letras después.
 */
function meanAndConcatenate(datos: any[]) {
  const letrasRegx: RegExp = /^[a-zA-Z áéíóú]{1,32}$/;
  const numerosRegx: RegExp = /^[0-9]{9}$/;
  let media: number = 0;
  let contadorNumeros = 0;
  let cadena: String = '';

  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < datos.length; j++) {
      if (letrasRegx.test(String(datos[j]))) {
        cadena += datos[j];
      } else {
        media += datos[j];
        contadorNumeros++;
      }
    }
  }
  media = media / contadorNumeros;
  return [media, cadena];
}

