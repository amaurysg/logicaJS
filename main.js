/* var n1 = prompt("Dame el numero 1")
var n2 = prompt("Dame el numero 2")


if (n1 > n2) {
  document.write(n1)
}
else {
  document.write(n2)
} */

/* var num = prompt("Dame un número")

if (num % 2 === 0) {
  alert("Es divisible")
} else {
  alert("NO es divisible")
} */

/* var frase = prompt("Escribe una frase")

var nFrase = frase.length

var i
for (i = 0; i < nFrase; i++) {
  if (frase.substr(i, 1) === "a" || frase.substr(i, 1) === "e" || frase.substr(i, 1) === "i" || frase.substr(i, 1) === "o" || frase.substr(i, 1) === "u") {
    console.log(frase.substr(i, 1))
  }
} */

/*
var numA = frase.substr(-4)
console.log(numA)  */

/* var n1 = prompt("Escribe un número");
if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
  document.write("Es divisible por 2, 3, 5 o 7");
} else {
  document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
} */

/* var n1 = prompt("Escribe un número");
var i;
for (i = 2; i <= n1; i++) {
  if (n1 % i === 0) {
    document.write(i, ", ");
  }
}
 */
/*
var n1 = prompt("Escribe un número");
var n2 = prompt("Escribe otro número");
var menor;
var i;
if (n1 < n2) {
  menor = n1;

} else {
  menor = n2;
}
for (i = 2; i < menor / 2; i++) {
  if (n1 % i === 0 && n2 % i === 0) {
    document.write(i, ", ");
  }
}
 */

//CADENA DE TEXTO INVERTIDA //
/* function invertir(cadena) {
  var x = cadena.length;
  var cadenaInvertida = "";

  while (x >= 0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(x);
    x--;
  }
  return console.log(cadenaInvertida);

}
invertir("Hola") */


/* function reverseString(str) {
  return [...String(str)].reverse().join('');
}

console.log(reverseString('stackoverflow'));  // "wolfrevokcats"
console.log(reverseString(1337));             // "7331"
console.log(reverseString([1, 2, 3]));        // "3,2,1" */


/* var cadena = prompt("dame una frase")
var cadenarevertida = "";

//Itero la cadena de manera inversa
for (var i = cadena.length - 1; i >= 0; i--) {
  //Voy concatenando el valor a la cadena resultado
  cadenarevertida += cadena[i];
}
console.log(cadenarevertida); */

// Ejercicio 1

/* let valor = "jola"
console.log(valor);

let resultado1 = cuentaCaracteres();
console.log(resultado1);

function cuentaCaracteres() {
  if (typeof valor !== "string") {
    console.log("No es un texto")
  } else {
    valor = "La cantidad de caracteres es " + valor.length;
    return valor;
  }
} */

//   Ejercicio 2

/* let texto = prompt("Frase");
console.log(texto);

let resultado2 = recortaTexto();
console.log(resultado2)

function recortaTexto() {
  if (typeof texto != 'string') {
    texto = texto.toString();
    return "El recorte dice: " + texto.substr(0, 4);
  } else {
    texto = "El recorte dice: " + texto.substr(0, 4);
    return texto;
  }
} */


/* let texto = prompt("Frase");
console.log(texto);

let resultado2 = recortaTexto();
console.log(resultado2)

function recortaTexto() {
  if (typeof texto != 'string') {
    texto = texto.toString();
    return "El recorte dice: " + texto.repeat(4);
  } else {
    texto = "El recorte dice: " + texto.repeat(4);
    return texto;
  }
}
 */
/* let nombre = prompt("Dame una frase");
let nombreReverse = nombre.split("").reverse().join("");
console.log(nombreReverse);
 */
//Ejercicio 6
/* const parrafo = prompt("Dame frase y repite alguna palabra")
const palabraBuscar = prompt("Palabra")
function contarTextoRepetido(parrafo, palabraBuscar) {
  var arrayParrafo = parrafo.split(" ");
  console.log(arrayParrafo)
  var cont = 0;
  for (let i = 0; i < arrayParrafo.length; i++) {
    if (arrayParrafo[i] == palabraBuscar) {
      cont = cont + 1;
    }
  }
  console.log(`Se encontro la palabra ${palabraBuscar} ${cont} veces`);
}
contarTextoRepetido(parrafo, palabraBuscar); */

