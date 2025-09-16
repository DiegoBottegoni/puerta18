import { useState } from "react";

function Problem() {
    const [count, setCount] = useState(0);

    // ❌ Mala práctica: cada render crea un nuevo interval
    // setInterval(() => {
    //     setCount((count) => count + 1);
    //     console.log("⏱ Intervalo ejecutado (PROBLEM)");
    // }, 1000);

    // ❌ Mala práctica: cada render agrega un listener de click
    document.addEventListener("click", () => {
        setCount((count) => count + 1);
        console.log("🖱 Click detectado (PROBLEM)");
    });

    console.log("🔄 Renderizó Problem");

    return (
        <div>
            <h1>Problema: sin useEffect</h1>
            <p>Contador: {count}</p>
            <p>Click en cualquier lado o esperar 1s → count incrementa</p>
        </div>
    );
}

export default Problem;
