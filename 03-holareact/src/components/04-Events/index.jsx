import { useState } from "react";

function EventsExample() {
    const [message, setMessage] = useState("Todavía no hiciste click");
    const [count, setCount] = useState(0);

    function handleClick() {
        const newCount = count + 1;
        setCount(newCount);

        // Si es 1 → "vez", si es más → "veces"
        const word = newCount === 1 ? "vez" : "veces";
        setMessage(`¡Hiciste click en el botón! ${newCount} ${word}`);
    }

    return (
        <div>
            <h2>Manejo de eventos en React</h2>
            <p>{message}</p>
            <button onClick={handleClick}>Hacé click</button>
        </div>
    );
}

export default EventsExample;
