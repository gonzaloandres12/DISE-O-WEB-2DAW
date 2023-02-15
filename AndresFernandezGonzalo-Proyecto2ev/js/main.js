const boton = document.getElementById('mostrar-lista');
const lista = document.getElementById('mi-lista');

boton.addEventListener('click', function() {
  lista.classList.toggle('d-none');
  if (lista.classList.contains('d-none')) {
    boton.textContent = 'Mostrar lista';
  } else {
    boton.textContent = 'Ocultar lista';
  }
  
});