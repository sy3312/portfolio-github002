'use strict';

const bannerItem = document.querySelectorAll('.bannerItem img');
const modalImage = document.getElementById('modalImage');


bannerItem.forEach(value => {
    value.addEventListener('click', ()=> {
        document.getElementById('modalBox').classList.add('open');
        modalImage.src = value.dataset.image; 
        console.log(value)
    });
});

document.getElementById('fa-times').addEventListener('click', ()=> {
    document.getElementById('modalBox').classList.toggle('closed');
    document.getElementById('modalBox').classList.remove('open');
})