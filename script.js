document.getElementById('menu-button').addEventListener('click', function() {
    document.getElementById('menu-content').classList.toggle('hidden');
});

function startSlideshow(slideshowId) {
    const slideshow = document.getElementById(slideshowId);
    const images = slideshow.querySelectorAll('img');
    let current = 0;

    images[current].classList.add('active');

    setInterval(() => {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
    }, 4000);
}

document.addEventListener('DOMContentLoaded', function() {
    startSlideshow('slideshow1');
    startSlideshow('slideshow2');
});