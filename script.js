const navbar = document.querySelector('div.navbar')
const article = document.querySelectorAll('div.article')
const navigation = document.querySelectorAll('.navigation>a')
const hamburger = document.querySelector('#burger')
const line = document.querySelectorAll('span.line')
const overlay = document.querySelector('.overlay')
const body = document.querySelector("body")
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
    if (((event.target === hamburger)|| event.target.classList.contains('line')) &&!(hamburger.classList.contains('active'))) openOverlay();
    else if(((event.target === hamburger)|| event.target.classList.contains('line')) &&(hamburger.classList.contains('active'))) closeOverlay();
    else if (event.target.classList.contains('link')) closeOverlay();

})

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function openOverlay(){
    hamburger.classList.add('active')
        overlay.classList.add('active')
        body.classList.add('lock')
        const burgirAnim = hamburger.animate([
            {
                transform: "rotate(360deg) translateX(5px)"
            }
        ],
        {
            duration: 400,
            easing: "ease-in-out",
            fill: "forwards"
        })
        const line2Anim = line[1].animate([
            {
                transform: "rotate(90deg)",
                opacity: "0"
            }
        ],
        {
            duration: 400, // 1.5s,
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
            fill: "forwards",
        })
        const line3Anim = line[2].animate([
            {
                transform: "rotate(-45deg) scale(1.25)"
            }
        ],
        {
            duration: 500,
            easing: "ease",
            fill: "forwards",
        })
}

function closeOverlay(){
    hamburger.classList.remove('active')
    overlay.classList.remove('active')
    body.classList.remove('lock')
    const burgirAnim2 = hamburger.animate([
        {
            transform: "rotate(-0deg)"
        }
    ],
    {
        duration: 400,
        easing: "ease-in-out",
        fill: "forwards"
    })
    const line2Anim = line[1].animate([
        {
            transform: "rotate(0)",
            opacity: "1"
        }
    ],
    {
        duration: 400, 
        easing: "ease",
        fill: "forwards",
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
        fill: "forwards",
    })
    const line3Anim = line[2].animate([
        {
            transform: "rotate(0)"
        }
    ],
    {
        duration: 500,
        easing: "ease",
        fill: "forwards",
    })
    const burgirAnim = hamburger.animate([
        {
            transform: "rotate(-360deg)"
        }
    ],
    {
        duration: 500,
        easing: "ease-in-out",
    })
}