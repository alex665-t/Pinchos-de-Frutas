function cambiarImagen(miniatura) {
  const imagenPrincipal = document.getElementById('mainImage'); // Obtiene la imagen principal por su ID
  imagenPrincipal.src = miniatura.src; // Cambia la imagen principal por la que se clickeó
  imagenPrincipal.alt = miniatura.alt; // Cambia el texto alternativo también

  document.querySelectorAll('.thumbnail').forEach(img => { // Selecciona todas las miniaturas
    img.classList.remove('active'); // Quita la clase 'active' a todas
  });

  miniatura.classList.add('active'); // Agrega clase 'active' a la miniatura seleccionada
}