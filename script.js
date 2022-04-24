const navbar = document.querySelector('div.navbar')
const curtain = document.querySelectorAll('div.curtain')
const sticky = window.pageYOffset;
AOS.init();


document.addEventListener('scroll', function () {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }

    if (checkVisible(curtain[0])) {
        animate();
    }
})

function animate() {
    for (let i = 0; i <= curtain.length; i++) {
        if (i === 0) {
            anime({
                targets: curtain[i],
                translateX: 1270,
                scaleX: 0.1,
                easing: 'easeInElastic(1, .6)',
            });
        }
        else {
            anime({
                targets: curtain[i],
                translateX: -1270,
                scaleX: 0.1,
                easing: 'easeInElastic(1, .6)',
            });
        }
    }
}

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}