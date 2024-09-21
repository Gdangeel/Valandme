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
let startTime = new Date('2024-08-09T15:20:52'); // Fecha de inicio

function mostrarTiempoTranscurrido() {
    const now = new Date();
    const timeDiff = now - startTime; // Diferencia en milisegundos

    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    let timeText = "Han pasado:<br>";
    
    if (years > 0) timeText += years + " " + (years === 1 ? "año, " : "años, ");
    if (months > 0) timeText += months + " " + (months === 1 ? "mes, " : "meses, ");
    if (days > 0) timeText += days + " " + (days === 1 ? "día, " : "días, ");
    if (hours > 0) timeText += hours + " " + (hours === 1 ? "hora, " : "horas, ");
    if (minutes > 0) timeText += minutes + " " + (minutes === 1 ? "minuto, " : "minutos, ");
    if (seconds > 0) timeText += seconds + " " + (seconds === 1 ? "segundo" : "segundos");

    document.getElementById('time').innerHTML = timeText;
}

// Actualizar el tiempo cada segundo
setInterval(mostrarTiempoTranscurrido, 1000);
