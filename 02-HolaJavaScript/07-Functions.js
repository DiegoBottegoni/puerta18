// Funciones en JavaScript
console.log("||||| Funciones |||||");

// Declaración clásica
function greet(name) {
  return "Hola " + name;
}
console.log("///// Función clásica /////");
console.log("El resultado de pasar 'Diego' a la función greet es:");
console.log(greet("Diego"));

// Función con 2 parámetros y retorno
function add(a, b) {
  return a + b;
}
console.log("///// Función con 2 parámetros y retorno /////");
console.log("El resultado de pasar 5 y 3 como parámetros a la función add es:");
console.log(add(5, 3));

// Arrow function (función flecha)
const multiply = (a, b) => a * b;
console.log("///// Función flecha /////");
console.log("El resultado de pasar 4 y 2 como parámetros a la función multiply es:");
console.log(multiply(4, 2));
