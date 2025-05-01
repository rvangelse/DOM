const imagenActual = document.querySelector('img');
const btnCambiarImagen = document.querySelector('button');

//Lista de imágenes que se pueden mostrar
const imagenes = [
    'https://cimg1.ibsrv.net/ibimg/hgm/1920x1080-1/100/609/2017-honda-civic-sdn_100609665.jpg',
    'https://s3.us-east-2.amazonaws.com/prod.mm.com/img/featurenews/GBMD4761-source.jpg',
    'https://www.hdcarwallpapers.com/download/2017_honda_civic_type_r_5-2560x1440.jpg',
];

let indiceImagenActual = 0;

//Función para cambiar la imagen al hacer clic en el botón
btnCambiarImagen.addEventListener('click', function() {
    indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
    imagenActual.src = imagenes[indiceImagenActual];
});
