const navbar = document.querySelector('div.navbar')
const article = document.querySelectorAll('div.article')
const navigation = document.querySelectorAll('.navigation>a')
const hamburger = document.querySelector('#burger')
const line = document.querySelectorAll('span.line')
const sticky = window.pageYOffset;
let width = window.innerWidth;
AOS.init();


window.addEventListener('load', (event) => {
    if (width <= 1025){
        for (let index = 0; index < navigation.length; index++) {
            navigation[index].remove();
        }
    }
    
  });

document.addEventListener('scroll', function () {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }

})

document.addEventListener('click', function(event){
    if ((event.target === hamburger)&&!(hamburger.classList.contains('active'))){
        hamburger.classList.add('active')
        const line2Anim = line[1].animate([
            {
                transform: "rotate(90deg)",
                opacity: "0"
            }
        ],
        {
            duration: 200, // 1.5s,
            easing: "ease",
            fill: "forwards"
        }
        )
        const line1Anim = line[0].animate([
            {
                transform: "rotate(45deg) scale(1.25)"
            }
        ],
        {
            duration: 500,
            easing: "ease",
            fill: "forwards"
        })
        const line3Anim = line[2].animate([
            {
                transform: "rotate(-45deg) scale(1.25)"
            }
        ],
        {
            duration: 500,
            easing: "ease",
            fill: "forwards"
        })
    }
    else if((event.target === hamburger)&&(hamburger.classList.contains('active'))){
        hamburger.classList.remove('active')
        const line2Anim = line[1].animate([
            {
                transform: "rotate(0)",
                opacity: "1"
            }
        ],
        {
            duration: 200, // 1.5s,
            easing: "ease",
            fill: "forwards"
        }
        )
        const line1Anim = line[0].animate([
            {
                transform: "rotate(0)"
            }
        ],
        {
            duration: 500,
            easing: "ease",
            fill: "forwards"
        })
        const line3Anim = line[2].animate([
            {
                transform: "rotate(0)"
            }
        ],
        {
            duration: 500,
            easing: "ease",
            fill: "forwards"
        })
    }
})

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}