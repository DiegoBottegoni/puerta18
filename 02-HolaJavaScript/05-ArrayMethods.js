// Arrays: listas ordenadas de valores

let fruits = ["apple", "banana", "cherry"];
console.log("Siendo la lista de frutas:", fruits);
console.log("Accediendo a cada elemento. Con el nombre del array y el índice entre corchetes. Por ejemplo fruits[0] es apple");
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // cherry


console.log("Acá también nos sirve la propiedad length!!");

console.log("Length:", fruits.length); // 3

// Agregar item
console.log("Con el método push() podemos agregar un item al final del array:");
console.log("Agregamos naranjas");

fruits.push("orange");
console.log("Fruits después de agregar naranjas:");

console.log(fruits); // ["apple","banana","cherry","orange"]

// Eliminar último item
console.log("Con el método pop() podemos eliminar el último item del array:");
fruits.pop();
console.log("Fruits después de eliminar el último item:");

console.log(fruits); // ["apple","banana","cherry"]

// Recorrer con map (súper útil en ReactJs)
console.log("Este método se llama map() y nos permite recorrer el array aplicando una función a cada elemento.");
console.log("Lo primero de este archivo fue imprimir por consola cada fruta, uno por uno.");
console.log("Con map(), podemos hacer lo mismo de una manera más sencilla y sin importar el tamaño del array.");



fruits.map((fruit, index) => {
  console.log(index, fruit);
});
