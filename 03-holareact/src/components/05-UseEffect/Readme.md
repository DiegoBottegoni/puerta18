# 05 – useEffect

En este módulo vemos cómo usar el hook **useEffect** para manejar *efectos secundarios* en React.

---

## ¿Qué es un efecto secundario?
Es cualquier acción que ocurre **fuera del flujo normal del renderizado**:
- Cambiar el título de la página
- Hacer un `console.log`
- Llamar a una API
- Usar `setTimeout` o `setInterval`
- Agregar listeners de eventos (`click`, `scroll`, etc.)
- Etc

---

## Archivos incluidos

- **05-0-UseEffectExample.jsx**  
  Explicación básica de cómo funciona `useEffect` con un contador.  
  - El efecto se ejecuta **solo cuando cambia `count`**.  
  - Ejemplo visual y con logs para entender cómo se separa la lógica de render.

- **05-1-UseEffectProblem.jsx**  
  Ejemplo de *mala práctica*:  
  - Lógica de `addEventListener` directamente en el cuerpo del componente.  
  - Cada render crea un **listener nuevo**, causando acumulación si el componente se renderiza varias veces.  
  - Resultado: el contador se incrementa **varias veces por un solo click**, y los logs se duplican.

- **05-2-UseEffectSolution.jsx**  
  Ejemplo de *buena práctica*:  
  - La misma lógica de listener está dentro de `useEffect` con dependencias vacías.  
  - Se ejecuta **solo una vez al montar**, evitando acumulación.  
  - Resultado: contador correcto y logs controlados.

---

## Cómo probar
1. Abrí cada archivo por separado (descomentando el que quieras en `App.jsx`).  
2. Observá en la **consola** y en la **interfaz** lo que sucede:  
   - **Example:** ver cómo el efecto se ejecuta solo cuando cambia `count`.  
   - **Problem:** hacer clic varias veces y notar que el contador aumenta de más, logs duplicados.  
   - **Solution:** hacer clic varias veces y notar que el contador aumenta correctamente, logs claros.  
3. Opcional: descomentar la parte de `setInterval` para ver cómo se acumula el efecto sin `useEffect` y cómo se controla con `useEffect`.

---

👉 La idea es entender **por qué necesitamos useEffect**: separar la lógica de efectos secundarios del renderizado, evitando acumulación de listeners, intervalos o cualquier acción repetida no deseada.
