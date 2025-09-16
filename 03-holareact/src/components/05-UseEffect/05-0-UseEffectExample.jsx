import { useState, useEffect } from "react";

// 🔹 useEffect se usa para manejar "efectos secundarios"
// Un efecto secundario es cualquier cosa que afecta fuera del componente:
// - cambiar el título de la página
// - hacer un console.log
// - llamar a una API
// - manejar timers (setTimeout, setInterval)

// useEffect recibe 2 parámetros:
// 1. Una función con el código a ejecutar
// 2. Un array de dependencias: cuando cambia alguna, el efecto se vuelve a ejecutar

function UseEffectExample() {
    const [count, setCount] = useState(0);

    // Este efecto se ejecuta cada vez que cambia "count"
    useEffect(() => {
        console.log(`El contador cambió: ${count}`);
        document.title = `Contador: ${count}`; // cambia el título de la pestaña del navegador
    }, [count]); // 👈 dependencia: si cambia count, se ejecuta de nuevo

    return (
        <div>
            <h1>useEffect Example</h1>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
}

export default UseEffectExample;

// 👉 Probar así y sacar el useEffect para comprobar resultados.
// - Mirar la consola: se loguea cada vez que cambia el contador.
// - Mirar la pestaña del navegador: el título se actualiza.
