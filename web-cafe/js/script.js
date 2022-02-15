'use strict';

// Pick Up
$('.slider').slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    centerMode: true,
    variableWidth: true,
    dots: true,
});

// スクロールイベント
const animationWrap = document.querySelectorAll('.wrapper'),
      animationMenu = document.querySelectorAll('.scrollEvent'),
      animationText = document.querySelectorAll('.animationText');


    for (let i = 0; i < animationText.length; i++) {
        const targetElement = animationText[i],
              texts = targetElement.textContent,
              textsArray = [];
        targetElement.textContent = '';
    
        for (let j = 0; j < texts.split('').length; j++) {
            textsArray.push('<span style="animation-delay: ' + (j * .1) + 's;">' + texts.split('')[j] + '</span>')
        }
    
        for (let k = 0; k < textsArray.length; k++) {
            targetElement.innerHTML += textsArray[k];
        }
    }

document.addEventListener('scroll', ()=> {
    for (let a = 0; a < animationWrap.length; a++) {
        const showStyle = animationWrap[a].getBoundingClientRect().top + animationWrap[a].clientHeight * .42;
        if (window.innerHeight > showStyle) {
            animationWrap[a].classList.add('show');
        }else {
            animationWrap[a].classList.remove('show');
        }
    }
})




