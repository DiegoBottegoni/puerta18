// UserProvider.jsx
import { useState } from "react";
import { UserContext } from "./UserContext";

export function UserProvider({ children }) {
    const [user, setUser] = useState({ name: "Fulanito" });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
}
