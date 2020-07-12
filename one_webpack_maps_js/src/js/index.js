import Swiper from 'swiper';
import isInViewport from "./_libs/isInViewport";
import debounce from "./_libs/debounce";




window.document.addEventListener('DOMContentLoaded', (event) =>{
    let WORK_SWIPER = new Swiper('.works__slider-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.works__slider-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.works__controls-next',
        prevEl: '.works__controls-prev',
    },
    });

    let TEAM_SWIPER = new Swiper('.team__slider-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.team__controls-next',
            prevEl: '.team__controls-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });
});



let debounceFunc = debounce(function() {
    const NAV = document.querySelector('.js-nav');
    const HEADER = document.querySelector('.js-header');
    const ABOUT = document.querySelector('.js-about');
    if (NAV){
        console.log('1')
        if (isInViewport(ABOUT, 100)){
            NAV.classList.add('active');
        } else if (isInViewport(HEADER, 100)) {
            NAV.classList.remove('active');
        }
    }
}, 100);

window.addEventListener('scroll', debounceFunc);



const SIDEBAR = document.querySelectorAll('.js-sidebar');

document.addEventListener('DOMContentLoaded', () => {

        [...SIDEBAR].forEach(el => {
        let content = el.querySelector('p');
        el.style = `left: ${content.offsetWidth}px`;
        el.classList.add('hidden');
    })
});

document.addEventListener('click', (event) => {
    const SIDEBAR_BTN = document.querySelectorAll('.js-sidebar button')
    const MENU = document.querySelector('.js-menu');
    const BURGER = document.querySelector('.js-burger');

    if ([...SIDEBAR_BTN].includes(event.target)){
        let content = event.target.parentElement.querySelector('p');
        if (event.target.parentElement.classList.contains('hidden')){
            event.target.parentElement.classList.remove('hidden');
            event.target.parentElement.style.left = `0px`;
        } else{
            event.target.parentElement.style = `left: ${content.offsetWidth}px`;
            event.target.parentElement.classList.add('hidden');
        }
    }

    if(event.target === BURGER){
        BURGER.classList.toggle('active');
        MENU.classList.toggle('active');
    }
    if(event.target.closest('.js-nav') && event.target !== BURGER){
        BURGER.classList.remove('active');
        MENU.classList.remove('active');
    }
});

//lazy loading
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;

    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy");
        var imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove("lazy");
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyloadImages.forEach(function(image) {
            imageObserver.observe(image);
        });
    } else {
        var lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".lazy");

        function lazyload () {
            if(lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }

            lazyloadThrottleTimeout = setTimeout(function() {
                var scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function(img) {
                    if(img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                });
                if(lazyloadImages.length == 0) {
                    document.removeEventListener("scroll", lazyload);
                    window.removeEventListener("resize", lazyload);
                    window.removeEventListener("orientationChange", lazyload);
                }
            }, 20);
        }

        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
    }
})



