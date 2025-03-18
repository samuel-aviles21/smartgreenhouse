function toggleMenu() {
    document.querySelector('.nav-menu').classList.toggle('show');
}
AOS.init({
    once: true, // La animación solo se ejecuta una vez (cuando el elemento entra en la vista)
    offset: 100, // La animación se ejecuta cuando el elemento está a 100px de distancia de la vista
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#mySplide', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        arrows: false,
        pagination: false,
        gap: '20px',
        drag: true, // Permite el arrastre manual
        breakpoints: {
            1024: { perPage: 2 },
            768: { perPage: 1 },
        },
        autoScroll: {
            speed: 1, // Velocidad del movimiento automático
            pauseOnHover: false, // No se detiene al pasar el puntero
            pauseOnFocus: false, // No se detiene al enfocar
        }
    }).mount({ AutoScroll: window.splide.Extensions.AutoScroll }); // MONTAR EXTENSIÓN CORRECTAMENTE
});

