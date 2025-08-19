// Condicionales: tomar decisiones en el código

let score = Math.random() * 100;

console.log("Score random:", score);


if (score >= 90) {
  console.log("¡Excelente!");
} else if (score >= 60) {
  console.log("¡Buen trabajo!");
} else {
  console.log("¡Sigue intentando!");
}

// Operadores ternarios
let age = Math.random() * 100;
let canVote = age >= 18 ? "Sí" : "No";
console.log("Teniendo", age, "años.");
console.log("¿Puede votar?", canVote);
