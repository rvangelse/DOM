# Create, Remove, Update, Delete (CRUD)
Representa las cuatro operaciones fundamentales que se realizan a la hora de manipular información. 
## Crear
Usando el DOM, puedes crear elementos en tu arhivo `.html` ,de forma `dinámica`. 

```js
//Selecciono el título de mi archivo .html
let titulo =  document.querySelector('h1');
//Creo  un nuevo elemento "span"
let span = document.createElement('span');
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
OJO: También, puedes usarlo así: `div.insertAdjacentHTML('beforeend',"<p>Texto insertado</p>");`

## Navegar por el DOM

```js
//Selecciono todas las imágenes de mi documento
let imagenes = document.querySelectorAll('img');
//Selecciono la segunda imágen
let segundoNodo = imagenes[1];
//Selecciono al elemento que contiene a la segunda imágen
let nodoPadre = segundoNodo.parentElement;
//Selecciono al elemento que contiene a este último
let nodoAbuelo = nodoPadre.parentElement;

//Selecciono la etiqueta "body"
let body = document.body;
//Selecciono todos los elementos que esta contiene
let nodosHijos = body.children;
//Selecciono el primer elemento dentro de "body"
let primerNodo = nodosHijos[0];

//Selecciono el primer elemento dentro de "body"
let primerHijo = nodosHijos.firstElementChild;
//Selecciono el último elemento dentro de "body"
let ultimoHijo = nodosHijos.lastElementChild;
```