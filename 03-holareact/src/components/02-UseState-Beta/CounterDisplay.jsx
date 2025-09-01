// Recibe props desde el padre y renderiza la UI
// Acá ademas de valores, también se reciben funciones!!

function CounterDisplay({ value, onIncrease, onDecrease, onReset }) {
    return (
        <div>
            <p>Current value: {value}</p>
            <button onClick={onIncrease}>Increase</button>
            <button onClick={onDecrease}>Decrease</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
}

export default CounterDisplay;