/*
suma = 0
cont = 0
while (suma <= 50) {
  suma += parseInt(prompt("dame numero"))
  cont++
}
console.log(`la suma es ${suma}`)
console.log(`introduciste ${cont}`) */

/* var numeros = [1, 2, 3, 4, 5]
var pares = []
var impares = []

for (i of numeros) {
  let random = Math.round(Math.random() * 10 + 1);
  const result = i * random
  if (result % 2 == 0) {
    pares.push(result)
  } else {
    impares.push(result)
  }
}
console.log('pect', impares)
console.log('object', pares) */

/* const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

const dni = prompt("Dame DNI")

if (dni.length == 8 && parseInt(dni) > 0) {
  let letra = dni % 9
  console.log('object', `tu dni completo es ${dni}${letras[letra]}`)
} */

/* const palabra = prompt("Dame palabra")

let consonantes = 0,
  vocales = 0,
  espacios = 0;
for (const letra of palabra) {
  if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    vocales++
  } else if (letra == " ") {
    espacios++
  } else {
    consonantes++
  }
}
console.log(palabra)
console.log('object', `tus frase tiene ${vocales} vocales, y ${consonantes} consonantes en ${espacios} espacios`)
console.log('object', `Tu frase tiene ${palabra.length} caracteres`) */

/* const colores = ["amarillo", "azul", "rojo"]

const color = prompt("Dame un color").toLowerCase()
if (colores.includes(color)) {
  console.log("Está")
} else {
  console.log("no está")
} */

/* const num = prompt("Dame un numero")
const numAlreves = num.split("").reverse().join("")

if (num == numAlreves) {
  console.log('object', `${num} es capicúa`)
} else {
  console.warn(`${num} NO es capicúa`)
}
 */
/* function factorial(n) {
  var total = 1;
  for (i = 1; i <= n; i++) {
    total = total * i;
  }
  return total;
}

console.log(factorial(5)) */

/* var cadenaInvertida = "";
const iterar = (cadena) => {
  for (var i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
    console.log(cadenaInvertida)
  }
}
iterar("Hola")

var palabra = "BIEN"
var ipalabra = palabra.length
console.log(ipalabra) */

// DEVOLVER PALABRA INVERSA CON METODOS // 
/* var frase = prompt("Dame una frase")
function fraseInversa(frase) {
  let fraseI = frase.split("").reverse().join("");
  console.log(fraseI)
}
fraseInversa(frase) */

// DEVOLVER PALABRA INVERSA CON LOGICA // 
/* var cadenaInvertida = "";
const iterar = (cadena) => {
  for (var i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
    console.log(cadenaInvertida)
  }
}
iterar("Hola") */



/* Podria usar  un metodo contains, el cual puede buscar una cadena dentro de otra.
Tambien se podria usar una expresion regular con el valor de la subcadena,
para buscarlo desde la cadena mayor

sino recorrer toda la cadena e ir buscando valor a valor, ejemplo un codigo que me busque el numero de palabras comunes y el numero de las mismas.  */

/* const parrafo = prompt("Dame frase y repite alguna palabra")
const palabraBuscar = prompt("Palabra")
function contarTextoRepetido(parrafo, palabraBuscar) {
  var arrayParrafo = parrafo.split(" ");
  console.log(arrayParrafo)
  var cont = 0;
  for (let i = 0; i < arrayParrafo.length; i++) {
    if (arrayParrafo[i] == palabraBuscar) {
      cont = cont + 1;
    }
  }
  console.log(`Se encontro la palabra ${palabraBuscar} ${cont} veces`);
}
contarTextoRepetido(parrafo, palabraBuscar);
 */
