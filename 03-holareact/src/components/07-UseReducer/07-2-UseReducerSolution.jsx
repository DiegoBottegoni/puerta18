import { useReducer } from "react";

// Estado inicial
const initialState = { count: 0, step: 1, max: 10 };

// Reducer: toda la lógica centralizada
function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { ...state, count: Math.min(state.count + state.step, state.max) };
        case "decrement":
            return { ...state, count: Math.max(state.count - state.step, 0) };
        case "reset":
            return { ...state, count: 0 };
        case "setStep":
            return { ...state, step: action.value };
        case "setMax":
            return { ...state, max: action.value };
        default:
            return state;
    }
}

function UseReducerSolution() {
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log("🔄 Renderizó UseReducerSolution");

    return (
        <div>
            <h1>Solución: con useReducer</h1>
            <p>Contador: {state.count}</p>
            <p>Paso: {state.step}</p>
            <p>Máximo: {state.max}</p>
            <button onClick={() => dispatch({ type: "increment" })}>Incrementar</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrementar</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            <button onClick={() => dispatch({ type: "setStep", value: 2 })}>Paso = 2</button>
            <button onClick={() => dispatch({ type: "setMax", value: 20 })}>Max = 20</button>
        </div>
    );
}

export default UseReducerSolution;

// 👉 Probar:
// 1. Hacer click en los botones Incrementar, Decrementar y Reset.
// 2. Cambiar paso y máximo con los botones de acción.
// 3. Observar que toda la lógica está centralizada en el reducer y es fácil de seguir.
