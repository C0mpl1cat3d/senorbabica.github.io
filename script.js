const navbar = document.querySelector('div.navbar')
const article = document.querySelectorAll('div.article')
const navigation = document.querySelectorAll('.navigation>a')
const hamburger = document.querySelector('#burger')
const line = document.querySelectorAll('span.line')
const overlay = document.querySelector('.overlay')
const body = document.querySelector("body")
const preloader = document.querySelector('.preloader')
let currentIcon;
const icons = document.querySelectorAll('i.fa-magnifying-glass-plus')
const explorer = document.querySelector('.image-explorer')
const fullres = document.querySelector('.fullres-img')
const sticky = window.pageYOffset;
let width = window.innerWidth;
AOS.init();


window.addEventListener('load', (event) => {
    if (width <= 1025) {
        for (let index = 0; index < navigation.length; index++) {
            navigation[index].style.display = "none";
        }
    }

    closePreloader();
    body.classList.remove('lock')
});

window.addEventListener('resize', function(){
    width = this.window.innerWidth
    
    if (width <= 1025) {
        for (let index = 0; index < navigation.length; index++) {
            navigation[index].style.display = "none";
        }
    }
    else if(width > 1025) {
        for (let index = 0; index < navigation.length; index++) {
            navigation[index].style.display = "initial";
        }
    }
})

document.addEventListener('scroll', function () {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }

})

document.addEventListener('click', function (event) {
    let target = event.target
    if (((target === hamburger) || target.classList.contains('line')) && !(hamburger.classList.contains('active'))) openOverlay();
    else if (((target === hamburger) || target.classList.contains('line')) && (hamburger.classList.contains('active'))) closeOverlay();
    else if (target.classList.contains('link')) closeOverlay();
    else if (target.classList.contains('fa-magnifying-glass-plus')){
        openImgOverlay(target);
    }
    else if (!target.classList.contains('fullres-img')) closeImgOverlay();

})

document.addEventListener('dblclick', function (e) {
    if (e.target.classList.contains('fullres-img') || e.target.classList.contains('image-explorer')) closeImgOverlay();
})

document.addEventListener("mouseover", function(event) {
    if (event.target.classList.contains('img-container')){
        currentIcon = event.target.querySelector('i.fa-magnifying-glass-plus')
        showIcon(currentIcon);
    } 
    else if(event.target.classList.contains('fa-magnifying-glass-plus')){
        currentIcon = event.target;
        showIcon(currentIcon)
    }
    else if (!event.target.classList.contains('img-container')){
        for (const i of icons) {
            hideIcon(i)          
        } 
    }
})

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function openOverlay() {
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

function closeOverlay() {
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

function closePreloader() {
    const preloadAnim = preloader.animate([
        {
            opacity: 0
        }
    ],
        {
            duration: 500,
            easing: "ease",
            fill: "forwards"
        })
    setTimeout(function () { preloader.remove() }, 500);
}

function showIcon(currI) {
    const iconAnim = currI.animate([
        {
            opacity: 1
        }
    ],
        {
            duration: 200,
            easing: "ease-in-out",
            fill: "forwards"
        })
}

function hideIcon(currI) {
    const iconAnim = currI.animate([
        {
            opacity: 0
        }
    ],
        {
            duration: 200,
            easing: "ease-in-out",
            fill: "forwards"
        })
}

//https://iampalash.hashnode.dev/get-background-image-url-for-any-element-using-javascript
function openImgOverlay(target) {
    body.classList.add('lock')
    const imgOverAnim = explorer.animate([
        {
            height: "100%"
        }
    ],
    {
        duration: 400,
        easing: "ease-in-out",
        fill: "forwards"
    })
    let parent = target.parentNode
    const parentStyles = window.getComputedStyle(parent);
    const parentImage = parentStyles.backgroundImage;
    const url = parentImage.slice(5, -2);

    fullres.src = url;

}

function closeImgOverlay(){
    body.classList.remove('lock')
    const imgOverAnim = explorer.animate([
        {
            height: "0"
        }
    ],
    {
        duration: 400,
        easing: "ease-in-out",
        fill: "forwards"
    })
}