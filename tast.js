// Fonction pour agrandir l'image au clic
const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
    container.addEventListener('click', function() {
        const img = this.querySelector('img');
        img.classList.toggle('agrandie');
    });
});
