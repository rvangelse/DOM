//Selecciono el contenedor de la lista
let componenteLista = document.querySelector('#lista div');

//Creo un nuevo componente (div) y lo añado a la lista
let nuevoComponente = document.createElement('div');
nuevoComponente.innerHTML = `
    <h3>Primer Componente</h3>
    <p>Descripción</p>
`;
componenteLista.appendChild(nuevoComponente);


const primerComponente = componenteLista.firstChild;
// Si existe el primer componente, lo edito
if (primerComponente) {
    primerComponente.innerHTML = `
        <h3>Componente Editado</h3>
        <p>Nueva descripción</p>
    `;
}


