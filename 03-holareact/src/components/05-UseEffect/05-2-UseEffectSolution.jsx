import { useState, useEffect } from "react";

function Solution() {
    const [count, setCount] = useState(0);

    // ✅ Intervalo controlado con useEffect
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCount((c) => c + 1);
    //         console.log("⏱ Intervalo ejecutado (SOLUTION)");
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, []); // solo al montar

    // ✅ Listener controlado con useEffect
    useEffect(() => {
        const handleClick = () => {
            setCount((c) => c + 1);
            console.log("🖱 Click detectado (SOLUTION)");
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []); // solo al montar

    console.log("🔄 Renderizó Solution");

    return (
        <div>
            <h1>Solución: con useEffect</h1>
            <p>Contador: {count}</p>
            <p>Click en cualquier lado o esperar 1s → count incrementa</p>
        </div>
    );
}

export default Solution;
