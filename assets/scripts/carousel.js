this.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.carousel').forEach(carousel => {
        const track = carousel.querySelector('.track');
        const slides = track.querySelectorAll('.card');
        const nextBtn = carousel.querySelector('.next-button');
        const prevBtn = carousel.querySelector('.prev-button');
        const trackWidth = track.offsetWidth;
        const slideWidth = slides[0].offsetWidth;
        const initial_position = (trackWidth - slideWidth) / 2;
        track.style.transform = `translateX(${initial_position}px)`;
        let index = 0;
    
        nextBtn.addEventListener('click', () => {
            index = (index + 1) % slides.length;
            translateX = initial_position - (index * (slideWidth + 140));
            track.style.transform = `translateX(${translateX}px)`;

        });
    
        prevBtn.addEventListener('click', () => {
            index = (index - 1 + slides.length) % slides.length;
            translateX = initial_position - (index * (slideWidth + 140));
            track.style.transform = `translateX(${translateX}px)`;
        });
    });
});
  