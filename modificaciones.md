# Modificaciones
## CSS

```js
let titulo = document.querySelector('h1');

//Cambio los estilos CSS del título
titulo.style.color = 'blue';
titulo.style.fontSize = '100px';

//Otra forma de hacer lo mismo
titulo.style.cssText = 'color: blue; font-size: 100px;';
```
OJO: `CSS` usa guión, por ejemplo: `font-size`, `JS` usa camelCase, por ejemplo: `fontSize`

## Atributos