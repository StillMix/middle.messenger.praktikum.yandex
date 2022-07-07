
import './profile.css';

const info = document.querySelector('.info')!;
const password = document.querySelector('.password')!;
const btns = document.querySelector('.popup__btns')!;
const btnData = document.querySelector('.btn__info')!;
const btnPassword = document.querySelector('.btn__password')!;
const btnToData = document.querySelector('.data')!;
const btnToPassword = document.querySelector('.btnToPassword')!;

function to(form:Element) {
  if (form === password) {
    info.classList.add('disable');
    btns.classList.add('disable');
    form.classList.remove('disable');
  } else {
    info.classList.remove('disableinput');
    document.querySelector('.btn__info')!.classList.remove('disable');
  }
}

function back(form:Element) {
  if (form === password) {
    info.classList.remove('disable');
    btns.classList.remove('disable');
    form.classList.add('disable');
  } else {
    info.classList.add('disableinput');
    document.querySelector('.btn__info')!.classList.add('disable');
  }
}

btnToData.addEventListener('click', () => {
  to(info);
});

btnData.addEventListener('click', () => {
  back(info);
});

btnPassword.addEventListener('click', () => {
  back(password);
});

btnToPassword.addEventListener('click', () => {
  to(password);
});
