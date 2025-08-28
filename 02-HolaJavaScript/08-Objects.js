// ================== Objetos en JavaScript ==================

// ====== Definición y características ======
// Los objetos son colecciones de pares clave-valor y se definen utilizando llaves {}.
// Tienen propiedades y métodos

// ====== Propiedades ======
// Las propiedades son características del objeto. Como 'nombre', 'edad' y 'ciudad' de una persona.
// La clave es el nombre de la propiedad (nombre) y el valor es la información asociada a esa propiedad (Juana).
const persona = {
  nombre: "Juana",
  edad: 30,
  ciudad: "CABA"
};
// Los objetos permiten acceder a sus propiedades utilizando la notación de punto o corchetes.
console.log(persona.nombre); // "Juana"
console.log(persona['nombre']); // "Juana"
// También permiten agregar o modificar propiedades dinámicamente.
persona.pais = "Argentina";
// Se pueden clonar para no modificar el objeto original utilizando el operador de propagación (...).
console.log({ ...persona });
// Clonación profunda, que sirve para crear una copia independiente del objeto original.
const personaClonada = JSON.parse(JSON.stringify(persona));
console.log(personaClonada);
// La diferencia entre clonación superficial y profunda es que la superficial copia solo el primer nivel de propiedades,
// mientras que la profunda copia todos los niveles, creando instancias independientes.
// Ejemplo de clonación superficial que afecta al objeto original:
const original = { nombre: "Ana", direccion: { ciudad: "Córdoba" } };
const clonShallow = { ...original };
clonShallow.direccion.ciudad = "Rosario";

console.log(original.direccion.ciudad); // "Rosario" (¡también cambió!)


// ====== Métodos ======
// Los métodos son funciones que están asociadas a un objeto y pueden operar sobre sus propiedades.
// Pueden acceder y modificar las propiedades del objeto utilizando la palabra clave 'this'.
const personaConMetodos = {
  nombre: "Juana",
  edad: 30,
  saludar: function() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
};
personaConMetodos.saludar(); // "Hola, mi nombre es Juana"

// ====== Objetos anidados ======

// Los objetos pueden contener otros objetos como propiedades.
const empresa = {
  nombre: "Puerta18",
  ubicacion: "CABA",
  empleados: [
    {
      nombre: "Juana",
      edad: 30
    },
    {
      nombre: "Pedro",
      edad: 25
    }
  ]
};
// Un ejemplo más complejo podría ser:
const empresaCompleja = {
  nombre: "Puerta18",
  ubicacion: "CABA",
  empleados: [
    {
      nombre: "Juana",
      edad: 30,
      habilidades: {
        programacion: true,
        diseno: false
      }
    },
    {
      nombre: "Pedro",
      edad: 25,
      habilidades: {
        programacion: false,
        diseno: true
      }
    }
  ]
};

// ====== Extra ======

// Un método puede modificar al propio objeto:
const persona2 = {
  nombre: "Juana",
  edad: 30,
  actualizarEdad: function(nuevaEdad) {
    this.edad = nuevaEdad;
  }
};
persona2.actualizarEdad(31);
console.log(persona2.edad); // 31