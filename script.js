document.addEventListener('DOMContentLoaded', () => {
    const inicio = document.getElementById('inicio');
    const tarjeta = document.getElementById('tarjeta');
    const abrirTarjetaBtn = document.getElementById('abrirTarjeta');
    const abrirCartaBtn = document.getElementById('abrirCarta');
    const carta = document.getElementById('carta');
    const regresarBtn = document.getElementById('regresar');
    const gifNavidad = document.getElementById('gifNavidad');
    const nuevoIcono = document.getElementById('nuevoIcono');
    const nuevaImagen = document.getElementById('nuevaImagen');
    const textoImagen = document.getElementById('textoImagen');


    abrirTarjetaBtn.addEventListener('click', () => {
        inicio.classList.add('oculta');
        tarjeta.classList.remove('oculta');
        gifNavidad.classList.remove('oculta');
        crearEsferas();
    });

    abrirCartaBtn.addEventListener('click', () => {
        carta.classList.toggle('oculta');
    });

    regresarBtn.addEventListener('click', () => {
        tarjeta.classList.add('oculta');
        inicio.classList.remove('oculta');
        eliminarEsferas();
    });

    function crearEsferas() {
        eliminarEsferas();

        for (let i = 0; i < 10; i++) {
            const esfera = document.createElement('div');
            esfera.classList.add('esfera');

            const margenHorizontal = 10;
            esfera.style.left = `${Math.random() * (100 - 2 * margenHorizontal) + margenHorizontal}%`;
            esfera.style.top = '-10px'; // Para que empiecen justo fuera del contenedor
            tarjeta.appendChild(esfera);
        }

        animarEsferas();
    }

    function eliminarEsferas() {
        const esferas = document.querySelectorAll('.esfera');
        esferas.forEach(esfera => esfera.remove());
    }

    function animarEsferas() {
        const esferas = document.querySelectorAll('.esfera');

        esferas.forEach(esfera => {
            const duracionCaida = Math.random() * 4000 + 4000;

            esfera.animate(
                [
                    { transform: 'translateY(0px) scale(1)', opacity: 1 },
                    { transform: `translateY(${tarjeta.clientHeight}px) scale(0.5)`, opacity: 0 }
                ],
                {
                    duration: duracionCaida,
                    iterations: Infinity,
                    easing: 'linear'
                }
            );
        });
    }
    nuevoIcono.addEventListener('click', () => {
        if (nuevaImagen.style.display === 'block') {
            nuevaImagen.style.display = 'none'; // Ocultar imagen
            textoImagen.style.display = 'none'; // Ocultar texto
        } else {
            nuevaImagen.style.display = 'block'; // Mostrar imagen
            textoImagen.style.display = 'block'; // Mostrar texto
        }
    });

    document.getElementById('abrirCarta').addEventListener('click', function () {
  // Cambiar el z-index del GIF para que quede detrás
  const gifNavidad = document.getElementById('gifNavidad');
  gifNavidad.style.zIndex = '5'; // Menor que el z-index de la tarjeta
});

});





  


