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
for (let persona of personas) {
  if (persona.edad > 18) {
    console.log(persona.nombre);
  }
}
// 7


