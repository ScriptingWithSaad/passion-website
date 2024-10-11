const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.querySelector('.close');

// Open lightbox and set image source when gallery item is clicked
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightboxImg.src = item.src;
        lightbox.classList.remove('hidden');
    });
});

// Close lightbox on close button click
closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', () => {
    lightbox.classList.add('hidden');
});
