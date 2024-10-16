const carousel = document.querySelector('.carousel') 
const carouselItems = document.querySelectorAll('.carousel-item') 
const prevBtn = document.querySelector('.prev-btn') 
const nextBtn = document.querySelector('.next-btn') 

let currentIndex = 0 
const totalItems = carouselItems.length 

// Fonction pour mettre à jour la position du carrousel
function updateCarousel() {
    const offset = -currentIndex * 100 
    carousel.style.transform = `translateX(${offset}%)` 
}

// Fonction pour passer à l'image suivante
function nextImage() {
    if (currentIndex < totalItems - 1) {
        currentIndex++ 
    } else {
        currentIndex = 0
    }
    updateCarousel() 
}

// Événement du bouton "suivant"
nextBtn.addEventListener('click', nextImage) 

// Événement du bouton "précédent"
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex-- 
    } else {
        currentIndex = totalItems - 1 
    }
    updateCarousel() 
}) 

const autoChange = setInterval(nextImage, 2000) 
