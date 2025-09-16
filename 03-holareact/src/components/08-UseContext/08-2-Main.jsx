import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Main() {
    const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

    const changeUser = () => {
        setUser({ name: "Menganito" });
    };

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
        if (!isLoggedIn) {
            alert("Sesión iniciada");
        } else {
            alert("Sesión cerrada");
        }
    };

    return (
        <main style={{ padding: "1rem" }}>
            <p>Contenido principal para {user.name}</p>
            <button onClick={changeUser}>Cambiar usuario</button>
            <button onClick={toggleLogin}>
                {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
            </button>
        </main>
    );
}

// 👉 Probar:
// 1. Importar Main en App.jsx y envolver con <UserProvider>.
// 2. Al hacer click en el botón, todos los componentes que usan el contexto se actualizan automáticamente.
