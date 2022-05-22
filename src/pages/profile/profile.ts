import './profile.css'

const div = document.querySelector('.div');
const info = document.querySelector('.info');
const password = document.querySelector('.password');
const btns = document.querySelector('.popup__btns')

const btnInfo = document.querySelector('.btn__info');
const btnPassword = document.querySelector('.btn__password');

const btnToInfo = document.querySelector('.data');
const btnToPassword = document.querySelector('.btnToPassword');

function to(form) {
   div.classList.add('disable');
   btns.classList.add('disable')
   form.classList.remove('disable')
}

function back(form) {
    div.classList.remove('disable');
    btns.classList.remove('disable')
    form.classList.add('disable')
}
btnInfo.addEventListener('click', () => {
    back(info)
})

btnPassword.addEventListener('click', () => {
    back(password)
})

btnToInfo.addEventListener('click', () => {
    to(info)
})

btnToPassword.addEventListener('click', () => {
    to(password)
})