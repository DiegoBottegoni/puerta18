# 07 – useReducer

El hook **useReducer** es usado para manejar estados más complejos en React, especialmente cuando un componente tiene múltiples valores de estado o reglas de actualización más elaboradas.

---

## Conceptos clave

### ¿Qué es un reducer?
Un **reducer** es una función pura que recibe:
1. El estado actual.
2. Una acción (objeto con un `type` que indica qué hacer).

Y devuelve un **nuevo estado** según la acción.  
Esto permite centralizar toda la lógica de actualización en un solo lugar.

### ¿Qué es una acción?
- Es un objeto que indica qué cambio queremos hacer.
- Tiene un `type` que describe la operación, por ejemplo:
  ```js
  { type: "increment" }
  ```

### Diferencia con useState
| Concepto     | Ideal para                                                       | Ventaja         |
|--------------|------------------------------------------------------------------|-----------------|
| `useState`   | Pocos valores de estado simples                                  | Fácil y directo |
| `useReducer` | Estado más complejo, múltiples valores o reglas de actualización | Centraliza la lógica, más predecible, prepara para usar context |

---

## Archivo incluido

- **07-0-UseReducerExample.jsx**  
  - Contador con acciones: **incrementar**, **decrementar** y **reset**.  
  - Toda la lógica del estado está centralizada en un **reducer**.  
  - Incluye botones para disparar las acciones y observar cómo cambia el estado.

---

## Cómo probar

1. Descomentá `07-0-UseReducerExample.jsx` en `App.jsx`.  
2. Hacé click en los botones:
   - Incrementar → aumenta el contador.  
   - Decrementar → disminuye el contador.  
   - Reset → vuelve a 0.  
3. Observá cómo cada acción **cambia el estado de manera predecible**.  
4. Notá que toda la lógica está en un solo lugar (el reducer), y no dispersa en múltiples `useState`.

---

👉 La idea es entender **cómo manejar estados más complejos de manera ordenada** y cómo `useReducer` prepara el camino para usar **useContext** en componentes que comparten estado.