/*
class Punto {
  latitud = 12544;
  longitud = 44555;
  tiempoGeneracion = 0; // En segundos SE INSTANETE EN QUE GENERÓ PUNTO GEOGRAFICO
  tiempoInsercion = 0; // En segundos INSTANTE DONDE FUE ALMACENADO
  constructor(tg, ti) {
    this.latitud = 0;
    this.longitud = 0;
    this.tiempoGeneracion = tg
    this.tiempoInsercion = ti
  }
  getLatencia = () => {
    return this.tiempoInsercion - this.tiempoGeneracion
  }

}

const nodo1 = new Punto(5000, 5100)
const nodo2 = new Punto(6000, 6800) //mayor latencia
const nodo3 = new Punto(7000, 9000) //1400

const p = [nodo1, nodo2, nodo3]

let latenciaMaxima = 0;
for (let i = 0; i < p.length; i++) {
  console.log('tengo ', latenciaMaxima)

  if (latenciaMaxima < p[i].getLatencia()) {

    latenciaMaxima = p[i].getLatencia()

  }
}
console.log('Latencia Máxima', latenciaMaxima) */

/* const multiply = (a, b) => {
  let result = 0
  const positivo = Math.abs(b) == b
  for (i = 0; i < Math.abs(b); i++) {
    result = positivo ? result + a : result - a
  }
  return result
}
const a = multiply(8, 5)
console.log(a) */

/* const multiply = (a, b) => {
  return b / (1 / a)
}
console.log('object', multiply(2, 2)) */

/* var num = 0
var numPares = 0
var sumPares = 0
var sumImpares = 0
for (i = 1; i <= 100; i++) {
  num += i

  if (i % 2 == 0) {
    sumPares += i

  } else {
    sumImpares += i
  }
} */
/* console.log("Suma Pares:", sumPares)
console.log("Suma Impares:", sumImpares) */

/* function mostrarDecremento(num) {
  for (i = num; i >= 0; i--) {
    num -= i
    console.log(i)
  }
}

mostrarDecremento(250) */

//RETO ONE // 
/* var nodos = []
var i = 0
for (i = 0; i <= 10; i++) {
  var newNodos = nodos.push(i)

}
console.log(nodos)

var agrego = nodos.splice(1, 0, 11)
console.log(nodos)

var elimino = nodos.splice(2, 1)

console.log("elimino", nodos)

var orden = nodos.sort((a, b) => a - b)
console.log("sort", nodos) */




/* var rest = 1
nodos.forEach((i) => {
  if (i >= i) {
    i - rest4
    console.log(i)
  }

})
 */

/* var nodo = [1, 2, 3, 4, 5]
var otherItems = 0
function clearItem(nodo, item) {
  var i = nodo.indexOf(item)
  nodo.splice(i, 1)



}
clearItem(nodo, 2)
console.log(nodo) */

//SOLUCION UNO///
/* var nodo = [1, 2, 3, 4, 5]

console.log("Nodo principal", nodo)

var clearItem = (nodo, item) => {

  var i = nodo.indexOf(item);
  i !== -1 && nodo.splice(i, 1);
  var newArray = []
  for (i = i; i < nodo.length; i++) {
    nodo[i] = nodo[i] - 1
    var indices = nodo[i] - 1
    newArray.push(indices)

  }
  console.log('object', newArray)
};
clearItem(nodo, 1)
console.log(`Hecho`, nodo)
 */

/* var valor = nodo[parseInt(prompt("Dame valor"))]
console.log("Nodo", nodo)
console.log("Valor", valor) */



/* var elimino = nodo.splice(0, parseInt(prompt("Cuantos datos quieres eliminar?")))
console.log(nodo) */


/*
var nodo = [1, 2, 3, 4, 5]
var item = nodo.indexOf(4)
console.log(item)
var clear = (array, item, cantidad) => {
  nodo.splice(item, cantidad)
  for (i = 2; i <= nodo.length - 1; i++) {
    nodo[i] - 1
    console.log(i)



  }
}



clear(nodo, 2, 1)
console.log(nodo) */


/*
array = [];

var nodo = 2
var nodo = 3
var nodo = 4
array.push(nodo)
console.log(array)  */


/* array = [1, 2, 3, 4]

console.log(array)

function clear(item, cantidad) {
  var item = array.indexOf(1)
  array.splice(item, 1) //Valor que doy

  newArray = array
  console.log(newArray)

  newArray.forEach(i => {
    for (i = 0; i < newArray.length; i++) {
      newArray[i] = newArray[i] - 1
    }
    console.log(newArray)
    return newArray
  });
}
clear()
 */