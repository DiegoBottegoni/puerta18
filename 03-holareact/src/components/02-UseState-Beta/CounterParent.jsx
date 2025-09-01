// Maneja el estado y lo pasa a los hijos como props
// Tiene las funciones y el estado que son pasados como props

import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function CounterParent() {
    const [count, setCount] = useState(0);

    // funciones para manejar el estado
    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div>
            <h2>Counter Example (Lifting State Up)</h2>
            {/* pasamos el estado y funciones como props */}
            <CounterDisplay
                value={count}
                onIncrease={increase}
                onDecrease={decrease}
                onReset={reset}
            />
        </div>
    );
}

export default CounterParent;
