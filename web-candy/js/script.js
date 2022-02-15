'use strict';

// スライダー
let mySwiper = new Swiper ('#swiper', {
    loop: true,
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar', 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})

// スクロールイベント
const contentsElement = document.querySelectorAll('.contents');

document.addEventListener('scroll', ()=> {
    contentsElement.forEach(value => {
        const contentsScroll = value.getBoundingClientRect().top + value.clientHeight * .6;
        if(contentsScroll < window.innerHeight){
            value.classList.add('action');
        }
    })
    
});

// Search
const faSearch = document.getElementById('fa-search');
const faTimes = document.getElementById('fa-times');

faSearch.addEventListener('click', ()=> {
  document.getElementById('search-sp-click').classList.add('clicked')
})
faTimes.addEventListener('click', ()=> {
  document.getElementById('search-sp-click').classList.remove('clicked')
});