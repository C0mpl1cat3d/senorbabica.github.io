const navbar = document.querySelector('div.navbar')
const article = document.querySelectorAll('div.article')
const navigation = document.querySelectorAll('.navigation>a')
const sticky = window.pageYOffset;
let width = window.innerWidth;
AOS.init();


window.addEventListener('load', (event) => {
    if (width <= 1025){
        for (let index = 0; index < navigation.length; index++) {
            navigation[index].remove();
        }
        console.log('ASDASD')
    }
    
  });

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