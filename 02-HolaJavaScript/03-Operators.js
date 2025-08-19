// Operadores: símbolos que realizan operaciones sobre valores

// Aritméticos
console.log("///// Aritméticos /////");
let a = 10;
let b = 3;
console.log("a es igual a:", a);
console.log("b es igual a:", b);
console.log("entonces..");


console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b); // resto

// Comparación
console.log("///// Comparación /////");
console.log("Si digo que 5 es mayor que 3, la premisa es:",5 > 3);   // true
console.log("Si digo que 5 es estrictamente igual a '5', la premisa es:",5 === "5"); // false (igualdad estricta)
console.log("Si digo que 5 es igual a '5', la premisa es:",5 == "5");  // true (igualdad débil)

// Lógicos

console.log("///// Lógicos /////");
let x = true;
let y = false;
console.log("Si x es:", x, "e y es:", y);
console.log("entonces..");

console.log(x, "&&", y, "es:", x && y); // false
console.log(x, "||", y, "es:", x || y); // true
console.log("!", x, "es:", !x);         // false
