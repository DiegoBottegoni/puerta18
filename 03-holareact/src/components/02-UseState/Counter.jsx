// Un componente con estado local usando useState

import { useState } from "react";

function Counter() {
    // count es el valor actual, setCount es la función para actualizarlo
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Counter Example</h2>
            <p>Current value: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;
