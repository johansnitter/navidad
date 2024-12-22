// Elementos
const inicio = document.getElementById('inicio');
const tarjeta = document.getElementById('tarjeta');
const abrirTarjetaBtn = document.getElementById('abrirTarjeta');
const abrirCartaBtn = document.getElementById('abrirCarta');
const carta = document.getElementById('carta');
const regresarBtn = document.getElementById('regresar');  // Nuevo botón para regresar

// Mostrar tarjeta
abrirTarjetaBtn.addEventListener('click', () => {
  inicio.classList.add('oculta');
  tarjeta.classList.remove('oculta');
});

// Mostrar carta
abrirCartaBtn.addEventListener('click', () => {
  carta.classList.toggle('oculta');
});

// Regresar a la pantalla inicial
regresarBtn.addEventListener('click', () => {
  tarjeta.classList.add('oculta');
  inicio.classList.remove('oculta');
});


  


