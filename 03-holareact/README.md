# React Basics 🚀

Este repositorio contiene ejemplos prácticos para aprender los fundamentos de **React** paso a paso.  
Cada archivo (`01-ComponentsAndProps.jsx`, `02-UseState.jsx`, etc.) explica un concepto con un ejemplo simple.

## Cómo usarlo

1. Asegurate de tener **Node.js** instalado en tu computadora.
2. Cloná este repositorio.
3. Instalá las dependencias con:
   ```bash
   npm install
   ```
4. Iniciá la aplicación en modo desarrollo:
    ```bash
    npm run dev
    ```
5. Abrí http://localhost:5173/ en tu navegador.

## Estructura de los ejemplos

- `00-HolaReact.jsx` → Introducción a React y breve glosario de conceptos básicos.  
- `01-ComponentsAndProps.jsx` → Qué son los componentes y cómo pasar datos mediante props.  
- `02-UseState.jsx` → Uso de `useState` para manejar estado local en un componente.  
- `03-UseState-Beta` → Ejemplo de "Lifting State Up": un padre maneja el estado y lo pasa como props a componentes hijos.  
- `03-ListAndConditional.jsx` → Cómo renderizar listas y usar condicionales en JSX.  
- `04-Events.jsx` → Manejo de eventos en React (ejemplo de clicks y actualización de estado).  
- `05-UseEffect.jsx` → Introducción al hook `useEffect` para manejar efectos secundarios en un componente.
- `05-1-UseEffectProblem.jsx` → Ejemplo de mala práctica: ejecutar lógica fuera del render sin usar hooks.
- `05-2-UseEffectSolution.jsx` → Cómo resolver el problema usando `useEffect` para manejar efectos secundarios de forma clara y controlada.
- `06-UseRef.jsx` → Uso de useRef para acceder y manipular elementos del DOM sin re-renderizar el componente.  
- `06-1-UseRefVsState.jsx` → Diferencias entre useRef y useState: cuándo conviene usar cada uno.  
- `07-UseReducer.jsx` → Introducción a useReducer como alternativa a useState para manejar estados más complejos.  
- `07-1-UseReducerCounter.jsx` → Ejemplo práctico de un contador implementado con useReducer.  
- `08-UseContext.jsx` → Uso de useContext para compartir información entre componentes sin necesidad de prop drilling.  
- `08-1-UserContextExample` → Ejemplo práctico con UserContext: un login simulado que muestra el nombre del usuario en distintos componentes.




## Notas

- Podés abrir cada archivo y descomentar el componente que quieras probar.  
- La idea es avanzar en orden, pero también podés saltar al tema que más te interese.  
- Estos ejemplos son solo una **base conceptual**: después se pueden expandir con proyectos reales.  
