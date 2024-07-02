const gallery = document.querySelector('.gallery');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightbox = document.querySelector('.close');

let scrollAmount = 0;
const scrollStep = 310; // Image width + margin

nextBtn.addEventListener('click', () => {
    scrollAmount += scrollStep;
    if (scrollAmount > gallery.scrollWidth - gallery.clientWidth) {
        scrollAmount = gallery.scrollWidth - gallery.clientWidth;
    }
    gallery.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
    gallery.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

const galleryImages = document.querySelectorAll('.gallery-image');
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        console.log('Image clicked!');
        lightbox.style.display = 'block';
        lightboxImage.src = image.src;
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
