import { useState, useEffect } from "react";

// 🔹 useEffect se usa para manejar "efectos secundarios"
// Un efecto secundario es cualquier cosa que afecta al componente generando un renderizado indeseado
// o que afecta a algo fuera del componente (como una API externa, el DOM, un timer...)

// useEffect recibe 2 parámetros:
// 1. Una función con el código a ejecutar
// 2. Un array de dependencias (opcional): cuando cambia alguna dependencia, el código del primer parámetro se vuelve a ejecutar

const UseEffectExample = () => {
    const [value, setValue] = useState(0);

    // Definimos una función
    const sayHello = () => {
        console.log('hello there');
    };
    // La llamamos cada vez que el componente se renderiza
    sayHello();
    // useEffect sin array de dependencias: se ejecuta cada vez que el componente se renderiza
    // Si cambia un estado interno (como value), el componente se renderiza y se ejecuta el useEffect
    useEffect(() => {
        console.log('hello from useEffect without dependencies');
    });
    // useEffect con array de dependencias vacío: se ejecuta solo la primera vez que el componente se renderiza
    // Si cambia un estado interno (como value), el componente NO se renderiza por su array de dependencias vacío
    useEffect(() => {
        console.log('hello from useEffect with empty dependencies');
    }, []);

    return (
        <div>
            <h1>value : {value}</h1>
            <button className='btn' onClick={() => setValue(value + 1)}>
                click me
            </button>
        </div>
    );
};
export default UseEffectExample;
