import { useRef, useState } from "react";

function UseRefExample() {
    // useRef nos permite crear una referencia a un elemento del DOM
    // que persiste entre renders sin causar re-renderizados adicionales.
    const inputRef = useRef(null);
    const [text, setText] = useState("");

    const handleFocus = () => {
        inputRef.current.focus();
        console.log("🔹 Input enfocado con useRef");
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <h1>useRef Example</h1>
            <input
                ref={inputRef}
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Escribí algo..."
            />
            <button onClick={handleFocus}>Enfocar input</button>
            <p>Texto ingresado: {text}</p>
        </div>
    );
}

export default UseRefExample;

// 👉 Probar:
// 1. Escribí algo en el input.
// 2. Hacé click en "Enfocar input": el input se enfoca.
// 3. Mirá la consola para ver el log del focus.
