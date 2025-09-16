import { useReducer } from "react";

// Estado inicial
const initialState = { count: 0 };

// Reducer: función pura que recibe el estado actual y una acción, y devuelve el nuevo estado
function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return { count: 0 };
        default:
            return state;
    }
}

function UseReducerExample() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>useReducer Example</h1>
            <p>Contador: {state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>Incrementar</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrementar</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
}

export default UseReducerExample;

// 👉 Probar:
// 1. Hacé clicks en los botones para ver cómo cambia el contador.
// 2. Observar en la consola que cada acción cambia el estado de manera predecible.
// 3. Notar que toda la lógica del estado está centralizada en el reducer.
