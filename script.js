let imageIndex = 0;
const imagePaths = [
    'images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg',
    'images/image4.jpg', 'images/image5.jpg', 'images/image6.jpg',
    'images/image7.jpg', 'images/image8.jpg', 'images/image9.jpg',
    'images/image10.jpg', 'images/image11.jpg', 'images/image12.jpg'
];

// Función para cambiar la imagen
function changeImage() {
    const image = document.getElementById('image');
    image.src = imagePaths[imageIndex];
    imageIndex = (imageIndex + 1) % imagePaths.length;  // Volver al inicio del array después de la última imagen
}

// Cambiar la imagen cada 5 segundos
setInterval(changeImage, 5000);

// Código para mostrar el tiempo transcurrido
let fechaInicio = new Date("2024-08-09T15:20:52");

function mostrarTiempoTranscurrido() {
    const ahora = new Date();
    const tiempoTranscurrido = ahora - fechaInicio;

    const segundos = Math.floor(tiempoTranscurrido / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const años = Math.floor(dias / 365);
    const meses = Math.floor((dias % 365) / 30);
    const semanas = Math.floor((dias % 30) / 7);
    const diasRestantes = dias % 7;

    // Construcción del texto
    let textoTiempo = "Han pasado: ";
    if (años > 0) textoTiempo += `${años} año${años > 1 ? 's' : ''}, `;
    if (meses > 0) textoTiempo += `${meses} mes${meses > 1 ? 'es' : ''}, `;
    if (semanas > 0) textoTiempo += `${semanas} semana${semanas > 1 ? 's' : ''}, `;
    if (diasRestantes > 0) textoTiempo += `${diasRestantes} día${diasRestantes > 1 ? 's' : ''}, `;
    if (horas > 0) textoTiempo += `${horas} hora${horas > 1 ? 's' : ''}, `;
    if (minutos > 0) textoTiempo += `${minutos} minuto${minutos > 1 ? 's' : ''}, `;
    if (segundos > 0) textoTiempo += `${segundos} segundo${segundos > 1 ? 's' : ''}.`;

    document.getElementById("time").innerHTML = textoTiempo;
}

// Actualizar el tiempo cada segundo
setInterval(mostrarTiempoTranscurrido, 1000);
