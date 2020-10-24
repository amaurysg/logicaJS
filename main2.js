//Llenar array con numeros//
/* var arrayPush = []
var arrayUnshift = []
for (i = 1; i <= 10; i++) {
  arrayPush.push(i)
  arrayUnshift.unshift(i)
}

console.log("Push", arrayPush) //Inserta en Orden
console.log("Unshift", arrayUnshift) //Inserta decreciente
 */

//Llenar array con numeros Aleatorios//
/*
function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var array = []
for (i = 0; i <= 10; i++) {
  array.push(getRandomArbitrary(1, 100))
}


let array2 = array.slice()
array2.push("Hola")

console.log('Array1', array)
console.log('Array2', array2) */

/* names = ["pedro", "pablo", "alberto"]
name = prompt("Dame Un nombre").toLowerCase()

if (names.includes(name)) {
  console.log("Está")
} else {
  console.log("No está")
} */




/* var arrayAle = []

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

for (i = 0; i <= 10; i++) {
  arrayAle.push(getRandomArbitrary(1, 100))
}
arrayAle.sort()
console.log(arrayAle) */


/* function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function ordenar() {
  let array = []
  for (i = 0; i <= 1; i++) {
    array.push(getRandomArbitrary(1, 100))
  }

  console.log("Array orginal", array.sort(function (a, b) {
    return a - b
  }))

  let ul = document.createElement("ul")
  for (i = 0; array.length; i++) {
    let li = document.createElement("li")

  }


}

window.onload = ordenar
 */



