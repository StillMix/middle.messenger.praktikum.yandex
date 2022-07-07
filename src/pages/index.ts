
import './style.css';
import FormValidator from '../components/FormValidator';
import PopupWithForm from '../components/PopupWithForm';

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
  window.location.href = 'http://localhost:1234/chat/chat.html';
  console.log(values);
});
NewPersonValues.setEventListeners();
