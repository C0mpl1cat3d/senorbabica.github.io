const navbar = document.querySelector('div.navbar')
const article = document.querySelectorAll('div.article')
const curtain = document.querySelectorAll('div.curtain')
const sticky = window.pageYOffset;
let width = screen.width;
AOS.init();


document.addEventListener('scroll', function () {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
        article[0].classList.add("sticked")
    } else {
        navbar.classList.remove("sticky");
        article[0].classList.remove("sticked")
    }
})

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}