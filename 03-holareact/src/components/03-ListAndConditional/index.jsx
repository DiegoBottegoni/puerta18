// Un array de objetos para representar tareas
const tasks = [
    { id: 1, text: "Learn React", done: true },
    { id: 2, text: "Build a project", done: false },
    { id: 3, text: "Practice every day", done: false },
];

export default function ListAndConditional() {
    return (
        <div>
            <h2>03 - Lists & Conditional Rendering</h2>

            {/* Renderizamos la lista */}
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {/* Condicional: si la tarea está hecha, tachamos el texto */}
                        {task.done ? <s>{task.text}</s> : task.text}
                    </li>
                ))}
            </ul>

            {/* Otro ejemplo de condicional simple */}
            {tasks.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                <p>You have {tasks.length} tasks</p>
            )}
        </div>
    );
}
