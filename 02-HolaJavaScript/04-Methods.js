// Métodos: funciones integradas

// Métodos de cadenas (string)
console.log("///// Métodos de cadenas (string) /////");

let message = "Hola Mundo!";
console.log("Siendo el mensaje original:", message);
console.log("El método toUpperCase() convierte el texto a mayúsculas:");
console.log(message.toUpperCase()); // HOLA MUNDO!
console.log("El método toLowerCase() convierte el texto a minúsculas:");
console.log(message.toLowerCase()); // hola mundo!
console.log("El método includes() verifica si una cadena contiene otra:");
console.log(message.includes("Mundo")); // true
console.log("length es una propiedad que nos dice cuántos caracteres tiene la cadena:", message.length); // 11


// Métodos de números
console.log("///// Métodos de números /////");

let num = 4.7;
console.log("Siendo un numero cualquiera:", num);
console.log("El método Math.round() redondea al número entero más cercano:");
console.log(Math.round(num)); // Redondea al número entero más cercano, sea mayor o menor, en este caso 5
console.log("El método Math.floor() retorna el entero más cercano, menor o igual al argumento:");
console.log(Math.floor(num)); // Retorna el entero más cercano, menor o igual al argumento, en este caso 4
console.log("El método Math.ceil() retorna el entero más cercano, mayor o igual al argumento:");
console.log(Math.ceil(num));  // Retorna el entero más cercano, mayor o igual al argumento, en este caso 5
console.log("Math.random() genera un número aleatorio entre 0 y 1:");
console.log(Math.random());
