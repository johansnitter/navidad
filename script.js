// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Elementos
  const inicio = document.getElementById('inicio');
  const tarjeta = document.getElementById('tarjeta');
  const abrirTarjetaBtn = document.getElementById('abrirTarjeta');
  const abrirCartaBtn = document.getElementById('abrirCarta');
  const carta = document.getElementById('carta');
  const regresarBtn = document.getElementById('regresar');  // Botón para regresar

  // Mostrar tarjeta
  abrirTarjetaBtn.addEventListener('click', () => {
    inicio.classList.add('oculta');
    tarjeta.classList.remove('oculta');
    crearEsferas(); // Crear esferas cuando se muestra la tarjeta
  });

  // Mostrar carta
  abrirCartaBtn.addEventListener('click', () => {
    carta.classList.toggle('oculta');
  });

  // Regresar a la pantalla inicial
  regresarBtn.addEventListener('click', () => {
    tarjeta.classList.add('oculta');
    inicio.classList.remove('oculta');
    eliminarEsferas(); // Eliminar esferas cuando regresa a la pantalla inicial
  });

  // Función para crear esferas en la pantalla oculta
  function crearEsferas() {
    // Limpiar esferas existentes antes de agregar nuevas
    eliminarEsferas();

    for (let i = 0; i < 10; i++) {
      const esfera = document.createElement('div');
      esfera.classList.add('esfera');
      
      // Generamos posiciones aleatorias dentro del 100% del tamaño de la tarjeta
      esfera.style.top = `${Math.random() * 90}%`; // No queremos que se salgan de la pantalla
      esfera.style.left = `${Math.random() * 90}%`; // Mantenemos las esferas dentro del área visible
      
      tarjeta.appendChild(esfera);
    }

    // Iniciar animación de caída de esferas
    animarEsferas();
  }

  // Función para eliminar las esferas
  function eliminarEsferas() {
    const esferas = document.querySelectorAll('.esfera');
    esferas.forEach(esfera => {
      esfera.remove();
    });
  }

  // Función para animar las esferas (como nieve)
  function animarEsferas() {
    const esferas = document.querySelectorAll('.esfera');
    
    esferas.forEach(esfera => {
      // Animación de caída
      const animacionCaida = esfera.animate(
        [
          { transform: 'translateY(0)', opacity: 1 },
          { transform: `translateY(100vh)`, opacity: 0 }
        ],
        {
          duration: Math.random() * 4000 + 4000, // Duración aleatoria entre 4 y 8 segundos
          iterations: Infinity, // Animación infinita
          easing: 'linear' // Movimiento constante
        }
      );

      // Animación de cambio de tamaño
      const animacionEscala = esfera.animate(
        [
          { transform: 'scale(1)' },
          { transform: 'scale(0.5)' },
          { transform: 'scale(1)' }
        ],
        {
          duration: Math.random() * 2000 + 2000, // Duración aleatoria entre 2 y 4 segundos
          iterations: Infinity,
          easing: 'ease-in-out'
        }
      );
    });
  }
});





  


