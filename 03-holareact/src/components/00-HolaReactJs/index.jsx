function Index() {
    return (
        <div>
            <h1>Bienvenidos a React 🚀</h1>
            <p>
                React es una librería de JavaScript para construir interfaces de usuario.<br />
                En este recorrido vamos a aprender sus conceptos básicos paso a paso:
            </p>
            <ul>
                <li>
                    <strong>Componentes:</strong> piezas reutilizables de UI que se combinan para armar una aplicación.
                </li>
                <li>
                    <strong>JSX:</strong> una sintaxis parecida a HTML que nos permite escribir interfaces dentro de JavaScript.
                </li>
                <li>
                    <strong>Props:</strong> datos que se pasan de un componente padre a un componente hijo.
                </li>
                <li>
                    <strong>State (useState):</strong> valores internos de un componente que pueden cambiar con el tiempo.
                </li>
                <li>
                    <strong>Listas y condicionales:</strong> cómo mostrar colecciones de datos y condicionar lo que se renderiza.
                </li>
                <li>
                    <strong>Manejo de eventos:</strong> cómo responder a acciones del usuario como clicks o inputs.
                </li>
                <li>
                    <strong>useEffect:</strong> hook para manejar efectos secundarios (peticiones, timers, listeners, etc.).
                </li>
                <li>
                    <strong>useRef:</strong> hook para acceder y manipular elementos del DOM o valores mutables sin causar re-renderizados.
                </li>
                <li>
                    <strong>useReducer:</strong> alternativa a useState para manejar estados más complejos de manera predecible.
                </li>
                <li>
                    <strong>useContext:</strong> hook para compartir información entre componentes sin necesidad de prop drilling.
                </li>
            </ul>
            <p>👉 Abrí los archivos de ejemplo y seguí el recorrido en orden para aprender cada concepto.</p>
            <p>¡Empecemos!</p>
        </div>
    )
}

export default Index
