this.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.carousel').forEach(carousel => {
        const track = carousel.querySelector('.track');
        const slides = track.querySelectorAll('.card');
        const nextBtn = carousel.querySelector('.next-button');
        const prevBtn = carousel.querySelector('.prev-button');
        const slideWidth = slides[0].offsetWidth;
        let trackWidth = track.offsetWidth;
        let initial_position = (trackWidth - slideWidth) / 2;
        let index = 0;

        track.style.transform = `translateX(${initial_position}px)`;

        function getTranslateX() {
            return initial_position - (index * (slideWidth + 140));
        }
    
        nextBtn.addEventListener('click', () => {
            index = (index + 1) % slides.length;
            track.style.transform = `translateX(${getTranslateX()}px)`;

        });
    
        prevBtn.addEventListener('click', () => {
            index = (index - 1 + slides.length) % slides.length;
            track.style.transform = `translateX(${getTranslateX()}px)`;
        });

        this.addEventListener('resize', () => {
            trackWidth = track.offsetWidth;
            initial_position = (trackWidth - slideWidth) / 2;
            track.style.transform = `translateX(${getTranslateX()}px)`;
        });
    });
});
  