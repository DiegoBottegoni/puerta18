// Este index.jsx es el punto de entrada para el ejemplo de componentes y props

// Acá se importan y utilizan los componentes necesarios
import Greeting from "./Greeting";

// Los props son la forma en que los componentes reciben datos
// Se pasan como atributos en el JSX
// En este caso, se está pasando el nombre de la persona que se quiere saludar
function ComponentsAndPropsExample() {

    // const names = ["Pepe", "Pepa", "Array"];
    return (
        <div>
            <h1>Example 01: Components and Props</h1>
            <Greeting name="Pepe" />
            <Greeting name="Pepa" />
            <Greeting name="como estás?" />
            {/* {names.map((name, index) => (
                <Greeting key={index} name={name} />
            ))} */}
        </div>
    );
}

export default ComponentsAndPropsExample;
