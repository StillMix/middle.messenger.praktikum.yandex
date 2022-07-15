
import './signup.css';
import FormValidator from '../../components/FormValidator';
import PopupWithForm from '../../components/PopupWithForm';
import Button from '../../components/blocks/button/buttton';
import { render } from '../../components/modules/renderDOM';

const button = new Button({
  className: 'popup__btn',
  child: 'Зарегистрироваться'
});

render('.popup__inputs', button);

export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'input_type_error',
};

const validateNewPerson = new FormValidator(validationConfig, '.popup__inputs');

validateNewPerson.disableSubmitButton();
validateNewPerson.enableValidation();

const NewPersonValues = new PopupWithForm('.popup__inputs', (values) => {
  console.log(values);
  window.location.href = 'http://localhost:1234';
});
NewPersonValues.setEventListeners();
