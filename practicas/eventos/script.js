let productos = document.querySelectorAll('.producto');
let mensaje = document.getElementById('mensaje');
let mensajeContenido = document.getElementById('mensaje-contenido');

//Escuchamos el evento click de cada producto
productos.forEach(producto => {
    producto.addEventListener('click', function() {
        // Mostramos el mensaje
        mensajeContenido.textContent = `Producto agregado al carrito: ${producto.querySelector('h2').textContent}`;
        mensaje.style.display = 'block';

        // Ocultamos el mensaje después de 2 segundos
        setTimeout(function() {
            mensaje.style.display = 'none';
        }, 2000);
    });
});

