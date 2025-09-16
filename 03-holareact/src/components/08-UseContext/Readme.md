# 08 – useContext

El hook **useContext** es usado para compartir datos entre componentes sin necesidad de pasar props por todos los niveles.

---

## ¿Qué es useContext?
- Permite que un componente hijo **consuma datos de un contexto** definido por un componente superior (Provider).
- Evita el *prop-drilling*, es decir, tener que pasar props de componente en componente hasta llegar al que lo necesita.
- Ideal para datos **globales o compartidos** como usuario logueado, tema de la app, carrito de compras, etc.

---

## Diferencias con useState / useReducer

| Hook       | Alcance | Uso |
|------------|---------|----------------------------------------------------------|
| useState   | Local   | Manejar estado de un componente                          |
| useReducer | Local   | Manejar estado complejo de un componente                 |
| useContext | Global  | Compartir estado entre componentes sin props intermedias |

💡 Nota: Es muy común combinar **useReducer + useContext** para manejar un estado global centralizado y predecible.

---

## Ejemplo: UserContext

- Simulamos un login básico.
- Un `UserProvider` entrega la información del usuario.
- Cualquier componente hijo puede **leer el usuario** y mostrar un saludo dinámico.

---

### Archivos incluidos

- **08-0-UserContext.jsx** → Explicación básica de cómo crear y usar un contexto de usuario.
- **08-1-Header.jsx** → Componente que muestra "Hola [nombre]" usando el contexto.
- **08-2-Main.jsx** → Otro componente que también consume el contexto para mostrar información relacionada con el usuario.

---

## Cómo probar

1. Descomentá los componentes en `App.jsx` según quieras probarlos.
2. Observá cómo el saludo se actualiza automáticamente según el usuario definido en el `UserProvider`.
3. Compará la simplicidad de usar un contexto versus pasar props manualmente.

---

👉 La idea es entender **por qué necesitamos context** y cómo podemos compartir información de forma clara y centralizada entre varios componentes.
