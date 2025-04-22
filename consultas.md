# Consultas

## Consultas por id

**index.js**

```js
let saludo = document.getElementById('saludo');
console.log(saludo);
```
**Output en el navegador**

<p align="center">
    <img src="imagenes/grafico2.png" width="800">
    </p>

OJO: `getElementById()` sólo devolverá el primer elemento que encuentre con la ID que le pases, ignorando los demás.

OJO: Ten cuidado donde pones el `script` en tu HTML. Primero, debe renderizarse el elemento que vas a pedir.

## Consultas por clases