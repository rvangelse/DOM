# Preguntas tipo Entrevista

- **¿Qué representa el DOM en el desarrollo web?**

    El DOM es una representación estructurada del documento HTML y proporciona una manera de acceder y manipular su estructura, estilo y contenido.

- **¿Cómo se accede a un elemento por su ID en el DOM?**

    Utilizando `document.getElementById('idDelElemento')`.

- **¿Cómo se pueden seleccionar elementos por su clase en el DOM?**

    Utilizando `document.getElementsByClassName('nombreDeLaClase')`.

- **¿Qué método se utiliza para obtener elementos por su nombre de etiqueta?**

    `document.getElementsByTagName('nombreEtiqueta')`.

- **¿Cómo se agrega un nuevo elemento al DOM?**

    Creando el elemento con `document.createElement` y añadiendolo con `appendChild` o `insertBefore`.

- **¿Cómo se puede eliminar un elemento del DOM?**

    Seleccionando el elemento y utilizando `removeChild` o `remove` en el padre.

- **¿Cómo se cambia el contenido de texto de un elemento?**

    Usando la propiedad `innerText` o `textContent` del elemento.

- **¿Cómo se modifica el HTML interno de un elemento?**

    Con la propiedad `innerHTML` del elemento.

- **¿Cómo se cambia el estilo CSS de un elemento?**

    Accediendo a la propiedad `style` del elemento y modificando sus propiedades CSS.

- **¿Cómo se añade o se quita una clase CSS a un elemento?**

    Usando los métodos `add` y `remove` en la propiedad `classList` del elemento.

- **Cómo se manejan los eventos en el DOM?**

    Usando `addEventListener` para vincular una función a un evento en un elemento específico.

- **¿Cómo se puede obtener o cambiar atributos de un elemento?**

    Con los métodos `getAttribute`y `setAttribute`.

- **¿Cómo se navega por el DOM usando nodos padre, hijo y hermano?**

    Utilizando propiedades como `parentNode`, `childNode` y `nextSibling`.

- **¿Qué es el bubbling en los eventos del DOM?**

    Un mecanismo donde el evento se propaga desde el elemento más interno hasta el más externo.

- **¿Cómo se previene la acción por defecto de un evento en el DOM?**

    Usando `preventDefault` en el objeto del evento.

- **¿Qué es el fragmento de documento en el DOM y para qué se utiliza?**

    Un contenedor ligero para almacenar fragmentos de elementos que se pueden insertar en el documento.

- **¿Cómo se crea un nodo de texto en el DOM?**

    Con el método `document.createTextNode('texto')`.

- **¿Cómo se clona un elemento en el DOM?**

    Usando el método `cloneNode` en el elemento que se quiere clonar.

- **¿Qué es el DocumentoFrament y cuál es su ventaja?**

    Es un tipo de nodo del DOM que permite agrupar cambios y aplicarlos al documento de una sola vez, mejorando el rendimiento.

- **¿Cómo se seleccionan varios elementos que comparten el mismo selector CSS?**

    Con `document.querySelectorAll('selectorCSS')`.