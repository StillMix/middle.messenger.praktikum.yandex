
import './style.css';
import FormValidator from '../components/FormValidator';
import PopupWithForm from '../components/PopupWithForm';

const login = document.querySelector('[name="loginInput"]')!;

const codeSpace = 32
function CheckValidate(e) {  
  const key = e.keyCode;
   if (key === codeSpace) {
     e.preventDefault();
   }
   if( e.key.match(/[0-9]/) ) {
    return e.preventDefault();
   }
   
}

login.addEventListener('keypress', (event) => {
  CheckValidate(event)
});

export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'input_type_error',
};

const validateLogin = new FormValidator(validationConfig, '.popup__inputs');

validateLogin.disableSubmitButton();
validateLogin.enableValidation();

const NewPersonValues = new PopupWithForm('.popup__inputs', (values) => {
  window.location.href = 'http://localhost:3000/chat/chat.html';
  console.log(values);
});
NewPersonValues.setEventListeners();
