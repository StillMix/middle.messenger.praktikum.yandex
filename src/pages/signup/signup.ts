import "./signup.css";
import FormValidator from "../../components/FormValidator";
import PopupWithForm from "../../components/PopupWithForm";

export const validationConfig = {
  formSelector: ".form",
  inputSelector: ".input",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "input_type_error",
};
var first__name = document.querySelector('[name="nameInput"]')!;
var login = document.querySelector('[name="loginInput"]')!;
var second__name = document.querySelector('[name="surnameInput"]')!;

login.addEventListener('keypress', function ( event ) {  
  var key = event.keyCode;
   if (key === 32) {
     event.preventDefault();
   }
   if( event.key.match(/[0-9]/) ) {
    return event.preventDefault();
   }
   
});

first__name.addEventListener('keypress', function ( event ) {  
  var key = event.keyCode;
   if (key === 32) {
     event.preventDefault();
   }
   if( event.key.match(/[0-9]/) ) {
    return event.preventDefault();
   }
   
});

second__name.addEventListener('keypress', function ( event ) {  
  var key = event.keyCode;
   if (key === 32) {
     event.preventDefault();
   }
   if( event.key.match(/[0-9]/) ) {
    return event.preventDefault();
   }
});

const validateNewPerson = new FormValidator(validationConfig, ".popup__inputs");

validateNewPerson.disableSubmitButton();
validateNewPerson.enableValidation();

const NewPersonValues = new PopupWithForm(".popup__inputs", (values) => {
  console.log(values);
  window.location.href = "http://localhost:3000";
});
NewPersonValues.setEventListeners();
