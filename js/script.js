'use strict';

// ハンバーガー
const ham = document.getElementById('ham');
const hamNav = document.getElementById('hamNav');

ham.addEventListener('click', ()=> {
    ham.classList.toggle('clickAction');
    hamNav.classList.toggle('clickOpen');
});


// ham色変更
document.addEventListener('scroll', ()=> {
    const hamColorChange = document.getElementById('js-mainImage').getBoundingClientRect().bottom;
    if (hamColorChange < 0) {
        ham.classList.add('hamColorAdd');
    }else {
        ham.classList.remove('hamColorAdd');
    }
});

// ふわっと表示

document.addEventListener('scroll', ()=> {
    const squareEvent = document.getElementById('js-skillBackgroundColor').getBoundingClientRect().bottom;
    if (squareEvent < 0) {
        document.getElementById('js-square-postion').classList.add('squareMove');
    }
});
