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
const first__name = document.querySelector('[name="nameInput"]')!;
const login = document.querySelector('[name="loginInput"]')!;
const second__name = document.querySelector('[name="surnameInput"]')!;
const tel = document.querySelector('[name="telInput"]')!;
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
function CheckValidateTel(e) {  
  const key = e.keyCode;
   if (key === codeSpace) {
     e.preventDefault();
   }
   if( e.key.match(/[A-Яa-zА-Яа-я]/) ) {
    return e.preventDefault();
   }
   
}
tel.addEventListener('keypress', (event) => {
  CheckValidateTel(event)
});

login.addEventListener('keypress', (event) => {
  CheckValidate(event)
});

first__name.addEventListener('keypress', (event) => {
  CheckValidate(event)
});

second__name.addEventListener('keypress', (event) => {
  CheckValidate(event)
});

const validateNewPerson = new FormValidator(validationConfig, ".popup__inputs");

validateNewPerson.disableSubmitButton();
validateNewPerson.enableValidation();

const NewPersonValues = new PopupWithForm(".popup__inputs", (values) => {
  console.log(values);
  window.location.href = "http://localhost:3000";
});
NewPersonValues.setEventListeners();
