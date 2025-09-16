import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Header() {
    const { user } = useContext(UserContext);

    return (
        <header style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
            <h1>Hola {user.name} 👋</h1>
        </header>
    );
}

// 👉 Probar:
// 1. Importar Header en App.jsx y envolver con <UserProvider>.
// 2. Ver en pantalla "Hola Fulanito".
