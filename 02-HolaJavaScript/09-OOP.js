// ================== Programación Orientada a Objetos (OOP) en JavaScript ==================

// ====== Definición y características ======
// La OOP es un paradigma de programación que organiza el código en torno a objetos creados a partir de clases.
// Una clase es un "molde" que describe las propiedades y métodos que tendrán los objetos creados a partir de ella.

// ===== Los 4 pilares de la OOP ======
// - Abstracción: las clases son moldes que representan conceptos generales.
// - Herencia: una clase puede extender otra (Ej: Estudiante hereda de Persona).
// - Polimorfismo: un mismo método puede comportarse diferente según la clase (Ej: saludar).
// - Encapsulación: agrupamos propiedades y métodos en clases.

// ====== Clase básica (abstracción) ======
// La abstracción nos permite crear clases que representan conceptos generales sin entrar en detalles específicos.
// Ya sabemos declarar un objeto literal como:
// const persona = { nombre: "Juana", edad: 30 };
// Ahora, veamos cómo crear una clase (abstracta) para representar a una persona.
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Creamos una instancia (un objeto) de la clase Persona
const juana = new Persona("Juana", 30);
console.log("El objeto creado como instancia de la clase Persona es:", juana);
// Llamamos al método saludar que pertenece a la clase Persona
juana.saludar(); // "Hola, soy Juana y tengo 30 años."

// ====== Herencia ======
// Una clase puede heredar de otra, tomando sus propiedades y métodos.
class Estudiante extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad); // super() llama al constructor de la clase padre
    this.curso = curso;
  }

  estudiar() {
    console.log(`${this.nombre} está estudiando ${this.curso}.`);
  }
}
// Instanciamos el objeto de la clase Estudiante que hereda de Persona
// Por ende puede tener sus propios métodos y también los heredados
const pedro = new Estudiante("Pedro", 25, "JavaScript");
pedro.saludar();   // "Hola, soy Pedro y tengo 25 años."
pedro.estudiar();  // "Pedro está estudiando JavaScript."

// ====== Polimorfismo ======
// Una clase hija puede redefinir (sobrescribir) un método de la clase padre.
// Por lo que un método puede comportarse diferente según la clase.
class Profesor extends Persona {
  constructor(nombre, edad, materia) {
    super(nombre, edad);
    this.materia = materia;
  }

  // Sobrescribimos el método saludar
  saludar() {
    console.log(`Hola, soy ${this.nombre}, docente de ${this.materia}.`);
  }
}

const ana = new Profesor("Ana", 40, "Programación");
ana.saludar(); // "Hola, soy Ana, docente de Programación."

// ====== Encapsulación ======
// La encapsulación es el principio de ocultar los detalles internos de una clase y exponer solo lo necesario.
// En JavaScript, podemos lograr esto utilizando closures o la sintaxis de clases.

class CuentaBancaria {
    #saldo = 0; // Propiedad privada
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;

    // Método privado
    const mostrarSaldo = () => {
      console.log(`El saldo de ${this.titular} es ${this.#saldo}.`);
    };

    // Métodos públicos
    this.depositar = (monto) => {
      this.#saldo += monto;
      mostrarSaldo();
    };

    this.retirar = (monto) => {
      this.#saldo -= monto;
      mostrarSaldo();
    };
  }
}

const cuenta1 = new CuentaBancaria("Juan", 1000);
cuenta1.depositar(500); // "El saldo de Juan es 1500."
cuenta1.retirar(200);   // "El saldo de Juan es 1300."
console.log(cuenta1.mostrarSaldo); // undefined (no se puede acceder directamente) porque es un método privado.
// Para mostrar el saldo, debemos usar los métodos públicos depositar y retirar.

// ====== Abstracción ======
// La abstracción nos permite crear clases que representan conceptos generales sin entrar en detalles específicos.

// ====== Extra ======
// Un método puede modificar propiedades del propio objeto.
class Contador {
  constructor() {
    this.valor = 0;
  }

  incrementar() {
    this.valor++;
  }
}

const contador = new Contador();
contador.incrementar();
console.log(contador.valor); // 1

contador.incrementar();
console.log(contador.valor); // 2

// ====== Ejercicio propuesto ======
// Abstracción: Crear una clase "SerVivo" que tenga el método alimentarse() y atributos como nombre y edad.
// Herencia: Luego, hacer que "Animal" y "Planta" extiendan de SerVivo.
// Polimorfismo: Animal y Planta pueden alimentarse, pero cada uno lo hace de manera diferente.
// Encapsulación: se les ocurre como ocultar atributos y/o métodos?
// Crear instancias y probar que cada una pueda usar sus métodos.

class SerVivo {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  alimentarse() {
    console.log(`${this.nombre} se está alimentando de alguna forma...`);
  }
}

class Animal extends SerVivo {
  alimentarse() {
    console.log(`${this.nombre} está comiendo.`);
  }
}

class Planta extends SerVivo {
  alimentarse() {
    console.log(`${this.nombre} está realizando la fotosíntesis.`);
  }
}

const perro = new Animal("Firulais", 5);
console.log(`El nombre del perro es: ${perro.nombre}`);

perro.alimentarse(); // Firulais está comiendo.

const rosa = new Planta("Rosa", 2);
console.log(`El nombre de la planta es: ${rosa.nombre}`);

rosa.alimentarse(); // Rosa está realizando la fotosíntesis.
