import './style.css';
import FormValidator from '../components/FormValidator.js';
const validationConfig = {
    formSelector: '.form',
    inputSelector: '.input',
    submitButtonSelector: '.popup__btn',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'input_type_error',
}

const validateLogin = new FormValidator(validationConfig, '.popup_type_login');
validateLogin.disableSubmitButton();
validateLogin.resetValidation();