# Eventos
## Monitoreo de eventos

```js
let boton = document.querySelector('button');

//Estamos monitoreando los "clicks" sobre el botón
monitorEvents(boton, 'click');
//Dejamos de monitorear
unmonitorEvents(boton, 'click');
```
OJO: Utiliza `unmonitorEvents` cuando ya no necesites un monitor de eventos.

## Escuchar eventos

```js
//Cuando se escuche un "click" en el documento, se imprimira en consola "Recibí un click"
document.addEventListener('click', ()=> {
    console.log('Recibí un click!');
});
```
OJO: Usa `removeEventListener`, cuando ya no sea necesario escuchar los eventos señalados

## Burbujeo
Sirve para asignar un orden a la escucha de eventos

```js
let documento = document;
let body = document.body;
let svg = document.querySelector('.imagen-svg');

/* Al hacer click sobre la imágen, los eventos se escucharán en el siguiente orden:
   imágen -> burbujeo -> body -> burbujeo -> documento */
documento.addEventListener('click', () => {
    console.log('Clic en documento');
});

body.addEventListener('click', () => {
    console.log('Clic en body');
});

svg.addEventListener('click', () => {
    console.log('Clic en imagen');
});

/* Al hacer click sobre la imágen, los eventos se escucharán en el siguiente orden: 
   documento -> body -> imagén */
documento.addEventListener('click', () => {
    console.log('Clic en documento: captura');
}, true);

body.addEventListener('click', () => {
    console.log('Clic en body: captura');
}, true);

svg.addEventListener('click', () => {
    console.log('Clic en imagen: captura');
}, true);
```
## El objeto "evento"

