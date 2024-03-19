function traducirAPIdioma(frase) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let resultado = '';

    for (let i = 0; i < frase.length; i++) {
        if (vocales.includes(frase[i])) {
            resultado += frase[i] + 'p' + frase[i];
        } else {
            resultado += frase[i];
        }
    }

    return resultado;
}

// Ejemplo de uso
const frase = "hola me llamo jazmin"; //podemos usar cualquier frase cambiando las comillas y volviendo a guardar el archivo modificado.
const fraseTraducida = traducirAPIdioma(frase);
console.log(fraseTraducida); // la salida deberia ser: hopolapa mupundopo o la frase elegida traducida al idioma P.
