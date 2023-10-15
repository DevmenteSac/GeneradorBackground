// Capturando los colores de los inputs tipo color por medio del id
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");

// Capturando las posiciones de los inputs tipo range por medio del id
const posicionX = document.getElementById("posicionX");
const posicionY = document.getElementById("posicionY");


// modificandp el estilo con el oninput(entrada, cuando seleccionamos) con el valor que guarda en ese instante el input color1 y color2
color1.oninput = () => {
  grad.style.backgroundImage = `repeating-conic-gradient(at ${posicionX.value}% ${posicionY.value}%, ${color1.value} 0deg 10deg, ${color2.value} 10deg 20deg)`;
};

color2.oninput = () => {
  grad.style.backgroundImage = `repeating-conic-gradient(at ${posicionX.value}% ${posicionY.value}%, ${color1.value} 0deg 10deg, ${color2.value} 10deg 20deg)`;
};

// modificandp la posicion con el oninput(entrada, cuando seleccionamos) con el valor que guarda en ese instante el input posicionX y posicionY
posicionX.oninput = () => {
  grad.style.backgroundImage = `repeating-conic-gradient(at ${posicionX.value}% ${posicionY.value}%, ${color1.value} 0deg 10deg, ${color2.value} 10deg 20deg)`;
};

posicionY.oninput = () => {
  grad.style.backgroundImage = `repeating-conic-gradient(at ${posicionX.value}% ${posicionY.value}%, ${color1.value} 0deg 10deg, ${color2.value} 10deg 20deg)`;
};

// Crear evento click para reiniciar posicones al centro


document.addEventListener('DOMContentLoaded', function () {
    const grad = document.getElementById("grad");
    const descargarButton = document.getElementById("descargar");

    descargarButton.addEventListener("click", function () {
        // Captura el contenido del div "grad" como una imagen
        domtoimage.toPng(grad)
            .then(function (dataUrl) {
                // Crea un enlace para descargar la imagen
                const a = document.createElement("a");
                a.href = dataUrl;
                a.download = "mi_fondo.png"; // Cambia el nombre del archivo según tu preferencia
                a.click();
            })
            .catch(function (error) {
                console.error("Error al capturar el contenido:", error);
            });
    });
});
