import { useState } from "react";
import { UserContext } from "./UserContext";

// Provider que envolverá los componentes que necesiten acceso al usuario
export function UserProvider({ children }) {
    // Estado que simula un usuario logueado
    const [user, setUser] = useState({ name: "Fulanito" });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

// 👉 Probar:
// 1. Envolvé App.jsx o los componentes que quieras con <UserProvider>.
// 2. Consumí el contexto en cualquier componente hijo con useContext(UserContext).
// 3. Observá que todos pueden acceder a {user.name} sin pasar props manualmente.
