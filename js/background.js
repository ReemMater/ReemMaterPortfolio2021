
document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets: '.bg_img',

        loop: true,
        easing: 'linear',
        duration: 6600,
        rotate: {
            value: 600,
            loop: true,
            duration: 6600,
            direction: 'alternate',

        },

    })
});