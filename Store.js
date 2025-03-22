let indiceActual = 0;

// Función para mover el carrusel
function moverCarrusel(direccion) {
    const secciones = document.querySelectorAll('.seccion');
    const totalSecciones = secciones.length;

    indiceActual += direccion;

    if (indiceActual < 0) {
        indiceActual = totalSecciones - 1; // Volver al final si se pasa del inicio
    } else if (indiceActual >= totalSecciones) {
        indiceActual = 0; // Volver al inicio si se pasa del final
    }

    const desplazamiento = -indiceActual * 100;
    document.querySelector('.carrusel').style.transform = `translateX(${desplazamiento}%)`;
}

// Función para mostrar/ocultar secciones
function toggleSection(id) {
    const section = document.getElementById(id);
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
}