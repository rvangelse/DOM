# Create, Remove, Update, Delete (CRUD)
Representa las cuatro operaciones fundamentales que se realizan a la hora de manipular información. 
## Crear
Usando el DOM, puedes crear elementos en tu arhivo `.html` ,de forma `dinámica`. 

```js
//Selecciono el título de mi archivo .html
const titulo =  document.querySelector('h1');
//Creo  un nuevo elemento "span"
const span = document.createElement('span');
//Le asigno el contenido "?"
span.textContent = '?';
//Lo agrego como último hijo de la etiqueta "h1"
titulo.appendChild(span);

//Lo agrego antes de la etiqueta "h1"
titulo.insertAdjacentHTML('beforebegin', span);
//Lo agrego como primer hijo de la etiqueta "h1"
titulo.insertAdjacentHTML('afterbegin', span);
//Lo agrego como último hijo de la etiqueta "h1"
titulo.insertAdjacentHTML('beforeend', span);
//Lo agrego después de la etiqueta "h1"
titulo.insertAdjacentHTML('afterend', span);
```
## Navegar por el DOM
