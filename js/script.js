const cards = document.querySelectorAll('.card-item');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
let currentImageIndex = 0;

cards.forEach((card, index) => {
  const img = card.querySelector('img');
  const button = card.querySelector('.button'); // Seleccionar el elemento con la clase .button

  // Event listener para la imagen
  img.addEventListener('click', () => {
    showModal(img.src, index);
  });

  // Event listener para el botón
  button.addEventListener('click', () => {
    showModal(img.src, index);
  });
});

function showModal(src, index) {
  modal.style.display = 'flex';
  modalImg.src = src;
  currentImageIndex = index;
}

// Cerrar modal al hacer clic en la 'x' o al presionar Escape
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', closeModal);
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  } else if (event.key === 'ArrowLeft') {
    changeImage(-1);
  } else if (event.key === 'ArrowRight') {
    changeImage(1);
  }
});

function closeModal() {
  modal.style.display = 'none';
}

// Cambiar imágenes en el modal con flechas del teclado
function changeImage(n) {
  const imgs = document.querySelectorAll('.card-item img');
  currentImageIndex += n;
  
  if (currentImageIndex >= imgs.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = imgs.length - 1;
  }
  
  modalImg.src = imgs[currentImageIndex].src;
}