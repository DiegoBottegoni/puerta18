# 06 – useRef

El hook **useRef** es usado para interactuar con el DOM en React y guardar valores que persisten entre renders sin causar re-renderizados adicionales.

---

## Conceptos clave

### ¿Qué es el DOM?
El **DOM (Document Object Model)** es la representación de la página web en memoria.  
- Cada etiqueta HTML es un nodo en este árbol.  
- Permite acceder y modificar elementos desde JavaScript (por ejemplo, cambiar el valor de un input, hacer focus, medir tamaño, etc.).  
- React nos permite interactuar con él de manera declarativa, pero a veces necesitamos acceso directo a un elemento específico: aquí entra `useRef`.

### ¿Qué es un estado?
- Un **estado (`useState`)** es una variable que **controla la interfaz** y que, al cambiar, hace que React vuelva a renderizar el componente.  
- Ejemplo: el texto que escribís en un input.  

### ¿Qué es un ref?
- Un **ref (`useRef`)** es una referencia **directa a un elemento del DOM o a un valor mutable** que persiste entre renders.  
- No provoca un render cuando cambia.  
- Ejemplo: un input al que queremos hacer focus programáticamente.

### Diferencia principal
| Hook       | Persistencia | Causa render? | Uso principal                                   |
|------------|--------------|---------------|-------------------------------------------------|
| `useState` |      Sí      |       Sí      | Controlar datos de la UI                        |
| `useRef`   |      Sí      |       No      | Referencias al DOM, valores mutables sin render |

---

## Archivo incluido

- **06-0-UseRefExample.jsx**  
  - Mostramos un input y un botón.  
  - Al hacer click en el botón, el input se enfoca usando `useRef`.  
  - También usamos `useState` para manejar el texto del input y comparar con el ref.  
  - Incluye logs en consola para ver cuándo se dispara el focus.

---

## Cómo probar

1. Descomentá `06-0-UseRefExample.jsx` en `App.jsx`.  
2. Escribí algo en el input.  
3. Hacé click en "Enfocar input": el cursor se mueve directamente al input, lo enfoca.  
4. Observá la **consola**: verás un log que indica que el input fue enfocado.  
5. Podés notar que cambiar el ref **no dispara render**, mientras que cambiar el estado sí.

---

👉 La idea es entender **qué es un ref**, cómo interactúa con el DOM y la diferencia con el estado.  
Esto será muy útil en componentes que necesitan acceder a elementos específicos sin romper el flujo de renderizado de React.
