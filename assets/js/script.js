const icon = document.querySelector('.you-tube');
const modalBox = document.querySelector('.modal-box');
const closeIcon = document.querySelector('.close');
const btn = document.querySelector('.card-right-end p');

icon.addEventListener('click', (e)=> {
    modalBox.classList.add('show');
})

closeIcon.addEventListener('click', ()=> {
    modalBox.classList.remove('show');
})