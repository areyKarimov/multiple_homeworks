

import Swiper from "swiper";
import isInViewport from "./functions/isInViewport";
import scrollWatcher from "./functions/scrollWatcher";

window.document.addEventListener("DOMContentLoaded", () =>{
    let initial_swiper = new Swiper('.initial__swiper', {
        direction: 'vertical',
        speed: 1500,
        loop: true,
        parallax: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.initial__pagination',
            clickable: true,
        },
    });
    let news_swiper = new Swiper('.news__swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 3,
        pagination: {
            el: '.news__pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
        }
    });

;});


document.addEventListener('scroll', () => {
    const HEADER = document.querySelector('#js-header');
    const ABOUT = document.querySelector('#js-about');
    const INITIAL = document.querySelector('#js-initial');
    const GALLERY = document.querySelector('#js-gallery');
    const NEWS = document.querySelector('#js-news');
    const CONTACTS = document.querySelector('#js-contacts');
    const ANCHORS = document.querySelectorAll('.menu a');


    //show header background
    if (HEADER){
        if (isInViewport(ABOUT, 100)){
            HEADER.classList.add('active');
        } else if (isInViewport(INITIAL, 100)) {
            HEADER.classList.remove('active');
        }
    }

    //fill menu circles
    const LINK_ABOUT = document.querySelector('.js-link-about');
    const LINK_GALLERY = document.querySelector('.js-link-gallery');
    const LINK_NEWS = document.querySelector('.js-link-news');
    const LINK_CONTACTS = document.querySelector('.js-link-contacts');



    if (LINK_ABOUT && scrollWatcher(LINK_ABOUT, ABOUT)){
        [...ANCHORS].forEach(el => el.classList.remove('active'));
        LINK_ABOUT.classList.add('active')
    }

    if (LINK_GALLERY && scrollWatcher(LINK_GALLERY, GALLERY)){
        [...ANCHORS].forEach(el => el.classList.remove('active'));
        console.log('gal')
        LINK_GALLERY.classList.add('active');
    }

    if (LINK_NEWS && scrollWatcher(LINK_NEWS, NEWS)){
        [...ANCHORS].forEach(el => el.classList.remove('active'));
        LINK_NEWS.classList.add('active');
    }

    if (LINK_CONTACTS && scrollWatcher(LINK_CONTACTS, CONTACTS)){
        [...ANCHORS].forEach(el => el.classList.remove('active'));
        LINK_CONTACTS.classList.add('active');
    }

    if (isInViewport(INITIAL, 0)){
        [...ANCHORS].forEach(el => el.classList.remove('active'));
    }


});

window.document.addEventListener("click", (event) =>{
    const MENU = document.querySelector('.js-menu');
    const BURGER = document.querySelector('.js-burger');
    const NAV_LINKS = document.querySelectorAll('.js-menu a');
    const SOCIALS = document.querySelectorAll('.js-menu+.socials a');

    if (event.target === BURGER){
        MENU.classList.toggle('active');
        BURGER.classList.toggle('active');
        if (document.body.hasAttribute('style')){
            document.body.removeAttribute('style');
        } else {
            document.body.style.overflow = 'hidden';
        }
    }

    if ([...NAV_LINKS].includes(event.target) || [...SOCIALS].includes(event.target)){
        MENU.classList.remove('active');
        BURGER.classList.remove('active');
        document.body.removeAttribute('style');
    }

});