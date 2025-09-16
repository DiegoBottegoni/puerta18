import { useState } from "react";

function UseReducerProblem() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const [max, setMax] = useState(10);

    console.log("🔄 Renderizó UseReducerProblem");

    const increment = () => {
        if (count + step <= max) setCount(count + step);
    };

    const decrement = () => {
        if (count - step >= 0) setCount(count - step);
    };

    const reset = () => setCount(0);

    return (
        <div>
            <h1>Problema: múltiples useState</h1>
            <p>Contador: {count}</p>
            <p>Paso: {step}</p>
            <p>Máximo: {max}</p>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={reset}>Reset</button>
            <button onClick={() => setStep(2)}>Paso = 2</button>
            <button onClick={() => setMax(20)}>Max = 20</button>
        </div>
    );
}

export default UseReducerProblem;

// 👉 Probar:
// 1. Cambiar los valores de step o max (manual si se agregan inputs) y hacer clicks.
// 2. Notar que la lógica de incremento, decremento y reset se dispersa en múltiples funciones y estados.
// 3. Cada render evalúa varias variables, la gestión se vuelve más difícil a medida que el estado crece.
