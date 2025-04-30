# El motor de JavaScript

## Web APIs

Una API (Application Programming Interface) es una interfaz que permite que un sistema se comunique mediante mensajes que ambos entienden.

Por ejemplo, el DOM es una Web API que permite a JS (script) interactuar con la estructura de tu página web (HTML/CSS) a tráves del navegador.

```js
//Registro el performance en ms de la página en el momento actual
let antes = performance.now();

//Armo un loop
for (let i = 0; i < 400; i++) {
    let elemento = document.createElement('p');
    elemento.textContent = 'Este es un párrafo';
    document.body.appendChild(elemento);
}

//Registro el performance, después del loop
let despues = performance.now();

//Imprimo cuanto tarda en ejecutarse el loop completo
console.log(despues - antes);

/* Es ineficiente ya que esta creando elementos y añadiendolos al DOM, en cada iteración.
   Es más eficiente, crear todos los elementos, añadirlos a un fragmento del DOM y después, fuera del loop añadirlos al DOM */

let antes = performance.now();

//Creo un fragmento del DOM
let fragmento = document.createDocumentFragment();

for (let i = 0; i < 400; i++) {
    let elemento = document.createElement('p');
    elemento.textContent = 'Este es un párrafo';
    fragmento.appendChild(elemento);
}
//Añado el fragento que contiene todos los nuevos elementos al DOM
document.body.appendChild(fragmento);

let despues = performance.now();

//El tiempo de performance mejoró
console.log(despues - antes);
```
## La pila de llamadas
JS es un lenguaje de un solo hilo, es decir, todo se procesa en serie.

Si queremos usar procesamiento paralelo, debemos usar Web APIs.

```js
function multiplicar(a, b) {
    return a * b;
}

function cuadrado(a) {
    return multiplicar(a, a);
}

function imprimirCuadrado(a) {
    const resultado = cuadrado(a);
    console.log(resultado);
}

imprimirCuadrado(4);

/* 
    Call Stack: 

    Se cargan todos los respectivos llamados en la pila, después se van procesando
    y desapilando, en serie.

        []                             
        [imprimirCuadrado]
        [imprimirCuadrado, cuadrado]
        [imprimirCuadrado, cuadrado, multiplicar]
        [imprimirCuadrado, cuadrado, multiplicar, a * b]
        [imprimirCuadrado, cuadrado, multiplicar]
        [imprimirCuadrado, cuadrado]
        [imprimirCuadrado, console.log]
        [imprimirCuadrado]
        []
*/
```
## Web APIs y la cola de callbacks

```js
console.log('primero');

setTimeout(function callback() {
    console.log('segundo');
}, 2000);

console.log('tercero');

/*  Call Stack:
        []
        [console.log('primero')]
        [setTimeout]              Se envia el callback a las Web APIs
        [console.log('tercero')]
        []
        [callback]
        [callback, console.log('segundo')]
        [callback]
        []

    Web APIs:
        []
        [callback] El callback se retiene por 2s, luego se envia al Callback Queue
        []

    Callback Queue: 
        []
        [callback] (Se espera que el call-stack este vacío para enviar el callback)
        []                                                           */
```