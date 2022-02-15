'use strict';

// ハンバーガーメニュー
const ham = document.getElementById('ham');
const hamNav = document.getElementById('hamNav');

ham.addEventListener('click', ()=> {
    ham.classList.toggle('clickAction');
    hamNav.classList.toggle('clickOpen');
});

// スクロールイベント
const wrapElement = document.querySelectorAll('.wrap');
document.addEventListener('scroll', ()=> {
    for (let i = 0; i < wrapElement.length; i++) {
        const scrollEvent = wrapElement[i].getBoundingClientRect().top + wrapElement[i].clientHeight * 0.15;
        if (scrollEvent < window.innerHeight) {
            wrapElement[i].classList.add('show');
        }else {
            wrapElement[i].classList.remove('show');
        }
    }
});

