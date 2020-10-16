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

let texto = prompt("Frase");
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
}



