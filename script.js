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
  for (let i = 0; i < 10; i++) {
    const esfera = document.createElement('div');
    esfera.classList.add('esfera');
    esfera.style.top = `${Math.random() * 100}%`;
    esfera.style.left = `${Math.random() * 100}%`;
    tarjeta.appendChild(esfera);
  }
}

// Función para eliminar las esferas
function eliminarEsferas() {
  const esferas = document.querySelectorAll('.esfera');
  esferas.forEach(esfera => {
    esfera.remove();
  });
}



  


