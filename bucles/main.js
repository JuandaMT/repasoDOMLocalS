let animales = [
  {
    nombre: "León",
    especie: "Felino",
    edad: 6,
  },
  {
    nombre: "Cebra",
    especie: "Herbívoro",
    edad: 4,
  },
  {
    nombre: "Tigre",
    especie: "Felino",
    edad: 3,
  },
  {
    nombre: "Elefante",
    especie: "Herbívoro",
    edad: 8,
  },
  {
    nombre: "Jirafa",
    especie: "Herbívoro",
    edad: 5,
  },
  {
    nombre: "Oso",
    especie: "Omnívoro",
    edad: 2,
  },
  {
    nombre: "Pingüino",
    especie: "Ave",
    edad: 1,
  },
];

// 1
for (let index = 21; index <= 34; index++) {
  console.log(index);
}
// 2
let acumulador = 0;
for (let num = 1; num < 11; num++) {
  acumulador += num;
  console.log(acumulador);
}
// 3
let array = [1, 2, 3];
let acumulador2 = 0;
for (let num of array) {
  acumulador2 += num;
}
console.log(acumulador2);
// 4
let numero = 3;
let acumulador3 = 1;
for (let num = 1; num <= numero; num++) {
  acumulador3 *= num;
}
console.log(acumulador3);
// 5
for (let num of array) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}
// 6
let personas = [];
for (let persona of personas) {
  if (persona.edad > 18) {
    console.log(persona.nombre);
  }
}
// 7
let num1 = 11;
let num2 = num1;
let resultado = "";
for (let i = 0; i < num1; i++) {
  num2--;
  if (num1 % num2 == 0 && num2 != 1) {
    resultado = "no es primo";
    break;
  } else {
    resultado = "es primo";
  }
}
console.log(resultado);
// 8
const animalesFel = [];
for (let animal of animales) {
  if (animal.edad > 4 && animal.especie == "Felino") {
    animalesFel.push(animal);
  }
}
console.log(animalesFel);
// 9
const animalesHer = [];
for (let animal of animales) {
  if (animal.edad % 2 == 0 && animal.especie == "Herbívoro") {
    animalesHer.push(animal);
  }
}
console.log(animalesHer);
// 10
const animalesOmnAves = [];
for (let animal of animales) {
  if (
    animal.edad < 3 &&
    (animal.especie == "Herbívoro" || animal.especie == "Ave")
  ) {
    animalesOmnAves.push(animal);
  }
}
console.log(animalesOmnAves);
// 11
const animalesH = [];
for (let animal of animales) {
  if (animal.especie.startsWith("H")) {
    animalesH.push(animal);
  }
}
console.log(animalesH);
// 12
const animalesMasDeCuatro = [];
for (let animal of animales) {
  if (
    animal.nombre.length > 4 &&
    (animal.especie == "Felino" || animal.especie == " Herbívoro")
  ) {
    animalesMasDeCuatro.push(animal);
  }
}
console.log(animalesMasDeCuatro);

// FUNCTIONES
// 13
const parametrosRepetidos = [1, 1, 2, 2, 3, 3];

/* function sinDuplicados(parametrosRepetidos) {
  const nuevosElementos = [];
  for(let elemento of parametrosRepetidos){
    if(!nuevosElementos.includes(elemento)){
      nuevosElementos.push(elemento);
    }
  }
  return nuevosElementos;
}
console.log(sinDuplicados(parametrosRepetidos)) */

const sinDuplicados = (array) => {
  const nuevosElementos = [];
  for(let elemento of array){
    if(!nuevosElementos.includes(elemento)){
      nuevosElementos.push(elemento);
    }
  }
  return nuevosElementos;
}
console.log(sinDuplicados(parametrosRepetidos))
// 12
function sumarElementos(){

}