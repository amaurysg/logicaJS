let pizzas = [
  {
    id: 1,
    name: "hawaina",
    hasMeat: false,
    prices: { small: 10, medium: 15, big: 30 }

  },
  {
    id: 2,
    name: "vegetariana",
    hasMeat: false,
    prices: { small: 15, medium: 20, big: 35 }

  },
  {
    id: 3,
    name: "carnivora",
    hasMeat: false,
    prices: { small: 20, medium: 30, big: 40 }

  },
  {
    id: 4,
    name: "barbacoa",
    hasMeat: false,
    prices: { small: 18, medium: 35, big: 45 }

  },

]



//1. Retornar las pizzas cuyo valor mediano sea mayor o igual a 20
let pizzasMedium = (pizza) => {
  return pizzas.filter((pizza) => {
    if (pizza.prices.medium <= 25) {
      return true

    } else {
      return false
    }
  })
}
console.log(pizzasMedium())

/* str = prompt("Dame pizza").toLowerCase()

let pizzasName = (str) => {
  return pizzas.filter((pizza) => (pizza.name.indexOf(str) != -1))
}

console.log(pizzasName(str)) */


/* str = prompt("Dame pizza").toLowerCase() */

/* let pizzasName = (str) => {
  return pizzas.filter((pizza) => (pizza.name.indexOf(str) != -1))
}

console.log(pizzasName("e")) */

//Práctica FOR a array pizzas
/* for (i = 0; i < pizzas.length; i++) {
  pizzas[i].name
  console.log(pizzas[i].prices.medium)

} */
/* str = prompt("Dame pizza").toLowerCase()
const found = pizzas.find(pizza => pizza.name.includes(str))
console.log(found) */

/* let pizzaOrden = () => {
  pizzas.sort((pa, pb) => {
    if (pa.prices.big > pb.prices.big)
      return -1

    return 1
  })
}
pizzaOrden()
console.log(pizzas)
 */
/*
let byId = (arrayIds) => {
  return pizzas.filter((pizza) => {
    if (arrayIds.indexOf(pizza.id) != -1) {
      console.log("Existe")
      return true
    } else {

      return false
    }
  })
}
console.log(byId([1, 2])) */

/* names = ["pedro", "pablo", "alberto"]
name = prompt("Dame Un nombre").toLowerCase()

if (names.includes(name)) {
  console.log("Está")
} else {
  console.log("No está")
} */


