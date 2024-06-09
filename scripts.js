// Function to enlarge image on click
const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
    container.addEventListener('click', function() {
        const img = this.querySelector('img');
        img.classList.toggle('enlarged');
    });
});

// Function to close enlarged image
function closeEnlargedImage(imageContainer) {
    imageContainer.classList.remove('enlarged');

    // Remove close button
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.parentNode.removeChild(closeBtn);
    }
}

// Add close button to enlarged image
imageContainers.forEach(imageContainer => {
    imageContainer.addEventListener('click', () => {
        const enlargedImage = document.querySelector('.enlarged');
        if (enlargedImage) {
            closeEnlargedImage(enlargedImage);
        }

        const img = imageContainer.querySelector('img');
        img.classList.add('enlarged');

        // Create close button
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'X';
        closeBtn.classList.add('close-btn');
        imageContainer.appendChild(closeBtn);

        // Close enlarged image on click outside of image or close button
        document.addEventListener('click', (event) => {
            if (!event.target.classList.contains('image-container') &&
                !event.target.classList.contains('close-btn')) {
                closeEnlargedImage(imageContainer);
            }
        });
    });
});
